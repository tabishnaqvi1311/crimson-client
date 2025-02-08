import { ChevronDown } from "lucide-react"
import FormWrapper from "./form-wrapper"

export default function WorkTypeSubForm({
    workType,
    updateFields
}: {
    workType: "FULL_TIME" | "PART_TIME" | "PROJECT_BASED"
    updateFields: any
}) {
    return (
        <FormWrapper title="What type of commitment are you looking for?">
            <div className="dropdown dropdown-hover w-full">
                <label tabIndex={0} className="btn w-full text-primary flex justify-between bg-text hover:bg-text text-base">
                    {workType
                        .split("_")
                        .map((word) => word.charAt(0) + word.slice(1)
                        .toLowerCase())
                        .join(" ")} 
                        <ChevronDown/>
                </label>
                <ul tabIndex={0} className="dropdown-content menu bg-text rounded-lg w-full shadow-md">
                    {["FULL_TIME" , "PART_TIME" , "PROJECT_BASED"].map((option) => (
                        <li key={option}>
                            <p onClick={() => updateFields({ workType: option })} className="w-full px-4 py-2 hover:bg-base-200 hover:text-primary text-background text-base">
                                {option
                                    .split("_")
                                    .map((word) => word.charAt(0) + word.slice(1)
                                    .toLowerCase())
                                    .join(" ")}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </FormWrapper>
    )
}