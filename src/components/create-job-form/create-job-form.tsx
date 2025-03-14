"use client";

import { useAuth } from "@/hooks/useAuth";
import PrivateRoute from "../guards/private-route";
import ProgressBar from "./progress-bar";
import LoadingSpinner from "../loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TitleSubForm, DescriptionSubForm, SalarySubForm, LocationSubForm, WorkTypeSubForm } from "./index";
import apiUrl from "@/constant/config";
import { useMultiForm } from "@/hooks/useMutliForm";
import { InitialData } from "@/types";
import { descriptionFormSchema, salaryFormSchema, titleFormSchema, workLocationSchema, workTypeSchema } from "@/schemas";
import toast from "react-hot-toast";

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
        if (!validated.success) {
            validated.error.issues.forEach((issue) => (
                toast.error(issue.message, { position: "top-right" })
            ))
            return;
        }

        next();
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!isLastStep) return handleNext();
        setIsSubmitting(true);
        data.title = data.title.trim(); //if some moron enters a string with spaces
        try {
            const res = await fetch(`${apiUrl}/job/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("crimson-token")}`
                },
                body: JSON.stringify(data)
            })
            if (!res.ok) {
                const json = await res.json();
                if(json.message === "not verified") {
                    toast.error("You aren't verified yet, please verify to continue");
                    router.push("/profile");
                    return;
                }
                else throw new Error("Something went wrong");
            }
            router.push("/jobs")
            toast.success("Job posted successfully!", { position: 'top-right' })
        } catch (e) {
            toast.error("An error occurred!", { position: "top-right" })
            console.log(e);
        }
        // console.log(data)

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
            </main>
        </PrivateRoute>
    ) : <LoadingSpinner />
}