import apiUrl from "@/constant/config";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import JobCardSkeleton from "../skeletons/job-card-skeleton";
import JobCardWithStatus from "../cards/job-card-with-status";
import JobDrawer from "../drawer/job-drawer";
import { Job, JobFilter as Filter } from "@/types";
import GridWrapper from "../grid-card-wrapper";
import { ClipboardMinus } from "lucide-react";
import { spaceGroteskMedium } from "@/fonts";
import { useState } from "react";
import JobFilter from "../filters/job-filter";
export default function MyJobs() {

    const { userId } = useAuth();
    const [filters, setFilters] = useState<Filter>({
        workLocation: "",
        workType: "",
        status: "",
        sort: ""
    })

    const query = useQuery({
        queryKey: ["my-jobs", filters],
        queryFn: async () => {

            const queryParams = new URLSearchParams();
            if (filters.workLocation) queryParams.append("location", filters.workLocation);
            if (filters.workType) queryParams.append("type", filters.workType);
            if (filters.status) queryParams.append("status", filters.status);
            if (filters.sort) queryParams.append("sort", filters.sort);

            const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";

            const response = await fetch(`${apiUrl}/job/youtuber/${userId}${queryString}`, {
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


    if (query.status === "pending") return (
        <>
            <JobFilter
                filters={filters}
                setFilters={setFilters}
            />
            <JobCardSkeleton />
        </>
    )

    if (query.status === "error") return <p className="text-primary text-center">
        An error has occurred </p>

    return (
        <>
            <JobFilter
                filters={filters}
                setFilters={setFilters}
            />
            {
                query.data.jobs.length > 0 ?
                    <GridWrapper>
                        {query.data.jobs.map((job: Job) => (
                            <JobDrawer key={job.id} job={job}>
                                <JobCardWithStatus job={job} />
                            </JobDrawer>
                        ))}
                    </GridWrapper>
                    :
                    <div className="mx-auto h-[75vh] w-[95%] flex flex-col justify-center items-center">
                        <ClipboardMinus size={150} color="darkGray" className="opacity-50" />
                        <p className={spaceGroteskMedium.className}>No jobs found. Adjust your filters or create one.</p>
                    </div>
            }
        </>
    )
}