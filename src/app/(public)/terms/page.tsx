import BackButton from "@/components/buttons/back-button";
import Footer from "@/components/landing/footer";
import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";

export default function Page() {
    return (
        <main className="py-7 md:px-[7rem] px-4">
            <div className="flex items-center gap-2">
                <BackButton />
                <div>
                    <h1 className={`${bricolageGrotesqueBold.className} text-4xl text-white`}>Terms of Service</h1>
                    <p className={spaceGroteskMedium.className}>Last Updated 10th March 2025</p>
                </div>
            </div>
            <div className={`mt-6 space-y-4 text-white text-lg ${spaceGroteskMedium.className}`}>
                <p>Welcome to Crimson! These Terms of Service ("Terms") govern your use of Crimson ("we," "our," or "us"), an independent job board that connects YouTubers seeking talent with potential candidates. By accessing or using Crimson, you agree to these Terms.</p>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>1. Acceptance of Terms</h2>
                <p>By using Crimson, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use the platform.</p>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>2. User Roles & Eligibility</h2>
                <p>Crimson operates as a platform for two types of users:</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>YouTubers (Employers):</strong> Individuals or entities looking to hire talent for YouTube-related jobs.</li>
                    <li><strong>Talent (Job Seekers):</strong> Individuals seeking freelance or permanent YouTube-related work.</li>
                </ul>
                <p>You must be at least 18 years old to use Crimson. By using the platform, you affirm that you have the legal capacity to enter into these Terms.</p>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>3. Account & Verification</h2>
                <ul className="list-disc list-inside ml-4">
                    <li>Users must provide accurate information when creating an account.</li>
                    <li><strong>YouTubers must verify their YouTube channel</strong> before posting job listings to ensure legitimacy.</li>
                    <li>We reserve the right to remove or restrict access to any user found violating our policies.</li>
                </ul>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>4. Job Posting & Intellectual Property</h2>
                <ul className="list-disc list-inside ml-4">
                    <li>YouTubers may post job listings.</li>
                    <li>By submitting a job listing, you grant Crimson the right to use, display, and distribute the job posting on our platform and in related promotions.</li>
                    <li>Crimson retains full rights over all job listings published on the platform.</li>
                </ul>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>5. Content & Conduct Guidelines</h2>
                <ul className="list-disc list-inside ml-4">
                    <li>No spam, misleading job postings, or fraudulent opportunities.</li>
                    <li>No illegal, discriminatory, or unethical job postings.</li>
                    <li>Respect for intellectual property rights of all parties.</li>
                    <li>No harassment, hate speech, or abuse towards other users.</li>
                </ul>
                <p>Crimson reserves the right to remove any job post or ban any user violating these guidelines.</p>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>6. Liability & Disputes</h2>
                <ul className="list-disc list-inside ml-4">
                    <li>Crimson is a neutral job board and does not verify, endorse, or guarantee any job postings or candidates.</li>
                    <li>We <strong>do not</strong> mediate disputes between YouTubers and Talent. Any disagreements must be resolved between the parties involved.</li>
                    <li>Crimson is not liable for any damages, losses, or conflicts arising from user interactions.</li>
                </ul>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>7. Third-Party Services</h2>
                <p>We may use third-party services for payment processing, analytics, AI-powered features, and other functionalities. By using Crimson, you acknowledge and consent to the use of such third-party services.</p>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>8. Termination of Accounts</h2>
                <ul className="list-disc list-inside ml-4">
                    <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
                    <li>Users whose accounts are terminated may not be eligible for refunds.</li>
                    <li>Crimson may update, modify, or discontinue services at any time.</li>
                </ul>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>9. Governing Law & Jurisdiction</h2>
                <p>These Terms are governed by the laws of <strong>India</strong>. Any legal disputes must be resolved in the courts of India.</p>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>10. Changes to These Terms</h2>
                <p>We may update these Terms from time to time. Continued use of Crimson after any updates constitutes acceptance of the new Terms.</p>

            </div>
            <div>
                <p>For any inquiries, please contact us at <strong>tabish.naqvi2003@gmail.com</strong>.</p>
                <p>Thank you for using Crimson!</p>
            </div>
            <Footer />
        </main>
    )
}
