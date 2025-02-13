import Footer from "@/components/landing/footer";
import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";

export default function Page() {
    return (
        <main className="p-7">
            <div>
                <h1 className={`${bricolageGrotesqueBold.className} text-4xl text-white`}>Refund Policy</h1>
                <p className={spaceGroteskMedium.className}>Last Updated 13th February 2025</p>
            </div>
            <div className={`mt-6 space-y-4 text-white text-lg ${spaceGroteskMedium.className}`}>
                <p>At Crimson, we strive to provide a fair and transparent platform for job postings. By purchasing a job post on Crimson, you agree to the following refund policy:</p>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>1. No Refunds</h2>
                <p>All job posting fees are non-refundable. Once a job listing is published on Crimson, the payment is final, and no refunds will be issued under any circumstances, including but not limited to:</p>
                <ul className="list-disc list-insude ml-4">
                    <li><strong>Failure to find a suitable candidate</strong></li>
                    <li><strong>Change of mind after posting</strong></li>
                    <li><strong>Lack of applications or responses</strong></li>
                    <li><strong>Posting errors made by the user</strong></li>
                </ul>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>2. Platform-Related Errors</h2>
                <p>If a job post is affected by a verified technical issue on Crimson's end (e.g., failure to display the job listing due to a system bug), users may contact us within 7 days of the issue for a resolution. Resolutions may include:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Reposting the job listing at no additional cost</li>
                    <li>Extending the job listing duration</li>
                </ul>
                <p>We do not offer monetary refunds under any circumstances.</p>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>3. Chargebacks & Disputes</h2>
                <p>Attempting to dispute a payment through a chargeback will result in an immediate ban from Crimson. If you believe there has been an error in billing, please contact us first to resolve the issue.</p>

                <h2 className={`text-2xl font-semibold ${bricolageGrotesqueBold.className}`}>4. Changes to This Policy</h2>
                <p>Crimson reserves the right to update this Refund Policy at any time. Continued use of the platform after updates constitutes acceptance of the revised terms.</p>

            </div>
            <div>
                <p>For any inquiries, please contact us at <strong>tabish.naqvi2003@gmail.com</strong>.</p>
                <p>Thank you for using Crimson!</p>
            </div>
            <Footer />
        </main>
    )
}