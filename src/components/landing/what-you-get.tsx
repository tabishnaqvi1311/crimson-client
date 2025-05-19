import { BarChart, Film, ImageIcon, Lightbulb, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const cards = [
    {
        title: "Idea Generator",
        description: "Never stare at a blank page again. Get fresh video ideas based on what your audience actually wants to see.",
        icon: <Lightbulb className="w-6 h-6 text-primary" />,
    },
    {
        title: "Smart Editor",
        description: "Cut hours of editing time with AI that knows which parts of your footage are worth keeping.",
        icon: <Film className="w-6 h-6 text-primary" />,
    },
    {
        title: "Thumbnail Creator",
        description: "Create eye-catching thumbnails that make viewers stop scrolling and click on your videos.",
        icon: <ImageIcon className="w-6 h-6 text-primary" />,
    },
    {
        title: "SEO Helper",
        description: "Get your videos found with titles, descriptions, and tags that actually work with the algorithm.",
        icon: <Search className="w-6 h-6 text-primary" />,
    },
    {
        title: "Growth Insights",
        description: "Understand what's working and what's not with clear analytics that tell you exactly how to improve.",
        icon: <BarChart className="w-6 h-6 text-primary" />,
    },
]

export default function WhatYouGet() {
    return (
        <section id="features" className="py-16 bg-zinc-950 relative">
            <div className="px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/10 bg-zinc-800/50 px-3 py-1 text-sm">
                        <span className="text-primary mr-1">✦</span>
                        <span>What you&apos;ll get</span>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Tools that do the heavy lifting</h2>
                        <p className="max-w-[700px] text-zinc-400 md:text-xl font-space-grotesk">
                            Focus on your creativity while Crimson handles the technical stuff.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {cards.map((card, index) => (
                        <Card key={index} className="bg-zinc-900/50 border-zinc-800 transition-all hover:border-primary/50 hover:bg-primary/5">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-2">
                                    {card.icon}
                                </div>
                                <CardTitle className="text-2xl">{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-zinc-400">
                                    {card.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}