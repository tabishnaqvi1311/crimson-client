import BackButton from "@/components/buttons/back-button";
import Footer from "@/components/landing/footer";
import { bricolageGrotesqueBold, spaceGroteskMedium } from "@/fonts";
import Link from "next/link";

export default function GoogleApiDisclosure() {
    return (
        <main className='py-7 md:px-[7rem] px-4'>
            <div className="h-[80vh]">
                <div className="flex items-center gap-2">
                    <BackButton />
                    <div>
                        <h1 className={`${bricolageGrotesqueBold.className} text-4xl text-white`}>
                            Google API Services Usage Disclosure
                        </h1>
                        <p className={spaceGroteskMedium.className}>Last Updated 21st February 2025</p>
                    </div>
                </div>
                <p className={`mt-6 space-y-4 text-white text-lg ${spaceGroteskMedium.className}`}>
                    Crimson uses Google's Application Programming Interface (API) Services to improve the experience on our platform.
                </p>
                <p className={`mt-6 space-y-4 text-white text-lg ${spaceGroteskMedium.className}`}>
                    Crimson's use and transfer to any other app of information received from Google APIs will adhere to&nbsp;
                    <a href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" className='text-text hover:text-primary underline'>
                        Google API Services User Data Policy
                    </a>
                    , including the Limited Use requirements.
                </p>
                <p className={`mt-6 space-y-4 text-white text-lg ${spaceGroteskMedium.className}`}>

                    We place significant importance on maintaining the security and privacy of your data. Please reference our &nbsp;
                    <Link href={"/privacy"} className="text-text hover:text-primary underline">Privacy Policy</Link> for information on our policies regarding the use of the Crimson's services.
                </p>
                <div className="mt-4">
                    <p>For any inquiries, please contact us at <strong>tabish.naqvi2003@gmail.com</strong>.</p>
                    <p>Thank you for using Crimson!</p>
                </div>
            </div>
            <Footer />
        </main>
    )
}