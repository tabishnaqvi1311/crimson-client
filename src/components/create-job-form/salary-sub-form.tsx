import FormWrapper from "./form-wrapper"

export default function SalarySubForm({
    salary,
    updateFields
}: {
    salary: string
    updateFields: any
}) {
    return (
        <FormWrapper title="What's the expected salary or compensation?">
            <label>Salary</label>
            <input
                type="text"
                required
                value={salary}
                onChange={(e) => updateFields({ salary: e.target.value })}
            />
        </FormWrapper>
    )
}