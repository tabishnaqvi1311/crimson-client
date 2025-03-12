import apiUrl from "@/constant/config";
import { bricolageGrotesqueBold, spaceGroteskRegular } from "@/fonts";
import { useAuth } from "@/hooks/useAuth";
import { Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function DeleteAccountModal() {
    const modalRef = useRef<HTMLDialogElement>(null);
    const { logout, userId } = useAuth();
    const [isDeleting, setIsDeleting] = useState(false);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const handleDelete = async () => {
        setIsDeleting(true);

        try {
            const response = await fetch(`${apiUrl}/users/delete/${userId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("crimson-token")}`
                }
            })
            if(!response.ok) throw new Error("something went wrong");
            logout();
        } catch(e) {
            console.log(e);
            toast.error("could not delete")
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <>
            <button
                onClick={openModal}
                disabled={isDeleting}
                className="flex gap-2 items-center btn btn-ghost hover:bg-primary"
                title="Delete Job"
            >
                <Trash2 size={18} /> Delete Account
            </button>
            <dialog className='modal' ref={modalRef} data-theme="light">
                <div className="modal-box">
                    <h3 className={`font-bold text-2xl text-primary ${bricolageGrotesqueBold.className}`}>Delete Account</h3>
                    <div className={`${spaceGroteskRegular.className}`}>
                        <p className="py-4 text-background">
                            We're sad to see you leave! If you ever change your mind, you're always welcome back.
                            <br /><br />
                            Deleting your account is permanent and cannot be undone.
                        </p>
                    </div>
                    <div className="flex">
                        <button className="btn btn-link no-underline focus:outline-none text-primary"
                            onClick={handleDelete}
                            disabled={isDeleting}
                        >
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