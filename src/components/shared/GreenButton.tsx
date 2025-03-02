import { FaArrowDownLong } from "react-icons/fa6";

const GreenButton = ({ title, mode }: { title: string; mode?: string }) => {
  return (
    <button
      className={`${
        mode === "white"
          ? "bg-white text-[#335F32] border-2 border-solid border-[#335F32]"
          : "bg-green-linear text-white"
      } ${
        mode === "getStarted"
          ? "py-3 lg:hover:scale-[1.05] active:scale-[1.05] active:opacity-80"
          : "py-[16px] active:opacity-80 active:scale-[1.1] lg:hover:scale-[1.1]"
      } flex items-center justify-center gap-3 rounded-100  px-7  text-[13px] font-bold transition-all `}
    >
      {title}

      <span
        className={`${mode === "white" ? "hidden" : ""} ${
          mode === "hero" ? "" : "rotate-[225deg]"
        } rounded-full bg-white p-1 border-2 border-solid border-[#335F32]`}
      >
        <FaArrowDownLong className="font-bold text-[#335F32]" />
      </span>
    </button>
  );
};

export default GreenButton;
