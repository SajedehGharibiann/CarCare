import React, { useState } from "react";
import { Search, CarFront, Wrench, Bell } from "lucide-react";
import { useSelector } from "react-redux";

export default function SearchBar({inputClassName=""}) {
  const [search, setSearch] = useState("");

  const vehicles = useSelector((state) => state.vehicle?.vehicles ?? []);

  const maintenances = useSelector(
    (state) => state.maintenance?.maintenances ?? [],
  );

  const reminders = useSelector((state) => state.reminder?.reminders ?? []);

  const searchText = search.trim().toLowerCase();

  const searchResults = [
    ...vehicles
      .filter((item) =>
        `${item.brand} ${item.model}`.toLowerCase().includes(searchText),
      )
      .map((item) => ({
        id: item._id,
        title: `${item.brand} ${item.model}`,
        type: "Vehicle",
        icon: <CarFront size={17} />,
      })),

    ...maintenances
      .filter((item) =>
        `${item.title} ${item.type}`.toLowerCase().includes(searchText),
      )
      .map((item) => ({
        id: item._id,
        title: item.title,
        type: "Maintenance",
        icon: <Wrench size={17} />,
      })),

    ...reminders
      .filter((item) => `${item.title}`.toLowerCase().includes(searchText))
      .map((item) => ({
        id: item._id,
        title: item.title,
        type: "Reminder",
        icon: <Bell size={17} />,
      })),
  ];

  return (
    <div className="relative w-[550px]">
      <Search
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`w-full rounded-lg bg-slate-200 py-2 pl-10 pr-3 text-sm outline-none transition focus:ring-1 focus:ring-blue-900 ${inputClassName}`} 
      />

      {searchText && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          {searchResults.length > 0 ? (
            <div className="py-2">
              {searchResults.slice(0, 6).map((item) => (
                <div
                  key={`${item.type}-${item.id}`}
                  className="flex cursor-pointer items-center gap-3 px-4 py-3 transition hover:bg-slate-50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-900">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-700">
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-slate-400">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-6 text-center">
              <Search size={24} className="mx-auto mb-2 text-slate-300" />

              <p className="text-sm text-slate-500">No results found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
