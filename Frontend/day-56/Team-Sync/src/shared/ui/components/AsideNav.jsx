import React from "react";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  MessageSquare,
  Settings,
  Plus,
  ChartArea,
} from "lucide-react";
import NavigationTab from "./NavigationTab";
import { useSelector } from "react-redux";
import { adminNavigation, employeeNavigation } from "../../../app/constants/Navigation";

const AsideNav = () => {
  
const {employee} =useSelector((state)=>state.auth)
const navigations = employee?.role==="admin"? adminNavigation:employeeNavigation;
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-[var(--border)] bg-[var(--surface-container-lowest)] lg:flex lg:flex-col">
      {/* Logo */}
      <div className="px-6 py-5">
        <h1 className="text-lg font-bold text-[var(--primary)]">
          Synthetix AI
        </h1>

        <p className="mt-1 text-[10px] text-[var(--text-muted)]">
          Enterprise Workspace
        </p>
      </div>

      {/* Navigation */}
      <div className=" flex flex-col gap-4">

        
      {navigations.map((route)=>{
return <NavigationTab path={route.path } Icon={route.icon} title={route.title}/>

      })}
            </div>

      {/* New Task */}
      <div className="p-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-[var(--on-primary)] transition hover:opacity-90">
          <Plus className="h-4 w-4" />
          New Task
        </button>
      </div>
    </aside>
  );
};

export default AsideNav;