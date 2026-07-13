import React from "react";

const Navbar = ({ showForm, setShowForm }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
            UserHub
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-10 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-blue-600 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Contact
          </li>
        </ul>

        {/* Toggle Button */}
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition cursor-pointer"
        >
          {showForm ? "View Users" : "Create User"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;