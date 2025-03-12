import { Youtuber } from "@/types/User";
import UserDataCard from "../user-data-card";
import { useAuth } from "@/hooks/useAuth";
import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";
import { Job } from "@/types";
import JobDrawer from "@/components/drawer/job-drawer";
import JobCardWithStatus from "@/components/cards/job-card-with-status";
import Link from "next/link";

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
            <div className="w-[95%] flex justify-between items-center mt-6">
                <h1 className={`${bricolageGrotesqueBold.className} text-xl  `}>Recently Posted Jobs</h1>
                {/* TODO: redirect talent to filtered jobs page */}
                {user.id === userId && <Link href={"/jobs"} className={`${spaceGroteskMedium.className} text-primary`}>View all &rarr;</Link>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 w-[95%]">{
                user.postedJobs && user.postedJobs.map((job: Job) => (
                    <JobDrawer key={job.id} job={job}>
                        <JobCardWithStatus job={job} />
                    </JobDrawer>
                ))}
            </div>

        </div>
    )
}