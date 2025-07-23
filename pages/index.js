import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import Reviews from '@/components/reviews';
import Services from '@/components/services';
import React from 'react';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
    </>
);
}
