import { Pen } from "lucide-react";
import Link from "next/link";

export default function PostJobButton(){
    return (
        <Link href={"/jobs/create"} className="btn btn-circle btn-lg fixed lg:bottom-5 bottom-24 right-5 z-50 bg-primary text-text hover:bg-primary hover:text-text border-none">
            <Pen size={25}/>
        </Link>
    )
}