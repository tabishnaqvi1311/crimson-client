import { FormWrapperProps } from "@/types";

export default function FormWrapper({title, subtitle, children}: FormWrapperProps){
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div>
                {children}
            </div>
        </div>
    )
}