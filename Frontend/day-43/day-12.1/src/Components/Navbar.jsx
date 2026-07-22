import React, { useContext } from "react";
import { ShoppingCart, Store, Menu } from "lucide-react";
import { MyStore } from "../Context/MyContext";
const Navbar = () => {
  const { setToggle } = useContext(MyStore)
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Store className="text-indigo-600" size={30} />
          <h1 className="text-2xl font-bold tracking-wide text-gray-800">
            Shop<span className="text-indigo-600"> Kart</span>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li className="hover:text-indigo-600 cursor-pointer transition">
            Home
          </li>

          <li onClick={() => {
            setToggle(true)
          }} className="hover:text-indigo-600 cursor-pointer transition">
            Products
          </li>

          <li className="hover:text-indigo-600 cursor-pointer transition">
            Categories
          </li>

          <li className="hover:text-indigo-600 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-indigo-600 cursor-pointer transition">
            Contact
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <button className="relative cursor-pointer">
            <ShoppingCart
              onClick={() => {
                setToggle(false)
              }}
              size={28}
              className="text-gray-700 hover:text-indigo-600 transition"
            />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Login */}
          <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition cursor-pointer">
            Login
          </button>

          {/* Mobile Menu */}
          <button className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;