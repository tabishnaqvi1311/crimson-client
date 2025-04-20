import apiUrl from "@/constant/config";
import { AuthContextType } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [picture, setPicture] = useState<string | null | undefined>(null);
    const [hasVerified, setHasVerified] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();

    const verify = () => {
        setHasVerified(true);
    };

    const logout = useCallback(async () => {
        setLoading(true);
        try {
            await fetch(`${apiUrl}/auth/logout`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.log(error);
        } finally {
            setUserId(null);
            setRole(null);
            setPicture(null);
            setIsAuthenticated(false);
            setHasVerified(false);
            setLoading(false);
            router.replace("/");
        }
    }, [router]);

    const checkAuth = useCallback(async () => {
        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/auth/me`, {
                credentials: 'include', headers: { 'Content-Type': 'application/json' }
            });
            const user = await res.json();
            if (!res.ok || !user?.userId || !['TALENT', 'YOUTUBER'].includes(user.role)) {
                return;
            }
            setUserId(user.userId);
            setRole(user.role);
            setPicture(user.picture);
            setHasVerified(!!user.isVerified);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Error checking auth", error);
            toast.error("Signin Failed. Please try again.");
            setUserId(null);
            setRole(null);
            setPicture(null);
            setHasVerified(false);
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    }, []);

    const login = useCallback(async () => {
        await checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

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
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
