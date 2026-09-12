import { Bell, CarFront, Wrench, SearchXIcon } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Search() {
  const [search, setSearch] = useState("");
  const vehicle = useSelector((state) => state.vehicle?.vehicles ?? []);
  const maintenance = useSelector(
    (state) => state.maintenance?.maintenances ?? [],
  );
  const reminder = useSelector((state) => state.reminder?.reminders ?? []);
  const searchText = search.trim().toLocaleLowerCase();

  const searchResult = [
    ...vehicle
      .filter((item) =>
        `${item.brand} ${item.model}`.toLocaleLowerCase().includes(searchText),
      )
      .map((item) => ({
        id: item._id,
        title: item.title,
        type: "Vehicle",
        icon: <CarFront size={17} />,
      })),
    ...maintenance
      .filter((item) =>
        `${item.title} ${item.type}`.toLocaleLowerCase().includes(searchText),
      )
      .map((item) => ({
        id: item._id,
        title: item.title,
        type: "Maintenance",
        icon: <Wrench size={17} />,
      })),

    ...reminder
      .filter((item) =>
        `${item.title}`.toLocaleLowerCase().includes(searchText),
      )
      .map((item) => ({
        id: item._id,
        title: item.title,
        type: "Reminder",
        icon: <Bell size={17} />,
      })),
  ];
  return (
    <div className="relative w-[550px]">
      <SearchXIcon
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={() => setSearch(e.target.value)}
        className="w-full rounded-lg bg-slate-200 py-2 pl-10 pr-3 text-sm outline-none transition focus:ring-1 focus:ring-blue-900"
      />
      {searchText && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">{searchResult.length>0?(<div><div/>):<div><div>}</div>
      )}
    </div>
  );
}
