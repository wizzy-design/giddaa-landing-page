"use client";

import Image from "next/image";
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
            className={`px-4 py-2 rounded-full border-2 text-xs font-medium  ${
              activeCategory === category
                ? "bg-green-linear text-white border-[#335F32] border-[0.6px]"
                : "border-[#335F32]  text-[#335F32] hover:bg-green-linear hover:text-white"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex items-center">
        <div className="relative my-6 flex min-h-[480px] max-w-5xl flex-col overflow-hidden rounded-[40px] border-2 border-[#335F32] md:flex-row">
          {/* Left Section - Text & Profile Image */}
          <div className="w-full flex-1 bg-[linear-gradient(314.28deg,_rgba(255,_255,_251,_0.7)_28.4%,_rgba(246,_253,_244,_0.7)_60.34%,_rgba(255,_237,_203,_0.7)_81.21%)] p-6 md:w-3/4">
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image
                src="/peopleTalk1.png" // Replace this with your profile image
                alt="Profile"
                width={226}
                height={215}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-bold lg:text-2xl">Chima Okereke</h3>
            <p className="my-2 bg-green-linear bg-clip-text text-sm font-semibold text-transparent">
              DIRECTOR OF SALES AT BILAAD REALTY
            </p>
            <p className="text-sm text-gray-600">
              "I had an outstanding experience with the short-let booking
              service! From start to finish, the team made the entire process
              smooth and easy. I needed help finding the perfect place for my
              stay, and they went above and beyond..."
            </p>
          </div>

          {/* Right Section - Video Placeholder */}
          <div className="relative w-full flex-1 md:w-1/4">
            <Image
              src="/peopleTalk2.png" // Replace with actual video thumbnail
              alt="Testimonial Video"
              width={620.32373046875}
              height={590}
              className="h-full w-full border-l-2 border-solid border-[#335F32] object-cover"
            />
          </div>
        </div>

        <Timeline />
      </div>
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
    <div className="ml-4 flex flex-col items-center">
      {/* Step 1 - Active */}
      <div className="relative flex flex-col items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-900 text-sm font-semibold text-white lg:h-11 lg:w-11">
          1
        </div>
        <div className="h-10 w-1 bg-gradient-to-b from-green-900 to-[#D9D9D9]"></div>{" "}
        {/* Active Line */}
      </div>

      {/* Inactive Steps */}
      {[2, 3, 4].map((step) => (
        <div key={step} className="flex flex-col items-center">
          <div className="h-6 w-6 rounded-full border-2 border-gray-300 bg-[#D9D9D9] lg:h-10 lg:w-10"></div>
          {step !== 4 && <div className="h-10 w-1 bg-[#D9D9D9]"></div>}
        </div>
      ))}
    </div>
  );
};
