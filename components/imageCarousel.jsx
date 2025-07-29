import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images = [], height = '230px' }) => {
  const validImages = Array.isArray(images) && images.length > 0
    ? images
    : ['/gallery/default.jpg'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextImage();
    else if (diff < -50) prevImage();
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{ height }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={validImages[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        onError={(e) => { e.target.src = '/images/default.jpg'; }}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500"
      />

      {validImages.length > 1 && (
        <>
          {/* Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {validImages.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-200 ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;