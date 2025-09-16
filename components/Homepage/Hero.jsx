import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import { FaMotorcycle, FaTaxi, FaHiking, FaMapMarkedAlt } from "react-icons/fa";

const services = [
  {
    title: "Tour Packages",
    subTitle: "Curated experiences for all",
    icon: <FaMapMarkedAlt size={28} />,
    mobileIcon: <FaMapMarkedAlt size={24} />,
    route: "/tours/",
  },
  {
    title: "Adventure Activities",
    subTitle: "Thrills and exploration awaits",
    icon: <FaHiking size={28} />,
    mobileIcon: <FaHiking size={24} />,
    route: "/adventures/",
  },
  {
    title: "Bike Rentals",
    subTitle: "Starting ₹500/day",
    icon: <FaMotorcycle size={28} />,
    mobileIcon: <FaMotorcycle size={24} />,
    route: "/bikes/",
  },
  {
    title: "Taxi Booking",
    subTitle: "Reliable rides at your fingertips",
    icon: <FaTaxi size={28} />,
    mobileIcon: <FaTaxi size={24} />,
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
        src="/images/hero/kashmir-bhadarva-2.webp" // Prefer WebP for performance
        alt="Mountain Background"
        fill={true}
        quality={75}
        priority={true} // Ensures it's loaded early for hero sections
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0">
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl px-4 pt-12 lg:pt-22">
        {/* Desktop Intro Text */}
        <div className=''>
          <div className="w-full text-center mb-4 lg:mb-2 text-[#FFF9EE]
          flex flex-col md:gap-4">
            <h1 className='text-[30px] lg:text-3xl leading-relaxed md:text-5xl font-semibold'>Explore</h1>
            <h1 className='text-[36px] lg:text-[70px] leading-relaxed md:text-7xl font-bold tracking-wider'>Jammu & Kashmir</h1>
            <h1 className='text-[30px] lg:text-3xl leading-relaxed md:text-5xl font-semibold'>With Ease</h1>
          </div>
          <div>
            <p className="text-center text-[16px] lg:text-[20px] font-medium text-[#FFF9EE]">
              Curated Adventures. Unforgettable Journeys. Your Gateway to the Himalayas.
            </p>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 md:mt-8 py-2 md:py-4 bg-white/40 rounded-lg">
          {services.map((service, idx) => (
            <Link href={service.route} key={idx}>
              <div key={idx} className='flex flex-col items-center justify-center text-[#FFF9EE] hover:scale-110'>    
                  <span className="">{service.icon}</span>
                  <span className="text-xs md:text-xl lg:text-[16px] text-center font-semibold ">{service.title}</span>
                  {/* <p className='hidden md:block text-sm lg:text-[12px] font-normal'>{service.subTitle}</p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
