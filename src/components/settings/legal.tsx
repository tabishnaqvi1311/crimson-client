import { spaceGroteskMedium } from "@/fonts";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

export default function Legal() {
    return (

        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <Link href="/terms" className={`${spaceGroteskMedium.className} text-lg hover:text-text`}>Terms of Service</Link>
                <LinkIcon size={15} />
            </div>
            <div className="flex items-center gap-2">
                <Link href="/privacy" className={`${spaceGroteskMedium.className} text-lg hover:text-text`}>Privacy Policy</Link>
                <LinkIcon size={15} />
            </div>
            <div className="flex items-center gap-2">
                <Link href="/google-api-disclosure" className={`${spaceGroteskMedium.className} text-lg hover:text-text`}>Google API Disclosure</Link>
                <LinkIcon size={15} />
            </div>
        </div>

    )
}