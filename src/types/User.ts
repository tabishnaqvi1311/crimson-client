export type User = {
    id: string,
    name: string,
    email: string,
    picture?: string | undefined,
}

export type Youtuber = User & {
    youtuberProfile?: {
        id: string,
        youtubeUsername: string,
        youtuberSince: string,
        channelName: string,
        about: string,
        subscribers: number,
        views: number,
        videos: number,
    }
}

export type Talent = User & {
    talentProfile?: {
        id: string,
        about: string,
        rate: string,
        workLocation: "REMOTE" | "ONSITE" | "HYBRID",
        workType: "FULL_TIME" | "PART_TIME" | "PROJECT_BASED",
        topSkill: string,
        skills: string[],
        experience: string,
        location: string,
        languages: string[],
        categories: string[],
        clients: string[],
    }
}