import FormWrapper from "./form-wrapper";

export function DescriptionSubForm({
    description,
    updateFields
}: {
    description: string
    updateFields: any
}) {
    return (

        <FormWrapper title="How would you describe the role?">
            <textarea
                required
                value={description}
                onChange={(e) => updateFields({ description: e.target.value })}
                className="textarea input-bordered rounded-md w-full "
                placeholder="eg. We are looking for a creative and passionate video editor to join our team."
                data-theme="light"
                rows={5}
            />
        </FormWrapper>
    )
}