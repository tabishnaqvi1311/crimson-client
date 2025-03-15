import { FilterType } from "@/types";
import { ChevronDown } from "lucide-react";

type SelectProps = {
    title: string
    filter: string
    handleFilterChange: (filterType: FilterType, value: string) => void
    filterType: FilterType
    options: string[]
}

export default function Select({
    title,
    filter,
    handleFilterChange,
    filterType,
    options
}: SelectProps) {
    return (
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className={`btn w-full flex justify-between text-sm ${filter.length > 0 ? "text-text bg-accent hover:bg-[#565cd1]" : "bg-text hover:bg-text text-accent"}`}>
                {filter.length === 0 
                ? title 
                : filter
                    .split("_")
                    .map((word) => word.charAt(0) + word.slice(1)
                    .toLowerCase())
                    .join(" ")}
                <ChevronDown />
            </label>
            <ul tabIndex={0} className="dropdown-content z-10 menu bg-text rounded-lg w-full shadow-md">
                {options.map((option) => (
                    <li key={option}>
                        <p onClick={() => handleFilterChange(filterType, option)} className="w-full px-4 py-2 hover:text-accent text-background text-sm">
                            {option
                                .split("_")
                                .map((word) => word.charAt(0) + word.slice(1)
                                    .toLowerCase())
                                .join(" ")}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}