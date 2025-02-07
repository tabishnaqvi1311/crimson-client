import Link from "next/link";

export default function YoutuberView(){
    return <div className="pl-[7rem] pt-20">
        <p>youtuber view</p>
        <Link href={"/jobs/create"} className="btn btn-outline">post a job</Link>
    </div>
}