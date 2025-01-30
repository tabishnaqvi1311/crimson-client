import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";
// import HeroBg from "./hero-background";

export default function Hero() {
    return (
        <>
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto text-center">
                {/* <HeroBg /> */}
                    <h1 className={`text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight tracking-tight text-text ${bricolageGrotesqueBold.className}`}>Where&nbsp;
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ">Youtubers and Talent</span>&nbsp;Connect
                    </h1>
                    <p className={`${spaceGroteskMedium.className} text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto`}>
                        Crimson is the definitive job board for YouTubers to find skilled professionals and for talent to discover exciting opportunities in content creation.
                    </p>
                    <div className={`space-x-4 ${spaceGroteskMedium.className}`}>
                        <button className="btn btn-ghost bg-primary hover:bg-primary px-6 hover:px-8  transition-all duration-200 text-text text-lg">Post A Job</button>
                        <button className="btn btn-ghost bg-accent hover:bg-accent px-6 hover:px-8 transition-all duration-200 text-text text-lg">Find Work</button>
                    </div>
                </div>
            </section>
        </>
    )
}