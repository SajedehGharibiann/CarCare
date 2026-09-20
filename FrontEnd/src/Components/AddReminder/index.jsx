import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { X, CalendarDays } from "lucide-react";
import { addReminder } from "../../../Slices/reminder";
import { showToast } from "../../../Utils/toast";

export default function AddReminder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth?.token);

  const vehicle = useSelector((state) => state.vehicle?.vehicles ?? []);

  const [formData, setFormData] = useState({
    vehicleId: "",
    title: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.vehicleId) {
      showToast("Please select a vehicle", "error");
      return;
    }

    if (!formData.title.trim()) {
      showToast("Please enter reminder title", "error");
      return;
    }

    if (!formData.date) {
      showToast("Please select a date", "error");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/reminder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      console.log(result);

      if (result.success) {
        dispatch(addReminder(result.data));

        showToast("Reminder added successfully", "success");

        navigate("/reminders");
      } else {
        showToast(result.message || "Failed to add reminder", "error");
      }
    } catch (error) {
      console.log("Add reminder error:", error);

      showToast("Something went wrong", "error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Add Reminder
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              Create a reminder for your vehicle
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/reminders")}
            className="text-slate-400 hover:text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Select Vehicle
            </label>

            <select
              name="vehicleId"
              value={formData.vehicleId}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-700 bg-white outline-none focus:border-blue-500"
            >
              <option value="">Select vehicle</option>

              {vehicle.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.brand} {item.model}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Reminder Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Oil Change"
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Date
            </label>

            <div className="relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add a note..."
              rows={3}
              className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm outline-none resize-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={() => navigate("/reminders")}
              className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-blue-900 text-white text-sm font-medium hover:bg-blue-800"
            >
              Add Reminder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
