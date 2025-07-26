import Hero from '@/components/hero';
import HomeGallerySection from '@/components/homeGallerySection';
import Reviews from '@/components/reviews';
import Services from '@/components/services';
import ContactForm from '@/components/contactForm';
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';

<Head>
  <title>Discover Adventures | Nomad India</title>
  <meta name="description" content="Explore breathtaking travel destinations and book curated tour packages with Nomad India. Your adventure begins here!" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
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
