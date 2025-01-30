import { bricolageGrotesqueBold, spaceGroteskRegular } from "@/fonts"
import { Camera, Search, DollarSign, Edit, Star } from "lucide-react"

const features = [
    {
        icon: <Search className="w-12 h-12 text-[#e93559]" />,
        title: "Targeted Connections",
        description: "YouTubers find skilled professionals, while talent discovers exciting projects in content creation.",
    },
    {
        icon: <DollarSign className="w-12 h-12 text-[#e93559]" />,
        title: "Competitive Rates",
        description: "Set your own rates as a professional, or find talent within your budget as a YouTuber.",
    },
    {
        icon: <Camera className="w-12 h-12 text-[#e93559]" />,
        title: "Diverse Opportunities",
        description: "From editing to scriptwriting, find or offer a wide range of content creation services.",
    },
]

const opportunities = [
    {
        icon: <Camera className="w-12 h-12 text-[#8b53af]" />,
        title: "Video Editing",
        description: "Showcase your editing skills and bring YouTubers' visions to life.",
    },
    {
        icon: <Edit className="w-12 h-12 text-[#8b53af]" />,
        title: "Graphic Design",
        description: "Create eye-catching thumbnails and channel art that stand out.",
    },
    {
        icon: <Star className="w-12 h-12 text-[#8b53af]" />,
        title: "Many More",
        description: "From SEO to voice-over work, find opportunities that match your skills.",
    },
]

export default function Features() {
    return (
        <>
            <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c2736]">
                <div className="container mx-auto">
                    <h2 className={`${bricolageGrotesqueBold.className} text-3xl sm:text-4xl font-bold mb-12 text-center text-text`}>Why Choose Crimson?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className={`text-center ${spaceGroteskRegular.className}`}>
                                <div className="mb-4 flex justify-center">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-text">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c2736]">
                <div className="container mx-auto">
                    <h2 className={`${bricolageGrotesqueBold.className} text-3xl sm:text-4xl font-bold mb-12 text-center text-text`}>For Talented Professionals</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {opportunities.map((opportunity, index) => (
                            <div key={index} className={`text-center ${spaceGroteskRegular.className}`}>
                                <div className="mb-4 flex justify-center">{opportunity.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-text">{opportunity.title}</h3>
                                <p className="text-gray-300">{opportunity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}