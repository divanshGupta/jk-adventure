import { ChevronLeft, ChevronRight } from "lucide-react";
import { userAgent } from "next/server";
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';

const Reviews = () => {

    const scrollContainerRef = useRef(null);
    const cardRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {id: 1, name: "Alice Johnson", location: "New York, NY", text: "Amazing service! Highly recommend.", rating: 5, image: "/images/alice.jpg"},
        {id: 2, name: "Bob Smith", location: "Los Angeles, CA", text: "Great experience, very professional.", rating: 4, image: "/images/bob.jpg"},
        {id: 3, name: "Charlie Brown", location: "Chicago, IL", text: "Loved   the attention to detail.", rating: 5, image: "/images/charlie.jpg"},
        {id: 4, name: "Diana Prince", location: "Miami, FL", text: "Exceptional quality and service.", rating: 5, image: "/images/diana.jpg"},
        {id: 5, name: "Ethan Hunt", location: "Seattle, WA", text: "Fantastic team, very responsive.", rating: 4, image: "/images/ethan.jpg"},
        {id: 6, name: "Alice Johnson", location: "New York, NY", text: "Amazing service! Highly recommend.", rating: 5, image: "/images/alice.jpg"},
        {id: 7, name: "Bob Smith", location: "Los Angeles, CA", text: "Great experience, very professional.", rating: 4, image: "/images/bob.jpg"},
        {id: 8, name: "Charlie Brown", location: "Chicago, IL", text: "Loved   the attention to detail.", rating: 5, image: "/images/charlie.jpg"},
        {id: 9, name: "Diana Prince", location: "Miami, FL", text: "Exceptional quality and service.", rating: 5, image: "/images/diana.jpg"},
        {id: 10, name: "Ethan Hunt", location: "Seattle, WA", text: "Fantastic team, very responsive.", rating: 4, image: "/images/ethan.jpg"},
    ];

    const scrollToIndex = (index) => {
    const cardWidth = cardRef.current?.offsetWidth || 300;
    const gap = 16;
    const scrollAmount = (cardWidth + gap) * index;

    scrollContainerRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = (direction) => {
    let newIndex =
      direction === "left"
        ? (currentIndex - 1 + reviews.length) % reviews.length
        : (currentIndex + 1) % reviews.length;

    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };
    return (
        <div className="w-[90%] md:w-[80%] mx-auto relative overflow-hidden py-8">

            <button
                onClick={() => handleScroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
            >
                <ChevronLeft />
            </button>

            <button
                onClick={() => handleScroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
            >
                <ChevronRight />
            </button>

            <div ref={scrollContainerRef} className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar px-12">
                {reviews.map((r, index) => (
                    <div key={index} 
                    ref={index === 0 ? cardRef : null}
                    className="min-w-[300px] bg-white rounded-xl shadow-lg p-4 flex-shrink-0">
                        <div className="flex items-center space-x-3">
                            <img src={r.image} className="w-12 h-12 rounded-full" />
                            <div>
                            <h4 className="font-semibold">{r.name}</h4>
                            <p className="text-sm text-gray-500">{r.location}</p>
                            </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-700">"{r.text}"</div>
                        <div className="mt-2 flex text-yellow-400">
                            {"⭐".repeat(r.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Reviews;