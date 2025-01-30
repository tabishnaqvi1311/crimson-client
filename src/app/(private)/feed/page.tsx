'use client';

import PrivateRoute from "@/components/guards/private-route";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {

    const { role } = useAuth();

    return (
        <PrivateRoute>
            <main>
                logged in as {role}
            </main>
        </PrivateRoute>
    )
}