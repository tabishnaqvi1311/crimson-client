import { spaceGroteskMedium } from "@/fonts";

type ApplicationStatusProps = {
    status: "PENDING" | "ACCEPTED" | "REJECTED" | "DRAFT";
}

export default function ApplicationStatus({
    status
}: ApplicationStatusProps) {
    return (
        <span className={`${spaceGroteskMedium.className} inline-block px-2 py-1 rounded-md text-sm font-medium text-background`}>
            {status === "ACCEPTED" ? <span className="text-background bg-emerald-200 px-2 rounded-md py-1">Open</span>
                : status === "REJECTED" ? <span className="text-background bg-red-200 px-2 rounded-md py-1">Closed</span>
                    : status === "PENDING" ? <span className="text-background bg-yellow-200 px-2 rounded-md py-1">Pending</span>
                        : <span className="text-background bg-red-200 px-2 rounded-md py-1">Expired</span>}
        </span>
    )
}