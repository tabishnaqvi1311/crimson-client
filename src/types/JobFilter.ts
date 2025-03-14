export type JobFilter = {
    workLocation: string,
    workType: string,
    status: string,
    sort: string
}

export type FilterType = "workLocation" | "workType" | "status" | "sort"