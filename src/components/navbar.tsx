"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

    return (
        <header
            className={`sticky top-0 z-50 w-full border-b border-zinc-800 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 ${scrolled ? "shadow-md shadow-primary" : ""}`}
        >
            <div className="flex h-16 items-center justify-between px-7">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">Crimson</span>
                    </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link href="#features" className="text-sm font-medium text-zinc-400 hover:underline hover:text-white">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:underline hover:text-white">
                        How It Works
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-zinc-400 hover:underline hover:text-white">
                        Pricing
                    </Link>
                    <Link href="#faq" className="text-sm font-medium text-zinc-400 hover:underline hover:text-white">
                        FAQ
                    </Link>
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <Button size="sm">
                        Join Waitlist
                    </Button>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-zinc-400"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden px-7 py-4 border-t border-zinc-800">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            How It Works
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#faq"
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                        <div className="flex flex-col gap-2 pt-2">
                            <Button size="sm">
                                Join Waitlist
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}