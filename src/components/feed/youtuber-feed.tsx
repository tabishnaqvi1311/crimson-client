// TODO: add infinite page results
import apiUrl from "@/constant/config";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/types";
import Modal from "../modal/modal";
import TalentProfileCard from "../cards/talent-profile-card";
import TalentCardSkeleton from "../skeletons/talent-card-skeleton";
import GridWrapper from "../grid-card-wrapper";


export default function YoutuberFeed() {

    const query = useQuery({
        queryKey: ["youtuber-feed"],
        queryFn: async () => {
            const response = await fetch(`${apiUrl}/users/roles/TALENT`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            })
            if (!response.ok) throw new Error(`request failed with status ${response.status}`);
            return await response.json();
        }
    })

    if (query.status === "pending") return <TalentCardSkeleton />

    if (query.status === "error") return <p className="text-primary text-center">
        An error has occurred
    </p>

    return (
        <GridWrapper>
            {
                query.data.users.map((talent: User) => (
                    <TalentProfileCard key={talent.id} talent={talent} />
                ))
            }
            <Modal />
        </GridWrapper>
    )
}