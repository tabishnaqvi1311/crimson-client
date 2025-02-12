import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";
import { Job } from "@/types";
import dayjs from "dayjs";
import { Clock, DollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import relativeTime from "dayjs/plugin/relativeTime";

export default function JobCard({
    job
}: {
    job: Job
}) {


    dayjs.extend(relativeTime);

    const formatSubscribers = (count: number) => {
        if (count >= 1000000) {
            return `${(count / 1000000).toFixed(1)}M`;
        }
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}K`;
        }
        return count.toString();
    };

    const process = (workType: string) => {
        switch (workType) {
            case "FULL_TIME":
                return "Full Time";
            case "PART_TIME":
                return "Part Time";
            case "PROJECT_BASED":
                return "Project Based";
            default:
                return "Full Time";
        }
    }

    return (
        <div className="card bg-text border-2 border-gray-700 hover:border-primary transition-all duration-300">
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
        </div>
    )
}