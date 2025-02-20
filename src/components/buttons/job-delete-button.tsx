import { Trash2 } from "lucide-react"

export default function JobDeleteButton({
    handleDelete,
    isPendingDeletion,
    isDeleting,
    isEditing,
    isPendingUpdation
}: {
    handleDelete: () => void,
    isPendingDeletion: boolean,
    isDeleting: boolean,
    isEditing: boolean,
    isPendingUpdation: boolean
}) {
    return (
        <button
            onClick={handleDelete}
            disabled={
                isPendingDeletion
                || isDeleting
                || isEditing
                || isPendingUpdation}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50"
            title="Delete Job"
        >
            <Trash2 size={18} />
        </button>
    )
}