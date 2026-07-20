import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    `relative text-lg font-semibold transition duration-300
    ${
      isActive
        ? "text-indigo-600"
        : "text-gray-700 hover:text-indigo-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-wide"
        >
          <span className="text-indigo-600">Shop</span>
          <span className="text-gray-800">Zone</span>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-10">
          <NavLink to="/" className={navLinkStyle}>
            {({ isActive }) => (
              <>
                Home
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            {({ isActive }) => (
              <>
                About
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            {({ isActive }) => (
              <>
                Contact
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition cursor-pointer">
            Login
          </button>

          <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;