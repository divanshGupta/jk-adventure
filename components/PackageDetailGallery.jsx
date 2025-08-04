import Image from 'next/image';
import Masonry from 'react-masonry-css';

const PackageDetailGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return <p className="text-center text-gray-500">No images available.</p>;
  }

  if (images.length === 1) {
    return (
      <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
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

  // For 2 to 5 images
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    768: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4"
      columnClassName="space-y-4"
    >
      {images.slice(0, 5).map((src, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg"
          style={{ height: 250, position: 'relative' }}
        >
          <Image
            src={src}
            alt={`Package ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </Masonry>
  );
};
export default PackageDetailGallery;