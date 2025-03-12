import apiUrl from "@/constant/config";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../loading";
import { User } from "@/types";
import Modal from "../modal/modal";
import TalentProfileCard from "../cards/talent-profile-card";


export default function YoutuberFeed() {

    const query = useQuery({
        queryKey: ["youtuber-feed"],
        queryFn: async () => {
            const response = await fetch(`${apiUrl}/users/roles/TALENT`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("crimson-token")}`
                },
            })
            if (!response.ok) throw new Error(`request failed with status ${response.status}`);
            return await response.json();
        }
    })

    if (query.status === "pending") return <LoadingSpinner />

    if (query.status === "error") return <p className="text-primary text-center">
        An error has occurred
    </p>

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[95%]">
            {
                query.data.users.map((talent: User) => (
                    <TalentProfileCard key={talent.id} talent={talent}/>
                ))
            }
            <Modal />
        </div>
    )
}