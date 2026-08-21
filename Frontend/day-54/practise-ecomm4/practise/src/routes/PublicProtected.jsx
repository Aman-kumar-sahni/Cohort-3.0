import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (user && isAuthenticated) {
    return <Navigate to="/main/home" replace />;
  }

  return <Outlet />;
};

export default PublicProtected;