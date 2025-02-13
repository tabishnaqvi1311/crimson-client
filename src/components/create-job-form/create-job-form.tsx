"use client";

import { useAuth } from "@/hooks/useAuth";
import PrivateRoute from "../guards/private-route";
import ProgressBar from "./progress-bar";
import { toast, ToastContainer } from "react-toastify";
import LoadingSpinner from "../loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TitleSubForm, DescriptionSubForm, SalarySubForm, LocationSubForm, WorkTypeSubForm } from "./index";
import apiUrl from "@/constant/config";
import { useMultiForm } from "@/hooks/useMutliForm";
import { InitialData } from "@/types";
import { descriptionFormSchema, salaryFormSchema, titleFormSchema, workLocationSchema, workTypeSchema } from "@/schemas";

const initialData: InitialData = {
    title: "",
    description: '',
    salary: '',
    workLocation: "REMOTE",
    workType: "FULL_TIME",
}

export default function CreateJobForm() {

    const { role } = useAuth();

    const [data, setData] = useState(initialData)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const router = useRouter();

    useEffect(() => {
        if (role === "TALENT") router.push("/jobs")
    }, [role]);

    const updateFields = (fields: any) => {
        setData((prev) => {
            return { ...prev, ...fields }
        })
    }

    const { currentStepIdx, step, isFirstStep, isLastStep, next, back } = useMultiForm([
        <TitleSubForm {...data} updateFields={updateFields} key={1} />,
        <DescriptionSubForm {...data} updateFields={updateFields} key={2} />,
        <SalarySubForm  {...data} updateFields={updateFields} key={3} />,
        <LocationSubForm {...data} updateFields={updateFields} key={4} />,
        <WorkTypeSubForm {...data} updateFields={updateFields} key={5} />
    ])

    const handleNext = () => {
        const stepValidations = [
            { schema: titleFormSchema, data: { title: data.title } },
            { schema: descriptionFormSchema, data: { description: data.description } },
            { schema: salaryFormSchema, data: { salary: data.salary } },
            { schema: workLocationSchema, data: { workLocation: data.workLocation } },
            { schema: workTypeSchema, data: { workType: data.workType } },
        ];

        const { schema, data: stepData } = stepValidations[currentStepIdx];

        const validated = schema.safeParse(stepData);
        if(!validated.success){
            validated.error.issues.forEach((issue) => (
               toast.error(issue.message)
            ))
            return;
        }

        next();
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!isLastStep) return handleNext();
        setIsSubmitting(true);
        try {
            const res = await fetch(`${apiUrl}/job/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("crimson-token")}`
                },
                body: JSON.stringify(data)
            })
            if (!res.ok) throw new Error("An error occurred!")
            router.push("/jobs")
            toast.success("Job posted successfully!")
        } catch (e) {
            toast.error("An error occurred!")
            console.log(e);
        }

        setIsSubmitting(false);
    }

    return role === "YOUTUBER" ? (
        <PrivateRoute>
            <main className="md:min-h-[70vh] min-h-[50vh] flex flex-col justify-center items-center">
                <ProgressBar currentStepIdx={currentStepIdx} totalSteps={5} />
                <form onSubmit={handleSubmit}>
                    {step}
                    <div className="flex justify-evenly space-x-4">
                        {!isFirstStep
                            &&
                            <button
                                type="button"
                                onClick={back}
                                className="link text-text"
                                disabled={isSubmitting}
                            >Back</button>}
                        <button
                            type="button"
                            disabled={isSubmitting || data.title.length < 5}
                            onClick={handleSubmit}
                            className="button-primary"
                        >
                            {!isSubmitting
                                ?
                                (isLastStep ? "Post Job" : "Next >")
                                :
                                <span className="loading loading-spinner text-text" />
                            }
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </main>
        </PrivateRoute>
    ) : <LoadingSpinner />
}