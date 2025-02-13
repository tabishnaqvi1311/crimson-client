import Link from "next/link";
import MyJobs from "./my-jobs";

export default function YoutuberView(){
    return <div className="md:pl-[7rem] pl-5 pt-10">
        <p>youtuber view</p>
        <Link href={"/jobs/create"} className="btn btn-outline">Post a Job</Link>
        <MyJobs/>
    </div>
}