"use client";

import apiUrl from "@/constant/config";
import { useAuth } from "@/hooks/useAuth"

export default function Profile() {

    const { role } = useAuth();

    // TODO: add logic to check if already verified

    return (
        <div>
            your role is {role}
            {
                role === "YOUTUBER"
                &&
                <a href={`${apiUrl}/v/verify-youtuber?token=${localStorage.getItem("crimson-token")}`}>Verify Your Account</a>
            }
        </div>
    )
}