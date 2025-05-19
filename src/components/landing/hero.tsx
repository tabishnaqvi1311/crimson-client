import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-20 right-[20%] w-64 h-64 md:bg-primary/20 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-[10%] w-72 h-72 md:bg-primary/10 bg-primary/10 rounded-full blur-3xl"></div>


            <div className="flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-zinc-800/50 px-3 py-1 text-sm w-fit">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                    <span>Currently in beta</span>
                </div>
                <div className="space-y-2 flex flex-col items-center">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Supercharge Your YouTube Channel with <br/> AI-Powered Production.
                    </h1>
                    <p className="max-w-[600px] text-zinc-400 md:text-xl">
                        From brainstorming to publishing, Crimson helps creators like you make better videos in half the
                        time.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="group">
                        Join Waitlist
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                        variant="outline"
                        className="border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                    >
                        See How It Works
                    </Button>
                </div>
            </div>
        </section>
    )
}