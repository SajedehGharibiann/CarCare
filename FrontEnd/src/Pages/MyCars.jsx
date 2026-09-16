import React, { useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../Utils/toast";
import { setVehicles } from "../../Slices/vehicle";
import VehicleCards from "../Components/VehicleCards";
import AddVehicle from "../Components/AddVehicle";
import { Link, Outlet } from "react-router-dom";

export default function MyCars() {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicle?.vehicles ?? []);
  const token = useSelector((state) => state.auth?.token);

  useEffect(() => {
    const getVehicles = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/vehicle`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (data.success) {
          dispatch(setVehicles(data.data));
        }
      } catch (error) {
        console.log("Get vehicles error", error);
      }
    };
    if (token) {
      getVehicles();
    }
  }, [dispatch, token]);
  console.log("vehicles", vehicle);
  return (
    <div className="mx-5">
      <div className="flex flex-col py-4">
        <h1 className="font-bold text-2xl">MyCars</h1>
        <p className="font-semibold text-slate-500 text-[14px]">
          Manage all your vehicles in one place.
        </p>
      </div>
      <div className="flex justify-start items-center gap-2 ">
        <SearchBar />
        <Link
          to="/my-cars/add"
          className="bg-blue-900 py-2 px-3 text-white font-semibold rounded-lg shadow-md"
        >
          Add Vehicle
        </Link>
      </div>
      <div className=" mt-6">
        {vehicle.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {vehicle.map((item) => (
              <VehicleCards key={item._id} vehicle={item} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl py-20 text-center">
            <p className="text-slate-500">No vehicle available</p>
            <Link to="/my-cars/add" className="inline-flex items-center gap-2 mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-semibold"></Link>
          </div>
        )}
      </div>

      <Outlet />
    </div>
  );
}
