import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 bg-zinc-900 relative">
            {/* Quirky pattern */}
            <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden pointer-events-none">
                <div className="absolute -right-10 top-1/4 w-40 h-40 border border-primary/20 rounded-full"></div>
                <div className="absolute -right-20 top-1/3 w-60 h-60 border border-primary/10 rounded-full"></div>
                <div className="absolute right-20 bottom-1/4 w-20 h-20 border border-primary/30 rounded-full"></div>
            </div>

            <div className="px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-zinc-800/50 px-3 py-1 text-sm">
                        <span className="text-primary mr-1">$</span>
                        <span>Simple pricing</span>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Pick what works for you</h2>
                        <p className="max-w-[700px] text-zinc-400 md:text-xl font-space-grotesk">
                            Straightforward options for creators at any stage.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <Card className="bg-zinc-900/50 border-zinc-800 transition-all hover:border-primary/50 hover:-translate-y-1 flex flex-col">
                        <CardHeader>
                            <CardTitle>Starter</CardTitle>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold">$20</span>
                                <span className="text-zinc-400 ml-1">/month</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Up to 5 videos per month
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Basic idea generation
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Simple video editing
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Basic thumbnails
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Standard analytics
                                </li>
                            </ul>
                        </CardContent>
                        <div className="p-6 pt-0 mt-auto">
                            <Button className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700">Join Waitlist</Button>
                        </div>
                    </Card>
                    <Card className="bg-zinc-900/50 border-primary/50 shadow-lg shadow-crimson-600/10 flex flex-col relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                            Most Popular
                        </div>
                        <CardHeader>
                            <CardTitle>Creator</CardTitle>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold">$199</span>
                                <span className="text-zinc-400 ml-1">/month</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Unlimited videos
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Advanced idea generation
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Pro-level editing
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Clickable thumbnails
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Advanced SEO tools
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Detailed analytics
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Priority support
                                </li>
                            </ul>
                        </CardContent>
                        <div className="p-6 pt-0 mt-auto">
                            <Button className="w-full">Join Waitlist</Button>
                        </div>
                    </Card>
                    <Card className="bg-zinc-900/50 border-zinc-800 transition-all hover:border-primary/50 hover:-translate-y-1 flex flex-col">
                        <CardHeader>
                            <CardTitle>Studio</CardTitle>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold">Custom</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Everything in Creator
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Custom AI training
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Dedicated account manager
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    API access
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    Custom integrations
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <div className="mr-2 h-4 w-4 text-primary">✦</div>
                                    24/7 support
                                </li>
                            </ul>
                        </CardContent>
                        <div className="p-6 pt-0 mt-auto">
                            <Button
                                variant="outline"
                                className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}