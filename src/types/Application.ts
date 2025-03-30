export type Application = {
    id: string;
    coverLetter: string;
    status: "PENDING" | "ACCEPTED" | "REJECTED";
    createdAt: string;
    job: {
        title: string;
        poster: {
            id: string;
            name: string;
            picture: string;
        }
    }
}