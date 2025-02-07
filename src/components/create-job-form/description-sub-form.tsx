import FormWrapper from "./form-wrapper";

export default function DescriptionSubForm({
    description,
    updateFields
}: {
    description: string
    updateFields: any
}) {
    return (

        <FormWrapper title="How would you describe the role?">
            <label>Job Description</label>
            <input
                type="text"
                required
                value={description}
                onChange={(e) => updateFields({ description: e.target.value })}
            />
        </FormWrapper>
    )
}