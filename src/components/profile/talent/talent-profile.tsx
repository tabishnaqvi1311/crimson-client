import { Talent } from "@/types/User";
import UserDataCard from "../user-data-card";
import { workLocationIcons } from "@/constant/icons";
import { useAuth } from "@/hooks/useAuth";

export default function TalentProfile({
    user
}: { user: Talent }) {

    const { userId } = useAuth();

    return (
        <div className="mt-[16rem] w-[98%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <UserDataCard
                title="About"
                data={user.talentProfile?.about}
                icon="👋"
                me={user.id === userId}
            />
            <UserDataCard
                title="Preferred Work Location"
                data={user.talentProfile?.workLocation.charAt(0) as string + user.talentProfile?.workLocation.slice(1).toLowerCase()}
                icon={user.talentProfile?.workLocation ? workLocationIcons[user.talentProfile?.workLocation] : null}
                me={user.id === userId}
            />
            <UserDataCard
                title="Preferred Work Type"
                data={user.talentProfile?.workType.split('_').map(word =>
                    word.charAt(0) + word.slice(1).toLowerCase()
                ).join(' ')}
                icon="⏰"
                me={user.id === userId}
            />
        </div>
    )
}