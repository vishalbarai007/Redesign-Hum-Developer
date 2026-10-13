"use client";

import React, { useState } from "react";
import Image from "next/image";
import { luxuryAmenitiesData } from "@/data/units";

export function AmenitiesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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

  return (
    <section id="amenities" className="py-24 bg-[#0F0F11] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                Lifestyle & Rejuvenation
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Curated World-Class Amenities
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] max-w-xl mt-2 font-light">
              Elevated podium and rooftop spaces designed to offer tranquility, fitness, and vibrant family celebrations.
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

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-[#141418] border border-[#27272A] rounded-xs overflow-hidden flex flex-col justify-between group hover:border-[#C5A880]/50 transition-colors"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-[#0A0A0C]">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded-xs bg-[#0A0A0C]/90 text-[10px] uppercase tracking-wider text-[#C5A880] font-medium border border-[#27272A]">
                      {amenity.category}
                    </span>
                  </div>
                  {amenity.stat && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-xs bg-[#0A0A0C]/90 text-[10px] uppercase tracking-wider text-white border border-[#27272A]">
                        {amenity.stat}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl text-white font-normal mb-1">
                    {amenity.title}
                  </h3>
                  <span className="text-xs text-[#C5A880] block mb-3 font-sans">
                    {amenity.subtitle}
                  </span>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
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
