import React from "react";
import {
  Search,
  Bell,
  Sparkles,
  Grid2X2,
  UserRound,
} from "lucide-react";

const TopNav = () => {
  return (
    <header className="flex h-16 w-full items-center border-b border-[var(--border)] bg-[var(--surface)] px-4 sm:px-6">
      {/* Search */}
      <div className="relative w-full max-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />

        <input
          type="text"
          placeholder="Search workspace..."
          className="h-9 w-full rounded-md border border-[var(--border)] bg-[var(--surface-container)] pl-9 pr-3 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition focus:border-[var(--primary)]"
        />
      </div>

      {/* Right Section */}
      <div className="ml-auto flex items-center gap-3 sm:gap-5">
        {/* Notification */}
        <button className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
          <Bell className="h-4 w-4" />
        </button>

        {/* AI */}
        <button className="hidden items-center gap-2 text-[var(--text-secondary)] transition hover:text-[var(--text-primary)] sm:flex">
          <Sparkles className="h-4 w-4 text-[var(--tertiary)]" />

          <span className="text-sm font-medium">
            RK
          </span>
        </button>

        {/* Grid */}
        <button className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
          <Grid2X2 className="h-4 w-4" />
        </button>

        {/* Profile */}
        <button className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[var(--surface-container-highest)] text-[var(--text-secondary)]">
          <UserRound className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};

export default TopNav;