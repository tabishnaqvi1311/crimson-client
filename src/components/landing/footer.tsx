import { PoppinsMedium, spaceGroteskMedium, spaceGroteskRegular } from "@/fonts";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4">
                    <div className={`${spaceGroteskMedium.className} lg:text-start text-center`}>
                        <Link href="/" className="text-4xl text-[#e93559]">
                            Crimson
                        </Link>
                        <p>&copy; {new Date().getFullYear()} Crimson. All rights reserved.</p>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:gap-20 gap-6">
                        <ul className="flex flex-col space-y-4 lg:items-start items-center">
                            <li className={`${PoppinsMedium.className} tracking-widest`}>LINKS</li>
                            <Link href="/signin" className={spaceGroteskRegular.className} style={{color: "white"}}>Sign In</Link>
                            <Link href="#pricing" className={spaceGroteskRegular.className} style={{color: "white"}}>Pricing</Link>
                            <Link href="#features" className={spaceGroteskRegular.className} style={{color: "white"}}>Features</Link>
                            <Link href="#faq" className={spaceGroteskRegular.className} style={{color: "white"}}>FAQ</Link>
                        </ul>
                        <ul className="flex flex-col space-y-4 lg:items-start items-center">
                            <li className={`${PoppinsMedium.className} tracking-widest`}>LEGAL</li>
                            <Link href="/privacy" className={spaceGroteskRegular.className} style={{color: "white"}}>Privacy Policy</Link>
                            <Link href="/terms" className={spaceGroteskRegular.className} style={{color: "white"}}>Terms of Services</Link>
                            <Link href="/refund" className={spaceGroteskRegular.className} style={{color: "white"}}>Refund Policy</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
