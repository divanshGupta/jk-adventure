import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-gray-800 text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left Side - Image + Text */}
        <div className="flex items-center gap-6 md:w-1/2">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-700 flex-shrink-0">
            <Image
              src="/images/bike1.jpg" // replace with your image
              alt="Travel Expert"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Ready to Explore More?</h2>
            <p className="text-gray-300">
              Our travel experts are ready to start creating your tailormade trip.
            </p>
          </div>
        </div>

        {/* Right Side - CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 md:w-1/2 justify-center">
          {/* Call Card */}
          <a
            href="tel:+9419144037"
            className="flex flex-col items-center justify-center bg-gray-700 rounded-xl px-8 py-6 text-center shadow-md hover:shadow-teal-500/20 transition w-full sm:w-1/2"
          >
            <div className="bg-yellow-500 p-3 rounded-full mb-4">
              <Phone className="w-6 h-6 text-gray-900" />
            </div>
            <h4 className="font-semibold mb-1">Talk to Our Experts</h4>   
            <p className="text-teal-400 font-medium">+91 94191 44037</p>   
          </a>

          {/* Enquire Card */}
          <a
            href="/contact"
            className="flex flex-col items-center justify-center bg-gray-700 rounded-xl px-8 py-6 text-center shadow-md hover:shadow-teal-500/20 transition w-full sm:w-1/2"
          >
            <div className="bg-yellow-500 p-3 rounded-full mb-4">
              <Mail className="w-6 h-6 text-gray-900" />
            </div>
            <h4 className="font-semibold mb-1">Enquire Now</h4>
            <button className="bg-forest-green text-white hover:bg-misty-blue px-6 py-2 rounded-full">Get in touch</button>
          </a>
        </div>
      </div>
    </section>
  );
}
