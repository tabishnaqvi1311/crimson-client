import { ApplicationFilter as Filter, FilterType } from "@/types"
import { Dispatch, SetStateAction } from "react"
import Select from "./select"
import { spaceGroteskMedium } from "@/fonts"

type ApplicationFilterProps = {
    filters: Filter
    setFilters: Dispatch<SetStateAction<Filter>>
}

export default function ApplicationFilter({
    filters,
    setFilters
}: ApplicationFilterProps) {

    const handleFilterChange = (filterType: FilterType, value: string) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const clearFilters = () => {
        setFilters(() => ({
            status: "",
            sort: ""
        }))
    }

    return (
        <div className={`${spaceGroteskMedium.className} w-[95%] grid md:grid-cols-5 grid-cols-2 gap-6 my-6`}>
            <Select
                title="Status"
                filter={filters.status}
                handleFilterChange={handleFilterChange}
                filterType="status"
                options={["ACCEPTED", "REJECTED", "PENDING", "DRAFT"]}
            />
            <Select
                title="Sort"
                filter={filters.sort}
                handleFilterChange={handleFilterChange}
                filterType="sort"
                options={["OLDEST", "NEWEST"]}
            />
            {
                filters.status.length > 0
                    || filters.sort.length > 0 ?
                    <button className="btn button-primary" onClick={clearFilters}>
                        Clear Filters
                    </button> : null
            }
        </div>
    )
}