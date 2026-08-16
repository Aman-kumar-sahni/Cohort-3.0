import React from "react";
import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

const PublicProtected = () => {
  const { user, isLoading, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (user && isAuthenticated) {
    return <Navigate to="/main" replace />;
  }

  return <Outlet />;
};

export default PublicProtected;