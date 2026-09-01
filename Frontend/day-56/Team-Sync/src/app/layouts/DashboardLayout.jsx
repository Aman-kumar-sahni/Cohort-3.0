import React from "react";
import AsideNav from "../../shared/ui/components/AsideNav";
import TopNav from "../../shared/ui/components/TopNav";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <AsideNav />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopNav />

        <main className="flex-1 p-4 sm:p-6">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;