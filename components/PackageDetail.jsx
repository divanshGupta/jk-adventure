
import React from 'react';
import PackageDetailGallery from './PackageDetailGallery';

const PackageDetail = ({ pkg }) => {
  if (!pkg) return <p className="text-center text-red-500">Package not found</p>;

  const {
    title,
    images,
    price,
    duration,
    location,
    includes,
    itinerary,
    reviews,
    description,
  } = pkg;

  return (
    <div className="px-6 md:px-20 py-2 mt-12 md:mt-24 w-full md:mx-auto">
      {/* Header */}
      <header className="mb-4 md:mb-6 w-full flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="py-8 flex flex-col items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </header>

      <section className="mb-6">
        {/* Images Details */}
        <div className='relative w-full h-64 rounded overflow-hidden'>
          <PackageDetailGallery images={images} />
        </div>
        {/* Key Details */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-lg">
          <div><strong>Location:</strong> {location}</div>
          <div><strong>Duration:</strong> {duration}</div>
          <div><strong>Price:</strong> ₹{price}</div>
        </section>

        {/* Includes */}
        {includes && includes.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-700">What's Included</h2>
            <ul className="list-disc list-inside text-gray-600">
              {includes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Itinerary */}
        {itinerary && itinerary.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-700">Itinerary</h2>
            <ol className="list-decimal list-inside text-gray-600">
              {itinerary.map((day, i) => (
                <li key={i}>{day}</li>
              ))}
            </ol>
          </section>
        )}

        {/* Reviews */}
        {reviews && reviews.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-700">Customer Reviews</h2>
            <div className="space-y-4">
              {reviews.map((review, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border">
                  <p className="text-sm text-gray-700">“{review.comment}”</p>
                  <p className="text-xs text-gray-500 mt-2">— {review.name}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6">
          <p className="text-lg font-semibold text-gray-800">Starting from ₹{price}</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Book Now
          </button>
        </section>
      </section>

      
    </div>
  );
};

export default PackageDetail;
