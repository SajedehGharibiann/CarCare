import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function PrivateLayout({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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
    <div className="min-h-screen bg-slate-200">
      <Sidebar />
      <main className="ml-60 min-h-screen ">{children}</main>
    </div>
  );
}
