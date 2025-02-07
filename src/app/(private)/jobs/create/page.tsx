"use client";

import DescriptionSubForm from "@/components/create-job-form/description-sub-form";
import LocationSubForm from "@/components/create-job-form/location-sub-form";
import SalarySubForm from "@/components/create-job-form/salary-sub-form";
import TitleSubForm from "@/components/create-job-form/title-sub-form";
import WorkTypeSubForm from "@/components/create-job-form/work-type-sub-form";
import { useMultiForm } from "@/hooks/useMutliForm";
import { InitialData } from "@/types";
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";

const initialData: InitialData = {
    title: "",
    description: "",
    salary: "",
    workLocation: "REMOTE",
    workType: "FULL_TIME",
}

export default function Page() {

    const [data, setData] = useState(initialData)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const updateFields = (fields: any) => {
        setData((prev) => {
            return { ...prev, ...fields }
        })
    }


    const { step, isFirstStep, isLastStep, next, back } = useMultiForm([
        <TitleSubForm {...data} updateFields={updateFields} key={1}/>,
        <DescriptionSubForm {...data} updateFields={updateFields} key={2}/>,
        <SalarySubForm  {...data} updateFields={updateFields} key={3}/>,
        <LocationSubForm {...data} updateFields={updateFields} key={4}/>,
        <WorkTypeSubForm {...data} updateFields={updateFields} key={5}/>
    ])


    const handleSubmit = () => {
        if(!isLastStep) return next()
        setIsSubmitting(true);
        console.log(data);
        toast.success("form submitted!")
        setIsSubmitting(false);
    }


    return (
        <main className="container mx-auto text-center">
            <form>
                {step}
                {!isFirstStep
                    &&
                <button type="button" onClick={back}>Back</button> }
                <button type="button" disabled={isSubmitting} onClick={handleSubmit}>
                    {isLastStep ? "Post Job" : "Next"}
                </button>
            </form>
            <ToastContainer/>
        </main>
    )
}