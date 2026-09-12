import { User } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="flex justify-between items-center m-6 bg-transparent">
      <h1 className="text-xl font-bold">
        <span className="text-blue-950">Car</span>Care
      </h1>

      <nav className="flex gap-6 font-semibold">
        <Link
          to="/"
          className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>

        <Link
          to="/services"
          className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
        >
          Car Services
        </Link>

        <Link
          to="/contact"
          className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact Us
        </Link>

        <Link
          to="/about"
          className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
        >
          About Us
        </Link>
      </nav>

      <div className="flex gap-4 font-semibold">
        {isLoggedIn ? (
          <Link to="/dashboard">
            <User
              size={24}
              strokeWidth={2}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-blue-950 border border-blue-100 shadow-md hover:bg-blue-900 hover:text-white hover:border-blue-950 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
            />
          </Link>
        ) : (
          <>
            <button
              onClick={() => navigate("/register")}
              className="relative cursor-pointer py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Register
            </button>

            <button
              onClick={() => navigate("/signin")}
              className="border border-blue-950 py-1 px-3 rounded-[5px] cursor-pointer hover:bg-blue-950 hover:text-white"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
