'use client';

import { PoppinsRegular, spaceGroteskBold } from "@/fonts";
import { useAuth } from "@/hooks/useAuth";
import { Briefcase, LayoutGrid, LucideIcon, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
    icon: LucideIcon;
    text: string;
    href: string;
}

const navItems: NavItem[] = [
    { icon: LayoutGrid, text: "Discover", href: "/discover" },
    { icon: Briefcase, text: "My Jobs", href: "/jobs" },
    {icon : User, text: "Profile", href: "/profile"}
]

export default function Sidebar() {

    const { isAuthenticated } = useAuth();
    const pathname = usePathname();

    if (!isAuthenticated) return null;

    return (
        <>
            <nav aria-label="side navigation" className="hidden md:flex fixed left-2 bg-text top-[calc(4rem+2rem)] bottom-5 flex-col justify-between w-20 rounded-md py-8">
                <div className="flex justify-center items-center">
                    <span className={`text-5xl text-primary select-none ${spaceGroteskBold.className}`}>c</span>
                </div>
                <div className="flex flex-col items-center space-y-10">
                    {navItems.map((item, i) => {
                        const active = pathname.includes(item.href);
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
                <div />
            </nav>


            <nav className="fixed z-50 border-t  bottom-0 left-0 right-0 bg-text py-3 px-6 flex justify-between items-center md:hidden shadow-lg">
                {navItems.map((item, i) => {
                    const active = pathname.includes(item.href);
                    return (
                        <Link key={i} href={item.href} className={`group flex flex-col items-center`}>
                            <item.icon size={30} className={`${active ? "text-primary" : "text-gray-400 group-hover:text-primary"} transition-colors`} />
                            <span className={`text-sm ${active ? "text-primary" : "text-gray-400 group-hover:text-primary"} transition-colors ${PoppinsRegular.className}`}>{item.text}</span>
                        </Link>
                    );
                })}
            </nav>
        </>
    )
}