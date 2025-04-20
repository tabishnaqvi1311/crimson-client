export type AuthContextType = {
    userId: string | null;
    role: string | null;
    isAuthenticated: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
    picture: string | null | undefined;
    loading: boolean;
    hasVerified: boolean;
    verify: () => void;
}