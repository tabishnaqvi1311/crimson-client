import FormWrapper from "./form-wrapper"

export default function LocationSubForm({
    workLocation,  
    updateFields
}: {
    workLocation: "REMOTE" | "ONSITE" | "HYBRID"
    updateFields: any
}) {
    return (
        <FormWrapper title="Where will the work take place?">
            <label>Location</label>
            <input
                type="text"
                required
                value={workLocation}
                onChange={(e) => updateFields({ workLocation: e.target.value })}
            />
        </FormWrapper>
    )
}