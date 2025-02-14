export default function CardWrapper({
    children
}: {
    children: React.ReactNode
}){
    return (
        <div className="card bg-text border-2 border-gray-700 hover:border-primary transition-all duration-300">
            {children}
        </div>
    )
}