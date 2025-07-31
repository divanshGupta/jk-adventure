import React from 'react';
import { Phone } from 'lucide-react';
import PlanCard from './PlanCard';

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
      className="relative w-[100%] mx-auto min-h-screen flex items-center justify-center text-white mb-4 shadow hover:shadow-xl transition"
    >
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0">
      </div>

      <div className="flex flex-col md:flex-row gap-4 relative z-10 max-w-6xl px-6 py-12">

        <div className='md:w-1/3'>
          <h2 className="text-3xl md:text-7xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6 max-w-xl">{description}</p>
          <a
            href={ctaLink}
            className="inline-block bg-white text-black px-4 py-2 rounded-md font-semibold shadow hover:bg-gray-200"
          >
            {ctaText}
          </a>
        </div>

        <div className="md:w-2/3 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6">
          {plans.map((plan, index) => (
            
            <PlanCard key={index} plan={plan} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;