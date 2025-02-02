'use client';

import TalentFeed from "@/components/feed/talent-feed";
import YoutuberFeed from "@/components/feed/youtuber-feed";
import PrivateRoute from "@/components/guards/private-route";
import LoadingSpinner from "@/components/loading";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {

    const { role } = useAuth();

    return (
        <PrivateRoute>
            {
                role === "YOUTUBER" ? <YoutuberFeed/> 
                :
                role === "TALENT" ? <TalentFeed/>
                :
                <LoadingSpinner/>
            }
        </PrivateRoute>
    )
}