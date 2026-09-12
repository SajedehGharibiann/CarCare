import React, { useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../Utils/toast";
import { setVehicles } from "../../Slices/vehicle";

export default function MyCars() {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicle?.vehicles);
  const token = useSelector((state) => state.auth?.token);

  useEffect(async () => {
    const getVehicles = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/vehicle`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.ok) {
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
        <button className="bg-blue-900 shadow-sm py-2 px-3 text-white font-semibold rounded-[5px]">
          Add vehicle
        </button>
      </div>
    </div>
  );
}
