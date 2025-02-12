export type Job = {
    id: string,
    title: string,
    salary: string,
    workLocation: string,
    workType: string,
    createdAt: string,
    poster: {
        id: string,
        name: string,
        picture: string,
        youtuberProfile: {
            channelName: string,
            subscribers: number
        }
    }
}