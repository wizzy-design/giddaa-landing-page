import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t-[14px] border-solid border-[#F5F5DE] bg-[#294C28] py-10 text-white">
      <div className="mx-4 max-w-[2000px] px-6 lg:mx-6">
        {/* Newsletter Section */}
        <div className="mb-6 flex flex-col items-center justify-between lg:flex-row">
          <div>
            <h3 className="text-lg font-semibold">Join Our Newsletter</h3>
            <p className="text-sm text-gray-200">
              Stay up to date with news and updates by subscribing to our
              newsletter
            </p>
          </div>
          <div className="mt-4 flex justify-center">
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
        <div className="grid grid-cols-2 text-sm text-gray-200 md:grid-cols-6">
          {/* About Us */}
          <div>
            <h4 className="mb-2 font-semibold text-white">ABOUT US</h4>
            <ul>
              <li className="cursor-pointer hover:text-white">Our Company</li>
              <li className="cursor-pointer hover:text-white">Our Team</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-2 font-semibold text-white">PRODUCTS</h4>
            <ul>
              <li className="cursor-pointer hover:text-white">Buy</li>
              <li className="cursor-pointer hover:text-white">Short Lets</li>
              <li className="cursor-pointer hover:text-white">Invest</li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="mb-2 font-semibold text-white">PARTNERS</h4>
            <ul>
              <li className="cursor-pointer hover:text-white">
                Join as a Property Developer
              </li>
              <li className="cursor-pointer hover:text-white">
                Join as a Lender
              </li>
              <li className="cursor-pointer hover:text-white">
                Join as an Agent
              </li>
              <li className="cursor-pointer hover:text-white">
                Sell Your House
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-2 font-semibold text-white">RESOURCES</h4>
            <ul>
              <li className="cursor-pointer hover:text-white">Tutorials</li>
              <li className="cursor-pointer hover:text-white">
                Watch the Demo
              </li>
              <li className="cursor-pointer hover:text-white">Blog</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-2 font-semibold text-white">CONTACT US</h4>
            <ul>
              <li className="cursor-pointer hover:text-white">
                info@giddaa.com
              </li>
              <li className="cursor-pointer hover:text-white">WhatsApp</li>
              <li className="cursor-pointer hover:text-white">
                Book a Meeting
              </li>
              <li className="cursor-pointer hover:text-white">
                +234 809 762 1791
              </li>
            </ul>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="mb-2 font-semibold text-white">SITE NAVIGATION</h4>
            <ul>
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">Properties</li>
              <li className="cursor-pointer hover:text-white">Developers</li>
              <li className="cursor-pointer hover:text-white">
                Sell Your House
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Community Section */}
        <div className="mt-8 flex flex-col items-center">
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
