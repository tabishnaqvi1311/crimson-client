import GoogleButton from "@/components/buttons/googleButton";
import { PoppinsRegular, spaceGroteskRegular } from "@/fonts";

export default function Page() {
    return (
        <main>
            <h1 className={`text-text ${PoppinsRegular.className} heading tracking-tight`}>Welcome to Crimson</h1>
            <GoogleButton/>
        </main>
    )
}