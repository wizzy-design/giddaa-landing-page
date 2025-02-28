import { FaArrowDownLong } from "react-icons/fa6";

const GreenButton = ({ title, mode }: { title: string; mode?: string }) => {
  return (
    <button className="flex items-center gap-3 rounded-100 bg-green-linear px-7 py-[18.5px] text-[13px] font-bold text-white transition-all hover:scale-[1.1]">
      {title}

      <span
        className={`${
          mode === "hero" ? "" : "-rotate-45"
        } rounded-full bg-white p-1 border-2 border-solid border-[#335F32]`}
      >
        <FaArrowDownLong className="font-bold text-[#335F32]" />
      </span>
    </button>
  );
};

export default GreenButton;
