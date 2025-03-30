export type Job = {
    id: string,
    title: string,
    salary: string,
    description: string,
    workLocation: "REMOTE" | "ONSITE" | "HYBRID",
    status: "OPEN" | "CLOSED" | "DRAFT" | "EXPIRED",
    workType: "FULL_TIME" | "PART_TIME" | "PROJECT_BASED",
    createdAt: string,
    poster?: {
        id: string,
        name: string,
        picture: string,
        youtuberProfile: {
            channelName: string,
            subscribers: number
        }
    }
    applications?: {
        id: string
    }[],
}