import PrivateRoute from "@/components/guards/private-route";
import UserProfile from "@/components/profile/user-profile";

export default function Page(){
    return (
        <PrivateRoute>
            <UserProfile />
        </PrivateRoute>
    )
}