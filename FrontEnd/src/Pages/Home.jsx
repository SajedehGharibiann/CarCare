import React from "react";
import Navbar from "../Components/Navbar";
import {
  CalendarCheck,
  Car,
  ShieldCheck,
  StickyNote,
  Wrench,
} from "lucide-react";
import OurServices from "../Components/OurServices";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-[500px] overflow-hidden bg-blue-200 relative mb-[100px]">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-blue-300 rounded-full opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-8 flex items-center min-h-[500px]">
          
          <div className="max-w-xl ">
            <h2 className="text-5xl font-bold text-blue-950 mb-4">
              Take Care Of Your Car <br /> We'll Take Of The Rest.
            </h2>
            <p className="opacity-75 mb-6 text-blue-950 font-light">
              Keep track of your car maintenance, repairs and upcoming services
              in one simple place.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-950 rounded-[5px] text-white py-1 px-3 cursor-pointer">
                Get Started
              </button>
              <button className="bg-blue-950 rounded-[5px] text-white py-1 px-3 cursor-pointer">
                Explore Features
              </button>
            </div>
          </div>
          <img src="/HeroCar.png" alt="" className=" w-[50%] h-[50%] object-cover ml-18" />
        </div>
      </main>
      <OurServices />
    </>
  );
}
