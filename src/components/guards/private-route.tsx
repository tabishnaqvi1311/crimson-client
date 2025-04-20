'use client';

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingSpinner from "../loading";

export default function PrivateRoute({ children }: { children: React.ReactNode }) {

    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
          router.replace(`/signin`); 
        }
      }, [isAuthenticated, loading, router]);

    if (loading) return <LoadingSpinner />;

    return isAuthenticated && <>{children}</>;
}