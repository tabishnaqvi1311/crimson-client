import { bricolageGrotesqueBold, spaceGroteskRegular } from "@/fonts";
import { Trash2 } from "lucide-react";
import { useRef } from "react";

type DeleteModalProps = {
    handleDelete: () => void,
    isPendingDeletion: boolean,
    isDeleting: boolean,
    isEditing: boolean,
    isPendingUpdation: boolean
}

export default function DeleteModal({
    handleDelete,
    isPendingDeletion,
    isDeleting,
    isEditing,
    isPendingUpdation
}: DeleteModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <>
            <button
                onClick={openModal}
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
            <dialog className='modal' ref={modalRef} data-theme="light">
                <div className="modal-box">
                    <h3 className={`font-bold text-2xl text-primary ${bricolageGrotesqueBold.className}`}>Delete Job</h3>
                    <div className={`${spaceGroteskRegular.className}`}>
                        <p className="py-4 text-background">
                            Are you sure you want to delete this job? This action is irreversible.
                        </p>
                    </div>
                    <div className="flex">
                        <button className="btn btn-link no-underline focus:outline-none text-primary" onClick={handleDelete}>
                            Delete
                        </button>
                        <form method="dialog">
                            <button className="btn focus:outline-none text-background">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}