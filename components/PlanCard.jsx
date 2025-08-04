import { useState, useRef } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';
import Image from 'next/image';
import Link from 'next/link';

const PlanCard = ({ plan, serviceType }) => {

  console.log("Images array:", plan.images);

  return (
    <div className="group relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white/20 backdrop-blur-md hover:shadow-xl transition-all"
      style={{ height: '460px' }} // ✅ Force fixed height
    >

      {/* 🖼 Image Container */}
      <div
        className="relative h-[230px] w-full overflow-hidden rounded-t-2xl"
      >
        
        <ImageCarousel images={plan.images} />    
      </div>

      {/* 📄 Content Section */}
      <Link  href={`/${serviceType}/${plan.slug}`}>
        <div className="flex flex-col justify-between h-[230px] p-4">
          <div className="space-y-1 mb-2">
            <h3 className="text-xl font-semibold text-black">{plan.title}</h3>
            <p className="text-base text-black font-normal">{plan.time}</p>

            {/* 💸 Price Info */}
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <p className="text-sm line-through text-black font-light">INR {plan.price}</p>
                <span className="text-[11px] bg-orange-100 px-2 py-0.5 text-orange-500 font-bold rounded">
                  SAVE INR {plan.price - plan.discountedPrice}
                </span>
              </div>
              <p className="text-xl font-bold text-black">
                INR {plan.discountedPrice}
                <span className="text-sm font-normal"> /Adult</span>
              </p>
            </div>
          </div>

          {/* 📞 CTA Buttons */}
          <div className="flex justify-between items-center gap-3 mt-auto">
            <button className="flex items-center justify-center w-1/3 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition">
              <FaPhoneAlt />
            </button>
            <button className="w-2/3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition font-semibold">
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlanCard;