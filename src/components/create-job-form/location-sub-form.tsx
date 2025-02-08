import { ChevronDown } from "lucide-react"
import FormWrapper from "./form-wrapper"

export default function LocationSubForm({
    workLocation,
    updateFields
}: {
    workLocation: "REMOTE" | "ONSITE" | "HYBRID"
    updateFields: (fields: any) => void
}) {
    return (
        <FormWrapper title="Where will the work take place?">
            <div className="dropdown dropdown-hover w-full ">
                <label tabIndex={0} className="btn w-full text-primary flex justify-between bg-text hover:bg-text text-base">
                    {workLocation} <ChevronDown/>
                </label>
                <ul tabIndex={0} className="dropdown-content menu bg-text rounded-lg w-full shadow-md">
                    {["REMOTE", "ONSITE", "HYBRID"].map((option) => (
                        <li key={option}>
                            <p onClick={() => updateFields({ workLocation: option })} className="w-full px-4 py-2 hover:bg-base-200 hover:text-primary capitalize text-base">
                                {option}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </FormWrapper>
    )
}