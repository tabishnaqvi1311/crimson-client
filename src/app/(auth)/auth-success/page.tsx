"use client"
import LoadingSpinner from "@/components/loading";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function Page() {

    const { login } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const emailHold = localStorage.getItem("emailHold");
        if (emailHold) localStorage.removeItem("emailHold");

        (async () => {
            await login();
            router.replace("/discover?show=true");
        })()

    }, [login, router])

    return <LoadingSpinner />
}