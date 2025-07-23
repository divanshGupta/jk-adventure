const Gallery = () => {

    return (
        <>
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="grid grid-cols-3 gap-4">
                <div className="w-40 h-40 bg-amber-200 border border-black rounded-lg"></div>
                <div className="w-40 h-40 bg-amber-200 border border-black rounded-lg"></div>
                <div className="w-40 h-40 bg-amber-200 border border-black rounded-lg"></div>
            </div>
        </div>
        </>
    );
}
export default Gallery;