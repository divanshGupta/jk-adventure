import React from 'react';
import { Phone } from 'lucide-react';

const ServiceSection = ({
  id,
  title,
  description,
  bgImage,
  plans = [],
  ctaLink,
  ctaText,
}) => {
  return (
    <section
      id={id}
      className="relative w-[90%] md:w-[80%] mx-auto rounded-lg min-h-screen flex items-center justify-center text-white mb-4 shadow hover:shadow-xl transition"
    >
      <img
        src={bgImage}
        alt={title}
        className="absolute rounded-lg inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="relative z-10 max-w-6xl px-6 py-12">
        <h2 className="text-3xl md:text-7xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6 max-w-xl">{description}</p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group w-full max-w-[300px] h-[430px] mx-auto rounded-2xl overflow-hidden  shadow-md transition-all group relative bg-white bg-white/20 backdrop-blur-md hover:shadow-lg"
            >
              {/* Image container */}
              <div className="h-[230px] w-full overflow-hidden rounded-t-2xl">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between h-[200px] p-4">
                <h3 className="text-lg text-black font-semibold">{plan.title}</h3>
                <p className="text-sm text-black mt-1">
                  {plan.time} 
                </p>
                <span className="text-black font-bold text-lg">₹{plan.price}</span>

                <div className="flex justify-between items-center gap-4 mt-auto">
                  <button className="px-3 py-3 bg-white text-black rounded-md transition">
                    <Phone />
                  </button>
                  <button className="px-12 py-3 bg-white text-black font-bold text-xl rounded-md transition">
                    Book Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
        <a
          href={ctaLink}
          className="inline-block bg-white text-black px-4 py-2 rounded-md font-semibold shadow hover:bg-gray-200"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default ServiceSection;