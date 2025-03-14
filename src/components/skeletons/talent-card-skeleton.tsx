function Skeleton (){
    return (
        <div className="">
        <div className="relative p-6 space-y-4">
            <div className="flex items-center space-x-3 card-title">
                <div className="rounded-full bg-slate-700 skeleton h-14 w-14"></div>
                <div className="h-5 w-20 bg-slate-700 skeleton"></div>
            </div>
            <div className="h-7 w-52 bg-slate-700 skeleton"></div>
        </div>
    </div>
    )
}

export default function TalentCardSkeleton(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-[95%] ">
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </div>
    )
}