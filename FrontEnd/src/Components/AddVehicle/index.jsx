import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicles, setVehicles } from "../../../Slices/vehicle";
import { showToast } from "../../../Utils/toast";
import { X } from "lucide-react";
import { replace, useNavigate } from "react-router-dom";

export default function AddVehicle() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth?.token);
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    color: "",
    year: "",
    plateNumber: "",
    mileage: "",
    image: null,
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev)=>({
        ...prev,[name]:files?files[0]:value
    }))
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("brand", formData.brand);
    data.append("model", formData.model);
    data.append("color", formData.color);
    data.append("year", formData.year);
    data.append("plateNumber", formData.plateNumber);
    data.append("mileage", formData.mileage);
    if (formData.image) {
      data.append("image", formData.image);
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/vehicle`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      const result = await res.json();
      console.log(result)
      console.log("Data",result.data)
      if (result.success) {
        dispatch(addVehicles(result.data));
        navigate("/my-cars")
      }
    } catch (error) {
      showToast("Add vehicle error", error);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative bg-white w-full max-w-lg rounded-[5px] p-6 shadow-xl">
          <div className="flex flex-col justify-start">
            <h2 className="font-semibold text-xl text-slate-900">
              Add New Vehicle
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Add your vehicle information
            </p>
          </div>
        
          <button type="button" onClick={()=>navigate("/my-cars")}>
            <X size={22} className="text-slate-600 cursor-pointer absolute top-5 right-4" />
          </button>
        <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-2 gap-2">
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            className="rounded-lg border border-slate-200 px-3 py-2 bg-slate-100 outline-none focus:ring-1 focus:ring-blue-900"
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={formData.model}
            onChange={handleChange}
            className="rounded-lg border border-slate-200 px-3 py-2 bg-slate-100 outline-none focus:ring-1 focus:ring-blue-900"
          />
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleChange}
            className="rounded-lg border border-slate-200 px-3 py-2 bg-slate-100 outline-none focus:ring-1 focus:ring-blue-900"
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            className="rounded-lg border border-slate-200 px-3 py-2 bg-slate-100 outline-none focus:ring-1 focus:ring-blue-900"
          />
          <input
            type="text"
            name="plateNumber"
            placeholder="PlateNumber"
            value={formData.plateNumber}
            onChange={handleChange}
            className="rounded-lg border border-slate-200 px-3 py-2 bg-slate-100 outline-none focus:ring-1 focus:ring-blue-900"
          />
          <input
            type="number"
            name="mileage"
            placeholder="Mileage"
            value={formData.mileage}
            onChange={handleChange}
            className="rounded-lg border border-slate-200 px-3 py-2 bg-slate-100 outline-none focus:ring-1 focus:ring-blue-900"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="col-span-2 text-sm"
          />
          <div className="flex justify-between items-center">
            <button type="button" onClick={()=>navigate("/my-cars")} className="col-span-2 bg-transparent text-black font-semibold rounded-lg px-2  py-2.5 border border-slate-800 cursor-pointer">
              Cancel
            </button>
            <button
              type="submit"
              className="col-span-2 rounded-lg bg-blue-900 px-2 py-2.5 font-semibold text-white hover:bg-blue-950 cursor-pointer"
            >
              Add Vehicle
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}
