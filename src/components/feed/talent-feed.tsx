import apiUrl from "@/constant/config";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Job, JobFilter as Filter } from "@/types";
import JobCard from "../cards/job-card";
import JobCardSkeleton from "../skeletons/job-card-skeleton";
import JobDrawer from "../drawer/job-drawer";
import GridWrapper from "../grid-card-wrapper";
import { useState } from "react";
import FeedJobFilter from "../filters/feed-job-filter";

export default function TalentFeed() {

    const [filters, setFilters] = useState<Filter>({
        workLocation: "",
        workType: "",
        status: "",
        sort: "",
    });

    const query = useInfiniteQuery({
        queryKey: ["talent-feed", filters],
        queryFn: async ({ pageParam = 0 }) => {

            const queryParams = new URLSearchParams();
            if (filters.workLocation) queryParams.append("location", filters.workLocation);
            if (filters.workType) queryParams.append("type", filters.workType);
            if (pageParam) queryParams.append("cursor", pageParam.toString());

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
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
    })

    if (query.status === "pending") return <>
        <FeedJobFilter
            filters={filters}
            setFilters={setFilters}
        />
        <JobCardSkeleton />
    </>

    if (query.status === "error") return <p className="text-primary text-center">
        An error has occurred </p>

    const allJobs = query.data?.pages.flatMap(page => page.jobs) || [];

    return (
        <>
            <FeedJobFilter
                filters={filters}
                setFilters={setFilters}
            />
            <GridWrapper>
                {
                    allJobs.map((job: Job) => (
                        <JobDrawer key={job.id} job={job}>
                            <JobCard job={job} />
                        </JobDrawer>
                    ))
                }
            </GridWrapper>
            <div className="w-[95%] flex justify-center mt-4">
                <button
                    className="button-secondary"
                    onClick={() => query.fetchNextPage()}
                    disabled={!query.hasNextPage || query.isFetchingNextPage}
                >
                    {
                        query.isFetchingNextPage
                            ? <span className="loading loading-spinner text-text" />
                            : query.hasNextPage
                                ? "Load More"
                                : "That's all folks!"
                    }

                </button>
            </div>
        </>
    )
}