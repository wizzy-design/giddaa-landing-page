"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Title from "./shared/Title";
import { useState } from "react";

const PeopleTalk = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10">
      <Title
        title="People Talk"
        subtitle="What our customers and partners think about us."
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

      <div className="relative flex max-w-5xl flex-col overflow-hidden rounded-lg border-2 border-green-900 md:flex-row">
        {/* Left Section - Text & Profile Image */}
        <div className="w-full bg-gradient-to-r from-green-50 to-white p-6 md:w-3/4">
          <div className="mb-4 h-20 w-20 overflow-hidden rounded-lg">
            <Image
              src="/placeholder-profile.jpg" // Replace this with your profile image
              alt="Profile"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-bold">Chima Okereke</h3>
          <p className="text-sm font-semibold text-green-900">
            DIRECTOR OF SALES AT BILAAD REALTY
          </p>
          <p className="mt-2 text-sm text-gray-600">
            "I had an outstanding experience with the short-let booking service!
            From start to finish, the team made the entire process smooth and
            easy. I needed help finding the perfect place for my stay, and they
            went above and beyond..."
          </p>
        </div>

        {/* Right Section - Video Placeholder */}
        <div className="relative w-full md:w-1/4">
          <Image
            src="/placeholder-video.jpg" // Replace with actual video thumbnail
            alt="Testimonial Video"
            width={400}
            height={300}
            className="h-full w-full object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <FaPlay className="rounded-full bg-white p-3 text-4xl text-green-900" />
          </button>
        </div>
      </div>

      <Timeline />
    </section>
  );
};

export default PeopleTalk;

const categories = [
  "Buy",
  "Short Lets",
  "Invest",
  "Sell",
  "Services",
  "Enterprise",
];

const Timeline = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Step 1 - Active */}
      <div className="relative flex flex-col items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-900 text-sm font-semibold text-white">
          1
        </div>
        <div className="h-10 w-1 bg-green-900"></div> {/* Active Line */}
      </div>

      {/* Inactive Steps */}
      {[2, 3, 4].map((step) => (
        <div key={step} className="flex flex-col items-center">
          <div className="h-6 w-6 rounded-full border-2 border-gray-300"></div>
          {step !== 4 && <div className="h-10 w-1 bg-gray-300"></div>}
        </div>
      ))}
    </div>
  );
};
