'use client'

import { useAuth } from "@/hooks/useAuth"
import { Space_Grotesk } from "next/font/google"
import Link from "next/link"
import UserButton from "./buttons/user-button"

const spaceGroteskRegular = Space_Grotesk({ subsets: ['latin'], weight: "500" })

export default function Navbar() {

    const { isAuthenticated, loading } = useAuth();

    return (
        <>
            <div className={`navbar px-7 py-4 ${spaceGroteskRegular.className} border-b-2 border-gray-700`}>
                <div className="flex-1">
                    <Link href="/" className={`text-4xl text-primary select-none`}>crimson</Link>
                </div>
                <div className="flex-0">
                    {
                        isAuthenticated && !loading && <UserButton/>
                    }
                    {
                        !isAuthenticated && !loading && (
                            <ul className="menu menu-horizontal px-1">
                                <Link href="/signin" className="btn btn-sm text-text btn-ghost px-4 hover:bg-text hover:text-background no-underline> text-base">Sign In</Link>
                            </ul>
                        )
                    }
                </div>
            </div>
        </>
    )
}