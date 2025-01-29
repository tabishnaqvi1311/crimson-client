'use client'

import Image from "next/image"
import {ToastContainer, toast} from "react-toastify";

export default function GoogleButton({
    role, loading
}: { 
    role: string | null,
    loading: boolean
 }) {
    return (
        <button
            onClick={() => {
            if(!role){
                toast.error("Role not selected", {theme: "dark"})
                return;
            }
            if(role !== "YOUTUBER" && role !== "TALENT") {
                toast.error("Invalid role", {theme: "dark"})
                return;
            }
            window.location.href = `http://localhost:8080/auth/google?role=${role}`

            }}
            className="cursor-pointer text-black flex gap-2 items-center bg-white px-10 w-fit py-2 rounded-lg font-medium text-md hover:bg-zinc-300 transition-all ease-in duration-200 justify-center"
            disabled={loading}
        >
            <Image
                src={'/google.svg'}
                alt="g"
                width={20}
                height={20} />
            <span>Sign In with Google</span>
        </button>

    )
}