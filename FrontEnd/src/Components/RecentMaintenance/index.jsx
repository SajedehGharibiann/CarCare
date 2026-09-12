import { ArrowRight, Wrench } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function RecentMaintenance() {
  const maintenance = useSelector((state) => state.maintenance.maintenances);

  const recentMaintenance = [...maintenance]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <div className="bg-slate-50 shadow-sm shadow-slate-400/30 rounded-[5px] p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-800">Recent Maintenance</h3>
        <Link
          to="/maintenance"
          className="flex items-center gap-1 text-blue-600 font-bold text-xs"
        >
          View all
          <ArrowRight size={13} className="text-blue-600 font-bold" />
        </Link>
      </div>
      {recentMaintenance.length > 0 ? (
        <div className="flex flex-col gap-3">
          {recentMaintenance.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white border border-slate-200 rounded-lg p-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                  <Wrench size={18} className="text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-700">
                    {item.title}
                  </h4>
                  <span className="text-xs text-slate-500">{item.type}</span>
                </div>
              </div>
              <span className="text-xs text-slate-500">{new Date(item.date).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
            <Wrench size={30} className="mx-auto text-slate-300 mb-2"/>
            <p className="text-sm text-slate-500">No maintenance history yet</p>
        </div>
      )}
    </div>
  );
}
