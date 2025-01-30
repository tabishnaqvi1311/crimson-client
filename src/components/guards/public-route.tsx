'use client';

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingSpinner from "../loading";

export default function PublicRoute({children}: {children: React.ReactNode}){

    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (!loading && isAuthenticated) {
        router.push('/jobs');
      }
    }, [isAuthenticated, loading, router]);
  
    if (loading) {
      return <LoadingSpinner/>;
    }
  
    return !isAuthenticated && <>{children}</>;
}