import { spaceGroteskMedium } from "@/fonts";

export default function Contact() {
    return (
        <div className={`text-text ${spaceGroteskMedium.className}`}>
            <p>Want to reach out? Contact me on&nbsp;
                <a href="https://x.com/gunhawke23" className="link">Twitter</a>
                &nbsp;or by&nbsp;
                <a href="mailto:tabish.naqvi2003@gmail.com" className="link">Email</a>
    
            </p>
        </div>
    )
}