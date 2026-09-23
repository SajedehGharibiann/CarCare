import { ArrowRight, BellIcon, CarFront, Wrench } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashboardCards() {
  const vehicles = useSelector((state) => state.vehicle?.vehicles ?? []);

  const reminders = useSelector((state) => state.reminder?.reminders ?? []);

  const maintenance = useSelector(
    (state) => state.maintenance?.maintenance ?? [],
  );

  console.log("Vehicles:", vehicles);
  console.log("Reminders:", reminders);
  console.log("Maintenance:", maintenance);

  return (
    <div className="flex justify-start items-center gap-3">
      <div className="bg-slate-50 shadow-sm shadow-slate-400/30 w-full flex flex-col justify-start p-4 gap-4 rounded-[5px]">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center">
          <CarFront size={26} className="text-blue-900" />
        </div>

        <h4 className="font-semibold text-[14px] text-slate-600">
          My vehicles
        </h4>

        <span className="text-[18px] font-semibold">{vehicles.length}</span>

        <div className="flex items-center gap-1">
          <Link to="/my-cars" className="text-blue-600 font-bold text-xs">
            View vehicles
          </Link>

          <ArrowRight size={13} className="text-blue-600 font-bold" />
        </div>
      </div>

      <div className="bg-slate-50 shadow-sm shadow-slate-400/30 w-full flex flex-col justify-start p-4 gap-4 rounded-[5px]">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center">
          <BellIcon size={26} className="text-blue-900" />
        </div>

        <h4 className="font-semibold text-[14px] text-slate-600">Reminders</h4>

        <span className="text-[18px] font-semibold">{reminders.length}</span>

        <div className="flex items-center gap-1">
          <Link to="/reminders" className="text-blue-600 font-bold text-xs">
            View reminders
          </Link>

          <ArrowRight size={13} className="text-blue-600 font-bold" />
        </div>
      </div>

      <div className="bg-slate-50 shadow-sm shadow-slate-400/30 w-full flex flex-col justify-start p-4 gap-4 rounded-[5px]">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center">
          <Wrench size={26} className="text-blue-900" />
        </div>

        <h4 className="font-semibold text-[14px] text-slate-600">
          Maintenance
        </h4>

        <span className="text-[18px] font-semibold">{maintenance.length}</span>

        <div className="flex items-center gap-1">
          <Link to="/maintenance" className="text-blue-600 font-bold text-xs">
            View history
          </Link>

          <ArrowRight size={13} className="text-blue-600 font-bold" />
        </div>
      </div>
    </div>
  );
}
