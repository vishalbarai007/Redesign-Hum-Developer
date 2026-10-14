"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { luxuryAmenitiesData } from "@/data/units";

export function AmenitiesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Wellness & Fitness",
    "Leisure & Rooftop",
    "Family & Community",
    "Security & Smart Living"
  ];

  const filteredAmenities = luxuryAmenitiesData.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section id="amenities" className="py-20 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                LIFESTYLE &amp; REJUVENATION
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Curated World-Class Amenities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-2 font-normal">
              Elevated podium and rooftop recreation designed for wellness, leisure, and family celebrations.
            </p>
          </div>

          {/* Carousel Next / Prev Controls & Category Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 mr-2">
              <button
                type="button"
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:bg-[#265CA0] hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm"
                aria-label="Scroll amenities left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:bg-[#265CA0] hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm"
                aria-label="Scroll amenities right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[11px] uppercase tracking-wider px-4 py-2 rounded-full transition-all font-semibold shrink-0 ${
                selectedCategory === cat
                  ? "bg-[#265CA0] text-white shadow-md shadow-[#265CA0]/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Amenities Image Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory scrollbar-none"
        >
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="min-w-[300px] sm:min-w-[360px] md:min-w-[380px] bg-white border border-slate-200 rounded-lg overflow-hidden snap-start group hover:border-[#265CA0] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* High-Resolution Amenity Image */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-white/95 backdrop-blur-sm text-[10px] uppercase tracking-wider text-[#265CA0] font-bold shadow-sm">
                      {amenity.category}
                    </span>
                  </div>

                  {/* Stat / Scale Pill */}
                  {amenity.stat && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-[#265CA0] text-white text-[11px] font-bold shadow-sm">
                        {amenity.stat}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content (Concise, punchy text) */}
                <div className="p-5">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#265CA0] transition-colors mb-1.5">
                    {amenity.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#265CA0] uppercase tracking-wider mb-2.5">
                    {amenity.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
