import { CircleUserRound } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfileLink({ picture, pathname, h=40, w=40 }: {
    picture: string | null | undefined,
    pathname: string,
    h?: number,
    w?: number
}) {
    return (
        <Link href={"/profile"}>
            <div className="flex flex-col items-center">
                {
                    picture
                        ?
                        <Image src={picture} alt="user" height={h} width={w} className="rounded-full" />
                        :
                        <CircleUserRound
                            size={30}
                            className={`${pathname === "/profile" ? "text-primary" : "text-gray-400 group-hover:text-primary"} transition-colors`}
                        />
                }
            </div>
        </Link>
    )
}