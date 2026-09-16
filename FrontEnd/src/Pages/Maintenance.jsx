import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../Utils/toast";
import { setMaintenance } from "../../Slices/maintenance";
import { MoreVertical, Wrench } from "lucide-react";

export default function Maintenance() {
  const maintenance = useSelector(
    (state) => state.maintenance?.maintenance ?? [],
  );
  const token = useSelector((state) => state.auth?.token ?? []);
  const dispatch = useDispatch();
  useEffect(() => {
    const getMaintenance = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/maintenance`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          dispatch(setMaintenance(data.data));
        }
      } catch (error) {
        showToast("Something went wrong", "error");
      }
    };
    if (token) {
      getMaintenance();
    }
  }, [dispatch, token]);
  return (
    <div className="mx-5">
      <div className="flex flex-col py-4">
        <h1 className="font-bold text-2xl">Maintenance</h1>
        <p className="font-semibold text-slate-500 text-[14px]">
          Keep track of every service and vehicle.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <select className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-600 outline-none">
          <option>All Vehicles</option>
        </select>
        <select className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-600 outline-none">
          <option>All Types</option>
          <option>Maintenance</option>
          <option>Repair</option>
          <option>Oil Change</option>
          <option>Tire</option>
          <option>Battery</option>
        </select>
        <SearchBar inputClassName="bg-white border border-slate-200" />
        <Link
          to="/maintenance/add"
          className="bg-blue-900 shadow-md py-2 px-3 text-white font-semibold rounded-lg"
        >
          Add Record
        </Link>
      </div>

      <div className="mt-4 bg-white rounded-[5px] border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-200">
            <tr className="border border-slate-200">
              <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                Services
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                Vehicle
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                Date
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                Mileage
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                Cost
              </th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {maintenance.length > 0 ? (
              maintenance.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Wrench size={17} className="text-slate-600" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          {item.title}
                        </p>

                        <p className="text-xs text-slate-400">
                          {item.type || "-"}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-slate-700">
                      {item.vehicleId?.brand
                        ? `${item.vehicleId.brand} ${item.vehicleId.model}`
                        : item.vehicleId || "-"}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm text-slate-600">
                      {item.date
                        ? new Date(item.date).toLocaleDateString()
                        : "-"}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm text-slate-600">
                      {item.mileage
                        ? `${item.mileage.toLocaleString()} km`
                        : "-"}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-slate-700">
                      {item.cost ? `${item.cost.toLocaleString()}` : "-"}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <button className="w-8 h-8 inline-flex items-center justify-center rounded-lg hover:bg-slate-100">
                      <MoreVertical size={17} className="text-slate-500" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-16 text-center">
                  <p className="text-slate-400">
                    No maintenance records available
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  );
}
