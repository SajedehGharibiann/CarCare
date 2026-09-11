import { ArrowBigRight, ArrowBigRightIcon, ArrowRight, BellIcon, CarFront, Hammer, Settings, SettingsIcon, Wrench } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashboardCards() {
  const vehicle = useSelector((state) => state.vehicle.vehicles);

  return (
    <div className="flex justify-start px-5 items-center gap-5">
      <div className="bg-slate-50 shadow-sm shadow-slate-400/30 w-[200px] h-[200px] flex flex-col justify-start p-4 gap-3 rounded-[5px]">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center">
          <CarFront size={26} className="text-blue-900" />
        </div>
        <h4 className="font-semibold text-[14px] text-slate-600">My Cars</h4>
        <span className="text-[18px] font-semibold">{vehicle.length}</span>
        <div className="flex items-center gap-1 ">
            <Link to="/my-cars" className="text-blue-600 font-bold text-[12px]">View vehicles</Link>
            <ArrowRight size={13} className="text-blue-600 font-bold"/>
        </div>
      </div>
      <div className="bg-slate-50 shadow-sm shadow-slate-400/30 w-[200px] h-[200px] flex flex-col justify-start p-4 gap-4 rounded-[5px]">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center">
          <BellIcon size={26} className="text-blue-900" />
        </div>
        <h4 className="font-semibold text-[14px] text-slate-600">Reminders</h4>
        <span className="text-[18px] font-semibold">{vehicle.length}</span>
        <div className="flex items-center gap-1 ">
            <Link to="/reminders" className="text-blue-600 font-bold text-[12px]">View reminders</Link>
            <ArrowRight size={13} className="text-blue-600 font-bold"/>
        </div>
      </div>
      <div className="bg-slate-50 shadow-sm shadow-slate-400/30 w-[200px] h-[200px] flex flex-col justify-start p-4 gap-4 rounded-[5px]">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center">
          <Wrench size={26} className="text-blue-900" />
        </div>
        <h4 className="font-semibold text-[14px] text-slate-600">Maintenance</h4>
        <span className="text-[18px] font-semibold">{vehicle.length}</span>
        <div className="flex items-center gap-1 ">
            <Link to="/maintenance" className="text-blue-600 font-bold text-[12px]">View history</Link>
            <ArrowRight size={13} className="text-blue-600 font-bold"/>
        </div>
      </div>
    </div>
  );
}
