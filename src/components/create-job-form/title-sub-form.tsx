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
            <input
                type="text"
                required
                value={title}
                onChange={(e) => updateFields({ title: e.target.value })}
                className="input input-bordered w-full max-w-xs "
                placeholder="eg. Video Editor"
                data-theme="light"
            />
        </FormWrapper>
    )
}