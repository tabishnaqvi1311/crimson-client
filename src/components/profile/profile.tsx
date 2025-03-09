"use client";

import apiUrl from "@/constant/config";
import { useAuth } from "@/hooks/useAuth"
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import PageWrapper from "../page-wrapper";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../loading";
import YoutuberProfileHeader from "./youtuber/youtuber-profile-header";
import YoutuberProfile from "./youtuber/youtuber-profile";
import TalentProfileHeader from "./talent/talent-profile-header";
import TalentProfile from "./talent/talent-profile";

export default function Profile() {

    const { role, verify, userId } = useAuth();

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
                if (data.isVerified) verify();
                else throw new Error("not verified");
                toast.success("You have successfully verified your account!");
            } catch (e) {
                console.log(e);
            }
        }
        if (role === "TALENT") return;
        const hash = window.location.hash;
        if (!hash) return;
        if (hash === "#failed") {
            toast.error("Something went wrong, please try again later");
            return;
        }
        if (hash === '#success') getVerifiedStatus();
    }, [role, verify])


    const query = useQuery({
        queryKey: ["user-profile"],
        queryFn: async () => {
            const response = await fetch(`${apiUrl}/users/profile/${role}/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("crimson-token")}`
                }
            });
            if (!response.ok) throw new Error("failed to fetch user profile");
            const json = await response.json();
            return json;
        }
    })

    if (query.status === "pending") return <LoadingSpinner />

    if (query.status === "error") return <p className="text-primary text-center">
        An error has occurred
    </p>

    // TODO: add logic to check if already verified

    return (
        <div>
            <ToastContainer />
            <PageWrapper>
                {
                    role === "YOUTUBER" ?
                        <>
                            <YoutuberProfileHeader actualUser={userId} user={query.data.user} role={role} />
                            <YoutuberProfile user={query.data.user}/>
                        </>
                        :
                        <>
                            <TalentProfileHeader user={query.data.user} role={role} />
                            <TalentProfile user={query.data.user} />
                        </>
                }
            </PageWrapper>
        </div>
    )
}