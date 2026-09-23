import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Bell,
  Wrench,
  CircleGauge,
  CircleAlert,
  Battery,
  MoreVertical,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { setReminders } from "../../Slices/reminder";

export default function Reminders() {
  const [filter, setFilter] = useState("all");

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth?.token);

  const reminders = useSelector((state) => state.reminder?.reminders ?? []);

  const vehicle = useSelector((state) => state.vehicle?.vehicles ?? []);

  useEffect(() => {
    const getReminders = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/reminder`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        console.log("Reminders from API:", result);

        if (result.success) {
          dispatch(setReminders(result.data));
        }
      } catch (error) {
        console.log("Get reminders error:", error);
      }
    };

    if (token) {
      getReminders();
    }
  }, [token, dispatch]);

  console.log("REMINDERS FROM REDUX:", reminders);
  console.log("VEHICLES FROM REDUX:", vehicle);

  const getVehicleName = (vehicleId) => {
    const car = vehicle.find((v) => v._id === vehicleId);

    if (!car) {
      return "Unknown Vehicle";
    }

    return `${car.brand} ${car.model}`;
  };

  const getReminderIcon = (title = "") => {
    const text = title.toLowerCase();

    if (
      text.includes("oil") ||
      text.includes("maintenance") ||
      text.includes("service")
    ) {
      return <Wrench size={20} />;
    }

    if (text.includes("tire") || text.includes("tyre")) {
      return <CircleGauge size={20} />;
    }

    if (text.includes("battery")) {
      return <Battery size={20} />;
    }

    return <Bell size={20} />;
  };

  const getReminderIconStyle = (title = "") => {
    const text = title.toLowerCase();

    if (
      text.includes("oil") ||
      text.includes("maintenance") ||
      text.includes("service")
    ) {
      return "bg-blue-100 text-blue-700";
    }

    if (text.includes("tire") || text.includes("tyre")) {
      return "bg-purple-100 text-purple-700";
    }

    if (text.includes("battery")) {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-slate-100 text-slate-700";
  };

  const getStatus = (item) => {
    if (item.completed === true) {
      return "completed";
    }

    if (!item.date) {
      return "upcoming";
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const reminderDate = new Date(item.date);
    reminderDate.setHours(0, 0, 0, 0);

    const diffTime = reminderDate - today;

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return "overdue";
    }

    if (diffDays <= 7) {
      return "dueSoon";
    }

    return "upcoming";
  };

  const getStatusText = (status) => {
    if (status === "completed") {
      return "Completed";
    }

    if (status === "overdue") {
      return "Overdue";
    }

    if (status === "dueSoon") {
      return "Due Soon";
    }

    return "Upcoming";
  };

  const getStatusStyle = (status) => {
    if (status === "completed") {
      return "bg-slate-100 text-slate-600";
    }

    if (status === "overdue") {
      return "bg-red-100 text-red-600";
    }

    if (status === "dueSoon") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-blue-100 text-blue-700";
  };

  const getDaysText = (item) => {
    if (item.completed) {
      return "Completed";
    }

    if (!item.date) {
      return "";
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const reminderDate = new Date(item.date);
    reminderDate.setHours(0, 0, 0, 0);

    const diffTime = reminderDate - today;

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      const days = Math.abs(diffDays);

      return `${days} day${days > 1 ? "s" : ""} overdue`;
    }

    if (diffDays === 0) {
      return "Today";
    }

    if (diffDays === 1) {
      return "Tomorrow";
    }

    return `In ${diffDays} days`;
  };

  const filteredReminders = reminders.filter((item) => {
    const status = getStatus(item);

    if (filter === "all") {
      return true;
    }

    if (filter === "overdue") {
      return status === "overdue";
    }

    if (filter === "dueSoon") {
      return status === "dueSoon";
    }

    if (filter === "upcoming") {
      return status === "upcoming";
    }

    if (filter === "completed") {
      return status === "completed";
    }

    return true;
  });
  return (
    <div className="min-h-screen mx-5">
      <div className="flex flex-col py-4">
        <h1 className="text-2xl font-bold text-slate-900">Reminders</h1>

        <p className="text-sm text-slate-500 mt-1">
          Keep track of your upcoming car maintenance
        </p>
      </div>

      <div className="flex justify-start items-center gap-2 ">
        <SearchBar />
        <Link
          to="/reminders/add"
          className="bg-blue-900 py-2 px-3 text-white font-semibold rounded-lg shadow-md"
        >
          Add Reminder
        </Link>
      </div>

      <div className="flex items-center gap-2 my-2 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            filter === "all"
              ? "bg-blue-900 text-white"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("upcoming")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            filter === "upcoming"
              ? "bg-blue-900 text-white"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
          }`}
        >
          Upcoming
        </button>

        <button
          onClick={() => setFilter("dueSoon")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            filter === "dueSoon"
              ? "bg-yellow-500 text-white"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
          }`}
        >
          Due Soon
        </button>

        <button
          onClick={() => setFilter("overdue")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            filter === "overdue"
              ? "bg-red-500 text-white"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
          }`}
        >
          Overdue
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            filter === "completed"
              ? "bg-slate-700 text-white"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
          }`}
        >
          Completed
        </button>
      </div>

      {filteredReminders.length === 0 ? (
        <div className=" py-16 text-center">
          <Bell size={40} className="mx-auto text-slate-300 mb-3" />

          <h3 className="text-lg font-semibold text-slate-700">
            No reminders found
          </h3>

          <p className="text-sm text-slate-400 mt-1">
            You don't have any reminders in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {filteredReminders.map((item) => {
            const status = getStatus(item);
            const vehicleName = getVehicleName(item.vehicleId);

            return (
              <div
                key={item._id}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-sm transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center ${getReminderIconStyle(
                        item.title,
                      )}`}
                    >
                      {getReminderIcon(item.title)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-500 mt-0.5">
                        {vehicleName}
                      </p>
                    </div>
                  </div>

                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreVertical size={20} />
                  </button>
                </div>

                {item.description && (
                  <p className="text-sm text-slate-500 mt-4">
                    {item.description}
                  </p>
                )}

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CircleAlert size={16} className="text-slate-400" />

                    <span className="text-sm text-slate-500">
                      {item.date
                        ? new Date(item.date).toLocaleDateString()
                        : "No date"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        status,
                      )}`}
                    >
                      {getStatusText(status)}
                    </span>

                    <span className="text-xs text-slate-400">
                      {getDaysText(item)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Outlet />
    </div>
  );
}
