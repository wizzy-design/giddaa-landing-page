const Footer = () => {
    return (
      <footer className="bg-green-900 py-10 text-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* Newsletter Section */}
          <div className="mb-6 text-center">
            <h3 className="text-lg font-semibold">Join Our Newsletter</h3>
            <p className="text-sm text-gray-200">
              Stay up to date with news and updates by subscribing to our newsletter
            </p>
            <div className="mt-4 flex justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-64 rounded-full px-4 py-2 text-black focus:outline-none"
              />
              <button className="ml-2 rounded-full bg-white px-5 py-2 font-medium text-green-900">
                Subscribe
              </button>
            </div>
          </div>
  
          {/* Footer Links Section */}
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-200 md:grid-cols-5">
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
                <li className="cursor-pointer hover:text-white">Join as a Property Developer</li>
                <li className="cursor-pointer hover:text-white">Join as a Lender</li>
                <li className="cursor-pointer hover:text-white">Join as an Agent</li>
                <li className="cursor-pointer hover:text-white">Sell Your House</li>
              </ul>
            </div>
  
            {/* Contact Us */}
            <div>
              <h4 className="mb-2 font-semibold text-white">CONTACT US</h4>
              <ul>
                <li className="cursor-pointer hover:text-white">info@giddaa.com</li>
                <li className="cursor-pointer hover:text-white">WhatsApp</li>
                <li className="cursor-pointer hover:text-white">Book a Meeting</li>
                <li className="cursor-pointer hover:text-white">+234 809 762 1791</li>
              </ul>
            </div>
  
            {/* Site Navigation */}
            <div>
              <h4 className="mb-2 font-semibold text-white">SITE NAVIGATION</h4>
              <ul>
                <li className="cursor-pointer hover:text-white">Home</li>
                <li className="cursor-pointer hover:text-white">Properties</li>
                <li className="cursor-pointer hover:text-white">Developers</li>
                <li className="cursor-pointer hover:text-white">Sell Your House</li>
              </ul>
            </div>
          </div>
  
          {/* Social Media & Community Section */}
          <div className="mt-8 flex flex-col items-center">
            <div className="flex space-x-4">
              <span className="cursor-pointer text-xl">📷</span>
              <span className="cursor-pointer text-xl">🎵</span>
              <span className="cursor-pointer text-xl">🐦</span>
            </div>
            <button className="mt-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-green-900">
              Join Our Community 🚀
            </button>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-6 border-t border-gray-400 pt-4 text-center text-xs text-gray-300">
            <p>PROPERTY OF GIDDAA INC.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white">Terms & Conditions</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  