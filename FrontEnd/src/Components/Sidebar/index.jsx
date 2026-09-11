import { Bell, Car, LayoutDashboard, User, Wrench } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-blue-950 text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-400">CarCare</span>
        </h1>
      </div>
      <nav className="flex flex-col px-4 gap-2">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-blue-900"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link
          to="/my-cars"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-blue-900"
        >
          <Car size={20} />
          My Cars
        </Link>
        <Link
          to="/maintenance"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-blue-900"
        >
          <Wrench size={20} />
          Maintenance
        </Link>
        <Link
          to="/reminders"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-blue-900"
        >
          <Bell size={20} />
          Reminders
        </Link>
      </nav>
      <div className="mt-auto px-4 pb-6">
        <Link
          to="/profile"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-blue-900"
        >
          <User />
          Profile
        </Link>
        <button onClick={handleLogOut} className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-blue-900">
          Logout
        </button>
      </div>
      Sidebar
    </aside>
  );
}
