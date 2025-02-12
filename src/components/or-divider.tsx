import { spaceGroteskRegular } from "@/fonts";

export default function OrDivider() {
    return (
        <div className="flex items-center w-40 my-5">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className={`${spaceGroteskRegular.className} px-2 text-text`}>or</span>
            <div className="flex-1 border-t border-gray-600"></div>
        </div>
    )
}