import apiUrl from "@/constant/config";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../loading";

export default function TalentFeed() {
    const query = useQuery({
        queryKey: ["talent-feed"],
        queryFn: async () => {
            const response = await fetch(`${apiUrl}/job/all`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("crimson-token")}`
                },
            })
            if(!response.ok) throw new Error(`request failed with status ${response.status}`);
            return await response.json();
        }
    })

    if(query.status === "pending") return <LoadingSpinner/>

    if(query.status === "error") return <p className="text-primary text-center">
        An error has occurred </p>

    return (
        <>
            {   //TODO: add types and make better
                query.data.jobs.map((job: any) => (
                    <div key={job.id} className="pl-[7rem] pt-12">
                        <div>
                            <p className="text-lg text-primary">{job.title}</p>
                            <p className="text-sm text-gray-400">{job.salary}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}