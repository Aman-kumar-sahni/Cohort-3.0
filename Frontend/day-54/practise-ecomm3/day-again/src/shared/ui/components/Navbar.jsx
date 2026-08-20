import React, { useRef } from "react";
import { Box, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const Navbar = () => {
  const navbarRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".navbar-logo",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      )
        .fromTo(
          ".navbar-link",
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".navbar-icon",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        )
        .fromTo(
          ".navbar-button",
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        );
    },
    { scope: navbarRef }
  );

  return (
    <nav
      ref={navbarRef}
      className="w-full px-4 py-4 sm:px-6 lg:px-10"
    >
      <div className="flex h-16 w-full items-center justify-between rounded-2xl bg-white px-5 shadow-lg sm:px-8">

        {/* Logo */}
        <div className="navbar-logo">
          <h1 className="text-xl font-bold text-black">
            Logo
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/main/home"
            className={({ isActive }) =>
              `navbar-link text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-black"
                  : "text-neutral-500 hover:text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/products"
            className={({ isActive }) =>
              `navbar-link text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-black"
                  : "text-neutral-500 hover:text-black"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/main/cart"
            className={({ isActive }) =>
              `navbar-link text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-black"
                  : "text-neutral-500 hover:text-black"
              }`
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/main/orders"
            className={({ isActive }) =>
              `navbar-link text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-black"
                  : "text-neutral-500 hover:text-black"
              }`
            }
          >
            Orders
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 text-black sm:gap-5">

          <ShoppingCart className="navbar-icon h-5 w-5 cursor-pointer sm:h-6 sm:w-6" />

          <Box className="navbar-icon h-5 w-5 cursor-pointer sm:h-6 sm:w-6" />

          <button
            className="
              navbar-button
              cursor-pointer
              rounded-xl
              bg-black
              px-4
              py-2.5
              text-xs
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-neutral-800
              sm:px-5
              sm:text-sm
            "
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;