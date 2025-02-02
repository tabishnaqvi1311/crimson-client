import apiUrl from "@/constant/config";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../loading";
import { User } from "@/types";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";

export default function TalentFeed() {
    const query = useQuery({
        queryKey: ["talent-feed"],
        queryFn: async () => {
            const response = await fetch(`${apiUrl}/users/roles/YOUTUBER`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("crimson-token")}`
                },
            })
            if(!response.ok) throw new Error(`request failed with status ${response.status}`);
            return response.json();
        }
    })

    if(query.status === "pending") return <LoadingSpinner/>

    if(query.status === "error") return <p className="text-primary text-center">
        An error has occurred 
    </p>

    return (
        <>
            {
                query.data.users.map((youtuber: User) => (
                    <div key={youtuber.id} className="pl-[7rem] pt-12">
                        {youtuber.picture 
                            ?
                            <Image src={youtuber.picture} alt="user" height={40} width={40} className="rounded-full" />
                            :
                            <CircleUserRound size={30}/>
                        }
                        <div>
                            <p className="text-lg text-primary">{youtuber.name}</p>
                            <p className="text-sm text-gray-400">{youtuber.email}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}