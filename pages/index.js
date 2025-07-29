import Hero from '@/components/hero';
import HomeGallerySection from '@/components/homeGallerySection';
import Reviews from '@/components/reviews';
import Services from '@/pages/services';
import React from 'react';
import Head from 'next/head';

import CTA from '@/components/CTA';
import ServiceSection from '@/components/ServiceSection';



<Head>
  <title>Discover Adventures | Nomad India</title>
  <meta name="description" content="Explore breathtaking travel destinations and book curated tour packages with Nomad India. Your adventure begins here!" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>

export default function Home() {
  return (
    <>
      <Hero />

      {/* <ServicesSection2 /> */}
      {/* tour packages section */}
      <ServiceSection
        id="tours"
        title="Explore Tour Packages"
        description="Discover curated experiences — from mountain escapes to cultural trails."
        bgImage="/tour-bg.jpg"
        plans={[
          {
            images: ['/gallery/img1.jpg', '/gallery/img3.jpg', '/gallery/img4.jpg'],
            title: 'Jammu Kashmir Getaway',
            time: '6 Days 5 Nights',
            price: '2999',
            discountedPrice: '2499',
          },
          {
            images: ['/gallery/img2.jpg'],
            title: 'Pahalgam Adventure',
            time: '5 Days 4 Nights',
            price: '5999',
            discountedPrice: '4999',
          },
        ]}
        ctaLink="/services"
        ctaText="See All Tours →"
      />

      {/* adventure activities section */}
       <ServiceSection
        id="adventures"
        title="Adventure Sports"
        description="Paragliding, river rafting & more. Push your limits with safety."
        bgImage="/adv-bg2.jpg"
        plans={[
          {
            images: ['/gallery/adventure1.jpg'],
            title: 'Paragliding - Pahalgam',
            details: 'Half Day • From ₹1,200',
            price: '2999',
            discountedPrice: '2499',
          },
          {
            images: ['/gallery/adventure2.jpg'],
            title: 'River Rafting - Sonmarg',
            details: '20 min flight • ₹2,500',
            price: '2999',
            discountedPrice: '2499',
          },
        ]}
        ctaLink="/services"
        ctaText="See All Adventures →"
      />

      {/* taxi services section */}
      <ServiceSection
        id="taxis"
        title="Taxi Services"
        description="Book reliable taxis for intercity and local rides, available 24/7."
        bgImage="/taxi-bg.jpg"
        plans={[
          {
            images: ['/gallery/taxi1.jpg'],
            title: 'Srinagar to Katra Sedan',
            details: 'One-way • From ₹3,500',
            price: '2999',
            discountedPrice: '2499',
          },
          {
            images: ['/gallery/taxi2.jpg'],
            title: 'Airport Pickup - Jammu',
            details: 'Local cab • From ₹800',
            price: '2999',
            discountedPrice: '2499',
          },
        ]}
        ctaLink="/services"
        ctaText="See All Taxis →"
      />

      {/* <PackageSection />
      <AdventureSection />
      <TaxiSection /> */}
      <HomeGallerySection />
      <Reviews />
      <CTA />
    </>
);
}
