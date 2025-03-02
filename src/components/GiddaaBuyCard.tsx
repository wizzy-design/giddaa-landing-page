"use client";

import Image from "next/image";

const GiddaaBuyCard = () => {
  return (
    <div className="buy-gradient flex max-h-[109px] w-fit max-w-[300px] items-center justify-center gap-3 px-0 py-5">
      <div className="flex-shrink-0">
        <Image src="/wavingHand.gif" alt="Waving Hand" width={44} height={44} />
      </div>

      {/* Text Content */}
      <div className="w-[70%]">
        <p className="text-sm font-bold lg:text-base">
          You&apos;re Now on Giddaa <span className="text-[#346633]">Buy</span>
        </p>
        <p className="text-[13px]">
          Find and buy your dream home on various purchase plans.
        </p>
      </div>
    </div>
  );
};

export default GiddaaBuyCard;
