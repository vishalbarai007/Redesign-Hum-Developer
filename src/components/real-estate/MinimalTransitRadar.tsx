"use client";

import React from "react";
import {
  Train,
  Navigation,
  Building,
  Plane,
  Clock,
  MapPin,
  Compass
} from "lucide-react";

interface TransitPoint {
  title: string;
  category: string;
  time: string;
  distance: string;
  icon: React.ReactNode;
}

const TRANSIT_POINTS: TransitPoint[] = [
  {
    title: "Metro Line 2A (Dahanukarwadi Station)",
    category: "Rapid Metro Transit",
    time: "2 Mins",
    distance: "650 Meters",
    icon: <Navigation className="w-5 h-5 text-[#265CA0]" />
  },
  {
    title: "Kandivali & Borivali Railway Hubs",
    category: "Western Suburban Rail",
    time: "5 Mins",
    distance: "1.8 Km",
    icon: <Train className="w-5 h-5 text-[#265CA0]" />
  },
  {
    title: "Western Express Highway (WEH)",
    category: "Arterial Expressway",
    time: "7 Mins",
    distance: "2.4 Km",
    icon: <Compass className="w-5 h-5 text-[#265CA0]" />
  },
  {
    title: "New Link Road & S.V. Road",
    category: "Prime Commercial Spine",
    time: "3 Mins",
    distance: "900 Meters",
    icon: <Building className="w-5 h-5 text-[#265CA0]" />
  },
  {
    title: "Inorbit & Infinity Retail Malls",
    category: "Lifestyle & Entertainment",
    time: "10 Mins",
    distance: "4.2 Km",
    icon: <Building className="w-5 h-5 text-[#265CA0]" />
  },
  {
    title: "International Airport (CSMI Airport)",
    category: "Air Travel Corridor",
    time: "25 Mins",
    distance: "14 Km",
    icon: <Plane className="w-5 h-5 text-[#265CA0]" />
  }
];

export function MinimalTransitRadar() {
  return (
    <section
      id="connectivity"
      className="py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Strip */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#265CA0]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#265CA0] font-bold">
              05 / MUMBAI CONNECTIVITY
            </span>
            <span className="w-8 h-[2px] bg-[#265CA0]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Strategic Western Corridors
          </h2>
          <p className="text-sm text-slate-600 mt-3 font-normal">
            Effortless connectivity across Kandivali (W) and Borivali (W) connecting seamlessly with Western Line and Metro 2A.
          </p>
        </div>

        {/* 6 Clean Big Transit Grid Cards (WordPress Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRANSIT_POINTS.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#265CA0] transition-all duration-300 flex items-start justify-between gap-4 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {pt.icon}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    {pt.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1">
                    {pt.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#265CA0]" />
                    {pt.distance}
                  </div>
                </div>
              </div>

              {/* Big Time Badge */}
              <div className="shrink-0 text-right">
                <span className="inline-block px-3 py-1.5 rounded-lg bg-[#EBF3FC] text-[#265CA0] font-black text-sm tracking-tight shadow-sm">
                  {pt.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
