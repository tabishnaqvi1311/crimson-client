"use client";

import apiUrl from "@/constant/config";
import { useAuth } from "@/hooks/useAuth"
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Profile() {

    const { role, verify } = useAuth();

    useEffect(() => {
        const getVerifiedStatus = async () => {
            try {
                const res = await fetch(`${apiUrl}/users/verified`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("crimson-token")}`
                    }
                })
                if (!res.ok) throw new Error("failed to get verified status");
                const data = await res.json();
                if(data.isVerified) verify();
                else throw new Error("not verified");
                toast.success("You have successfully verified your account!");
            } catch (e) {
                console.log(e);
            }
        }
        if(role === "TALENT") return;
        const hash = window.location.hash;
        if (!hash) return;
        if (hash === "#failed") {
            toast.error("Something went wrong, please try again later");
            return;
        }
        if (hash === '#success') getVerifiedStatus();
    }, [role, verify])

    // TODO: add logic to check if already verified

    return (
        <div>
            <ToastContainer/>
            your role is {role}
            {
                role === "YOUTUBER"
                &&
                <a href={`${apiUrl}/v/verify-youtuber?token=${localStorage.getItem("crimson-token")}`}>Verify Your Account</a>
            }
        </div>
    )
}