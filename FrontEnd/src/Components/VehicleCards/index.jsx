import React from "react";
import { MoreVertical, Gauge, CalendarDays, Eye } from "lucide-react";

export default function VehicleCards({ vehicle }) {
  const imageUrl = vehicle.image
    ? `${import.meta.env.VITE_API_URL.replace(
        "/api",
        "",
      )}/upload/Vehicle/${vehicle.image}`
    : null;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
 
      <div className="relative h-40 bg-slate-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
            No image
          </div>
        )}

      
        <button className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center shadow-sm">
          <MoreVertical size={17} className="text-blue-800 cursor-pointer" />
        </button>
      </div>

     
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-slate-800">
              {vehicle.brand} {vehicle.model}
            </h3>

            <p className="text-xs text-slate-400 mt-1">
              {vehicle.year} • {vehicle.color}
            </p>
          </div>
        </div>

     
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="bg-slate-50 rounded-lg p-2.5">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Gauge size={14} />
              Mileage
            </div>

            <p className="text-sm font-semibold text-slate-700 mt-1">
              {Number(vehicle.mileage || 0).toLocaleString()} km
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-2.5">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <CalendarDays size={14} />
              Year
            </div>

            <p className="text-sm font-semibold text-slate-700 mt-1">
              {vehicle.year}
            </p>
          </div>
        </div>

      
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-slate-400">Plate Number</span>

          <span className="text-sm font-medium text-slate-700">
            {vehicle.plateNumber}
          </span>
        </div>

      
        <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-semibold text-blue-800 hover:bg-slate-50 transition cursor-pointer">
          <Eye size={16} />
          View Details
        </button>
      </div>
    </div>
  );
}
