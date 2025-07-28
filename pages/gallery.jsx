import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  {
    src: '/gallery/img1.jpg',
    alt: 'Trekking in Munsiyari',
    location: 'Munsiyari, Uttarakhand',
    description: 'A peaceful mountain trail surrounded by snow-capped peaks.',
    category: 'Mountains',
  },
  {
    src: '/gallery/img2.jpg',
    alt: 'Sunset at Gokarna Beach',
    location: 'Gokarna, Karnataka',
    description: 'Golden sunset on a quiet beach, perfect for yoga and calm.',
    category: 'Beach',
  },
  {
    src: '/gallery/img3.jpg',
    alt: 'Trekking in Munsiyari',
    location: 'Munsiyari, Uttarakhand',
    description: 'A peaceful mountain trail surrounded by snow-capped peaks.',
    category: 'Mountains',
  },
  {
    src: '/gallery/img4.jpg',
    alt: 'Sunset at Gokarna Beach',
    location: 'Gokarna, Karnataka',
    description: 'Golden sunset on a quiet beach, perfect for yoga and calm.',
    category: 'Beach',
  },
  {
    src: '/gallery/img5.jpg',
    alt: 'Trekking in Munsiyari',
    location: 'Munsiyari, Uttarakhand',
    description: 'A peaceful mountain trail surrounded by snow-capped peaks.',
    category: 'Mountains',
  },
  {
    src: '/gallery/img6.jpg',
    alt: 'Sunset at Gokarna Beach',
    location: 'Gokarna, Karnataka',
    description: 'Golden sunset on a quiet beach, perfect for yoga and calm.',
    category: 'Beach',
  },
  {
    src: '/gallery/img7.jpg',
    alt: 'Trekking in Munsiyari',
    location: 'Munsiyari, Uttarakhand',
    description: 'A peaceful mountain trail surrounded by snow-capped peaks.',
    category: 'Mountains',
  },
  {
    src: '/gallery/img8.jpg',
    alt: 'Sunset at Gokarna Beach',
    location: 'Gokarna, Karnataka',
    description: 'Golden sunset on a quiet beach, perfect for yoga and calm.',
    category: 'Beach',
  },
  // Add more images...
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className=" w-[90%] md:w-[80%] mx-auto mt-20 " id="gallery">
      <div className="max-full mx-auto text-center ">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Gallery</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Experience glimpses of breathtaking landscapes, vibrant cultures, and unforgettable journeys from our travelers.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4 ">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow hover:shadow-xl transition"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={350}
                className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full p-4">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="rounded-lg object-contain mx-auto max-h-[90vh]"
              />
              {/* 💤 Hidden Info - for future use */}
              {/* 
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-semibold">{selectedImage.location}</h3>
                <p className="text-white/80 mt-2">{selectedImage.description}</p>
              </div>
              */}

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
