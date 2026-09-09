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
import ScrollReveal from "../Components/ScrollReveal";
import CommonQuestions from "../Components/CommonQuestions";
import Footer from "../Components/Footer";

export default function Home() {
  
  return (
    <>
      <Navbar />
      <main className="w-full min-h-[500px] overflow-hidden mb-[100px] animate-fade-down">
        <div className="relative h-[500px]">
          <img
            src="/1788618420391.jpg"
            alt=""
            className="w-full h-[100vh] object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-8 flex items-center">
            <div className="max-w-xl">
              <h2 className="text-5xl font-bold text-white mb-4">
                Take Care Of Your Car <br />
                We'll Take Care Of The Rest.
              </h2>

              <p className="text-white mb-6 font-light">
                Keep track of your car maintenance, repairs and upcoming
                services in one simple place.
              </p>

              <div className="flex gap-4">
                <button className="bg-blue-950 rounded-[5px] text-white py-2 px-4 cursor-pointer">
                  Get Started
                </button>

                <button className="bg-blue-950 rounded-[5px] text-white py-2 px-4 cursor-pointer">
                  Explore Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ScrollReveal>
        <OurServices />
      </ScrollReveal>
      <ScrollReveal>
        <CommonQuestions/>
      </ScrollReveal>
      <Footer/>
    </>
  );
}
