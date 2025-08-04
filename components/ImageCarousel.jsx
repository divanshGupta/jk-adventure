import Image from "next/image";
import { useState } from "react";

const ImageCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
        No image available
      </div>
    );
  }

  // ✅ Single image case
  if (images.length === 1) {
    return (
      <div className="relative w-full h-64 rounded overflow-hidden">
        <Image
          src={images[0]}
          alt="Package"
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  // ✅ Multiple images
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-64 rounded overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-300"
        priority
      />

      <button
        onClick={(e) => {e.stopPropagation(); prevSlide();}}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 px-2 py-1 rounded-full text-xl z-10"
      >
        ‹
      </button>
      <button
        onClick={(e) => {e.stopPropagation(); nextSlide();}}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 px-2 py-1 rounded-full text-xl z-10"
      >
        ›
      </button>
    </div>
  );
};

export default ImageCarousel;
