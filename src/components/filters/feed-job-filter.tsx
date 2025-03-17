import { spaceGroteskMedium } from "@/fonts"
import { JobFilter as Filter, FilterType } from "@/types"
import { Dispatch, SetStateAction } from "react"
import Select from "./select"

type JobFilterProps = {
    filters: Filter
    setFilters: Dispatch<SetStateAction<Filter>>
}

export default function FeedJobFilter({
    filters,
    setFilters
}: JobFilterProps) {

    const handleFilterChange = (filterType: FilterType, value: string) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const clearFilters = () => {
        setFilters(() => ({
            workLocation: "",
            workType: "",
            status: "",
            sort: ""
        }))
    }

    return (
        <div className={`${spaceGroteskMedium.className} w-[95%] grid md:grid-cols-5 grid-cols-2 gap-6 my-6`}>
            <Select
                title="Location"
                filter={filters.workLocation}
                handleFilterChange={handleFilterChange}
                filterType="workLocation"
                options={["REMOTE", "ONSITE", "HYBRID"]}
            />
            <Select
                title="Type"
                filter={filters.workType}
                handleFilterChange={handleFilterChange}
                filterType="workType"
                options={["FULL_TIME", "PART_TIME", "PROJECT_BASED"]}
            />
            {
                filters.workLocation.length > 0 || filters.workType.length > 0 ?
                <button className="btn button-primary" onClick={clearFilters}>
                    Clear Filters
                </button> : null
            }
        </div>
    )
}