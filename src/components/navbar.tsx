import { Space_Grotesk } from "next/font/google"
import Link from "next/link"

const spaceGroteskRegular = Space_Grotesk({ subsets: ['latin'], weight: "500"})

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="flex-1">
                <Link href="/" className={`btn btn-ghost text-4xl text-primary ${spaceGroteskRegular.className}`}>Crimson</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Login</a></li>
                    <li><a>Signup</a></li>
                </ul>
            </div>
        </div>
    )
}