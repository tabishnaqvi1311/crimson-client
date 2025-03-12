import apiUrl from "@/constant/config";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../loading";
import ProfileLink from "../sidebar/profile-link";
import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";
import { useAuth } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";
import DeleteAccountModal from "../modal/delete-account-modal";

function handleRedirect() {
    window.location.href = `${apiUrl}/v/verify-youtuber?token=${localStorage.getItem("crimson-token")}`;
}

export default function Account() {

    const { role, logout } = useAuth();

    const query = useQuery({
        queryKey: ["user-profile"],
        queryFn: async () => {
            const response = await fetch(`${apiUrl}/users/me`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("crimson-token")}`
                }
            });
            if (!response.ok) throw new Error("failed to fetch user profile");
            const json = await response.json();
            return json;
        }
    })

    if (query.status === "pending") return <LoadingSpinner />

    if (query.status === "error") return <p className="text-primary text-center">
        An error has occurred
    </p>

    return (
        <div className="flex flex-col justify-start items-start gap-4">
            <ProfileLink
                picture={query.data.user.picture}
                pathname="/profile"
                h={120}
                w={120}
                size={130}
            />
            <div>
                <h1 className={`${spaceGroteskMedium.className}`}>Name</h1>
                <p className={`${bricolageGrotesqueBold.className} text-xl text-text`}>{query.data.user.name}</p>
            </div>
            <div>
                <h1 className={`${spaceGroteskMedium.className}`}>Role</h1>
                <p className={`${bricolageGrotesqueBold.className} text-xl text-text`}>{
                    role?.charAt(0) as string
                    + role?.slice(1).toLowerCase() as string
                }</p>
            </div>

            <div>
                <h1 className={`${spaceGroteskMedium.className}`}>Email (Only visible to you)</h1>
                <p className={`${bricolageGrotesqueBold.className} text-xl text-text`}>{
                    query.data.user.email
                }</p>
            </div>

            {role === "YOUTUBER" && <div>
                <h1 className={`${spaceGroteskMedium.className}`}>Verification Status</h1>
                <p className={`${bricolageGrotesqueBold.className} text-xl text-text`}>{
                    query.data.user.youtuberProfile == null ?
                        <button className="button-secondary mr-10 border-none" onClick={handleRedirect}>Verify</button> :
                        <span className="text-green-300">Verified</span>
                }</p>
            </div>}

            <hr className="w-full"/>

            <h1 className={`${bricolageGrotesqueBold.className} text-lg text-primary`}>Danger</h1>

            <button 
                className="flex gap-2 items-center btn btn-ghost hover:bg-primary"
                onClick={logout} 
            >
                <LogOut size={15}/> Logout
            </button>
            <DeleteAccountModal/>
        </div>
    )
}