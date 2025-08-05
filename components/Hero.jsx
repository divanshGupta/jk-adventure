import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import { FaMotorcycle, FaTaxi, FaHiking, FaMapMarkedAlt } from "react-icons/fa";

const services = [
  {
    title: "Tour Packages",
    icon: <FaMapMarkedAlt size={28} />,
    route: "/tours/",
  },
  {
    title: "Adventure Activities",
    icon: <FaHiking size={28} />,
    route: "/adventures/",
  },
  {
    title: "Bike Rentals",
    icon: <FaMotorcycle size={28} />,
    route: "/bikes/",
  },
  {
    title: "Taxi Booking",
    icon: <FaTaxi size={28} />,
    route: "/taxis/",
  },
  // To add more, just add another object here
];

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-center bg-cover">
      {/* Optimized Background Image */}
      <Image
        src="/images/hero/kashmir-bhadarva-2.jpg" // Ensure this is optimized: 1600px width max
        alt="Mountain Background"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority // Loads it immediately
        className="z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0">
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-4 py-20">
        {/* Desktop Intro Text */}
        <div className="text-center text-white mb-10">
          <h1 className="text-4xl md:text-7xl font-bold">Explore <span className="block">Jammu & Kashmir</span> With Ease</h1>
          <p className="mt-2 text-lg text-gray-200">
            Trusted local rides, adventures, and more — one click away.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <Link href={service.route} key={idx}>
              <div
                className="bg-white/40 backdrop-blur-md rounded-xl shadow-md p-6 md:p-10 flex flex-col items-center justify-center text-gray-800 hover:scale-105 transition cursor-pointer"
              >
                <div className="mb-2">{service.icon}</div>
                <p className="text-center font-semibold">{service.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact CTA for Mobile
        <div className="block md:hidden mt-6 text-center">
          <button
            onClick={() => router.push("/contact")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div> */}
      </div>
    </section>
  );
}
