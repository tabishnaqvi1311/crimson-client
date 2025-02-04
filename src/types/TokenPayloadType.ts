export type TokenPayloadType = {
    userId: string;
    role: string;
    exp: number;
    picture?: string;
    isVerified?: boolean;
} | null