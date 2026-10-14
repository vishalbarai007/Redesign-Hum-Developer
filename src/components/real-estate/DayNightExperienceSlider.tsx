"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sun,
  Moon,
  Sparkles,
  Maximize2,
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface PerspectiveItem {
  id: string;
  tag: string;
  title: string;
  specs: string;
  dayImage: string;
  twilightImage: string;
}

const PERSPECTIVES: PerspectiveItem[] = [
  {
    id: "lobby",
    tag: "ARRIVAL EXPERIENCE",
    title: "Double-Height Grand Entrance Lobby",
    specs: "24-Ft Clear Ceiling • Italian Marble • 24/7 Concierge",
    dayImage: "https://cdn.sanity.io/images/3wmbb6cw/production/98cb2c2d4f9a75bfb71f3458d5036e9fc0b98c47-2000x1125.jpg",
    twilightImage: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg"
  },
  {
    id: "living-suite",
    tag: "RESIDENCE INTERIORS",
    title: "Sunlit Master Living Suites",
    specs: "Floor-to-Ceiling Acoustic Glazing • Zero Space Wastage",
    dayImage: "https://cdn.sanity.io/images/3wmbb6cw/production/3e1294592a087152bcccb6ae5861fe9cce85c1c0-900x400.jpg",
    twilightImage: "https://cdn.sanity.io/images/3wmbb6cw/production/5305d4bb79173938d201b9cfaa7b0f86a6662a59-900x440.jpg"
  },
  {
    id: "sky-deck",
    tag: "ROOFTOP RECREATION",
    title: "Skyline Stargazing & Horizon Deck",
    specs: "300 Ft Above City • Panoramic Western Suburbs Panoramas",
    dayImage: "https://cdn.sanity.io/images/3wmbb6cw/production/5305d4bb79173938d201b9cfaa7b0f86a6662a59-900x440.jpg",
    twilightImage: "https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png"
  },
  {
    id: "elevation",
    tag: "ARCHITECTURAL FACADE",
    title: "Contemporary Landmark Towers",
    specs: "Solar Daylight Orientation • High-Speed Elevators",
    dayImage: "https://cdn.sanity.io/images/3wmbb6cw/production/7761cb98db9659b20149a3df2c377374d055bdd0-5166x1892.png",
    twilightImage: "https://cdn.sanity.io/images/3wmbb6cw/production/dc5c3a6c0549738a8293add4be371768a4164ea4-1440x517.jpg"
  }
];

interface DayNightExperienceSliderProps {
  onOpenBooking?: (label?: string) => void;
}

export function DayNightExperienceSlider({ onOpenBooking }: DayNightExperienceSliderProps) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [mode, setMode] = useState<"day" | "twilight">("day");

  const current = PERSPECTIVES[activeItemIndex];
  const activeImage = mode === "day" ? current.dayImage : current.twilightImage;

  return (
    <section
      id="gallery"
      className="py-24 bg-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden"
    >
      <div id="living-experience" className="absolute top-0" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#60A5FA] font-bold">
                03 / LIVING EXPERIENCES
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Architecture Of Light
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal max-w-xl">
              Experience sunlight transitions and twilight ambiance across double-height lobbies, private residences, and sky horizons.
            </p>
          </div>

          {/* Day vs Twilight Light Switcher Pill (WordPress Clean Style) */}
          <div className="flex items-center gap-3 p-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
            <button
              type="button"
              onClick={() => setMode("day")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                mode === "day"
                  ? "bg-[#265CA0] text-white shadow-md shadow-[#265CA0]/40"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Sun className="w-4 h-4 text-amber-300" />
              <span>Daylight</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("twilight")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                mode === "twilight"
                  ? "bg-[#265CA0] text-white shadow-md shadow-[#265CA0]/40"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Moon className="w-4 h-4 text-indigo-300" />
              <span>Twilight</span>
            </button>
          </div>
        </div>

        {/* Big Cinematic Showcase Viewport */}
        <div className="relative h-[420px] sm:h-[540px] md:h-[620px] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 group">
          <Image
            src={activeImage}
            alt={current.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />

          {/* Floating Top Badge */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs uppercase tracking-widest text-white/90 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#265CA0]" />
              <span>{current.tag}</span>
            </div>

            <div className="px-3 py-1 rounded bg-[#265CA0] text-white text-[11px] font-bold uppercase tracking-wider shadow">
              {mode === "day" ? "Natural Sunlight View" : "Ambient Twilight View"}
            </div>
          </div>

          {/* Bottom Floating Info Strip */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="font-heading text-2xl sm:text-4xl font-black text-white uppercase">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                {current.specs}
              </p>
            </div>

            {onOpenBooking && (
              <button
                type="button"
                onClick={() => onOpenBooking(current.title)}
                className="brandFilledBtn shrink-0 py-3 px-6 text-xs font-bold shadow-lg"
              >
                <Calendar className="w-4 h-4 mr-1.5" />
                Schedule Experience Tour
              </button>
            )}
          </div>
        </div>

        {/* 4 Bottom Perspective Switcher Cards (Clean & Big Style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {PERSPECTIVES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItemIndex(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                activeItemIndex === idx
                  ? "bg-white/15 border-[#265CA0] shadow-lg shadow-[#265CA0]/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#60A5FA] mb-1">
                0{idx + 1} • {item.tag}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                {item.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
