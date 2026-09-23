import { Plus, CarFront, Wrench, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-[5px] p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-bold text-slate-800">Quick Actions</h3>
          <p className="text-[11px] text-slate-500">Manage your car</p>
        </div>

        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
          <Plus size={17} className="text-blue-900" />
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <Link
          to="/my-cars/add"
          className="flex items-center gap-3 p-1 rounded-lg bg-slate-50 hover:bg-blue-50 transition"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
            <CarFront size={16} className="text-blue-900" />
          </div>

          <div className="flex-1">
            <h4 className="text-xs font-semibold text-slate-700">
              Add Vehicle
            </h4>
            <p className="text-[10px] text-slate-500">Add a new car</p>
          </div>

          <ArrowRight size={14} className="text-slate-400" />
        </Link>

        <Link
          to="/maintenance/add"
          className="flex items-center gap-3 p-1 rounded-lg bg-slate-50 hover:bg-blue-50 transition"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
            <Wrench size={16} className="text-amber-700" />
          </div>

          <div className="flex-1">
            <h4 className="text-xs font-semibold text-slate-700">
              Add Maintenance
            </h4>
            <p className="text-[10px] text-slate-500">Record a service</p>
          </div>

          <ArrowRight size={14} className="text-slate-400" />
        </Link>

        <Link
          to="/reminders/add"
          className="flex items-center gap-3 p-1 rounded-lg bg-slate-50 hover:bg-purple-50 transition"
        >
          <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
            <Bell size={16} className="text-purple-700" />
          </div>

          <div className="flex-1">
            <h4 className="text-xs font-semibold text-slate-700">
              Add Reminder
            </h4>
            <p className="text-[10px] text-slate-500">Set a reminder</p>
          </div>

          <ArrowRight size={14} className="text-slate-400" />
        </Link>
      </div>
    </div>
  );
}
