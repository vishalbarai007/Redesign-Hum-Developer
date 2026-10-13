"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ShieldCheck, Compass, Sparkles } from "lucide-react";
import { unitsData, RealEstateUnit } from "@/data/units";
import { FloorPlanModal } from "./FloorPlanModal";

interface UnitInventoryProps {
  onOpenBooking: (unitName?: string) => void;
}

export function UnitInventory({ onOpenBooking }: UnitInventoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredUnits = unitsData.filter((u) => {
    if (selectedCategory === "All") return true;
    return u.category === selectedCategory;
  });

  return (
    <section id="residences" className="py-24 bg-[#0A0A0C] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                Floor Plans & Inventory
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Curated Residences
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] max-w-xl mt-2 font-light">
              Architecturally optimized configurations with zero circulation wastage, cross-ventilation, and high clear ceilings.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {["All", "1BHK", "2BHK", "3BHK", "Duplex"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] uppercase tracking-wider px-4 py-2 rounded-xs transition-colors ${
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

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-[#141418] border border-[#27272A] rounded-xs p-6 flex flex-col justify-between hover:border-[#C5A880]/50 transition-colors"
            >
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-[#27272A] mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                      {unit.projectName}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                      {unit.name}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 bg-[#1A1A22] border border-[#2E2E38] text-[10px] uppercase tracking-wider text-[#CBD5E1] rounded-xs">
                    {unit.category}
                  </span>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 py-3 bg-[#0A0A0C] px-3.5 rounded-xs border border-[#27272A] mb-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-[#94A3B8] block">Carpet Area</span>
                    <span className="font-serif text-base text-white font-medium">
                      {unit.carpetAreaSqFt} Sq.Ft.
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#94A3B8] block">Facing</span>
                    <span className="font-serif text-base text-white font-medium truncate block">
                      {unit.facing.split("—")[0]}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#94A3B8] block">Possession</span>
                    <span className="text-[#CBD5E1] font-medium">{unit.possession}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#94A3B8] block">Status</span>
                    <span className="text-[#C5A880] font-medium">{unit.status}</span>
                  </div>
                </div>

                {/* Feature Bullets */}
                <ul className="space-y-2 mb-6">
                  {unit.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action Strip */}
              <div className="pt-4 border-t border-[#27272A]">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8]">Guidance</span>
                  <span className="font-serif text-xl text-[#C5A880] font-medium">
                    {unit.priceRaw}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <FloorPlanModal unit={unit} onOpenBooking={onOpenBooking} />

                  <button
                    type="button"
                    onClick={() => onOpenBooking(unit.name)}
                    className="goldenBorderBtn text-[10px] py-2 px-3"
                  >
                    Site Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
