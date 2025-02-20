import { Job } from "@/types"
import DrawerCloseButton from "../buttons/drawer-close-button"
import { bricolageGrotesqueBold, spaceGroteskMedium, spaceGroteskRegular } from "@/fonts"
import dayjs from "dayjs"
import { workLocationIcons } from "@/constant/icons"
import { useAuth } from "@/hooks/useAuth"
import JobStatus from "../badges/job-status"
import relativeTime from "dayjs/plugin/relativeTime"
import apiUrl from "@/constant/config"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Trash2 } from "lucide-react"

// salary: string;
// workLocation: "REMOTE" | "ONSITE" | "HYBRID";
// status: "OPEN" | "CLOSED" | "DRAFT" | "EXPIRED";
// workType: "FULL_TIME" | "PART_TIME" | "PROJECT_BASED";
// createdAt: string;

dayjs.extend(relativeTime)

export default function JobDrawer({
    job,
    children
}: {
    job: Job,
    children: React.ReactNode
}) {


    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);


    const { role } = useAuth();
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const response = await fetch(`${apiUrl}/job/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("crimson-token")}`
                },
            });
            if (!response.ok) throw new Error("Failed to delete job");
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['my-jobs'] });
            setChecked(false);
        },
        onError: (error) => {
            console.log(error);
        }
    })

    const handleDelete = async () => {
        setIsDeleting(true);
        deleteMutation.mutate(job.id, {
            onSettled: () => setIsDeleting(false)
        })
    }

    return (
        <div className="relative">
            <input
                id={job.id}
                type="checkbox"
                className="peer hidden"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <div className="drawer-content">
                <label htmlFor={job.id} className="cursor-pointer">
                    {children}
                </label>
            </div>

            {/* Overlay */}
            <label
                htmlFor={job.id}
                className="fixed inset-0 bg-black/50 opacity-0 peer-checked:opacity-100 invisible peer-checked:visible transition-all duration-300 z-40"
                aria-label="close sidebar"
            />

            {/* Drawer */}
            <div className="fixed top-0 bottom-0 right-0 w-96 bg-white shadow-2xl translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out z-50 overflow-y-scroll">
                <div className="relative h-full p-6">
                    <DrawerCloseButton id={job.id} />
                    <div className="absolute right-12 top-4">  {/* Positions it next to close button */}
                        {role !== "TALENT" && (
                            <button
                                onClick={handleDelete}
                                disabled={deleteMutation.isPending || isDeleting}
                                className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50"
                                title="Delete Job"
                            >
                                <Trash2 size={18} />
                            </button>
                        )}
                    </div>
                    {/* Content */}
                    <div className="mt-8">
                        <JobStatus status={job.status} />
                        <h1 className={`${bricolageGrotesqueBold.className} text-2xl text-background mb-4`}>{job.title}</h1>
                        <div className={`space-y-3 mb-6 ${spaceGroteskRegular.className}`}>
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
                            <div className="flex items-center text-gray-600">
                                <span className="mr-2">📅</span>
                                <span>Posted {dayjs(job.createdAt).fromNow()}</span>
                            </div>
                        </div>
                        <p className={`text-gray-600 leading-relaxed mb-8 ${spaceGroteskMedium.className}`}>{job.description} </p>
                        {
                            role === "TALENT" ?
                                <button className="button-primary w-full border-none">
                                    Apply Now
                                    {/* add functionality to apply */}
                                </button>
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}