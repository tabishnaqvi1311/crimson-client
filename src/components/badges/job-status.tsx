import { spaceGroteskMedium } from "@/fonts";

type JobStatusProps = {
    status: "OPEN" | "CLOSED" | "DRAFT" | "EXPIRED";
}

export default function JobStatus({
    status
}: JobStatusProps
) {
    return (
        <span className={`${spaceGroteskMedium.className} inline-block px-2 py-1 rounded-md text-sm font-medium text-background mb-4 `}>
            {status === "OPEN" ? <span className="text-background bg-emerald-200 px-2 rounded-md py-1">Open</span>
                : status === "CLOSED" ? <span className="text-background bg-red-200 px-2 rounded-md py-1">Closed</span>
                    : status === "DRAFT" ? <span className="text-background bg-yellow-200 px-2 rounded-md py-1">Draft</span>
                        : <span className="text-background bg-red-200 px-2 rounded-md py-1">Expired</span>}
        </span>
    )
}