import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";
import ProfileLink from "../../sidebar/profile-link";
import { Talent } from "@/types/User";

type TalentProfileHeaderProps = {
    user: Talent,
    role: string | null,
}

export default function TalentProfileHeader({
    user,
    role
}: TalentProfileHeaderProps) {
    return (
        <div className="rounded-lg w-[90%] absolute">
            <div className="diagonal-div rounded-t-lg" />
            <div className="bg-text rounded-b-lg flex justify-between items-center">
                <div className="flex">
                    <div className="relative -top-12 md:left-10 left-4 h-[100px]">
                        <ProfileLink
                            picture={user.picture}
                            pathname="/profile"
                            h={120}
                            w={120}
                            size={130}
                        />
                    </div>
                    <div className="ml-12 mt-4 flex flex-col">
                        <div className={` ${bricolageGrotesqueBold.className} text-background md:text-2xl text-xl flex items-center gap-2 hover:text-secondary`}>{
                            user.name 
                        } </div>
                        <span className={`${spaceGroteskMedium.className}`}>{role}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}