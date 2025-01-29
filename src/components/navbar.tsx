import { Space_Grotesk } from "next/font/google"
import Link from "next/link"

const spaceGroteskRegular = Space_Grotesk({ subsets: ['latin'], weight: "500"})

export default function Navbar() {
    return (
        <div className={`navbar ${spaceGroteskRegular.className}`}>
            <div className="flex-1">
                <Link href="/" className={`btn btn-ghost text-4xl text-primary`}>Crimson</Link>
            </div>
            <div className="flex-0">
                <ul className="menu menu-horizontal px-1">
                    <Link href="/signin" className="btn btn-link text-text btn-ghost px-7 hover:bg-[#ffc1cd] hover:text-background no-underline hover:no-underline>">Sign In</Link>
                </ul>
            </div>
        </div>
    )
}