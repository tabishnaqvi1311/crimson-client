'use client';

import TalentFeed from "@/components/feed/talent-feed";
import YoutuberFeed from "@/components/feed/youtuber-feed";
import PrivateRoute from "@/components/guards/private-route";
import LoadingSpinner from "@/components/loading";
import { PoppinsBold, spaceGroteskMedium } from "@/fonts";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {

    const { role } = useAuth();

    return (
        <PrivateRoute>
            {
                role === "YOUTUBER" ?
                    <div className="pl-[7rem] pt-10">
                        <div>
                            <h1 className={`${PoppinsBold.className} text-3xl text-text`}>Discover Talent</h1>
                            <h3 className={`${spaceGroteskMedium.className}`}>
                                Find skilled creators. Build your team. Grow your channel.
                            </h3>
                        </div>
                        <YoutuberFeed />
                    </div>
                    :
                    role === "TALENT" ? (
                        <div className="pl-[7rem] pt-10">
                            <div>
                                <h1 className={`${PoppinsBold.className} text-3xl text-text`}>Discover Jobs</h1>
                                <h3 className={`${spaceGroteskMedium.className}`}>
                                    Work with YouTubers. Land gigs. Get paid.
                                </h3>
                            </div>
                            <TalentFeed />
                        </div>
                    )
                        :
                        <LoadingSpinner />
            }
        </PrivateRoute>
    )
}