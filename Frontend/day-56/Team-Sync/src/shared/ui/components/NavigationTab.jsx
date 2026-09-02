import { ChartArea } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title }) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        `flex items-center gap-3 border-r-4 py-3 pl-4 font-bold transition-all ${
          isActive
            ? "border-[var(--primary)] bg-[var(--surface-container-high)] text-[var(--primary)]"
            : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`
      }
    >
      <ChartArea size={23} />
      {title}
    </NavLink>
  );
};

export default NavigationTab;