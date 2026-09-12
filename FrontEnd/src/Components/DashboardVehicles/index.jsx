import { ArrowRight, CarFront, CarFrontIcon, CarIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashboardVehicles() {
  const vehicle = useSelector((state) => state.vehicle.vehicles);
  return (
    <div className="flex justify-start px-5 items-center gap-5 mt-5 ">
      <div className="bg-slate-50 border border-slate-50 shadow-sm shadow-slate-400/30 w-full max-w-[640px] h-[220px] flex flex-col justify-between p-4 gap-3 rounded-[5px]">
        <div className=" flex justify-between items-center">
          <h3 className="font-bold">My Vehicles</h3>
          <div className="flex items-center gap-2">
            <Link to="my-cars" className="text-blue-600 font-bold text-xs">
              View all
            </Link>
            <ArrowRight size={13} className="text-blue-600 font-bold" />
          </div>
        </div>
        {vehicle && vehicle.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {vehicle.map((item) => (
              <div key={item._id}>
                {item?.image}?(<img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-40 object-cover rounded-xl"
                />:(<div className="w-full h-25 rounded-lg bg-slate-100">
                  <CarFront size={35} className="text-slate-400"/>
                  </div>))
                
                <h3 className="font-bold mt-3">{item.model} {item.brand}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <CarFrontIcon size={30} className="mx-auto text-slate-300 mb-2"/>
            <p className="text-sm text-slate-500">No vehicles available</p>
          </div>
        )}
      </div>
    </div>
  );
}
