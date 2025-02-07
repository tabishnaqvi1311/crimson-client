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
            <label>Work Type</label>
            <input
                type="text"
                required
                value={workType}
                onChange={(e) => updateFields({ workType: e.target.value })}
            />
        </FormWrapper>
    )
}