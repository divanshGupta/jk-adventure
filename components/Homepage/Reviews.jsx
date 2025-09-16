// components/Reviews.jsx
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Aarav Mehta",
    location: "Mumbai, India",
    review:
      "Booking with this agency was the best decision! Everything was smooth and well planned. I felt cared for every step of the journey.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophie Williams",
    location: "London, UK",
    review:
      "The team helped us customise the perfect itinerary. The entire trip was seamless and stress-free. Highly recommend!",
    rating: 4,
  },
  {
    id: 3,
    name: "Rohan Sharma",
    location: "Delhi, India",
    review:
      "From the first call to the last day of my trip, everything was handled so professionally. Definitely booking again!",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#FFF9EE] py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-teal-400 font-semibold mb-2">Our Happy Travellers</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What People Say</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          We’re proud to have created unforgettable journeys for our clients. 
          Here’s what some of them had to say about their experience with us.
        </p>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-600 rounded-2xl p-6 text-left shadow-lg hover:shadow-teal-500/20 transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm mb-6">{review.review}</p>

              {/* User Info */}
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <span className="text-gray-400 text-sm">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
