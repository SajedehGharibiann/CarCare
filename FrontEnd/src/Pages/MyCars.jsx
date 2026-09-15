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
  const vehicle = useSelector((state) => state.vehicle?.vehicles??[]);
  const token = useSelector((state) => state.auth?.token);
  console.log("vehicle from redux" ,vehicle)
  console.log("vehicle length",vehicle.length)
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
        console.log("Get vehicle res",data)
        console.log("get vehicles data",data.data)
        if (data.ok) {
          console.log("before dispatch",data.data)
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
  console.log("vehicles",vehicle)
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
        <Link to="/my-cars/add" className="bg-blue-900 shadow-sm py-2 px-3 text-white font-semibold rounded-lg">
          Add vehicle
        </Link>
        
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-6">
        {vehicle.length > 0 ? (
          vehicle.map((item) => (
            <VehicleCards key={item._id} vehicle={item} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-slate-500">No vehicle available</p>
          </div>
        )}
      </div>
     
      <Outlet/>
    </div>
  );
}
