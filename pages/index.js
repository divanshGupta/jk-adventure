import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import HomeGallerySection from '@/components/homeGallerySection';
import Reviews from '@/components/reviews';
import Services from '@/components/services';
import ContactForm from '@/components/contactForm';
import React from 'react';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HomeGallerySection />
      <Reviews />
      {/* <div className='mx-auto w-full p-4'>
        <ContactForm />
      </div> */}
    </>
);
}
