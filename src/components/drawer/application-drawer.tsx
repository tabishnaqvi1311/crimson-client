import { Application } from "@/types"
import { useState } from "react";
import DrawerCloseButton from "../buttons/drawer-close-button";
import { useAuth } from "@/hooks/useAuth";
import { bricolageGrotesqueBold, spaceGroteskRegular } from "@/fonts";

type ApplicationDrawerProps = {
    application: Application;
    children: React.ReactNode
}

export default function ApplicationDrawer({
    application,
    children
}: ApplicationDrawerProps) {

    const { role } = useAuth();

    const [checked, setChecked] = useState<boolean>(false);
    // const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <div className="relative">
            <input
                id={application.id}
                type="checkbox"
                className="peer hidden"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <div className="drawer-content">
                <label htmlFor={application.id} className="cursor-pointer">
                    {children}
                </label>
            </div>

            {/* Overlay */}
            <label
                htmlFor={application.id}
                className="fixed inset-0 bg-black/50 opacity-0 peer-checked:opacity-100 invisible peer-checked:visible transition-all duration-300 z-40"
                aria-label="close sidebar"
            />

            {/* Drawer */}
            <div className="fixed top-0 bottom-0 right-0 w-96 bg-white shadow-2xl translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out z-50 overflow-y-scroll">
                <div className="relative h-full p-6">
                    <DrawerCloseButton id={application.id} />
                    {
                        role === "YOUTUBER" && (
                            <>
                                youtuber sees this
                            </>
                        )
                    }

                    {/* Content */}
                    <div className="mt-8">
                        {/* {isEditing ? (
                            <EditStatusField
                                editedJob={editedJob}
                                setEditedJob={setEditedJob}
                            />
                        ) : (
                            <JobStatus status={editedJob.status} />
                        )} */}

                        <h1 className={`${bricolageGrotesqueBold.className} text-2xl text-background mb-4`}>{application.job.title}</h1>
                        <p className={`${spaceGroteskRegular.className} text-gray-600 mb-4`}>{application.coverLetter}</p>
                        {/* {
                            isEditing ? (
                                <textarea
                                    value={editedJob.description}
                                    onChange={(e) => setEditedJob({ ...editedJob, description: e.target.value })}
                                    className={`textarea input-bordered rounded-md w-full leading-relaxed text-gray-600 ${spaceGroteskMedium.className}`}
                                    data-theme="light"
                                    rows={10}
                                />
                            ) :
                                <p className={`text-gray-600 leading-relaxed mb-8 whitespace-pre-line ${spaceGroteskMedium.className}`}>
                                    {editedJob.description}
                                </p>
                        } */}
                        {/* {
                            role === "TALENT" ?
                                <Apply
                                    jobId={job.id}
                                    applied={
                                        job.applications?.length !== undefined
                                        && job.applications?.length > 0
                                    }
                                />
                                :
                                isEditing &&
                                (
                                    <div className="flex gap-2 mt-4">
                                        <button
                                            className="button-primary border-none"
                                            onClick={handleUpdate}
                                            disabled={updateMutation.isPending}>
                                            {updateMutation.isPending ?
                                                <span className="loading loading-spinner text-text" /> :
                                                'Save'}
                                        </button>
                                        <button className="btn btn-link text-background"
                                            onClick={handleCancel}
                                            disabled={updateMutation.isPending}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )
                        } */}
                    </div>
                </div>
            </div>
        </div>
    )
}