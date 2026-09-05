import React from "react";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-[460px] w-full bg-blue-200 relative mb-[100px]">
        <div className="flex-col absolute top-[35%] ml-8">
          <h2 className="text-4xl flex mb-4">
            Take Care Of Your Car <br /> We'll Take Of The Rest.
          </h2>
          <p className="opacity-85 mb-6 font-light">
            Keep track of your car maintenance, repairs and upcoming services in
            one simple place.
          </p>
          <div className="flex gap-4">
          <button className="bg-blue-950 rounded-[5px] text-white py-1 px-3 cursor-pointer">Get Started</button>
          <button className="bg-blue-950 rounded-[5px] text-white py-1 px-3 cursor-pointer">Explore Features</button>
        </div>
        </div>
      </main>

      <div>
        <h2 className="text-xl">Our Services</h2>

      </div>
    </>
  );
}
