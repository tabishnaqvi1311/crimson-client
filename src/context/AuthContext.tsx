import { AuthContextType, TokenPayloadType } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useEffect, useState, } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [picture, setPicture] = useState<string | null | undefined>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();

    const logout = useCallback(() => {
        localStorage.removeItem("crimson-token");
        setUserId(null);
        setRole(null);
        setPicture(null);
        setIsAuthenticated(false);
        setLoading(false);
        router.push("/");
    }, [router])

    const checkAuth = useCallback(() => {
        const token = localStorage.getItem("crimson-token");

        if (!token) {
            console.log("forbidden");
            logout(); return;
        }

        let payload: TokenPayloadType = null;

        try {
            payload = JSON.parse(atob(token.split(".")[1]));
        }
        catch (error) {
            console.log(error);
            logout(); return;
        }
        if (!payload || !payload.userId || !payload.role || payload.exp * 1000 < Date.now()) {
            console.log("Invalid token");
            logout(); return;
        }

        if(payload.role !== "TALENT" && payload.role !== "YOUTUBER"){
            console.log("Invalid role");
            logout(); return;
        }

        setUserId(payload.userId);
        setRole(payload.role)
        setPicture(payload.picture);
        setIsAuthenticated(true);
        setLoading(false);
    }, [logout])

    const login = useCallback((token: string) => {
        localStorage.setItem("crimson-token", token);
        checkAuth();
        router.push("/discover");
    }, [checkAuth, router])

    useEffect(() => {
        checkAuth();
    }, [checkAuth])

    return (
        <AuthContext.Provider
            value={{
                userId,
                role,
                isAuthenticated,
                login,
                logout,
                picture,
                loading
            }}>
            {children}
        </AuthContext.Provider>
    )
}