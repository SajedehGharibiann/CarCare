import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../../Utils/toast";
import { setMaintenance } from "../../../Slices/maintenance";
import { useNavigate } from "react-router-dom";
import { ImagePlus, Upload, X } from "lucide-react";

export default function AddMaintenance() {
  const [formData, setFormData] = useState({
    vehicleId: "",
    type: "",
    title: "",
    date: "",
    mileage: "",
    description: "",
    cost: "",
    receiptImage: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const vehicle = useSelector((state) => state.vehicle?.vehicles ?? []);
  console.log("vehicles",vehicle)
  const token = useSelector((state) => state.auth?.token);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        receiptImage: files[0],
      }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("vehicleId", formData.vehicleId);
    data.append("title", formData.title);

    data.append("date", formData.date);
    data.append("mileage", formData.mileage);
    data.append("description", formData.description);
    data.append("cost", formData.cost);
    if (formData.type) {
      data.append("type", formData.type);
    }
    if (formData.receiptImage) {
      data.append("receiptImage", formData.receiptImage);
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/maintenance`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      const result = await res.json();
      
      if (result.success) {
        dispatch(AddMaintenance(result.data));
        navigate("/maintenance");
      }
    } catch (error) {
      showToast("Something went wrong", "error");
      console.log("object", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-[5px] p-3 shadow-2xl overflow-y-auto">
        <div className="flex items-start justify-between px-2 py-2">
          <div>
            <h2 className="font-semibold text-xl text-slate-900">
              Add Maintenance Record
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Add your maintenance information
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/maintenance")}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-100 transition  cursor-pointer"
          >
            <X size={22} className="text-slate-600" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="py-2 grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-slate-500">
              Receipt Image
            </label>

            <label
              htmlFor="receipt-image"
              className="mt-2 h-50 border-2 border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer flex flex-col items-center justify-center overflow-hidden transition"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Receipt Image Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex justify-center items-center">
                    <ImagePlus size={22} className="text-slate-200" />
                  </div>
                  <p className="text-sm font-semibold text-slate-600 mt-2">
                    Upload image
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Click to upload or drag and drop
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-slate-400">
                    <Upload size={13} />
                    JPG, PNG up to 5MB
                  </div>
                </>
              )}
            </label>
            <input
              id="receipt-image"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            <div className="mt-1">
              <label className="text-xs font-semibold text-slate-600">
                Vehicle
              </label>
                  <select
                name="vehicleId"
                value={formData.vehicleId}
                onChange={handleChange}
              >
                <option value="">Select vehicle</option>

                {vehicle.map((car) => (
                  <option key={car._id} value={car._id}>
                    {car.brand} {car.model}
                  </option>
                ))}
              </select>
{/* 
              <input
                type="text"
                name="vehicleId"
                placeholder="vehicle"
                value={formData.vehicleId}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
              /> */}
          
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600">
                Type
              </label>

              <input
                type="text"
                name="type"
                placeholder="type"
                value={formData.type}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="col-span-2">
                <label className="text-xs font-semibold text-slate-600">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs font-semibold text-slate-600">
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  placeholder="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs font-semibold text-slate-600">
                  Mileage
                </label>
                <input
                  type="number"
                  name="mileage"
                  placeholder="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
                />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-semibold text-slate-600">
                  Cost
                </label>
                <input
                  type="number"
                  name="cost"
                  placeholder="cost"
                  value={formData.cost}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
                />
                <div>
                  <label className="text-xs font-semibold text-slate-600">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 border-t border-slate-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate("/maintenance")}
              className="text-slate-700 font-semibold rounded-lg px-2  py-2.5 border border-slate-400 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-900 px-2 py-2.5 font-semibold text-white hover:bg-blue-950 cursor-pointer shadow-sm"
            >
              Add Maintenance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
