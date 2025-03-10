import { PoppinsBold, spaceGroteskMedium } from "@/fonts"
import BackButton from "./buttons/back-button"

type PageWrapperProps = {
    title?: string,
    subtitle?: string,
    children: React.ReactNode
    backButton?: boolean
}

export default function PageWrapper({
    title,
    subtitle,
    children,
    backButton = false
}: PageWrapperProps
) {
    return (
        <div className="md:pl-[7rem] pl-5 pt-4 mb-20">
            <div className="flex gap-4 items-center">
                {backButton && <BackButton />}
                <div>
                    <h1 className={`${PoppinsBold.className} text-3xl text-text`}>{title}</h1>
                    <h3 className={`${spaceGroteskMedium.className}`}>
                        {subtitle}
                    </h3>
                </div>
            </div>
            {children}
        </div>
    )
}