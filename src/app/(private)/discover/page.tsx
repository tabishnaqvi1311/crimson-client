'use client';

import TalentFeed from "@/components/feed/talent-feed";
import YoutuberFeed from "@/components/feed/youtuber-feed";
import PrivateRoute from "@/components/guards/private-route";
import LoadingSpinner from "@/components/loading";
import PageWrapper from "@/components/page-wrapper";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {

    const { role } = useAuth();

    return (
        <PrivateRoute>
            {
                role === "YOUTUBER" ?
                    <PageWrapper
                        title="Discover Talent"
                        subtitle="Find skilled creators. Build your team. Grow your channel.">
                        <YoutuberFeed />
                    </PageWrapper>
                    :
                    role === "TALENT" ? (
                        <PageWrapper
                            title="Discover Jobs"
                            subtitle="Work with YouTubers. Land gigs. Get paid."
                        >
                            <TalentFeed />
                        </PageWrapper>
                    )
                        :
                        <LoadingSpinner />
            }
        </PrivateRoute>
    )
}