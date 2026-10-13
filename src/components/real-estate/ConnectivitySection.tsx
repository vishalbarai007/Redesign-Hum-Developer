"use client";

import React, { useState } from "react";
import { Train, Navigation, Building, HeartPulse } from "lucide-react";
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
        return <Train className="w-4 h-4 text-[#C5A880]" />;
      case "Expressways & Metro":
        return <Navigation className="w-4 h-4 text-[#C5A880]" />;
      case "Shopping & Leisure":
        return <Building className="w-4 h-4 text-[#C5A880]" />;
      default:
        return <HeartPulse className="w-4 h-4 text-[#C5A880]" />;
    }
  };

  return (
    <section id="connectivity" className="py-24 bg-[#0A0A0C] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                Strategic Suburban Access
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Unrivaled Connectivity
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] max-w-xl mt-2 font-light">
              Positioned at the epicentre of Kandivali and Borivali, ensuring effortless commutes across Mumbai via metro, rail, and expressways.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-xs transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#C5A880] text-[#0A0A0C] font-semibold"
                    : "bg-[#141418] text-[#94A3B8] border border-[#27272A] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Connectivity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-[#141418] border border-[#27272A] rounded-xs p-6 flex flex-col justify-between hover:border-[#C5A880]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-xs bg-[#1E1E24] border border-[#2E2E38] flex items-center justify-center">
                    {getIcon(point.category)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8]">
                    {point.distanceKm}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block mb-1">
                  {point.category}
                </span>

                <h3 className="font-serif text-lg text-white font-normal mb-4">
                  {point.destination}
                </h3>
              </div>

              <div className="pt-4 border-t border-[#27272A] flex items-center justify-between">
                <span className="text-[10px] uppercase text-[#94A3B8]">Drive / Transit</span>
                <span className="font-serif text-lg text-[#C5A880] font-medium">
                  {point.timeMins}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
