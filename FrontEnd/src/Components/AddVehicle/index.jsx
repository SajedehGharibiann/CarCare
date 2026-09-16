import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicles, setVehicles } from "../../../Slices/vehicle";
import { showToast } from "../../../Utils/toast";
import { ImagePlus, Upload, X } from "lucide-react";
import { replace, useNavigate } from "react-router-dom";

export default function AddVehicle() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth?.token);
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
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
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
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
      console.log(result);
      console.log("Data", result.data);
      if (result.success) {
        dispatch(addVehicles(result.data));
        navigate("/my-cars");
        showToast("Vehicle added successfully", "success");
      }
    } catch (error) {
      showToast("Add vehicle error", "error");
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[5px] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-start justify-between px-2 py-2">
          <div>
            <h2 className="font-semibold text-xl text-slate-900">
              Add New Vehicle
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Add your vehicle information
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/my-cars")}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-100 transition  cursor-pointer"
          >
            <X size={22} className="text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="py-4 grid grid-cols-2 gap-2">
          <div>
            <label className="text-sm font-semibold text-slate-500">
              Vehicle Image
            </label>

            <label
              htmlFor="vehicle-image"
              className="mt-2 h-50 border-2 border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer flex flex-col items-center justify-center overflow-hidden transition"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Vehicle Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex justify-center items-center">
                    <ImagePlus size={22} className="text-slate-200" />
                  </div>
                  <p className="text-sm font-semibold text-slate-600 mt-3">
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
              id="vehicle-image"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
      
              <div className="col-span-2">
                <label className="text-xs font-semibold text-slate-600">
                  Brand
                </label>

                <input
                  type="text"
                  name="brand"
                  placeholder="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
                />
              </div>

            
              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Model
                </label>

                <input
                  type="text"
                  name="model"
                  placeholder="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
                />
              </div>

          
              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Year
                </label>

                <input
                  type="number"
                  name="year"
                  placeholder="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Color
                </label>

                <input
                  type="text"
                  name="color"
                  placeholder="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
                />
              </div>

           
              <div>
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
                  Plate Number
                </label>
                <input
                  type="text"
                  name="plateNumber"
                  placeholder="plateNumber"
                  value={formData.plateNumber}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-900"
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 border-t border-slate-100 pt-5 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate("/my-cars")}
              className="text-slate-700 font-semibold rounded-lg px-2  py-2.5 border border-slate-400 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-900 px-2 py-2.5 font-semibold text-white hover:bg-blue-950 cursor-pointer shadow-sm"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
