import { spaceGroteskMedium } from "@/fonts";
import { Job } from "@/types";
import { ChevronDown } from "lucide-react";

export default function EditStatusField({
    editedJob,
    setEditedJob
}: {
    editedJob: Job;
    setEditedJob: React.Dispatch<React.SetStateAction<Job>>;
}){
    return (
        <div className="dropdown flex mb-4" data-theme="light">
        <label
            tabIndex={0}
            className={`${spaceGroteskMedium.className} px-2 py-1 text-sm`}
        >
            {editedJob.status === "OPEN" ? (
                <span className="text-background bg-emerald-200 px-2 rounded-md py-1 flex items-center gap-2">
                    Open <ChevronDown size={18}/>
                </span>
            ) : editedJob.status === "CLOSED" ? (
                <span className="text-background bg-red-200 px-2 rounded-md py-1 flex items-center gap-2">
                    Closed <ChevronDown size={18}/>
                </span>
            ) : editedJob.status === "DRAFT" ? (
                <span className="text-background bg-yellow-200 px-2 rounded-md py-1 flex items-center gap-2">
                    Draft <ChevronDown size={18}/>
                </span>
            ) : (
                <span className="text-background bg-red-200 px-2 rounded-md py-1 flex items-center gap-2">
                    Expired <ChevronDown size={18}/>
                </span>
            )}
        </label>
        <ul
            tabIndex={0}
            className="dropdown-content menu p-2 bg-base-200 rounded-box w-52 top-10 z-10 shadow-lg"
        >
            <li
                onClick={() =>
                    setEditedJob({ ...editedJob, status: "OPEN" })
                }
            >
                <a>
                    <span className="text-background bg-emerald-200 px-2 rounded-md py-1">
                        Open
                    </span>
                </a>
            </li>
            <li
                onClick={() =>
                    setEditedJob({ ...editedJob, status: "CLOSED" })
                }
            >
                <a>
                    <span className="text-background bg-red-200 px-2 rounded-md py-1">
                        Closed
                    </span>
                </a>
            </li>
            <li
                onClick={() =>
                    setEditedJob({ ...editedJob, status: "DRAFT" })
                }
            >
                <a>
                    <span className="text-background bg-yellow-200 px-2 rounded-md py-1">
                        Draft
                    </span>
                </a>
            </li>
            <li
                onClick={() =>
                    setEditedJob({ ...editedJob, status: "EXPIRED" })
                }
            >
                <a>
                    <span className="text-background bg-red-200 px-2 rounded-md py-1">
                        Expired
                    </span>
                </a>
            </li>
        </ul>
    </div>
    )
}