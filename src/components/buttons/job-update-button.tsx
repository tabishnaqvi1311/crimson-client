import { Feather } from "lucide-react"

export default function JobUpdateButton({
    setIsEditing,
    isDeleting,
    isPendingDeletion,
    isPendingUpdation,
    isEditing
}: {
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
    isDeleting: boolean,
    isPendingDeletion: boolean,
    isPendingUpdation: boolean,
    isEditing: boolean
}) {
    return (
        <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50 disabled:text-red-500 disabled:bg-red-50" disabled={
                isPendingDeletion
                || isEditing
                || isPendingUpdation
                || isDeleting
            }
            title="Edit Job">
            <Feather size={18} />
        </button>
    )
}