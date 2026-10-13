"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ShieldCheck, Compass, Sparkles, Calendar, Layers, Eye } from "lucide-react";
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
    <section id="residences" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                FLOOR PLANS &amp; INVENTORY
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Curated Residences
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-2 font-normal">
              Intelligently planned configurations with zero space wastage, cross-ventilation, and high clear ceilings.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {["All", "1BHK", "2BHK", "3BHK", "Duplex"].map((cat) => (
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

        {/* Units Grid with Visual Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#265CA0] hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Visual Preview / Render Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={unit.galleryImages[0] || unit.floorPlanUrl || "/floorplan.jpg"}
                    alt={unit.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-[#265CA0] text-[10px] uppercase tracking-wider text-white font-bold shadow-md">
                      {unit.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded bg-white/95 text-[10px] uppercase tracking-wider text-slate-800 font-bold border border-slate-200 shadow-sm">
                      {unit.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold">
                      {unit.carpetAreaSqFt} sq.ft. Carpet
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Project name & Tower */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-medium">
                    <span className="text-[#265CA0] font-semibold">{unit.projectName}</span>
                    <span>{unit.tower.split("—")[0]}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                    {unit.name}
                  </h3>

                  {/* Pricing and Facing */}
                  <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase text-slate-500 block font-semibold">Starting From</span>
                      <span className="text-lg font-bold text-[#265CA0]">{unit.priceRaw}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase text-slate-500 block font-semibold">Orientation</span>
                      <span className="text-xs font-semibold text-slate-800">{unit.facing.split("—")[0]}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-5 text-xs text-slate-700">
                    {unit.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#265CA0] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between gap-3">
                <FloorPlanModal unit={unit} onOpenBooking={onOpenBooking} />

                <button
                  type="button"
                  onClick={() => onOpenBooking(unit.name)}
                  className="brandFilledBtn text-[11px] py-2 px-3.5"
                >
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
