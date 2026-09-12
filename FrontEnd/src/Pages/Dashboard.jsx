import {
  Bell,
  DotIcon,
  DotSquareIcon,
  MoreHorizontalIcon,
  MoreVertical,
  Search,
  User2Icon,
} from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import DashboardCards from "../Components/DashboardCards";
import DashboardVehicles from "../Components/DashboardVehicles";
import RecentMaintenance from "../Components/RecentMaintenance";
import QuickActions from "../Components/QuickActions";
import SearchBar from "../Components/SearchBar"
export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <div
        className="flex items-center justify-between px-5 py-2
       bg-slate-50 shadow-sm shadow-slate-400/30"
      >
        <div className="relative">
         <SearchBar/>
        </div>

        <div className="flex justify-between gap-5 items-center">
          <div className="flex gap-2 justify-center align-middle items-center">
            {user?.profileImage ? (
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-slate-100 rounded-full flex justify-center items-center">
                <User2Icon size={32} className="text-blue-950" />
              </div>
            )}
            <div className="flex flex-col ">
              <h4 className="font-semibold">{user?.firstName}</h4>
              <span className="font-light text-[14px] text-gray-700">
                Profile
              </span>
            </div>
            <MoreVertical size={16} className="text-blue-950 cursor-pointer" />
          </div>
          <Bell size={24} className="text-blue-900" />
        </div>
      </div>
      <div className="m-5">
        <h1 className="font-bold text-2xl">Hello 👋 {user?.firstName}</h1>
        <p className="font-semibold text-slate-500 text-[14px]">
          Let’s keep your car in great shape.
        </p>
      </div>
      <div className="grid grid-cols-3 px-5 gap-6 w-full">
        <div className="col-span-2">
          <DashboardCards />
          
        </div>
        <div className="col-span-1 min-w-0">
          <RecentMaintenance />
        </div>
         <div className="col-span-2 min-w-0">
          <DashboardVehicles />
         
      </div>
      <div className="col-span-1 min-w-0">
         <QuickActions />
      </div>
      </div>
     
      
    </div>
  );
}
