import React from "react";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  MessageSquare,
  Settings,
  Plus,
} from "lucide-react";

const AsideNav = () => {
  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      active: true,
    },
    {
      label: "Tasks",
      icon: ClipboardList,
    },
    {
      label: "Team",
      icon: Users,
    },
    {
      label: "Chat",
      icon: MessageSquare,
    },
    {
      label: "Settings",
      icon: Settings,
    },
  ];

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
      <nav className="mt-5 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 border-r-2 px-5 py-3 text-sm transition ${
                item.active
                  ? "border-[var(--primary)] bg-[var(--surface-container)] text-[var(--text-primary)]"
                  : "border-transparent text-[var(--text-secondary)] hover:bg-[var(--surface-container)] hover:text-[var(--text-primary)]"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />

              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

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