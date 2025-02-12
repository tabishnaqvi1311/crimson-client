import apiUrl from "@/constant/config";
import { bricolageGrotesqueBold, spaceGroteskRegular } from "@/fonts";
import { useAuth } from "@/hooks/useAuth";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Modal() {
    const searchParams = useSearchParams();

    const modalRef = useRef<HTMLDialogElement>(null);

    const { role, hasVerified } = useAuth();

    useEffect(() => {
        if (searchParams.get("show") === "true" && role === "YOUTUBER" && !hasVerified) {
            console.log(role, hasVerified)
            modalRef.current?.showModal();
        }
    }, [searchParams])

    return (
        <dialog className='modal' ref={modalRef} data-theme="light">
            <div className="modal-box">
                <h3 className={`font-bold text-2xl text-primary ${bricolageGrotesqueBold.className}`}>Welcome aboard!</h3>
                <div className={`${spaceGroteskRegular.className}`}>
                    <p className="py-4 text-background">
                        As an YouTuber on our platform, verifying your YouTube channel boosts your brand's credibility and assures talented creators that they're engaging with a legitimate YouTuber.
                    </p>
                    <p className="py-4 text-background">
                        You can verify your channel now or opt to do it later in your profile settings. What would you like to do?
                    </p>
                </div>
                <div className="flex">
                    <button className="button-primary">
                        <a href={`${apiUrl}/v/verify-youtuber?token=${localStorage.getItem("crimson-token")}`}>Verify Your Account</a>
                    </button>
                    <form method="dialog">
                        <button className="btn btn-link no-underline focus:outline-none text-background">Skip for now</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}