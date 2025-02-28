import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="h-full border-t-[14px] border-solid border-[#F5F5DE] bg-[#294C28] py-10 text-white lg:py-20">
      <div className="mx-4 max-w-[2000px] px-6 lg:mx-6">
        {/* Newsletter Section */}
        <div className="mb-6 flex flex-col items-center justify-between space-y-4 lg:mb-16 lg:flex-row lg:space-y-0">
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-lg font-semibold">Join Our Newsletter</h3>
            <p className="text-sm text-gray-200">
              Stay up to date with news and updates by subscribing to our
              newsletter
            </p>
          </div>

          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-64 rounded-full px-4 py-2 text-xs text-black placeholder:text-[#4B4B4B] focus:outline-none"
            />
            <button className="ml-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-[#335F32]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 text-sm text-white md:grid-cols-6 lg:gap-0">
          {/* About Us */}
          <div>
            <h4 className="mb-4 font-semibold text-white">ABOUT US</h4>
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-gray-200">
                Our Company
              </li>
              <li className="cursor-pointer hover:text-gray-200">Our Team</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-semibold text-white">PRODUCTS</h4>
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-gray-200">Buy</li>
              <li className="cursor-pointer hover:text-gray-200">Short Lets</li>
              <li className="cursor-pointer hover:text-gray-200">Invest</li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="mb-4 font-semibold text-white">PARTNERS</h4>
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-gray-200">
                Join as a Property Developer
              </li>
              <li className="cursor-pointer hover:text-gray-200">
                Join as a Lender
              </li>
              <li className="cursor-pointer hover:text-gray-200">
                Join as an Agent
              </li>
              <li className="cursor-pointer hover:text-gray-200">
                Sell Your House
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold text-white">RESOURCES</h4>
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-gray-200">Tutorials</li>
              <li className="cursor-pointer hover:text-gray-200">
                Watch the Demo
              </li>
              <li className="cursor-pointer hover:text-gray-200">Blog</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-4 font-semibold text-white">CONTACT US</h4>
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-gray-200">
                info@giddaa.com
              </li>
              <li className="cursor-pointer hover:text-gray-200">WhatsApp</li>
              <li className="cursor-pointer hover:text-gray-200">
                Book a Meeting
              </li>
              <li className="cursor-pointer hover:text-gray-200">
                +234 809 762 1791
              </li>
            </ul>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="mb-4 font-semibold text-white">SITE NAVIGATION</h4>
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-gray-200">Home</li>
              <li className="cursor-pointer hover:text-gray-200">Properties</li>
              <li className="cursor-pointer hover:text-gray-200">Developers</li>
              <li className="cursor-pointer hover:text-gray-200">
                Sell Your House
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Community Section */}
        <div className="mb-10 mt-16 flex flex-col items-center gap-5">
          <div className="flex space-x-4">
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={18}
                height={18}
              />
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white">
              <Image src="/tiktok.svg" alt="TikTok" width={16} height={20} />
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white">
              <Image src="/facebook.svg" alt="Facebook" width={8} height={17} />
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white">
              <Image src="/twitter.svg" alt="Twitter" width={18} height={18} />
            </div>
          </div>

          <button className="mt-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-green-900">
            <Image src="/whatsapp.svg" alt="Whatsapp" width={24} height={24} />
            Join Our Community
            <span className={`rotate-[225deg] rounded-full bg-[#335F32] p-1`}>
              <FaArrowDownLong className="font-bold text-white" />
            </span>
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t-2 border-white pt-4 text-center text-xs lg:flex lg:items-center lg:justify-between">
          <p className="text-[10px] font-bold text-white">
            PROPERTY OF GIDDAA INC.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-xs">
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
