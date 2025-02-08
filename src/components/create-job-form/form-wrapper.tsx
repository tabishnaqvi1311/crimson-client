import { PoppinsMedium, spaceGroteskMedium } from "@/fonts";
import { FormWrapperProps } from "@/types";

export default function FormWrapper({title, children}: FormWrapperProps){
    return (
        <div className="flex flex-col space-y-4 p-4  ">
            <h1 className={`${PoppinsMedium.className} text-2xl `}>{title}</h1>
            <div className={`${spaceGroteskMedium.className} flex flex-col w-full items-center`}>
                {children}
            </div>
        </div>
    )
}