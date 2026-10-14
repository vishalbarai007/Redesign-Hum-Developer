"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Waves,
  Dumbbell,
  ShieldCheck,
  Building,
  Trees,
  BatteryCharging,
  Users
} from "lucide-react";

interface AmenitySlide {
  id: string;
  name: string;
  category: string;
  tagline: string;
  specs: string;
  imageUrl: string;
}

const AMENITIES: AmenitySlide[] = [
  {
    id: "infinity-pool",
    name: "Rooftop Horizon Pool",
    category: "Wellness & Leisure",
    tagline: "Panoramic Western Skyline Views",
    specs: "Temperature Controlled • Sunset Viewing Deck",
    imageUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/5305d4bb79173938d201b9cfaa7b0f86a6662a59-900x440.jpg"
  },
  {
    id: "sky-lounge",
    name: "Sky Observatory & Stargazing Deck",
    category: "Rooftop Recreation",
    tagline: "300 Ft Above City Horizon",
    specs: "Open-Air Amphitheatre • Barbecue Pavilion",
    imageUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png"
  },
  {
    id: "grand-lobby",
    name: "Double-Height Grand Lobby",
    category: "Arrival Experience",
    tagline: "Italian Marble & 24/7 Concierge",
    specs: "24-Ft Clear Ceiling • Guest Waiting Lounge",
    imageUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/98cb2c2d4f9a75bfb71f3458d5036e9fc0b98c47-2000x1125.jpg"
  },
  {
    id: "fitness-club",
    name: "State-of-the-Art Gymnasium",
    category: "Fitness & Rejuvenation",
    tagline: "Branded Cardio & Strength Gear",
    specs: "Dedicated Yoga & Aerobics Studio",
    imageUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/3e1294592a087152bcccb6ae5861fe9cce85c1c0-900x400.jpg"
  },
  {
    id: "kids-play",
    name: "Children's Adventure Turf",
    category: "Family & Community",
    tagline: "Safe EPDM Rubber Flooring",
    specs: "Multi-Activity Play Gym • CCTV Monitored",
    imageUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/6dc02418cefd57c9988c0bd30bde40464261e035-402x280.jpg"
  },
  {
    id: "ev-podium",
    name: "Automated Podium Car Park",
    category: "Smart Infrastructure",
    tagline: "Dedicated EV Charging Stations",
    specs: "Multi-Level Access • Boom Barrier Security",
    imageUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/bb03b27c23cd4d2e9471d0360d5b774c8687c2a9-402x208.jpg"
  }
];

export function AmenitiesMomentumScrub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section
      id="amenities"
      className="py-24 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Strip with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#265CA0] font-bold">
                04 / LIFESTYLE AMENITIES
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              Curated World-Class Living
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal max-w-xl">
              Elevated podium and rooftop recreation designed for wellness, leisure, and family celebrations in Kandivali & Borivali West.
            </p>
          </div>

          {/* Next / Prev Controls (WordPress Luxury Style) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-white text-slate-800 hover:bg-[#265CA0] hover:text-white shadow-md hover:border-[#265CA0]"
                  : "bg-slate-50 text-slate-300 cursor-not-allowed"
              }`}
              aria-label="Scroll amenities left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-white text-slate-800 hover:bg-[#265CA0] hover:text-white shadow-md hover:border-[#265CA0]"
                  : "bg-slate-50 text-slate-300 cursor-not-allowed"
              }`}
              aria-label="Scroll amenities right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Clean Horizontal Scroll Container */}
        <div
          ref={containerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory -mx-6 px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="w-[320px] sm:w-[400px] shrink-0 snap-start bg-[#F8FAFC] border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#265CA0] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Big Image Visual */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={amenity.imageUrl}
                    alt={amenity.name}
                    fill
                    sizes="(max-width: 640px) 320px, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded bg-white/90 backdrop-blur-md text-[#265CA0] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {amenity.category}
                    </span>
                  </div>
                </div>

                {/* Minimal Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-black text-slate-900 uppercase">
                    {amenity.name}
                  </h3>
                  <div className="text-xs text-[#265CA0] font-bold mt-1">
                    {amenity.tagline}
                  </div>
                  <div className="text-xs text-slate-500 mt-2 font-medium">
                    {amenity.specs}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
