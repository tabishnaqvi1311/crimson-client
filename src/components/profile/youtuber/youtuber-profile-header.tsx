import { bricolageGrotesqueBold, spaceGroteskBold, spaceGroteskMedium } from "@/fonts";
import ProfileLink from "../../sidebar/profile-link";
import { Youtuber } from "@/types/User";
import apiUrl from "@/constant/config";
import { Link } from "lucide-react";

type YoutuberProfileHeaderProps = {
    actualUser: string | null
    user: Youtuber,
    role: string | null,
}

function handleRedirect() {
    window.location.href = `${apiUrl}/v/verify-youtuber?token=${localStorage.getItem("crimson-token")}`;
}

export default function YoutuberProfileHeader({
    actualUser,
    user,
    role
}: YoutuberProfileHeaderProps) {
    return (
        <div className="rounded-lg w-[90%] absolute">
            <div className="diagonal-div rounded-t-lg" />
            <div className="bg-text rounded-b-lg flex md:flex-row flex-col items-center justify-between">
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
                        <a className={` ${bricolageGrotesqueBold.className} md:text-2xl text-lg flex items-center gap-2 text-secondary`} href={
                            user.youtuberProfile !== null ? "https://www.youtube.com/" + user.youtuberProfile?.youtubeUsername : "#"
                        } target="_blank" rel="noreferrer noopener">{
                            user.youtuberProfile === null
                                ? user.name : 
                                user.youtuberProfile?.channelName 
                        } <Link size={20} className={`${user.youtuberProfile === null && "hidden"}`}/></a>
                        <span className={`${spaceGroteskMedium.className}`}>{role}</span>
                    </div>
                </div>
                {
                    user.youtuberProfile !== null ?
                        <div className="flex mr-7 space-x-10 md:mb-0 mb-4">
                            <div className="flex flex-col items-center">
                                <span className={`${spaceGroteskBold.className} text-2xl text-gray-800`}>{user.youtuberProfile?.subscribers}</span>
                                <span className={`${spaceGroteskMedium.className} text-sm text-gray-500`}>Subs</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className={`${spaceGroteskBold.className} text-2xl text-gray-800`}>{user.youtuberProfile?.videos}</span>
                                <span className={`${spaceGroteskMedium.className} text-sm text-gray-500`}>Videos</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className={`${spaceGroteskBold.className} text-2xl text-gray-800`}>{user.youtuberProfile?.views}</span>
                                <span className={`${spaceGroteskMedium.className} text-sm text-gray-500`}>Views</span>
                            </div>
                        </div>
                        :
                        null
                }
                {actualUser === user.id && user.youtuberProfile === null &&
                    <button className="button-secondary mr-10 border-none" onClick={handleRedirect}>
                        Verify
                    </button>
                }
            </div>
        </div>
    )
}