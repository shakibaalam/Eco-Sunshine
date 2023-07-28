import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../shared/Loading";
import { logOut } from "../redux/Slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import useAdmin from "../hooks/useAdmin";

const RequireAdmin = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    const userData = state.auth.user;
    try {
      return JSON.parse(userData);
    } catch (error) {
      return userData;
    }
  });
//   console.log(user);
  if (!user || !user?.role === "ADMIN") {
    dispatch(logOut());
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;
