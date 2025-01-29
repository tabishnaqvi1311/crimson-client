import { PoppinsMedium, spaceGroteskMedium, spaceGroteskRegular } from "@/fonts";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className={`${spaceGroteskMedium.className} mb-4 md:mb-0`}>
                        <Link href="/" className="text-4xl text-[#e93559]">
                            Crimson
                        </Link>
                        <p>&copy; {new Date().getFullYear()} Crimson. All rights reserved.</p>
                    </div>
                    <div className="flex gap-20">
                        <ul className="flex flex-col">
                            <li className={`${PoppinsMedium.className} tracking-widest`}>LINKS</li>
                            <Link href="/signin" className={spaceGroteskRegular.className} style={{color: "white"}}>Sign In</Link>
                            <Link href="#pricing" className={spaceGroteskRegular.className} style={{color: "white"}}>Pricing</Link>
                            <Link href="#features" className={spaceGroteskRegular.className} style={{color: "white"}}>Features</Link>
                        </ul>
                        <ul className="flex flex-col">
                            <li className={`${PoppinsMedium.className} tracking-widest`}>LEGAL</li>
                            <Link href="/privacy" className={spaceGroteskRegular.className} style={{color: "white"}}>Privacy Policy</Link>
                            <Link href="/terms-of-services" className={spaceGroteskRegular.className} style={{color: "white"}}>Terms of Services</Link>
                            <Link href="/signin" className={spaceGroteskRegular.className} style={{color: "white"}}>Sign In</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}