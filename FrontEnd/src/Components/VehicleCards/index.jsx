import React from "react";

export default function VehicleCards({ vehicle }) {
      console.log("image",vehicle.image)
      console.log("vehicle",vehicle)
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {vehicle.image && (
        <img
          src={`${import.meta.env.VITE_API_URL.replace("/api","")}/upload/vehicle/${vehicle.image}`}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-44 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-800">
          {vehicle.brand} {vehicle.model}
        </h3>

        <div className="mt-3 space-y-1 text-sm text-slate-500">
          <p>Color: {vehicle.color}</p>
          <p>Year: {vehicle.year}</p>
          <p>Plate: {vehicle.plateNumber}</p>
          <p>Mileage: {vehicle.mileage} km</p>
        </div>
      </div>
      
    </div>

  );
}
