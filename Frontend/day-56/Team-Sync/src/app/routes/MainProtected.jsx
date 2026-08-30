import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const MainProtected = () => {
  const { employee, isLoading } = useSelector((state) => state.auth);
    const theme = useSelector((state) => state.theme.theme);

    useEffect(() => {
    document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
}, [theme]);

  

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 text-[var(--text-primary)]">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Loading...
        </h1>
      </div>
    );
  }

  if (!employee) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default MainProtected;