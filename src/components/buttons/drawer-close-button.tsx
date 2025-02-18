export default function DrawerCloseButton({
    id
}: {
    id: string
}) {
    return (
        <label 
            htmlFor={id} 
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors"
        >
            <span className="text-gray-500 text-xl">&times;</span>
        </label>
    )
}