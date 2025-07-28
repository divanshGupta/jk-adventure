import React from "react";

const services = [
  {
    id: 1,
    title: "Tour Packages",
    description: "Discover curated experiences — from mountain escapes to cultural trails across India.",
    image: "/tour-bg.jpg",
    cards: [
      { title: "Manali Getaway", price: "Starts at ₹12,000", image: "/gallery/img1.jpg" },
      { title: "Rajasthan Heritage", price: "Starts at ₹15,000", image: "/gallery/img2.jpg" },
      { title: "Kerala Backwaters", price: "Starts at ₹14,500", image: "/gallery/img3.jpg" },
    ],
    buttonLink: "/tour-packages"
  },
  {
    id: 2,
    title: "Adventure Sports",
    description: "Thrill your senses with rafting, paragliding, and mountain biking in the wild.",
    image: "/adv-bg3.jpg",
    cards: [
      { title: "River Rafting Rishikesh", price: "Starts at ₹3,500", image: "/gallery/adventure1.jpg" },
      { title: "Bir Paragliding", price: "Starts at ₹2,999", image: "/gallery/adventure3.jpg" },
    ],
    buttonLink: "/adventure-sports"
  },
  {
    id: 3,
    title: "Taxi Services",
    description: "Reliable taxi booking for intercity, airport, or custom tours across India.",
    image: "/taxi-bg.jpg",
    cards: [
      { title: "Udupi to Gokarna", price: "From ₹2,000", image: "/gallery/taxi1.jpg" },
      { title: "Delhi City Tour", price: "From ₹1,500", image: "/gallery/taxi2.jpg" },
    ],
    buttonLink: "/taxi-services"
  }
];

const ServicesSection2 = () => {
  return (
    <>
      {services.map((service) => (
        <section key={service.id} className="relative text-white h-[100vh] md:h-[80vh]">
          <img
            src={service.image}
            alt={`${service.title} Background`}
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
          <div className="relative z-10 flex flex-col justify-center h-full p-6 md:p-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h2>
            <p className="mb-6 max-w-md text-lg">{service.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {service.cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-xl shadow-md"
                >
                  <img src={card.image} className="rounded-md mb-2" alt={card.title} />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm">{card.price}</p>
                </div>
              ))}
            </div>
            <a
              href={service.buttonLink}
              className="bg-white text-black px-4 py-2 rounded-md font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              See All →
            </a>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServicesSection2;