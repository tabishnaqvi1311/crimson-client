import { CircleUserRound } from "lucide-react";
import CardWrapper from "./card-wrapper";
import Image from "next/image";
import Link from "next/link";
import { spaceGroteskMedium } from "@/fonts";
import { User } from "@/types";

export default function TalentProfileCard({
    talent
}: { talent: User }) {
    return (
        <CardWrapper>
            <div className="relative p-6 space-y-4">
                <Link key={talent.id} className="mt-4" href={`/profile/${talent.id}/TALENT`}>
                    <div className={`${spaceGroteskMedium.className} flex items-center gap-4`}>
                        {talent.picture
                            ?
                            <Image src={talent.picture} alt="user" height={40} width={40} className="rounded-full" />
                            :
                            <CircleUserRound size={30} />
                        }
                        <p className="text-lg text-accent">{talent.name}</p>
                    </div>
                </Link>
            </div>
        </CardWrapper>
    )
}