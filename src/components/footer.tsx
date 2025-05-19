import Link from "next/link";


export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950">
            <div className="px-4 py-8 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold text-primary">Crimson</span>
                        </Link>
                        <p className="text-sm text-zinc-400">
                            Your Youtube Sidekick
                        </p>
                        <p className="text-xs text-zinc-500">
                            Crimson is not affiliated with, endorsed by, or sponsored by YouTube or Google LLC. All product names,
                            logos, and brands are property of their respective owners.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-zinc-300">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#features" className="text-sm text-zinc-400 hover:text-crimson-600">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-sm text-zinc-400 hover:text-crimson-600">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-zinc-400 hover:text-crimson-600">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-zinc-400 hover:text-crimson-600">
                                    Guides
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-zinc-300">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-zinc-400 hover:text-crimson-600">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-zinc-400 hover:text-crimson-600">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-zinc-400 hover:text-crimson-600">
                                    Cookies
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-zinc-400 hover:text-crimson-600">
                                    Licenses
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-zinc-500">&copy; {new Date().getFullYear()} Crimson. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}