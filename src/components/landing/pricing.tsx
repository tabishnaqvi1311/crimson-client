import { bricolageGrotesqueBold, spaceGroteskRegular } from "@/fonts"
import { Check } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
    return (
<section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <p className="text-center text-lg text-primary">Pricing</p>
        <h2 className={`${bricolageGrotesqueBold.className} text-4xl sm:text-5xl font-bold mb-12 text-center text-text`}>Simple, Transparent Pricing.</h2>
        <div className="max-w-md mx-auto bg-[#1c2736] rounded-lg overflow-hidden shadow-lg">
          <div className="px-6 py-8">
            <h3 className={`${bricolageGrotesqueBold.className} text-white text-2xl font-semibold mb-2`}>YouTuber Plan</h3>
            <div className="mb-4">
              <span className={`text-white text-4xl font-bold ${bricolageGrotesqueBold.className}`}>$10</span>
              <span className={`${spaceGroteskRegular.className}`}> / job post</span>
            </div>
            <ul className={`${spaceGroteskRegular.className} text-white`}>
              <li className="flex items-center mb-2">
                <Check className="w-5 h-5 text-[#e93559] mr-2" />
                <span>First 3 job posts free</span>
              </li>
              <li className="flex items-center mb-2">
                <Check className="w-5 h-5 text-[#e93559] mr-2" />
                <span>Access to all features</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#e93559] mr-2" />
                <span>24/7 support</span>
              </li>
            </ul>
            <Link href={"/signin"} className="w-full btn mt-5 bg-[#e93559] text-white hover:bg-[#c52c4b]">Get Started</Link>
          </div>
          <div className="px-6 pb-4 ">
            <p className="text-center font-semibold text-primary">Talent joins for free!</p>
          </div>
        </div>
      </div>
    </section>
    )
}