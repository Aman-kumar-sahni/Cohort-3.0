import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  const { user, isLoading, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user || !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default MainProtected;