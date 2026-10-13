"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ZoomIn, Download, Calendar, ShieldCheck, Check } from "lucide-react";
import Image from "next/image";
import { RealEstateUnit } from "@/data/units";

interface FloorPlanModalProps {
  unit: RealEstateUnit;
  onOpenBooking?: (unitName: string) => void;
}

export function FloorPlanModal({ unit, onOpenBooking }: FloorPlanModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#265CA0] hover:text-[#183C68] transition-colors"
        >
          <ZoomIn className="w-3.5 h-3.5 text-[#265CA0]" />
          View Blueprint &amp; Floor Plan
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-lg p-6 sm:p-8 z-50 shadow-2xl overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-start pb-5 border-b border-slate-200 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                  {unit.projectName} &bull; {unit.category}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] uppercase tracking-wider text-slate-700 font-semibold">
                  <ShieldCheck className="w-3 h-3 text-[#265CA0]" />
                  RERA: {unit.reraRegistration}
                </span>
              </div>
              <Dialog.Title className="font-heading text-2xl sm:text-3xl text-slate-900 font-bold">
                {unit.name} &bull; Architectural Blueprint
              </Dialog.Title>
              <Dialog.Description className="text-xs text-slate-600 mt-1">
                Carpet Area: <span className="text-slate-900 font-bold">{unit.carpetAreaSqFt} sq.ft. ({unit.carpetAreaSqM} sq.m.)</span> &bull; {unit.bedrooms} Bed &bull; {unit.bathrooms} Bath &bull; {unit.facing}
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Floor Plan Image Canvas */}
          <div className="relative w-full h-[400px] sm:h-[520px] bg-slate-50 rounded-lg overflow-hidden border border-slate-200 mb-6 flex items-center justify-center p-4">
            <Image
              src={unit.floorPlanUrl || "/floorplan.jpg"}
              alt={`${unit.name} Architectural Blueprint`}
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-contain p-2"
            />
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-semibold">Carpet Area</span>
              <span className="text-sm font-bold text-slate-900">{unit.carpetAreaSqFt} sq.ft.</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-semibold">Ceiling Height</span>
              <span className="text-sm font-bold text-slate-900">{unit.ceilingHeight}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-semibold">Orientation</span>
              <span className="text-sm font-bold text-slate-900">{unit.facing.split("—")[0]}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-semibold">Price Guidance</span>
              <span className="text-sm font-bold text-[#265CA0]">{unit.priceRaw}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <div className="text-xs text-slate-600">
              *MahaRERA certified layout. Subject to terms and conditions.
            </div>

            <div className="flex items-center gap-3">
              <a
                href={unit.floorPlanUrl || "/floorplan.jpg"}
                download
                className="brandBorderBtn text-xs py-2.5 px-4"
              >
                <Download className="w-3.5 h-3.5 mr-1" />
                Download Blueprint
              </a>

              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => onOpenBooking(unit.name)}
                  className="brandFilledBtn text-xs py-2.5 px-5"
                >
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  Schedule Sample Flat Visit
                </button>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
