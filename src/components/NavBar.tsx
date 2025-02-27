import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="border-b border-solid border-[#D9D9D9]">
      <div className="flex items-center justify-center gap-2 p-5">
        <Image
          src="Logo.svg"
          alt="Giddaa Logo"
          width={99.9082260131836}
          height={39}
        />

        {/* Search Bar */}
        <div className="mb-4 flex h-[35px] w-full max-w-full items-center rounded-[100px] border border-solid border-[#F0F0F0] bg-transparent px-4 py-2 md:mb-0 md:max-w-[189px]">
          <Image src="search.svg" alt="Search Icon" width={15} height={15} />
          <input
            type="text"
            placeholder="Search for anything."
            className="ml-2.5 flex-1 bg-transparent text-xs text-[#4B4B4B] outline-none placeholder:text-xs placeholder:text-[#979797] 2xl:text-sm 2xl:placeholder:text-sm"
          />
        </div>

        <ul className="flex gap-8">
          {[
            "Buy",
            "Shortlets",
            "Sell",
            "Invest",
            "Services",
            "Enterprise",
            "Agents & Realtors",
          ].map((item, index) => (
            <li
              key={item}
              className="flex cursor-pointer items-center text-nowrap text-xs text-[#4B4B4B] hover:text-black 2xl:text-sm"
            >
              <p className="flex items-center gap-[6px]">
                <p
                  className={`flex flex-col items-center ${
                    index == 1
                      ? " font-bold bg-green-linear pt-1 text-transparent bg-clip-text"
                      : ""
                  }`}
                >
                  {item}
                  <span
                    className={`${
                      index == 1 ? "" : "hidden"
                    } rounded-100 h-[4px] w-[25px] bg-green-linear relative top-[3px]`}
                  ></span>
                </p>
                <span
                  className={`${index == 6 ? "hidden" : ""} flex items-center `}
                >
                  <FaCaretDown />
                </span>
              </p>
            </li>
          ))}
        </ul>

        <button className="mx-4 border-l border-r border-solid border-[#D9D9D9] bg-green-linear bg-clip-text px-5 py-2 text-xs font-bold text-transparent 2xl:text-sm">
          Refer & Earn
        </button>

        <div className="flex items-center gap-2">
          <Image src="USA.svg" alt="USA dropdown Icon" width={84} height={31} />
          <Image src="whiteMan.svg" alt="Man Icon" width={32} height={32} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
