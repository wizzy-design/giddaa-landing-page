"use client";
import Image from "next/image";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="overflow-hidden border-b border-solid border-[#D9D9D9] lg:flex lg:justify-center">
      <div className="flex max-w-[2000px] items-center justify-between px-5 py-6 lg:gap-4">
        <Image
          src="Logo.svg"
          alt="Giddaa Logo"
          width={99.9082260131836}
          height={39}
        />

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links (Desktop & Mobile) */}
        <div
          className={`fixed space-y-5 lg:space-y-0 left-0 top-0 z-50 h-full w-full bg-white p-6 transition-transform duration-300 ease-in-out lg:static lg:gap-2 lg:flex lg:h-auto lg:w-auto lg:p-0 lg:items-center ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <button
            onClick={toggleMenu}
            className="absolute right-6 top-6 text-xl lg:hidden"
          >
            <FaTimes />
          </button>

          {/* Search Bar */}
          <div className="max-w-2/3 mb-4 mt-8 flex h-[35px] w-full items-center rounded-[100px] border border-solid border-[#F0F0F0] bg-transparent px-4 py-2 md:mb-0 md:max-w-[189px] lg:mt-0 2xl:max-w-[230px]">
            <Image src="search.svg" alt="Search Icon" width={15} height={15} />
            <input
              type="text"
              placeholder="Search for anything."
              className="ml-2.5 flex-1 bg-transparent text-xs text-[#4B4B4B] outline-none placeholder:text-xs placeholder:text-[#979797] 2xl:text-sm 2xl:placeholder:text-sm"
            />
          </div>

          <ul className="grid grid-cols-2 place-items-center gap-4 lg:flex lg:flex-row lg:gap-8">
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
                className="flex cursor-pointer items-center text-xs text-[#4B4B4B] hover:text-black 2xl:text-sm"
              >
                <p className="flex items-center gap-[6px]">
                  <span
                    className={`flex flex-col items-center ${
                      index === 1
                        ? " font-bold bg-green-linear pt-1 text-transparent bg-clip-text"
                        : ""
                    }`}
                  >
                    {item}
                    <span
                      className={`${
                        index === 1 ? "" : "hidden"
                      } rounded-100 h-[4px] w-[25px] bg-green-linear relative top-[3px]`}
                    ></span>
                  </span>
                  <span
                    className={`${
                      index === 6 ? "hidden" : ""
                    } flex items-center`}
                  >
                    <FaCaretDown />
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-4 lg:gap-0">
            <button className="border-l border-r border-solid border-[#D9D9D9] bg-green-linear bg-clip-text px-5 py-2 text-xs font-bold text-transparent lg:mx-4 2xl:text-sm">
              Refer & Earn
            </button>

            <div className="flex items-center gap-5">
              <Image
                src="USA.svg"
                alt="USA dropdown Icon"
                width={84}
                height={31}
              />
              <Image src="whiteMan.svg" alt="Man Icon" width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
