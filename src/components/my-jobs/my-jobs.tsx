import apiUrl from "@/constant/config";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import JobCardSkeleton from "../skeletons/job-card-skeleton";
import JobCardWithStatus from "../cards/job-card-with-status";
import JobDrawer from "../drawer/job-drawer";
import { Job } from "@/types";

export default function MyJobs() {

    const { userId } = useAuth();

    const query = useQuery({
        queryKey: ["my-jobs"],
        queryFn: async () => {
            const response = await fetch(`${apiUrl}/job/youtuber/${userId}`, {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[95%]">{
            query.data.jobs.map((job: Job) => (
                <JobDrawer key={job.id} job={job}>
                    <JobCardWithStatus job={job} />
                </JobDrawer>
            ))}
        </div>
    )
}