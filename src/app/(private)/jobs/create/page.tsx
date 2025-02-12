import BackButton from "@/components/buttons/back-button";
import CreateJobForm from "@/components/create-job-form/create-job-form";
import { PoppinsBold, spaceGroteskMedium } from "@/fonts";

//TODO: add metadata

export default function Page() {
    return (
        <div>
            <div className="pl-[7rem] pt-10 flex items-center space-x-6">
                <BackButton />
                <div>
                    <h1 className={`${PoppinsBold.className} text-3xl text-text`}>Create a Job Listing</h1>
                    <h3 className={`${spaceGroteskMedium.className}`}>Find the right talent for your channel in just 5 steps</h3>
                </div>
            </div>
            <CreateJobForm />
        </div>
    )
}