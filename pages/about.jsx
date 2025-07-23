// components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section className="pt-24 md:pt-28 w-full md:py-16 px-2 md:px-20 bg-white">
      <div className="w-full md:mx-auto flex flex-col md:flex-row items-center gap-12 ">
        {/* Text Section */}
        <div className="px-12 md:w-1/2  ">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">ABOUT US</h2>
          <p className="text-gray-500 uppercase tracking-wide mb-4">Since 2005</p>
          <p className="text-gray-700 leading-relaxed">
            Travel Agency Always Travel organizes tours and trips to more than 50 countries around the world.
            For 15 years, we have been making you happy with our work. During this time, we have developed the
            basic principles and criteria for our work. They were reliability, customer care and positive feedback
            from travelers. More than 30,000 people have already traveled with us. Join us and you!
          </p>
        </div>

        {/* Image Stack */}
        <div className="px-12 md:w-1/2 flex flex-col md:relative md:h-[400px] ">
          {/* Background Image */}
          <div className="md:absolute top-0 right-0 w-60 h-40 md:w-96 md:h-72 rounded-lg shadow-lg bg-gray-300 border-4 border-white">
            {/* <img src="/images/valley-waterfall.jpg" alt="Aerial Waterfall" className="w-full h-full object-cover rounded-lg" /> */}
          </div>

          {/* Foreground Image */}
          <div className="md:absolute bottom-0 left-0 w-60 h-40 md:w-80 md:h-64 rounded-lg shadow-lg bg-gray-400 border-4 border-white">
            {/* <img src="/images/bridge-mountain.jpg" alt="Bridge View" className="w-full h-full object-cover rounded-lg" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
