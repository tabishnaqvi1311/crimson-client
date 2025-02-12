import { DollarSign } from "lucide-react"
import FormWrapper from "./form-wrapper"

export function SalarySubForm({
    salary,
    updateFields
}: {
    salary: string
    updateFields: any
}) {
    return (
        <FormWrapper title="What's the expected salary range?">
            <label className="input input-bordered flex items-center gap-2 tex-text w-full max-w-xs"
            data-theme="light">
            <DollarSign/>
            <input
                type="text"
                required
                value={salary}
                onChange={(e) => updateFields({ salary: e.target.value })}
                className="grow"
                placeholder="eg. $200 - $600"
            />
            </label>
        </FormWrapper>
    )
}