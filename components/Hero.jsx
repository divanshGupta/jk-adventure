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
    subTitle: "Explore on two wheels, starting ₹500/day",
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
    <section className=" relative w-full min-h-screen flex items-center justify-center bg-center bg-cover">
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
      <div className="relative z-10 max-w-6xl px-4 md:pt-20">
        {/* Desktop Intro Text */}
        <div className='mb-10'>
          <div className="text-center mb-6 text-[#FAFAFA] font-bold
          flex flex-col md:gap-4">
            <h1 className='text-[44px] md:text-6xl'>Explore</h1>
            <h1 className='text-[44px] md:text-7xl'>Jammu & Kashmir</h1>
            <h1 className='text-[44px] md:text-6xl'>With Ease</h1>
          </div>
          <div>
            <p className="text-center mt-2 text-lg font-medium text-gray-200">
              Trusted local rides, adventures, and more — one click away.
            </p>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:mt-16">
          {services.map((service, idx) => (
            <Link href={service.route} key={idx}>
              <div key={idx} className='md:min-h-48 bg-[#003546] text-[#FAFAFA] backdrop-blur-md overflow-hidden rounded-xl shadow-md'>
                <div
                  className="w-full h-full md:min-h-48 shadow-md p-4 md:py-10 flex flex-col items-center justify-between text-center hover:scale-105 transition duration-200 cursor-pointer"
                >
                  <div className="mb-2">{service.icon}</div>
                  <p className="text-sm md:text-xl text-center font-semibold mb-4">{service.title}</p>
                  <p className='text-sm font-normal'>{service.subTitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
