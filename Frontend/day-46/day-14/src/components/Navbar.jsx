import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-10 py-4 shadow-sm">
      {/* Logo */}
      <NavLink
        to="/"
        className="text-3xl font-bold text-indigo-600"
      >
        Logo
      </NavLink>

      {/* Navigation Links */}
      <div className="flex items-center gap-10 text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
              : "text-gray-700 hover:text-indigo-600 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
              : "text-gray-700 hover:text-indigo-600 transition"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
              : "text-gray-700 hover:text-indigo-600 transition"
          }
        >
          Shop
        </NavLink>
      </div>

      {/* Logout Button */}
      <button
        className="rounded-lg bg-red-600 px-6 py-2.5 font-semibold text-white transition duration-300 hover:bg-red-700 active:scale-95"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;