import { AuthContextType, TokenPayloadType } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useEffect, useState, } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [picture, setPicture] = useState<string | null | undefined>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [hasVerified, setHasVerified] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();
    const pathname = usePathname();

    const verify = (() => {
        setHasVerified(true);
    })

    const logout = useCallback(() => {
        localStorage.removeItem("crimson-token");
        setUserId(null);
        setRole(null);
        setPicture(null);
        setIsAuthenticated(false);
        setHasVerified(false);
        setLoading(false);
        router.push("/");
    }, [router])

    const checkAuth = useCallback(() => {
        const generalPages = ["/terms", "/privacy", "/refund"];
        if (generalPages.includes(pathname)) return;

        const token = localStorage.getItem("crimson-token");

        if (!token) {
            if(pathname === "/signin") {
                setLoading(false);
                return;
            } // if user is not logged in and is on signin page, do nothing
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

        if(payload.role === "YOUTUBER") {
            if(!payload.isVerified) setHasVerified(false);
            else setHasVerified(true);
        }

        setUserId(payload.userId);
        setRole(payload.role)
        setPicture(payload.picture);
        setIsAuthenticated(true);
        setLoading(false);
    }, [logout, pathname])

    const login = useCallback((token: string) => {
        localStorage.setItem("crimson-token", token);
        checkAuth();
        router.push("/discover?show=true");
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
                hasVerified,
                verify,
                loading
            }}>
            {children}
        </AuthContext.Provider>
    )
}