'use client';
import { PoppinsMedium, spaceGroteskRegular } from "@/fonts";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        const email = localStorage.getItem("emailHold");
        if(!email) redirect('/');
        setEmail(email);
        // TODO: clear email from local storage when user goes to dashboard
        // TODO: close this tab when user changes tabs
    }, []);

    return (
        <main className="min-h-[90vh] flex flex-col items-center justify-center">
            {email ? (
                <>
                    <p className={`heading ${PoppinsMedium.className} text-text`}>Great! Now check your inbox.</p>
                    <p className={spaceGroteskRegular.className}>Please check your inbox at {email}</p>
                    <p className={spaceGroteskRegular.className}>You may close this tab.</p>
                    <Link href={'/signin'} className={`${spaceGroteskRegular.className} underline hover:text-text text-primary`}>Use another email</Link>
                </>
            ) : (<span className="spinner" />)}
        </main>
    )
}