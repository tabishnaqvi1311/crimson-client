export type AuthContextType = {
    userId: string | null;
    role: string | null;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    loading: boolean;
}