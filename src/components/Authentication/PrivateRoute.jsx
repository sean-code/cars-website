import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  // Check if the user is authenticated by looking for the access token in session storage
  const isAuthenticated = sessionStorage.getItem("accessToken");

  return isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
