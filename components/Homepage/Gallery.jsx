import Link from 'next/link';
export default function Gallery() {
  return (
    <section className="bg-[#A8DADC] py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Experience the Enchantment of Jammu & Kashmir
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          From the pristine lakes of Srinagar to the snow-covered valleys of Gulmarg —
          immerse yourself in a land of breathtaking beauty and warm hospitality.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {["shikara.webp", "img1.webp", "img2.webp", "img3.webp"].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={`/images/gallery/${img}`}
                alt={`Kashmir ${idx}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-6 text-center">
          <Link href="/gallery">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Explore Full Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
