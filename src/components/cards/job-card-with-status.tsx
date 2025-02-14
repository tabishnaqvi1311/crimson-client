import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";
import { JobWithStatus } from "@/types";
import { Clock, DollarSign, MapPin } from "lucide-react";
import { process } from "@/utils/utils";
import CardWrapper from "./card-wrapper";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";


dayjs.extend(relativeTime);
export default function JobCardWithStatus({
    job
}: {
    job: JobWithStatus
}
) {

    return (
        <CardWrapper>
            <div className="relative p-6 space-y-4">
                {/* Job Title */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className={`${bricolageGrotesqueBold.className} text-2xl  text-background group-hover:text-primary transition-colors`}>
                            {job.title}
                        </h2>
                        <span className={`${spaceGroteskMedium.className} text-sm`}>{dayjs(job.createdAt).fromNow()}</span>
                    </div>
                    <span className={`${spaceGroteskMedium.className} text-sm`}>
                        {job.status === "OPEN" ? <span className="text-background bg-emerald-200 px-2 rounded-md py-1">Open</span>
                            : job.status === "CLOSED" ? <span className="text-background bg-red-200 px-2 rounded-md py-1">Closed</span>
                                : job.status === "DRAFT" ? <span className="text-background bg-yellow-200 px-2 rounded-md py-1">Draft</span>
                                    : <span className="text-background bg-red-200 px-2 rounded-md py-1">Expired</span>}
                    </span>
                </div>

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