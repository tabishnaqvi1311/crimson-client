import apiUrl from "@/constant/config";
import { useQuery } from "@tanstack/react-query";
import { Job } from "@/types";
import JobCard from "../cards/job-card";
import JobCardSkeleton from "../skeletons/job-card-skeleton";
import JobDrawer from "../drawer/job-drawer";

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
            if (!response.ok) throw new Error(`request failed with status ${response.status}`);
            return await response.json();
        }
    })

    if (query.status === "pending") return <JobCardSkeleton />

    if (query.status === "error") return <p className="text-primary text-center">
        An error has occurred </p>

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[95%]">
            { 
                query.data.jobs.map((job: Job) => (
                    <JobDrawer key={job.id} job={job}>
                        <JobCard job={job} />
                    </JobDrawer>
                ))
            }
        </div>
    )
}