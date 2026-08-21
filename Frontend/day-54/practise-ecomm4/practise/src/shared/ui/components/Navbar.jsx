
import React, { useRef } from "react";
import { NavLink } from "react-router";
import { ShoppingCart, Package, LogOut } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  });

  const linkStyle = ({ isActive }) =>
    `text-sm font-semibold transition-colors duration-200 ${
      isActive
        ? "text-black"
        : "text-neutral-500 hover:text-black"
    }`;

  return (
    <nav
      ref={navRef}
      className="w-full px-4 py-4 sm:px-6 lg:px-10"
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-black/10 bg-white px-5 shadow-lg sm:px-7">

        {/* Logo */}
        <div className="shrink-0">
          <h1 className="text-xl font-bold tracking-tight text-black">
            Logo
          </h1>
        </div>

        {/* Center Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">

          <NavLink
            to="/main/home"
            className={linkStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/main/products"
            className={linkStyle}
          >
            Products
          </NavLink>

          <NavLink
            to="/main/orders"
            className={linkStyle}
          >
            Orders
          </NavLink>

          <NavLink
            to="/main/about"
            className={linkStyle}
          >
            About
          </NavLink>

        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <NavLink
            to="/main/cart"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-black transition-all duration-200 hover:bg-neutral-100 hover:scale-105"
          >
            <ShoppingCart className="h-5 w-5" />
          </NavLink>

          {/* Orders */}
          <NavLink
            to="/main/orders"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-black transition-all duration-200 hover:bg-neutral-100 hover:scale-105"
          >
            <Package className="h-5 w-5" />
          </NavLink>

          {/* Logout */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 sm:px-5"
          >
            <LogOut className="h-4 w-4" />

            <span className="hidden sm:inline">
              Logout
            </span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

