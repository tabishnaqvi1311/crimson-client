import apiUrl from "@/constant/config";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingSpinner from "../loading";
import GridWrapper from "../grid-card-wrapper";
import { Application, ApplicationFilter as Filter } from "@/types";
import ApplicationCard from "../cards/application-card";
import ApplicationDrawer from "../drawer/application-drawer";
import ApplicationFilter from "../filters/application-filter";
import { spaceGroteskMedium } from "@/fonts";
import { ClipboardMinus } from "lucide-react";

export default function TalentView() {

    const { userId } = useAuth();
    const [filters, setFilters] = useState<Filter>({
        status: "",
        sort: ""
    })

    const query = useQuery({
        queryKey: ["my-applications", filters],
        queryFn: async () => {
            const queryParams = new URLSearchParams();
            if (filters.status) queryParams.append("status", filters.status);
            if (filters.sort) queryParams.append("sort", filters.sort);

            const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";

            const response = await fetch(`${apiUrl}/application/user/${userId}${queryString}`, {
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
        An error has occurred </p>


    return (
        <>
            <ApplicationFilter
                filters={filters}
                setFilters={setFilters}
            />
            {
                query.data.applications.length > 0 ?
                    <GridWrapper>
                        {
                            query.data.applications.map((application: Application) => (
                                <ApplicationDrawer application={application} key={application.id}>
                                    <ApplicationCard application={application} />
                                </ApplicationDrawer>
                            ))
                        }
                    </GridWrapper>
                    :
                    <div className="mx-auto h-[75vh] w-[95%] flex flex-col justify-center items-center">
                        <ClipboardMinus size={150} color="darkGray" className="opacity-50" />
                        <p className={spaceGroteskMedium.className}>No applications found. Adjust your filters or create one.</p>
                    </div>
            }
        </>
    )
}