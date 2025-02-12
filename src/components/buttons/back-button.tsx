'use client';

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {

    const router = useRouter();

    return (
        <div>
            <button
                className="btn btn-circle btn-neutral group"
                onClick={() => router.back()}>
                    <ChevronLeft size={25} className="text-text group-hover:text-primary transition-all duration-150"/>
            </button>
        </div>
    )
}