"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  Maximize2,
  Calendar,
  Layers,
  Sparkles,
  Check,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { unitsData, RealEstateUnit } from "@/data/units";
import { FloorPlanModal } from "./FloorPlanModal";

interface AzimuteResidencesScrubberProps {
  onOpenBooking: (unitName?: string) => void;
}

const RESIDENCE_TABS = [
  { id: "1BHK", label: "1 BHK Suites", badge: "Smart Luxe" },
  { id: "2BHK", label: "2 BHK Grand", badge: "Most Popular" },
  { id: "3BHK", label: "3 BHK Presidential", badge: "Sky Residence" },
  { id: "Duplex", label: "Jodi Options", badge: "Bespoke" }
];

export function AzimuteResidencesScrubber({ onOpenBooking }: AzimuteResidencesScrubberProps) {
  const [activeCategory, setActiveCategory] = useState("2BHK");
  const [selectedUnitForModal, setSelectedUnitForModal] = useState<RealEstateUnit | null>(null);

  // Find unit matching active category or default to first
  const currentUnit =
    unitsData.find((u) => u.category === activeCategory) || unitsData[0];

  return (
    <section
      id="residences"
      className="py-24 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Strip with Chapter (Azimute Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#265CA0] font-bold">
                02 / CURATED RESIDENCES
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              Intelligent Floor Plans
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal max-w-xl">
              Engineered with zero space wastage, acoustic double-glazed windows, and high clear ceilings across Kandivali & Borivali West.
            </p>
          </div>

          {/* Clean Big Configuration Switcher Tabs (WordPress Style) */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-xl shadow-sm">
            {RESIDENCE_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-all flex items-center gap-2 ${
                  activeCategory === tab.id
                    ? "bg-[#265CA0] text-white shadow-md shadow-[#265CA0]/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Big Clean Interactive Stage: Split Layout Blueprint & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg">
          {/* Left Column: Blueprint Visualizer with High-Res Zoom */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative h-80 sm:h-[440px] w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200 group">
              <Image
                src={currentUnit.floorPlanUrl || "/floorplan.jpg"}
                alt={`${currentUnit.name} Blueprint`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating Blueprint Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-[#265CA0] text-white text-[11px] font-bold uppercase tracking-wider shadow">
                  {currentUnit.category} Blueprint
                </span>
                <span className="px-3 py-1 rounded bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 text-[11px] font-semibold">
                  {currentUnit.tower}
                </span>
              </div>

              {/* Zoom Action Trigger */}
              <button
                type="button"
                onClick={() => setSelectedUnitForModal(currentUnit)}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F172A]/80 hover:bg-[#265CA0] text-white text-xs font-bold backdrop-blur-md transition-all shadow-md"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Zoom Blueprint
              </button>
            </div>

            <div className="text-[11px] text-slate-400 text-center font-medium">
              *Architectural plan illustrative. Subject to MahaRERA registration PM1180002502952.
            </div>
          </div>

          {/* Right Column: Clean Minimal Specs & Action */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#265CA0] font-bold mb-1">
                {currentUnit.projectName}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 uppercase">
                {currentUnit.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
                {currentUnit.description}
              </p>
            </div>

            {/* 4 Big Clean Spec Metrics */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-[#F8FAFC] border border-slate-200 rounded-xl">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                  Carpet Area
                </span>
                <span className="font-heading text-xl sm:text-2xl font-black text-slate-900 block mt-0.5">
                  {currentUnit.carpetAreaSqFt} <span className="text-xs font-normal text-slate-500">Sq. Ft.</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                  Price Guidance
                </span>
                <span className="font-heading text-xl sm:text-2xl font-black text-[#265CA0] block mt-0.5">
                  {currentUnit.priceRaw}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                  Clear Ceiling
                </span>
                <span className="font-heading text-base sm:text-lg font-bold text-slate-900 block mt-0.5">
                  {currentUnit.ceilingHeight}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                  Possession
                </span>
                <span className="font-heading text-base sm:text-lg font-bold text-slate-900 block mt-0.5">
                  {currentUnit.possession}
                </span>
              </div>
            </div>

            {/* Architectural Highlights Checklist */}
            <div className="space-y-2">
              {currentUnit.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking(`${currentUnit.projectName} - ${currentUnit.name}`)}
                className="brandFilledBtn flex-1 py-3.5 text-xs font-bold shadow-md"
              >
                <Calendar className="w-4 h-4 mr-1.5" />
                Schedule Unit Viewing
              </button>

              <button
                type="button"
                onClick={() => setSelectedUnitForModal(currentUnit)}
                className="brandBorderBtn flex-1 py-3.5 text-xs font-bold"
              >
                <Maximize2 className="w-4 h-4 mr-1.5" />
                View Full Specs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blueprint Modal with High-Res Zoom */}
      {selectedUnitForModal && (
        <FloorPlanModal
          isOpen={!!selectedUnitForModal}
          onClose={() => setSelectedUnitForModal(null)}
          unit={selectedUnitForModal}
          onOpenBooking={onOpenBooking}
        />
      )}
    </section>
  );
}
