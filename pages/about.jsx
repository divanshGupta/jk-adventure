import Image from "next/image";

const team = [
    {
      id: 1,
      name: "Sachin",
      image: "/images/img5.jpg",
      alt: "founder",
    },
    {
      id: 2,
      name: "Rahul",
      image: "/images/img5.jpg",
      alt: "founder",
    },
  ];

export default function AboutSection() {

  return (
    <section className="w-full bg-gray-50">
      <div className="">
        {/* Text Section */}
        <div className="flex flex-col">
         
          {/* content */}
          <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            <Image
              src="/images/hero/kashmir-bhadarva-2.jpg"
              alt="About Banner"
              className="object-cover w-full h-full"
              layout="fill"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" /> {/* Gradient overlay */}

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
                About Our Journey
              </h1>
            </div>
          </div>

          <div className="px-6 py-4 md:px-40 md:py-12 mb-4">
            <div className="hidden md:flex gap-4 md:gap-8 font-normal text-base">
                <p>
                  Welcome to JK Adventure, your trusted travel partner in the heart of Jammu & Kashmir. Changing the world through travel: that’s been our goal since 2005. We specialize in curating unforgettable experiences that showcase the natural beauty, vibrant culture, and hidden gems of this majestic region.
                </p>
                <p className="hidden md:block">
                  Whether you're seeking peaceful retreats, thrilling adventures, or scenic road trips, our team is here to make it happen. From guided tours and custom travel packages to bike rentals and reliable taxi services, we offer everything you need to explore the region your way.
                  Join us in discovering the soul of the Himalayas, one trip at a time.
                </p>  
            </div>

            <div className="md:hidden">
              <p className="flex flex-col gap-2 ">
                <span>
                  We're JK Adventure, a local travel crew from Jammu & Kashmir bringing you the best of the mountains — epic tours, wild adventures, smooth bike rentals, and on-time taxi rides.
                </span>
                <span>
                  Whether you're chasing sunsets in Gulmarg, biking through Ladakh vibes, or just here to chill, we've got your back.
                  Real locals. Real stories. Real adventures.
                </span>
                <span>
                  Let’s make your trip unforgettable.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Image Stack */}
        <div className="px-40 flex flex-col items-center gap-6 md:justify-around md:flex-row mb-12">
          {team.map((member, idx) => (           
            <div key={idx} className="text-center">            
              <div className="relative shadow-lg w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg">
                <Image 
                  src={member.image} 
                  alt={member.alt} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="font-semibold text-xl md:text-2xl mt-4">
                {member.name}, Founder
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
