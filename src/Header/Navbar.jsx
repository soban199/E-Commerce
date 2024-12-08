import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-primary">
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden p-2 text-xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <div
        className={`md:flex md:space-x-4 md:items-center md:static fixed top-0 left-0 h-full w-64 bg-primary transform transition-transform ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 md:translate-x-0 md:w-auto md:h-auto`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(false)} // Close the menu on click of the close icon for mobile
          className="text-2xl text-secondary-light hover:text-gray-800 absolute top-4 right-4 md:hidden"
        >
          <FaTimes />
        </button>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `block p-2 rounded hover:bg-primary-light md:hover:bg-primary-light relative ${
              isActive
                ? "after:content-[''] after:block after:h-0.5 after:bg-black after:absolute after:bottom-[-12px] after:left-0 after:w-full"
                : ""
            }`
          }
          onClick={() => setIsMenuOpen(false)} // Close menu on click for mobile
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block p-2 rounded hover:bg-primary-light md:hover:bg-primary-light relative ${
              isActive
                ? "after:content-[''] after:block after:h-0.5 after:bg-primary-dark after:absolute after:bottom-[-12px] after:left-0 after:w-full"
                : ""
            }`
          }
          onClick={() => setIsMenuOpen(false)} // Close menu on click for mobile
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block p-2 rounded hover:bg-primary-light md:hover:bg-primary-light relative ${
              isActive
                ? "after:content-[''] after:block after:h-0.5 after:bg-black after:absolute after:bottom-[-12px] after:left-0 after:w-full"
                : ""
            }`
          }
          onClick={() => setIsMenuOpen(false)} // Close menu on click for mobile
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
