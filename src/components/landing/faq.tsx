import { bricolageGrotesqueBold, spaceGroteskRegular } from "@/fonts"

const faq = [
    {
        q: "What is this place?",
        a: "Need an editor? A thumbnail designer? A scriptwriter? Post a job, find the perfect person, and keep your channel running the smart way. If you're a creative looking for work, this is where YouTubers come to hire."
    },
    {
        q: "How does it work?",
        a: "Post a job, and hire the perfect person for your project. If you're a professional, respond to job posts and get hired. It's that simple!"
    },
    {
        q: "How much does it cost?",
        a: "If you're a YouTuber posting a job, there's a small fee per listing ($12) (gotta keep the lights on!). If you're talent looking for work, applying is 100% free."
    },
    {
        q: "What other costs are involved?",
        a: "As of now, there are no other costs involved. We're keeping it simple and straightforward. Expect updates in the future, though!"
    },
    {
        q: "Do I have to link my YouTube channel to post jobs?",
        a: "Yep! We want to keep things legit and make sure only real YouTubers are posting. You'll be asked to link your channel at sign-up, but if you skip it, you can do it later from your profile.",
    },
    {
        q: "How do I apply for a job?",
        a: "Easy! If you're talent, just browse the job listings, click 'Apply' and follow the instructions. Some YouTubers might ask for a portfolio or samples, so be ready to flex your skills."
    },
    {
        q: "How do I find the right person for my channel?",
        a: "Once you post a job, applicants will roll in. You can check out their profiles, see past work, and pick the one that fits your vibe. Soon, Crimson will do most of the work for you!"
    },
    {
        q: "I found the perfect hire! What now?",
        a: "Nice! You can message them, discuss the details (pricing, deadlines, etc.), and get started. Everything happens between you and the talent—we just help make the connection."
    },
    {
        q: "What if I'm not happy with the work?",
        a: "That's rare, but it happens. We encourage clear communication upfront. If someone is acting shady, report them, and we'll look into it. If you're not satisfied with the work, you can leave a review to warn others."
    },
    {
        q: "Can I post multiple jobs?",
        a: "Absolutely! Whether you need an editor, a voice-over artist, and a scriptwriter all at once—or just need to replace Max because he disappeared again—you can post as many jobs as you need."
    },
]


export default function FAQ() {
    return (
        <section className="container mx-auto px-4 py-4" id="faq">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                    <h1 className={`${bricolageGrotesqueBold.className} text-3xl sm:text-4xl font-bold mb-6 text-text`}>Frequently Asked Questions</h1>
                    <p>Have another question? Contact me on&nbsp;
                        <a href="https://x.com/gunhawke23" className="link">Twitter</a>
                        &nbsp;or by&nbsp;
                        <a href="mailto:tabish.naqvi2003@gmail.com" className="link">Email</a>.</p>
                </div>
                <div className="lg:w-1/2 space-y-4 mb-4">
                    {
                        faq.map((item, index) => {
                            return (
                                <div className="join join-vertical w-full divide-y" key={index}>
                                    <div className="collapse collapse-plus join-item border-b border-gray-700">
                                        <input type="radio" name={`faq`} className="peer" />
                                        <div className={`${bricolageGrotesqueBold.className}  collapse-title text-xl font-medium peer-checked:text-primary`}>{item.q}</div>
                                        <div className="collapse-content">
                                            <p className={`${spaceGroteskRegular.className} text-lg`}>{item.a}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}