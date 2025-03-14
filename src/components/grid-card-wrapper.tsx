export default function GridWrapper({
    children
}: {
    children: React.ReactNode
}){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[95%]">
            {children}
        </div>
    )
}