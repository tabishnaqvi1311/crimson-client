import { CheckCircle, Film, Sparkles, Users } from "lucide-react";

export default function NoMore() {
    return (
        <section className="py-16 bg-zinc-900 relative">
            <div className="px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-zinc-800/50 px-3 py-1 text-sm mb-4">
                            <span className="text-crimson-600 mr-1">💰</span>
                            <span>Save Thousands</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6">
                            Say goodbye to expensive <span className="text-crimson-600">freelance editors</span>
                        </h2>
                        <div className="space-y-6 text-zinc-400 font-space-grotesk">
                            <p className="text-lg">
                                Hiring editors is expensive and time-consuming. Finding the right person, explaining your style, and
                                managing revisions can be a full-time job.
                            </p>
                            <p className="text-lg font-bold">
                                Crimson learns your style and delivers professional edits at a fraction of the cost. No more
                                back-and-forth emails or missed deadlines.
                            </p>

                            <div className="pt-4">
                                <h3 className="text-xl font-bold mb-4 text-white">Compare the costs:</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded-lg border border-zinc-800">
                                        <div className="flex items-center">
                                            <Users className="h-5 w-5 text-zinc-500 mr-2" />
                                            <span>Freelance Editor</span>
                                        </div>
                                        <span className="font-bold">$200-500 / video</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded-lg border border-zinc-800">
                                        <div className="flex items-center">
                                            <Users className="h-5 w-5 text-zinc-500 mr-2" />
                                            <span>Full-time Editor</span>
                                        </div>
                                        <span className="font-bold">$3,000-5,000 / month</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-accent rounded-lg border border-primary/30">
                                        <div className="flex items-center">
                                            <Sparkles className="h-5 w-5 text-primary mr-2" />
                                            <span className="font-bold">Crimson&apos;s AI Agents</span>
                                        </div>
                                        <span className="font-bold text-primary">$199 / month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-crimson-600/20 via-zinc-800/0 to-crimson-600/10 rounded-lg blur-lg"></div>
                        <div className="relative bg-zinc-800 border border-primary/20 rounded-lg p-6">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                                    <Film className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">AI Agents Working for You</h3>
                                    <p className="text-zinc-400">Always available, never complain</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                    <p className="text-zinc-300">Learns your editing style and preferences</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                    <p className="text-zinc-300">Edits videos in minutes, not days</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                    <p className="text-zinc-300">Automatically adds transitions, effects, and music</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                    <p className="text-zinc-300">Removes filler words and awkward pauses</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                    <p className="text-zinc-300">Creates highlight clips for social media</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                    <p className="text-zinc-300">Gets better with every edit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}