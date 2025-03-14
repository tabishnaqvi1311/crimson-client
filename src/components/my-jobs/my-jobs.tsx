import apiUrl from "@/constant/config";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import JobCardSkeleton from "../skeletons/job-card-skeleton";
import JobCardWithStatus from "../cards/job-card-with-status";
import JobDrawer from "../drawer/job-drawer";
import { Job } from "@/types";
import GridWrapper from "../grid-card-wrapper";
import { ClipboardMinus } from "lucide-react";
import { spaceGroteskMedium } from "@/fonts";
//TODO: add some ui for when there are no jobs
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


    return query.data.jobs.length > 0 ?
        <GridWrapper>
            {query.data.jobs.map((job: Job) => (
                <JobDrawer key={job.id} job={job}>
                    <JobCardWithStatus job={job} />
                </JobDrawer>
            ))}
        </GridWrapper>
        :
        <div className="mx-auto h-[75vh] w-[95%] flex flex-col justify-center items-center">
            <ClipboardMinus size={150} color="darkGray" className="opacity-50"/>
            <p className={spaceGroteskMedium.className}>No jobs posted yet</p>
        </div>
}