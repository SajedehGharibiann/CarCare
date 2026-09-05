import React from "react";
import Home from "../../Pages/Home";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center m-6">
        <h1 className="text-xl font-bold" >
          <span className="text-blue-950">Car</span>Care
        </h1>
        <nav>
          <ul className="flex gap-6 font-semibold">
            <li>
              <a
                href="#"
                className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Car Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 font-semibold">
          <button className="cursor-pointer ::after">Register</button>
          <button className="border-1 border-blue-950 py-1 px-3 rounded-[5px] cursor-pointer hover:bg-blue-950 hover:text-white">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}
