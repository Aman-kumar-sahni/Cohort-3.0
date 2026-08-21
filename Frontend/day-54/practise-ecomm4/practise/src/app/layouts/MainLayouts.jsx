import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";

const MainLayouts = () => {
  return (
    <div className="min-h-screen w-full bg-[#f5f5f5]">
      <Navbar />

      <main className="w-full px-4 pb-8 pt-24 sm:px-6 sm:pt-24 lg:px-10 lg:pb-12">
        <div className="mx-auto w-full max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayouts;