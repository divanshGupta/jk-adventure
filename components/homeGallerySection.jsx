import Link from "next/link";

const sampleImages = [
  {
    src: '/gallery/img2.jpg',
    alt: 'Trekking in Munsiyari',
    location: 'Munsiyari, Uttarakhand',
    description: 'A peaceful mountain trail surrounded by snow-capped peaks.',
    category: 'Mountains',
  },
  {
    src: '/gallery/img3.jpg',
    alt: 'Sunset at Gokarna Beach',
    location: 'Gokarna, Karnataka',
    description: 'Golden sunset on a quiet beach, perfect for yoga and calm.',
    category: 'Beach',
  },
  {
    src: '/gallery/img4.jpg',
    alt: 'Trekking in Munsiyari',
    location: 'Munsiyari, Uttarakhand',
    description: 'A peaceful mountain trail surrounded by snow-capped peaks.',
    category: 'Mountains',
  },
  {
    src: '/gallery/img5.jpg',
    alt: 'Sunset at Gokarna Beach',
    location: 'Gokarna, Karnataka',
    description: 'Golden sunset on a quiet beach, perfect for yoga and calm.',
    category: 'Beach',
  },
  // {
  //   src: '/gallery/img6.jpg',
  //   alt: 'Trekking in Munsiyari',
  //   location: 'Munsiyari, Uttarakhand',
  //   description: 'A peaceful mountain trail surrounded by snow-capped peaks.',
  //   category: 'Mountains',
  // },
  // {
  //   src: '/gallery/img7.jpg',
  //   alt: 'Sunset at Gokarna Beach',
  //   location: 'Gokarna, Karnataka',
  //   description: 'Golden sunset on a quiet beach, perfect for yoga and calm.',
  //   category: 'Beach',
  // },
  // {
  //   src: '/gallery/img8.jpg',
  //   alt: 'Trekking in Munsiyari',
  //   location: 'Munsiyari, Uttarakhand',
  //   description: 'A peaceful mountain trail surrounded by snow-capped peaks.',
  //   category: 'Mountains',
  // },
  // {
  //   src: '/gallery/img9.jpg',
  //   alt: 'Sunset at Gokarna Beach',
  //   location: 'Gokarna, Karnataka',
  //   description: 'Golden sunset on a quiet beach, perfect for yoga and calm.',
  //   category: 'Beach',
  // },
  // Add more images...
];

export default function HomeGallerySection() {
  return (
    <section className="px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-2">Explore Our Gallery</h2>
      <p className="text-center text-gray-600 mb-6">A glimpse of memories from our travel experiences</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {sampleImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
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