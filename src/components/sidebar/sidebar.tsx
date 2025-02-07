'use client';

import { PoppinsRegular, spaceGroteskBold } from "@/fonts";
import { useAuth } from "@/hooks/useAuth";
import { Briefcase, CircleUserRound, Home, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { icon: Home, text: "Home", href: "/home" },
    { icon: LayoutGrid, text: "Discover", href: "/discover" },
    { icon: Briefcase, text: "My Jobs", href: "/jobs" },
]


export default function Sidebar() {

    const { isAuthenticated, picture } = useAuth();
    const pathname = usePathname();

    return isAuthenticated &&
        <nav className="fixed left-2 bg-text top-[calc(4rem+2rem)] bottom-5 flex flex-col justify-between w-20 rounded-md py-8">
            <div className="flex justify-center items-center">
                <span className={`text-5xl text-primary select-none ${spaceGroteskBold.className}`}>c</span>
            </div>
            <div className="flex flex-col items-center space-y-10">
                {navItems.map((item, i) => {
                    const active = pathname === item.href;
                    return (
                        <Link key={i} href={item.href} className={`group ${active && "pointer-events-none"}`}>
                            <div className="flex flex-col items-center">
                                <item.icon size={30} className={`${active ? "text-primary" : "group-hover:text-primary"} transition-colors`} />
                                <span className={`text-sm ${active ? "text-primary" : "group-hover:text-primary"} transition-colors ${PoppinsRegular.className}`}>{item.text}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="flex justify-center items-center">
                <Link href={"/profile"}>
                    <div className="flex flex-col items-center">
                        {
                            picture
                            ?
                            <Image src={picture} alt="user" height={40} width={40} className="rounded-full" />
                            :
                            <CircleUserRound
                                size={30}
                                className={`${pathname === "/profile" ? "text-primary" : "text-gray-400 group-hover:text-primary"} transition-colors`} 
                                />
                            }
                    </div>
                </Link>
            </div>
        </nav>
}