"use client";

import { useState } from "react";
import Title from "./shared/Title";
import GreenButton from "./shared/GreenButton";

const OurPartners = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="flex flex-col items-center justify-center px-4 py-10">
      <Title
        title="Our Partners"
        subtitle="Organizations we’ve partnered with to make real estate in Nigeria a pleasant experience for all."
      />

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border-2  ${
              activeCategory === category
                ? "bg-green-900 text-white border-green-900"
                : "border-green-900 text-green-900 hover:bg-green-900 hover:text-white"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Partners Logo Grid */}
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="h-20 w-20 rounded-full bg-gray-300"
            ></div>
          ))}
      </div>

      {/* Footer Text */}
      <h2 className="fonr-bold mb-10 mt-6 text-2xl font-semibold text-[#E4E4E4] lg:text-4xl">
        Over 50 Partners
      </h2>

      <GreenButton title="View All Partners" />
    </section>
  );
};

export default OurPartners;

const categories = [
  "Government",
  "Property Developers",
  "Property Managers",
  "Financial Institutions",
  "Non-Governmental Organizations",
];
