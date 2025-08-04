import React, { useState } from "react";
import { allServices } from "../../lib/dummyPackages"; // ✅ Change path accordingly
import PlanCard from "../../components/PlanCard"; // ✅ Reusable card component

const { bikes } = allServices;

const BikesPage = () => {
  const [sortBy, setSortBy] = useState("default");

  const sortedBikes = [...bikes].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "date") return new Date(a.date) - new Date(b.date);
    return 0; // default
  });

  return (
    <main className="mt-12 md:mt-24 w-full md:mx-auto min-h-screen text-black">
      <header className="mb-4 md:mb-6 px-6 md:px-20 py-8 w-full flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className=" py-8 flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-2">Fuel Your Freedom.</h1>
          <p>Rent powerful, well-maintained bikes and ride into adventure—on your own terms.</p>
        </div>

        {/* Sorting */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="date">Start Date</option>
          </select>
        </div>
      </header>

      {/* Card Grid */}
      <section className="mb-6 px-6 md:px-20 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedBikes.map((tour) => (
            <PlanCard key={tour.slug} plan={tour} serviceType={"bikes"}/>
        ))}
      </section>
    </main>
  );
};

export default BikesPage;
