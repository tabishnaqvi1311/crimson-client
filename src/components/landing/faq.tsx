import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const faq = [
    {
        q: "What exactly does Crimson do?",
        a: "Crimson is your AI-powered sidekick for YouTube. It helps you brainstorm video ideas, write scripts, edit footage, design thumbnails, optimize for SEO, and even publish autonomously.",
    },
    {
        q: "Do I still need to shoot my own footage?",
        a: "We don't film for you. But once you've got the raw footage, we'll take it from there.",
    },
    {
        q: "How customizable is the content generated?",
        a: "Very. You can tweak scripts, choose edit styles, pick thumbnail templates, and override any AI-generated output. You stay in control, we just makes it easier"
    },
    {
        q: "What tools does Crimson integrate with?",
        a: "We are currently working on integrations with popular platforms and are in development for more. If you have a specific tool in mind, let us know and we'll prioritize it!",
    },
    {
        q: "Where do I sign up?",
        a: "You can join our waitlist to be the first to know when we launch. We are currently in closed beta, but we will be opening up to more users soon.",
    },
    {
        q: "Can I cancel anytime?",
        a: "100%. No contracts, no lock-in. Cancel anytime right from your dashboard."
    },
    {
        q: "Do you offer team or agency plans?",
        a: "Yes! We have special plans for teams and agencies. Just reach out to us and we'll get you set up.",
    }
]

export default function FAQ() {
    return (
        <section id="faq" className="py-16 bg-zinc-950 relative">
            {/* Quirky pattern */}
            <div className="absolute left-0 top-0 h-full w-1/4 overflow-hidden pointer-events-none">
                <div className="absolute left-10 top-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>
                <div className="absolute left-20 top-2/3 w-2 h-2 bg-primary/20 rounded-full"></div>
                <div className="absolute left-40 top-1/4 w-4 h-4 bg-primary/10 rounded-full"></div>
            </div>

            <div className="px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Common questions</h2>
                        <p className="max-w-[700px] text-zinc-400 md:text-xl ">
                            Things you might be wondering about Crimson.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-3xl mt-12">
                    <Accordion type="single" collapsible className="w-full">
                        {faq.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-zinc-800">
                                <AccordionTrigger className="text-left hover:text-primary text-lg">
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-zinc-400 text-base">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}