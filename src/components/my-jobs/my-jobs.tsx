import apiUrl from "@/constant/config";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import JobCardSkeleton from "../skeletons/job-card-skeleton";

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
        query.data.jobs.map((job: any) => (
            <div key={job.id} className="border border-gray-200 rounded-md p-4">
                <h1 className="text-xl font-bold">{job.title}</h1>
                <p className="text-sm text-gray-500 mt-2">Salary: {job.salary}</p>
                <p className="text-sm text-gray-500 mt-2">Location: {job.workLocation}</p>
                <p className="text-sm text-gray-500 mt-2">Type: {job.workType}</p>
                <p className="text-sm text-gray-500 mt-2">Status: {job.status}</p>
            </div>
        ))
    )
}