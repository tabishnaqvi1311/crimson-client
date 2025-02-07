import FormWrapper from "./form-wrapper";

export default function TitleSubForm({
    title,
    updateFields
}: {
    title: string
    updateFields: any
}) {
    return (

        <FormWrapper title="What position are you recruiting for?">
            <label>Job Title</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => updateFields({ title: e.target.value })}
            />
        </FormWrapper>
    )
}