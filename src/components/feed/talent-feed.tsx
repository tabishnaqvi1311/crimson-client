import apiUrl from "@/constant/config";
import { useQuery } from "@tanstack/react-query";
import { Job, JobFilter as Filter } from "@/types";
import JobCard from "../cards/job-card";
import JobCardSkeleton from "../skeletons/job-card-skeleton";
import JobDrawer from "../drawer/job-drawer";
import GridWrapper from "../grid-card-wrapper";
import { useState } from "react";
import FeedJobFilter from "../filters/feed-job-filter";
import { spaceGroteskMedium } from "@/fonts";
import { ClipboardMinus } from "lucide-react";

export default function TalentFeed() {

    const [filters, setFilters] = useState<Filter>({
        workLocation: "",
        workType: "",
        status: "",
        sort: "",
    });

    const query = useQuery({
        queryKey: ["talent-feed", filters],
        queryFn: async () => {

            const queryParams = new URLSearchParams();
            if (filters.workLocation) queryParams.append("location", filters.workLocation);
            if (filters.workType) queryParams.append("type", filters.workType);

            const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";

            const response = await fetch(`${apiUrl}/job/all${queryString}`, {
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
        <>
            <FeedJobFilter
                filters={filters}
                setFilters={setFilters}
            />
            {query.data.jobs.length > 0 ?
                <GridWrapper>
                    {
                        query.data.jobs.map((job: Job) => (
                            <JobDrawer key={job.id} job={job}>
                                <JobCard job={job} />
                            </JobDrawer>
                        ))
                    }
                </GridWrapper>
                :
                <div className="mx-auto h-[75vh] w-[95%] flex flex-col justify-center items-center">
                    <ClipboardMinus size={150} color="darkGray" className="opacity-50" />
                    <p className={spaceGroteskMedium.className}>No jobs found. Adjust your filters or try reloading the page</p>
                </div>
            }
        </>
    )
}