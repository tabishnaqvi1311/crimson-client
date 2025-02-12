import apiUrl from "@/constant/config";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../loading";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";
import { User } from "@/types";
import Modal from "../modal/modal";


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
        <>
            {
                query.data.users.map((talent: User) => (
                    <div key={talent.id} className="mt-4">
                        {talent.picture
                            ?
                            <Image src={talent.picture} alt="user" height={40} width={40} className="rounded-full" />
                            :
                            <CircleUserRound size={30} />
                        }
                        <div>
                            <p className="text-lg text-primary">{talent.name}</p>
                            <p className="text-sm text-gray-400">{talent.email}</p>
                        </div>
                    </div>
                ))
            }
            <Modal />
        </>
    )
}