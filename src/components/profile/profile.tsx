"use client";

import apiUrl from "@/constant/config";
import { useAuth } from "@/hooks/useAuth"
import { useEffect, useState } from "react";

import PageWrapper from "../page-wrapper";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../loading";
import YoutuberProfileHeader from "./youtuber/youtuber-profile-header";
import YoutuberProfile from "./youtuber/youtuber-profile";
import TalentProfileHeader from "./talent/talent-profile-header";
import TalentProfile from "./talent/talent-profile";
import toast from "react-hot-toast";

export default function Profile() {

    const { role, verify, userId } = useAuth();

    const [checkedVerification, setCheckedVerification] = useState<boolean>(false);

    useEffect(() => {
        const getVerifiedStatus = async () => {
            try {
                const res = await fetch(`${apiUrl}/users/verified`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });

                if (!res.ok) throw new Error("failed to get verified status");

                const data = await res.json();
                if (data.isVerified) {
                    verify();
                    if (!checkedVerification) {
                        toast.success("You have successfully verified your account!", {
                            position: "top-right"
                        });
                        setCheckedVerification(true);
                    }
                } else throw new Error("not verified");

                // Remove hash from URL
                if (window.location.hash) {
                    window.history.replaceState(null, "", window.location.pathname + window.location.search);
                }
            } catch (e) {
                console.log(e);
            }
        };

        if (role === "TALENT") return;

        const hash = window.location.hash;
        if (!hash) return;

        if (hash === "#failed") {
            toast.error("Something went wrong, please try again later");
            return;
        }

        if (hash === "#success" && !checkedVerification) getVerifiedStatus();
    }, [role, verify, checkedVerification]);


    const query = useQuery({
        queryKey: ["user-profile"],
        queryFn: async () => {
            const response = await fetch(`${apiUrl}/users/me`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
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

    return (
        <div>
            <PageWrapper>
                {
                    role === "YOUTUBER" ?
                        <>
                            <YoutuberProfileHeader actualUser={userId} user={query.data.user} role={role} />
                            <YoutuberProfile user={query.data.user} />
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