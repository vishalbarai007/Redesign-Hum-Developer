"use client";

import React, { useState } from "react";
import { Train, Navigation, Building, HeartPulse, MapPin } from "lucide-react";
import { connectivityData, ConnectivityPoint } from "@/data/units";

export function ConnectivitySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Transit & Railway",
    "Expressways & Metro",
    "Shopping & Leisure",
    "Healthcare & Schools"
  ];

  const filteredPoints = connectivityData.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const getIcon = (cat: string) => {
    switch (cat) {
      case "Transit & Railway":
        return <Train className="w-4 h-4 text-[#265CA0]" />;
      case "Expressways & Metro":
        return <Navigation className="w-4 h-4 text-[#265CA0]" />;
      case "Shopping & Leisure":
        return <Building className="w-4 h-4 text-[#265CA0]" />;
      default:
        return <HeartPulse className="w-4 h-4 text-[#265CA0]" />;
    }
  };

  return (
    <section id="connectivity" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                STRATEGIC LOCATION
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Unrivaled Mumbai Connectivity
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-2 font-normal">
              Located in prime Kandivali (W) and Borivali (W), minutes from metro lines, railway hubs, and key retail destinations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] uppercase tracking-wider px-4 py-2 rounded-full transition-all font-semibold ${
                  selectedCategory === cat
                    ? "bg-[#265CA0] text-white shadow-md shadow-[#265CA0]/20"
                    : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Connectivity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPoints.map((item, idx) => (
            <div
              key={item.destination || idx}
              className="p-5 bg-[#F8FAFC] border border-slate-200 rounded-lg hover:border-[#265CA0] hover:bg-white hover:shadow-md transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EBF3FC] border border-slate-200 flex items-center justify-center shrink-0">
                {getIcon(item.category)}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#265CA0] font-bold">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {item.timeMins}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
                  {item.destination}
                </h3>

                <p className="text-xs text-slate-600 font-normal">
                  Distance: {item.distanceKm}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
