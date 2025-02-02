import PrivateRoute from "@/components/guards/private-route";
import Profile from "@/components/profile/profile";

export default function Page() {
    return (
        <PrivateRoute>
            <Profile/>
        </PrivateRoute>
    )
}