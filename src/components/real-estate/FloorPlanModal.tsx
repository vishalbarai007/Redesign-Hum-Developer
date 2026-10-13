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
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#C5A880] hover:text-white transition-colors"
        >
          <ZoomIn className="w-3.5 h-3.5 text-[#C5A880]" />
          View Blueprint & Floor Plan
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl max-h-[90vh] bg-[#0F0F11] border border-[#27272A] rounded-sm p-6 sm:p-8 z-50 shadow-2xl overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-start pb-5 border-b border-[#27272A] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                  {unit.projectName} &bull; {unit.category}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[#1A1A22] border border-[#2E2E38] text-[9px] uppercase tracking-wider text-[#94A3B8]">
                  <ShieldCheck className="w-2.5 h-2.5 text-[#C5A880]" />
                  RERA: {unit.reraRegistration}
                </span>
              </div>
              <Dialog.Title className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {unit.name} &bull; Architectural Blueprint
              </Dialog.Title>
              <Dialog.Description className="font-sans text-xs text-[#94A3B8] mt-1">
                Carpet Area: <span className="text-white font-medium">{unit.carpetAreaSqFt} sq.ft. ({unit.carpetAreaSqM} sq.m.)</span> &bull; {unit.bedrooms} Bed &bull; {unit.bathrooms} Bath &bull; {unit.facing}
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                className="p-2 text-[#94A3B8] hover:text-white hover:bg-[#1A1A22] rounded-sm transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Floor Plan Image Canvas */}
          <div className="relative w-full h-[360px] sm:h-[460px] bg-[#0A0A0C] border border-[#27272A] rounded-sm overflow-hidden flex items-center justify-center p-4">
            <Image
              src={unit.floorPlanUrl}
              alt={`${unit.name} Architectural Floor Plan`}
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-contain p-2"
            />
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 my-5 border-y border-[#27272A] bg-[#141418] px-4 rounded-sm">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Usable Carpet</span>
              <span className="font-serif text-base sm:text-lg text-white font-medium">{unit.carpetAreaSqFt} Sq.Ft.</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Ceiling Clearance</span>
              <span className="font-serif text-base sm:text-lg text-white font-medium">{unit.ceilingHeight}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Orientation</span>
              <span className="font-serif text-base sm:text-lg text-white font-medium truncate block">{unit.facing.split("—")[0]}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Possession</span>
              <span className="font-serif text-base sm:text-lg text-[#C5A880] font-medium">{unit.possession}</span>
            </div>
          </div>

          {/* Highlights & Features */}
          <div className="mb-6">
            <span className="text-[11px] uppercase tracking-widest text-[#C5A880] font-semibold block mb-3">
              Architectural Specifications
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {unit.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#27272A]">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Pricing Guidance</span>
              <span className="font-serif text-xl sm:text-2xl text-[#C5A880] font-medium">
                {unit.priceRange}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={unit.floorPlanUrl}
                download={`${unit.id}-floorplan.jpg`}
                className="secondarySolidBtn text-[11px] py-2.5 px-4"
              >
                <Download className="w-3.5 h-3.5" />
                Save High-Res Plan
              </a>

              <Dialog.Close asChild>
                <button
                  type="button"
                  onClick={() => onOpenBooking?.(unit.name)}
                  className="goldenFilledBtn text-[11px] py-2.5 px-5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book Private Site Visit
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
