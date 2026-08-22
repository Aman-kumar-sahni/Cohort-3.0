import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";

const MainLayouts = () => {
  return (
    <div className="min-h-screen w-full bg-[#f5f5f5] text-black">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8 lg:pt-10">
        <div className="mx-auto w-full max-w-7xl">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default MainLayouts;