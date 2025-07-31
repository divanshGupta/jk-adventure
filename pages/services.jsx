'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Car, Mountain, Star, Clock, Users } from 'lucide-react';
import Link from 'next/link';

const Services = () => {

  return (
    <section className="pt-32 bg-blue-200 w-[90%] md:w-[80%] mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-red-100">
        {/* Section Header */}
        <div className="w-full text-center mb-16 flex flex-col items-center gap-8 bg-gray-400">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Explore Our Tour Packages
            </h2>
          </div>

          <div className="flex justify-start items-center gap-4 mb-8">
            <p className='text-xl font-semibold'>Sort:</p>
            <button className='px-4 py-2 bg-blue-400 text-black'>Low Price</button>
            <button className='px-4 py-2 bg-blue-400 text-black'>Newest</button>
            <button className='px-4 py-2 bg-blue-400 text-black'>Popular</button>
          </div>
        </div>

        {/* section body */}
        <div className='w-full bg-orange-300'>
          

        </div>
      </div>
    </section>
  );
};

export default Services;