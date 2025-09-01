import { Phone, Map, CheckCircle, Plane } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Connect",
    description:
      "Call us or enquire online. Share your wish list and we’ll start planning your journey.",
    icon: <Phone className="w-10 h-10 text-teal-600" />,
  },
  {
    id: 2,
    title: "Customise",
    description:
      "Your dedicated travel expert will be in touch within 24 hours to start designing your bespoke itinerary.",
    icon: <Map className="w-10 h-10 text-teal-600" />,
  },
  {
    id: 3,
    title: "Confirm",
    description:
      "We won’t stop refining your plans until we get the perfect trip at the best price.",
    icon: <CheckCircle className="w-10 h-10 text-teal-600" />,
  },
  {
    id: 4,
    title: "Travel",
    description:
      "Receive your travel documents, pack your bags and set off on your trip of a lifetime!",
    icon: <Plane className="w-10 h-10 text-teal-600" />,
  },
];

export default function HowToBook() {
  return (
    <section className="bg-gray-50 text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center text-black">
        <h3 className="text-green-900 font-semibold mb-2">
          Start your unique journey
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Book</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          We believe in making your journey effortless. Whether you already have
          a dream destination in mind or need some inspiration, our travel
          experts are here to create your custom itinerary.
        </p>

        {/* Steps Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/20 transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex mt-12 justify-center gap-4">
          <a
            href="tel:+61280152809"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Call us: +91 94191 44037
          </a>
          <a
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-xl font-medium transition"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
