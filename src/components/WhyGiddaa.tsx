"use client";

import { useState } from "react";
import { MdOutlineSoupKitchen } from "react-icons/md"; // Icon for example
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
                className={`px-4 py-2 rounded-full border-2 transition-all ${
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

          {/* Service Cards */}
          <div className="mt-8 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 md:grid-cols-3">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex max-w-[346px] flex-col gap-2 rounded-lg border-2 border-green-900 p-6"
                >
                  <MdOutlineSoupKitchen className="text-3xl text-green-900" />
                  <h3 className="text-lg font-semibold">Stay Fully Booked</h3>
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
