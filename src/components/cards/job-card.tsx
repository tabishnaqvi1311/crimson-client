import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";
import { Job } from "@/types";
import dayjs from "dayjs";
import { Clock, DollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import relativeTime from "dayjs/plugin/relativeTime";
import { formatSubscribers, process } from "@/utils/utils";
import CardWrapper from "./card-wrapper";

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
                    <Image
                        src={job.poster.picture}
                        alt={job.poster.name}
                        height={50}
                        width={50}
                        className="rounded-full border-2"
                    />
                    <div>
                        <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold text-background">{job.poster.youtuberProfile.channelName}</h3>
                            <span>•</span>
                            <p className={`text-sm text-gray-400 ${spaceGroteskMedium.className}`}>
                                {formatSubscribers(job.poster.youtuberProfile.subscribers)} subs
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
                    <div className="flex items-center space-x-2 text-black">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-black">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{job.workLocation[0].toUpperCase() + job.workLocation.slice(1).toLowerCase()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-black">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{process(job.workType)}</span>
                    </div>
                </div>
            </div>
        </CardWrapper>
    )
}