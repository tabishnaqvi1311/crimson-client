import { Award, CheckCircle, Clock, Users, Zap } from "lucide-react";

const gridFeatures = [
    {
        title: "Hours Saved",
        description: "per week",
        icon: <Clock className="h-8 w-8 text-primary mb-2" />,
        value: "20+"
    },
    {
        title: "Faster Uploads",
        description: "more videos",
        icon: <Zap className="h-8 w-8 text-primary mb-2" />,
        value: "2x"
    },
    {
        title: "Audience Growth",
        description: "average increase",
        icon: <Users className="h-8 w-8 text-primary mb-2" />,
        value: "47%"
    },
    {
        title: "Video Quality",
        description: "consistently better",
        icon: <Award className="h-8 w-8 text-primary mb-2" />,
        value: "↑↑↑"
    }
]

const checkFeatures = [
    {
        title: "No More Editing All-Nighters",
        description: "Crimson's agentic AI editor cuts your editing time by up to 80%. What used to take 5 hours now takes just 1.",
        icon: <CheckCircle className="h-6 w-6 text-primary/90" />
    },
    {
        title: "Consistent Upload Schedule",
        description: "Keep your audience engaged with regular uploads. Crimson helps you maintain a schedule without burning out.",
        icon: <CheckCircle className="h-6 w-6 text-primary/90" />
    },
    {
        title: "Focus on Creating, Not Editing",
        description: "Spend more time in front of the camera doing what you love, and less time staring at editing software.",
        icon: <CheckCircle className="h-6 w-6 text-primary/90" />
    }
]

export default function AiProductivity() {

    return (
        <section className="py-16 bg-zinc-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="px-4 md:px-6 relative">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-zinc-800/50 px-3 py-1 text-sm mb-4">
                        <span className="mr-1">⚡</span>
                        <span>2x Your Productivity</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                        AI that works <span className="text-primary">for you</span>, not the other way around
                    </h2>
                    <p className="text-zinc-400 md:text-xl">
                        Stop wasting hours on tedious video tasks. Crimson's AI Agents handle the heavy lifting so you can focus on what matters: creating amazing content.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-lg blur-lg"></div>
                        <div className="relative bg-zinc-800/50 border border-primary/20 rounded-lg p-6">
                            <div className="grid grid-cols-2 gap-4">
                                {gridFeatures.map((feature, index) => (
                                    <div key={index} className="flex flex-col items-center text-center p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                                        {feature.icon}
                                        <h3 className="font-bold mb-1">{feature.title}</h3>
                                        <p className="text-3xl font-bold text-primary">{feature.value}</p>
                                        <p className="text-xs text-zinc-400">{feature.description}</p>
                                    </div>))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {checkFeatures.map((feature, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-zinc-400">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </section>
    );
}