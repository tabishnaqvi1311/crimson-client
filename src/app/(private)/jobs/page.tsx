'use client';

import PrivateRoute from "@/components/guards/private-route";
import LoadingSpinner from "@/components/loading";
import TalentView from "@/components/my-jobs/talent-view";
import YoutuberView from "@/components/my-jobs/youtuber-view";
import PageWrapper from "@/components/page-wrapper";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {
    const { role } = useAuth();

    return (
        <PrivateRoute>
            {
                role === "YOUTUBER" ? 
                    <PageWrapper
                        title="Your Posted Jobs"    
                        subtitle="Manage and track all the jobs you've posted."
                    >
                        <YoutuberView />
                    </PageWrapper>
                    : role === "TALENT" ? <TalentView />
                        : <LoadingSpinner />
            }
        </PrivateRoute>
    )
}