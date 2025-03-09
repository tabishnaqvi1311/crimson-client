import { CircleUserRound } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfileLink({ picture, pathname, h = 40, w = 40, size = 30 }: {
    picture: string | null | undefined,
    pathname: string,
    h?: number,
    w?: number
    size?: number
}) {
    return (
        <Link href={"/profile"}>
            <div className="flex flex-col items-center select-none">
                {
                    picture
                        ?
                        <Image src={picture} alt="user" height={h} width={w} className="rounded-full border-4 border-text" />
                        :
                        <CircleUserRound
                            size={size}
                            className={`${pathname === "/profile" ? "text-primary" : "text-gray-400 group-hover:text-primary "} transition-colors bg-text rounded-full`}
                        />
                }
            </div>
        </Link>
    )
}