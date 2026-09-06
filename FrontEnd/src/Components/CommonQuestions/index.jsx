import { ArrowBigDown, ArrowDown, Plus } from "lucide-react";
import React from "react";

export default function CommonQuestions() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 mb-[100px] bg-slate-50">
      <div className="flex flex-col justify-center items-center mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          CommonQuestions
        </h2>
        <p className="mb-3 text-center text-slate-500">
          Everything you need to know about CarCare.
        </p>
        <div className="flex flex-col justify-center max-w-3xl space-y-4">
          <div className="w-[450px] h-[64px] bg-gray-100 rounded-xl shadow-sm cursor-pointer">
            <button className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-blue-950 cursor-pointer">
              How can I add my car to CarCare?
              <ArrowDown size={16} className="text-blue-950"/>
            </button>
            
          </div>
    <div className="w-[450px] h-[64px] bg-gray-100 rounded-xl shadow-sm cursor-pointer">
            <button className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-blue-950 cursor-pointer">
              How can I add my car to CarCare?
              <ArrowDown size={16} className="text-blue-950"/>
            </button>
            
          </div>
           <div className="w-[450px] h-[64px] bg-gray-100 rounded-xl shadow-sm cursor-pointer">
            <button className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-blue-950 cursor-pointer">
              How can I add my car to CarCare?
              <ArrowDown size={16} className="text-blue-950"/>
            </button>
            
          </div>
           <div className="w-[450px] h-[64px] bg-gray-100 rounded-xl shadow-sm cursor-pointer">
            <button className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-blue-950 cursor-pointer">
              How can I add my car to CarCare?
              <ArrowDown size={16} className="text-blue-950"/>
            </button>
            
          </div>
           <div className="w-[450px] h-[64px] bg-gray-100 rounded-xl shadow-sm cursor-pointer">
            <button className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-blue-950 cursor-pointer">
              How can I add my car to CarCare?
              <ArrowDown size={16} className="text-blue-950"/>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
