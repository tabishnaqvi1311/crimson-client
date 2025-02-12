'use client';

import PrivateRoute from "@/components/guards/private-route";
import LoadingSpinner from "@/components/loading";
import TalentView from "@/components/my-jobs/TalentView";
import YoutuberView from "@/components/my-jobs/YoutuberView";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {
    const { role } = useAuth();

    return (
        <PrivateRoute>
            {
                role === "YOUTUBER" ? <YoutuberView />
                    : role === "TALENT" ? <TalentView />
                        : <LoadingSpinner />
            }
        </PrivateRoute>
    )
}