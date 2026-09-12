import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function PrivateLayout({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isDashboard = location.pathname === "/dashboard";
  if (!isLoggedIn) {
    return (
      <Navigate
        to="/signin
    "
        replace
      />
    );
  }

  return (
    <div
      className={`min-h-screen ${isDashboard ? "bg-slate-200" : "bg-slate-50"}`}
    >
      <Sidebar />
      <main className="ml-60 min-h-screen ">{children}</main>
    </div>
  );
}
