import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="bg-primary-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1 ml-4">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-0.5">
              <li><Link to="/about" className="hover:text-other-gray">About us</Link></li>
              <li><Link to="/faqs" className="hover:text-other-gray">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-0.5">
              <li><Link to="/contact" className="hover:text-other-gray">Contact us</Link></li>
              <li><Link to="/environmental" className="hover:text-other-gray">Environmental Initiatives</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Policies</h4>
            <ul className="space-y-0.5">
              <li><Link to="/return" className="hover:text-other-gray">Return & Exchange</Link></li>
              <li><Link to="/privacy" className="hover:text-other-gray">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Socials</h4>
            <ul className="space-y-0.5">
              <li>
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-other-gray"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-other-gray"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe for latest sale updates!</p>
            <form onSubmit={handleFormSubmit} className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow w-64 p-3 text-primary-dark focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary-dark rounded-r-md p-3 text-primary hover:bg-primary transition-colors flex items-center"
              >
                <FaPaperPlane className="text-lg" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-other-gray">
          © 2024 Focus Clothing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
