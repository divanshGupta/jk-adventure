//filter and modals in next version
import { useState } from 'react';

const galleryImages = [
  '/images/gallery1.jpg', '/images/gallery2.jpg', '/images/gallery3.jpg',
  '/images/gallery4.jpg', '/images/gallery5.jpg', '/images/gallery6.jpg',
  '/images/gallery7.jpg', '/images/gallery8.jpg', '/images/gallery9.jpg'
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {galleryImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            onClick={() => setSelectedImage(src)}
            className="cursor-pointer rounded-lg shadow hover:scale-105 transition-transform duration-300 object-cover w-full h-48"
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-xl bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage} alt="Selected" className="max-h-[80vh] rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
