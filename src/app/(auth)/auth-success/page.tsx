"use client"
import LoadingSpinner from "@/components/loading";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react"

export default function Page() {

    const { login } = useAuth();

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const value = params.get("token") as string;
        login(value);
    }, [])

    return <LoadingSpinner/>
}