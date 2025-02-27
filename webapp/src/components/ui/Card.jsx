export default function Card({ image, title, content, genre}) {
    return (
        <div className="bg-white flex rounded-xl shadow h-full">
            <div className="w-1/2">
                <img className="h-full object-cover" src={image} alt={title} />
            </div>
            <div className="p-2 w-1/2 space-y-2">
                <h1 className="text-2xl">{title}</h1>
                <p className="text-lg">{content}</p>
                <p className="text-sm">{genre}</p>
            </div>
        </div>
    )
}