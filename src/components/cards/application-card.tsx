import { Application } from "@/types";
import CardWrapper from "./card-wrapper";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { bricolageGrotesqueBold } from "@/fonts";
import ApplicationStatus from "../badges/application-status";

dayjs.extend(relativeTime);

export default function ApplicationCard({
    application
}: { application: Application }) {
    return (
        <CardWrapper>
            <div className="relative p-6 space-y-4">
                <div className="flex items-center space-x-3 card-title">
                    {
                        application.job.poster?.picture
                            ?
                            <Image src={application.job.poster.picture} alt="user" height={50} width={50} className="rounded-full" />
                            :
                            <CircleUserRound size={30} />
                    }
                    <div>
                        <div className="flex items-center space-x-2">
                            <Link href={`/profile/${application.job.poster?.id}/YOUTUBER`} className="text-lg font-bold text-background hover:text-secondary">{application.job.poster.name}</Link>
                        </div>

                    </div>
                </div>

                <h2 className={`${bricolageGrotesqueBold.className} text-2xl  text-background group-hover:text-primary transition-colors`}>
                    {application.job.title}
                </h2>
                <div className="flex items-center justify-start">
                    <ApplicationStatus status={application.status} />
                    {/* Job Posted Date */}
                    <p className="text-xs text-gray-400">
                        {dayjs(application.createdAt).fromNow()}
                    </p>
                </div>
            </div>
        </CardWrapper>
    )
}