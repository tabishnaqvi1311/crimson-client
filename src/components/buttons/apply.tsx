import apiUrl from "@/constant/config";
import { spaceGroteskMedium } from "@/fonts";
import { useState } from "react";
import toast from "react-hot-toast";

type ApplyProps = {
    jobId: string
    applied: boolean
}

export default function Apply({
    jobId,
    applied
}: ApplyProps) {

    const [coverLetter, setCoverLetter] = useState<string>("");
    const [error, setError] = useState(false);

    const handleApply = async () => {
        if (!coverLetter) {
            setError(true)
            toast.error("Cover letter is required.", {
                position: "top-right"
            });
            return;
        }
        try {
            const response = await fetch(`${apiUrl}/application/apply/${jobId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("crimson-token")}`
                },
                body: JSON.stringify({ coverLetter })
            })
            const json = await response.json();
            if (!response.ok) {
                console.log(json);
                if (json.message === "incomplete profile") {
                    toast.error("Seems like your profile is incomplete.", {
                        position: "top-right"
                    });
                }
                throw new Error("Failed to apply");
            }
            console.log(json)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={`${spaceGroteskMedium.className} space-y-4`}>
            {!applied && <fieldset className="fieldset">
                    <legend className="fieldset-legend text-black">Cover Letter</legend>
                    <textarea
                        className={`textarea h-24 w-full input-bordered ${error && "input-error"}`}
                        placeholder="Tell us why you're a good fit for this role."
                        rows={3}
                        data-theme="light"
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                    />
                </fieldset>
            }
            <button
               className="button-primary w-full border-none disabled:bg-primary/10 disabled:text-gray-300"
                onClick={handleApply}
                disabled={applied}
            >
                {applied ? "Applied" : "Apply Now"}
                {/* add functionality to apply */}
            </button>
        </div>
    )
}