"use client";

import Image from "next/image";

const ScrollUp = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleScrollToTop}
      className="fixed bottom-4 right-4 z-40 cursor-pointer"
    >
      <Image
        src="/scrollToTop.svg"
        alt="Scroll to top"
        width={50.001953125}
        height={50.001953125}
      />
    </div>
  );
};

export default ScrollUp;
