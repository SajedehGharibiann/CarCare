import { ArrowRight, CarFront, CarFrontIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashboardVehicles() {
  const vehicles = useSelector((state) => state.vehicle?.vehicles ?? []);

  const API_URL = import.meta.env.VITE_API_URL.replace("/api", "");

  return (
    <div className="flex justify-start items-center gap-5 w-full ">
      <div className="bg-slate-50 border border-slate-50  shadow-sm shadow-slate-400/30 w-full flex flex-col justify-between p-4 gap-3 rounded-[5px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">My Vehicles</h3>

          <Link
            to="/my-cars"
            className="flex items-center gap-2 text-blue-600 font-bold text-xs"
          >
            View all
            <ArrowRight size={13} />
          </Link>
        </div>

        {vehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicles.map((item) => (
              <div key={item._id}>
                <div className="w-full h-29 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
                  {item?.image ? (
                    <img
                      src={`${API_URL}/upload/Vehicle/${item.image}`}
                      alt={`${item.brand} ${item.model}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <CarFront size={35} className="text-slate-400" />
                  )}
                </div>

                <h3 className="font-bold mt-3 text-slate-700">
                  {item.model} {item.brand}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <CarFrontIcon size={30} className="mx-auto text-slate-300 mb-2" />

            <p className="text-sm text-slate-500">No vehicles available</p>
          </div>
        )}
      </div>
    </div>
  );
}
