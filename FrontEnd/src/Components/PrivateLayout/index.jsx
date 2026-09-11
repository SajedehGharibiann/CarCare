import { Sidebar } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateLayout({ children }) {
  const isLogin = useSelector((state) => state.auth.isLogin);
  if (!isLogin) {
    return (
      <Navigate
        to="/
    "
        replace
      />
    );
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <main className="ml-64 min-h-screen">{children}</main>
    </div>
  );
}
