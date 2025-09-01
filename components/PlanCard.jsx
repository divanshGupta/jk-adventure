import { FaPhoneAlt } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';
import Link from 'next/link';

const PlanCard = ({ plan, serviceType }) => {

  return (
    <div className="h-[460px] lg:h-[580px] group relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white/20 backdrop-blur-md hover:shadow-xl transition-all"
       // ✅ Force fixed height
    >
      {/* 🖼 Image Container */}
      <div
        className="relative h-[230px] lg:h-[280px] w-full overflow-hidden rounded-t-2xl"
      >
        <ImageCarousel images={plan.images} />    
      </div>

      {/* 📄 Content Section */}
      <Link  href={`/${serviceType}/${plan.slug}`}>
        <div className="flex flex-col justify-between h-[230px] lg:h-[300px] p-2 md:p-4">
          <div className="space-y-1">
            <h3 className="text-base md:text-xl font-semibold text-black">{plan.title}</h3>
            <p className="text-sm text-black font-normal">{plan.time}</p>

            {/* 💸 Price Info */}
            <div className="">
              <div className="flex items-center gap-2">
                <p className="text-xs line-through text-black font-light">INR {plan.price}</p>
                <span className="text-[9px] bg-orange-100 px-2 py-0.5 text-orange-500 font-bold rounded">
                  SAVE INR {plan.price - plan.discountedPrice}
                </span>
              </div>
              <p className="text-lg font-semibold text-black">
                INR {plan.discountedPrice}
                <span className="text-sm font-normal"> /Adult</span>
              </p>
            </div>
          </div>

          {/* 📞 CTA Buttons */}
          <div className="flex justify-between items-center gap-3 mt-auto">
            <button className="flex items-center justify-center w-1/3 py-[4px] md:py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition">
              <FaPhoneAlt />
            </button>
            <button className="w-2/3 py-[4px] md:py-2 bg-black text-white rounded-md hover:bg-gray-800 transition font-semibold">
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlanCard;