import { ArrowRight } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashboardVehicles() {
  const vehicle = useSelector((state) => state.vehicle.vehicles);
  return (
    <div className="flex justify-start px-5 items-center gap-5 mt-5">
      <div className="bg-slate-50 shadow-sm shadow-slate-400/30 w-[640px] h-[220px] flex flex-col justify-start p-4 gap-3 rounded-[5px]">
        <div className=" flex justify-between items-center">
          <h3 className="font-bold">My Vehicles</h3>
          <div className="flex items-center gap-2">
            <Link className="text-blue-600 font-bold text-[12px]">
              View all
            </Link>
            <ArrowRight size={13} className="text-blue-600 font-bold" />
          </div>
        </div>
        {vehicle && vehicle.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {vehicle.map((item) => (
              <div key={item._id}>
                <img
                  src={vehicle.image}
                  alt={vehicle.brand}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <h3 className="font-bold mt-3">{vehicle.model} {vehicle.brand}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No vehicles available</p>
          </div>
        )}
      </div>
    </div>
  );
}
