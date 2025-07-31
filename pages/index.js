import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Services from '@/pages/services';
import React from 'react';
import Head from 'next/head';
import CTA from '@/components/CTA';
import ServiceSection from '@/components/ServiceSection';
import CallButton from '@/components/CallButton';
import KashmirIntro from '@/components/KashmirIntro';

<Head>
  <title>Discover Jammu & Kashmir</title>
  <meta name="description" content="Explore breathtaking travel destinations and book curated tour packages with Nomad India. Your adventure begins here!" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>

export default function Home() {
  return (
    <>
        <Hero />
        {/* adventure activities section */}
        {/* <ServiceSection
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
        /> */}

        {/* taxi services section */}
        {/* <ServiceSection
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
        /> */}
        <KashmirIntro/>
        {/* tour packages section */}
        <ServiceSection
          id="tours"
          title="Popular Tour Packages"
          description="Discover curated experiences — from mountain escapes to cultural trails."
          bgImage="/images/img7.jpg"
          plans={[
            {
              images: ['/images/img7.jpg', '/images/img6.jpg', '/images/img5.jpg'],
              title: 'Jammu Kashmir Getaway',
              time: '6 Days 5 Nights',
              price: '2999',
              discountedPrice: '2499',
            },
            {
              images: ['/images/img9.jpg'],
              title: 'Pahalgam Adventure',
              time: '5 Days 4 Nights',
              price: '5999',
              discountedPrice: '4999',
            },
            {
              images: ['/images/img8.jpg'],
              title: 'Srinagar Heritage Tour',
              time: '7 Days 7 Nights',
              price: '8999',
              discountedPrice: '6499',
            },
          ]}
          ctaLink="/services"
          ctaText="See All Tours →"
        />
        <Reviews />
        <CTA />
        <CallButton />
    </>
);
}
