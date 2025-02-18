import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";
import { Job } from "@/types";
import CardWrapper from "./card-wrapper";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import JobStatus from "../badges/job-status";
import { workLocationIcons } from "@/constant/icons";


dayjs.extend(relativeTime);
export default function JobCardWithStatus({
    job
}: {
    job: Job
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
                    <JobStatus status={job.status}/>
                </div>

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