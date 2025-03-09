import { PoppinsSemiBold, spaceGroteskMedium } from "@/fonts"

type UserDataCardProps = {
    title: string
    data: string | string[] | undefined | null
    icon: string | React.ReactNode
    me?: boolean
}

export default function UserDataCard({
    title,
    data,
    icon,
    me = false
}: UserDataCardProps) {
    return (
        <div className=" flex items-center gap-4 ml-2">
            <div className={`flex flex-col ${data == null ? "bg-background hover:bg-white cursor-pointer items-center border border-gray-500" : "bg-text"} rounded-lg p-6 items-start gap-4 justify-evenly md:w-96 w-[92%] min-h-40 transition-all duration-150 group transform active:scale-100  hover:scale-105`}>
                <div className={`${data == null 
                    ? "flex flex-col items-center w-full gap-2 " 
                    : "flex items-start gap-4 w-full"}`}>
                    <span className="text-xl">{icon}</span>
                    <h3 className={`${data == null ? "text-text" : "text-background"} ${PoppinsSemiBold.className} text-lg group-hover:text-primary `}>{title}</h3>
                </div>
                {data == null ?
                    me && <span className="text-gray-300 group-hover:text-gray-600">+ add</span> : 
                    <p className={`text-gray-600  ${spaceGroteskMedium.className}`}>{data}</p>
                }
            </div>
        </div>
    )
}