import { Youtuber } from "@/types/User";
import UserDataCard from "../user-data-card";
import { useAuth } from "@/hooks/useAuth";

export default function YoutuberProfile({
    user
}: { user: Youtuber }) {

    const { userId } = useAuth();

    return (
        <div className="md:mt-[16rem] mt-[20rem]">
            <UserDataCard 
                title="About" 
                data={user.youtuberProfile?.about} 
                icon="👋"
                me={user.id === userId}
             />
        </div>
    )
}