import BackButton from "@/components/buttons/back-button";
import Footer from "@/components/landing/footer";
import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";

export default function Page() {
    return (
        <main className="py-7 md:px-[7rem] px-4">
            <div className="mb-8 flex items-center gap-2">
                <BackButton/>
                <div>
                    <h1 className={`${bricolageGrotesqueBold.className} text-4xl text-white`}>Privacy Policy</h1>
                    <p className={`${spaceGroteskMedium.className}`}><strong>Last Updated:</strong> 10th March 2025</p>
                </div>
            </div>
            <div className={`${spaceGroteskMedium.className} space-y-4 text-white text-lg`}>
                <p className="mb-6">Welcome to Crimson! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.</p>

                <h2 className={`${bricolageGrotesqueBold.className} text-2xl text-white mb-4`}>1. Information We Collect</h2>
                <p className="mb-4">We collect the following data when you use Crimson:</p>
                <ul className="list-disc list-inside mb-6">
                    <li><strong>User Emails:</strong> Collected for authentication, communication, and security notifications.</li>
                    <li><strong>YouTube Channel Data:</strong> Includes channel name, about section, and statistics, used for verification and fraud prevention.</li>
                    <li><strong>Job Postings:</strong> Stored and managed as part of our platform services.</li>
                    <li><strong>Traffic Data:</strong> Used for analytics, security monitoring, and platform improvements.</li>
                </ul>

                <h2 className={`${bricolageGrotesqueBold.className} text-2xl text-white mb-4`}>2. How We Use Your Information</h2>
                <p className="mb-4">We use the collected data for the following purposes:</p>
                <ul className="list-disc list-inside mb-6">
                    <li>To verify YouTubers before allowing job postings.</li>
                    <li>To provide, operate, and improve Crimson.</li>
                    <li>To analyze platform usage, detect abuse, and enhance user experience.</li>
                    <li>To send authentication emails for magic link sign-in.</li>
                    <li>To comply with legal obligations and enforce our terms.</li>
                </ul>

                <h2 className={`${bricolageGrotesqueBold.className} text-2xl text-white mb-4`}>3. Data Sharing & Third-Party Services</h2>
                <p className="mb-4">We may share your data with third-party services for:</p>
                <ul className="list-disc list-inside mb-6">
                    <li>Analytics to track platform performance and prevent abuse.</li>
                    <li>Email services to deliver authentication and security notifications.</li>
                </ul>
                <p className="mb-6">We do not sell your data to third parties.</p>

                <h2 className={`${bricolageGrotesqueBold.className} text-2xl text-white mb-4`}>4. Cookies & Tracking</h2>
                <p className="mb-6">We do not currently use cookies, but we may introduce them in the future for authentication, security, and analytics.</p>

                <h2 className={`${bricolageGrotesqueBold.className} text-2xl text-white mb-4`}>5. Data Retention & Deletion</h2>
                <p className="mb-6">We retain your data as long as necessary for the purposes stated above. Users can request data deletion or delete their data directly via account settings.</p>

                <h2 className={`${bricolageGrotesqueBold.className} text-2xl text-white mb-4`}>6. Data Security</h2>
                <p className="mb-6">We implement role-based access control (RBAC) and industry-standard security measures to protect your data. Authentication is handled via OAuth.</p>

                <h2 className={`${bricolageGrotesqueBold.className} text-2xl text-white mb-4`}>7. Age Restrictions</h2>
                <p className="mb-6">Crimson is for users aged 18 and above. We do not knowingly collect data from minors.</p>

                <h2 className={`${bricolageGrotesqueBold.className} text-2xl text-white mb-4`}>8. Changes to This Privacy Policy</h2>
                <p className="mb-6">We may update this policy from time to time. Continued use of Crimson after updates constitutes acceptance of the changes.</p>

                <h2 className={`${bricolageGrotesqueBold.className} text-2xl text-white mb-4`}>9. Contact Us</h2>
                <p className="mb-6">If you have any questions about this Privacy Policy or your data, please contact us at <strong>tabish.naqvi2003@gmail.com</strong>.</p>
                <p>Thank you for using Crimson!</p>
            </div>
            <Footer />
        </main>
    )
}