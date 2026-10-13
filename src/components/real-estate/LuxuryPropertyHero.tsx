"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, Calendar, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { humProjectsData } from "@/data/projects";

interface LuxuryPropertyHeroProps {
  onOpenBooking: () => void;
  onOpenBrochure: () => void;
}

export function LuxuryPropertyHero({
  onOpenBooking,
  onOpenBrochure
}: LuxuryPropertyHeroProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const currentProject = humProjectsData[activeProjectIndex];

  return (
    <section id="overview" className="relative min-h-[92vh] flex items-end pb-16 pt-32 overflow-hidden bg-[#0A0A0C]">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={currentProject.thumbnailImage || currentProject.bannerImage}
          alt={`${currentProject.name} Luxury Architectural Elevation`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-all duration-700 ease-out"
        />
        {/* Solid Dark Obsidian Tint Overlay - Zero Gradients */}
        <div className="absolute inset-0 bg-[#0A0A0C]/75" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Top Eyebrow Strip */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141418] border border-[#C5A880]/30 rounded-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              MahaRERA: {currentProject.reraNumber}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141418] border border-[#27272A] rounded-xs text-[10px] uppercase tracking-wider text-[#94A3B8]">
            <MapPin className="w-3 h-3 text-[#C5A880]" />
            {currentProject.location}
          </div>
        </div>

        {/* Project Selection Quick Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {humProjectsData.slice(0, 5).map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-xs transition-colors shrink-0 ${
                activeProjectIndex === idx
                  ? "bg-[#C5A880] text-[#0A0A0C] font-semibold"
                  : "bg-[#141418] text-[#94A3B8] border border-[#27272A] hover:text-white"
              }`}
            >
              {project.name.replace("HUM ", "")}
            </button>
          ))}
        </div>

        {/* Main Editorial Headline & Copy */}
        <div className="max-w-4xl">
          <span className="block font-sans text-xs uppercase tracking-[0.3em] text-[#C5A880] mb-2 font-medium">
            {currentProject.name} &bull; {currentProject.tagline}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08] mb-6">
            Building Dreams. <br className="hidden sm:inline" />
            <span className="italic font-light text-[#C5A880]">Shaping Legacies.</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-[#CBD5E1] font-light max-w-2xl leading-relaxed mb-8">
            {currentProject.overview}
          </p>
        </div>

        {/* Key Metrics Strip & Direct CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-6 border-t border-[#27272A]">
          {/* Key Property Specs */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block mb-1">
                Typology
              </span>
              <span className="font-serif text-lg sm:text-2xl text-white">
                {currentProject.config.split("+")[0]}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block mb-1">
                Pricing Guidance
              </span>
              <span className="font-serif text-lg sm:text-2xl text-[#C5A880]">
                {currentProject.priceGuidance}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block mb-1">
                Possession
              </span>
              <span className="font-serif text-lg sm:text-2xl text-white">
                {currentProject.possession}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block mb-1">
                Status
              </span>
              <span className="font-serif text-lg sm:text-2xl text-white">
                {currentProject.status}
              </span>
            </div>
          </div>

          {/* Dual Action CTAs - Solid Colors */}
          <div className="lg:col-span-5 flex flex-wrap items-center gap-3 lg:justify-end">
            <button
              type="button"
              onClick={onOpenBooking}
              className="goldenFilledBtn flex-1 sm:flex-initial text-xs py-3 px-5"
            >
              <Calendar className="w-3.5 h-3.5 mr-1" />
              Schedule Site Visit
            </button>
            <button
              type="button"
              onClick={onOpenBrochure}
              className="goldenBorderBtn flex-1 sm:flex-initial text-xs py-3 px-5"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              Get E-Brochure
            </button>
          </div>
        </div>

        {/* 20+ Years Legacy Bar */}
        <div className="mt-8 pt-6 border-t border-[#1E1E24] grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-[#C5A880] font-normal">20+</div>
            <div className="text-[10px] uppercase tracking-wider text-[#94A3B8]">Years of Excellence (Since 2004)</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-white font-normal">10,000+</div>
            <div className="text-[10px] uppercase tracking-wider text-[#94A3B8]">Happy Mumbai Families</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-white font-normal">5M+ Sq.Ft.</div>
            <div className="text-[10px] uppercase tracking-wider text-[#94A3B8]">Delivered & Under Construction</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-[#C5A880] font-normal">100%</div>
            <div className="text-[10px] uppercase tracking-wider text-[#94A3B8]">MahaRERA Compliant & On-Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
