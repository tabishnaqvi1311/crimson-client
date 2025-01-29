"use client"
import { redirect } from "next/navigation";
import { useEffect } from "react"

export default function Page() {

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const value = params.get("token") as string;
        localStorage.setItem("token", value)
        redirect("/jobs")
    }, [])

    return(
        <main>
            loading...
        </main>
    )
}