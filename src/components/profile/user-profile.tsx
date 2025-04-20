"use client";

import apiUrl from "@/constant/config";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import LoadingSpinner from "../loading";
import YoutuberProfileHeader from "./youtuber/youtuber-profile-header";
import { useAuth } from "@/hooks/useAuth";
import YoutuberProfile from "./youtuber/youtuber-profile";
import TalentProfileHeader from "./talent/talent-profile-header";
import TalentProfile from "./talent/talent-profile";
import PageWrapper from "../page-wrapper";

export default function UserProfile() {
    const { userId } = useAuth();

    const params = useParams();
    const id = params.id as string;
    const role = params.role as string

    const query = useQuery({
        queryKey: [`other-user-profile${id}`],
        queryFn: async () => {
            const response = await fetch(`${apiUrl}/users/profile/${role}/${id}`, {
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
        <PageWrapper>
            {
                role === "YOUTUBER" ? (
                    <>
                        <YoutuberProfileHeader actualUser={userId} user={query.data.user} role={role} />
                        <YoutuberProfile user={query.data.user} />
                    </>
                ) : (
                    <>
                        <TalentProfileHeader user={query.data.user} role={role} />
                        <TalentProfile user={query.data.user} />
                    </>
                )
            }
        </PageWrapper>
    )
}