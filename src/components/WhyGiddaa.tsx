"use client";

import { useState } from "react";
import { PiCookingPot } from "react-icons/pi";
import Title from "./shared/Title";
import Image from "next/image";

const WhyGiddaa = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="relative my-20 flex w-full flex-col items-center justify-center px-4 py-10">
      <Image
        src="product-gradient.svg"
        alt="Product gradient"
        fill
        className="pointer-events-none"
      />
      <div className="flex items-center justify-center">
        <div className="max-w-[2000px]">
          <div>
            <Title
              title="Why Giddaa?"
              subtitle="Reasons why you should embark on your real estate journey with us, and our products.."
            />
          </div>

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

          {/* Service Cards */}
          <div className="mt-8 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 md:grid-cols-3">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex max-w-[346px] flex-col gap-2 rounded-[16px] border-2 border-green-900 p-6"
                >
                  <PiCookingPot className="text-3xl text-green-900" />
                  <h3 className="text-lg font-bold">Stay Fully Booked</h3>
                  <p className="text-gray-600">
                    Order from our vendors and restaurants up till 12am
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGiddaa;

const categories = [
  "Buy",
  "Short Lets",
  "Invest",
  "Sell",
  "Services",
  "Enterprise",
];
