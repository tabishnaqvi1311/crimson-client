import { PoppinsBold, spaceGroteskMedium } from "@/fonts"

type PageWrapperProps = {
    title: string,
    subtitle?: string,
    children: React.ReactNode
}

export default function PageWrapper({
    title,
    subtitle,
    children
}: PageWrapperProps
) {
    return (
        <div className="md:pl-[7rem] pl-5 pt-10 mb-20">
            <div>
                <h1 className={`${PoppinsBold.className} text-3xl text-text`}>{title}</h1>
                <h3 className={`${spaceGroteskMedium.className}`}>
                    {subtitle}
                </h3>
            </div>
            {children}
        </div>
    )
}