import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";
import { Job } from "@/types";
import dayjs from "dayjs";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import relativeTime from "dayjs/plugin/relativeTime";
import { formatSubscribers } from "@/utils/utils";
import CardWrapper from "./card-wrapper";
import { workLocationIcons } from "@/constant/icons";

dayjs.extend(relativeTime);

export default function JobCard({
    job
}: {
    job: Job
}) {

    return (
        <CardWrapper>
            <div className="relative p-6 space-y-4">
                {/* Header with YouTuber info */}
                <div className="flex items-center space-x-3 card-title">
                    {
                        job.poster?.picture
                            ?
                            <Image src={job.poster.picture} alt="user" height={50} width={50} className="rounded-full" />
                            :
                            <CircleUserRound size={30} />
                    }
                    <div>
                        <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold text-background">{job.poster?.youtuberProfile.channelName}</h3>
                            <span>•</span>
                            <p className={`text-sm text-gray-400 ${spaceGroteskMedium.className}`}>
                                {formatSubscribers(job.poster?.youtuberProfile.subscribers)} subs
                            </p>
                        </div>
                        {/* Job Posted Date */}
                        <p className="text-xs text-gray-400">
                            {dayjs(job.createdAt).fromNow()}
                        </p>
                    </div>
                </div>

                {/* Job Title */}
                <h2 className={`${bricolageGrotesqueBold.className} text-2xl  text-background group-hover:text-primary transition-colors`}>
                    {job.title}
                </h2>

                {/* Job Details */}
                <div className={`space-y-2 ${spaceGroteskMedium.className}`}>
                    <div className="flex items-center text-gray-600">
                        <span className="mr-2">💰</span>
                        <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <span className="mr-2">{workLocationIcons[job.workLocation]}</span>
                        <span>{job.workLocation.charAt(0) + job.workLocation.slice(1).toLowerCase()}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <span className="mr-2">⏰</span>
                        <span>{job.workType.split('_').map(word =>
                            word.charAt(0) + word.slice(1).toLowerCase()
                        ).join(' ')}</span>
                    </div>
                </div>
            </div>
        </CardWrapper>
    )
}