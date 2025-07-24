import Link from "next/link";

const sampleImages = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg'
];

export default function HomeGallerySection() {
  return (
    <section className="px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-2">Explore Our Gallery</h2>
      <p className="text-center text-gray-600 mb-6">A glimpse of memories from our travel experiences</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {sampleImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery preview ${index + 1}`}
            className="rounded-lg shadow hover:scale-105 transition-transform duration-300 object-cover w-full h-48"
          />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/gallery">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            See More Photos
          </button>
        </Link>
      </div>
    </section>
  );
}