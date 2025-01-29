
import { bricolageGrotesqueBold } from "@/fonts"
import { ArrowRight } from "lucide-react"

export default function CTA() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c2736]">
            <div className="container mx-auto text-center">
                <h2 className={`${bricolageGrotesqueBold.className} text-4xl sm:text-5xl font-bold mb-6 text-text`}>Ready to Grow Your YouTube Channel?</h2>
                <p className="text-xl mb-8  max-w-2xl mx-auto text-gray-300">
                    Join Crimson today and connect with the talent you need to take your content to the next level.
                </p>
                <button  className="btn bg-[#e93559] text-white hover:bg-[#c52c4b]">
                    Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                </button>
            </div>
        </section>
    )
}

