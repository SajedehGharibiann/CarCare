import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center bg-blue-100 py-20 gap-5">
        <h2 className="text-2xl font-bold">
          <span className="text-blue-950">Car</span>Care
        </h2>
        <nav className="flex gap-4">
            <Link to="/" className=" font-semibold cursor-pointer">Home</Link>
            <Link to="/services" className=" font-semibold cursor-pointer">Car Services</Link>
            <Link to="/contact" className=" font-semibold cursor-pointer">Contact Us</Link>
            <Link to="/about" className=" font-semibold cursor-pointer">About Us</Link>
        </nav>
        <div className="flex gap-5 mt-4">
          <input type="email" placeholder="Enter your email" className="bg-gray-300 p-2 rounded-[8px] outline-none shadow shadow-gray-600/20"/>
          <button type="submit" className="bg-blue-950 rounded-[5px] text-white py-2 px-4 cursor-pointer shadow shadow-gray-600/20">Submit</button>
        </div>
      </div>
    </footer>
  );
}
