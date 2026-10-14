"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  Download,
  ShieldCheck,
  MapPin,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Play
} from "lucide-react";

interface SobhaHeroParallaxProps {
  onOpenBooking: (projectName?: string) => void;
  onOpenBrochure: (projectName?: string) => void;
  onOpenBrandFilm: () => void;
  onSelectProject?: (slug: string) => void;
}

const HERO_PROJECTS = [
  {
    id: "hum-emerald-heights",
    name: "HUM Emerald Heights",
    tagline: "Effortless Modern Living",
    location: "Kandivali (West), Mumbai",
    config: "1, 2, 2.5 & 3 BHK + Jodi",
    price: "From ₹89 Lakhs*",
    possession: "Dec 2026",
    rera: "PM1180002502952",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg"
  },
  {
    id: "hum-solaris",
    name: "HUM Solaris",
    tagline: "A Brighter Way of Living",
    location: "Borivali (West), Mumbai",
    config: "2 & 3 BHK Flats Available",
    price: "From ₹1.38 Cr*",
    possession: "Mid 2027",
    rera: "P51800048123",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png"
  },
  {
    id: "hum-durga",
    name: "HUM Durga",
    tagline: "Elevating Luxury Living",
    location: "Kandivali (West), Mumbai",
    config: "2 & 3 BHK Sophisticated Homes",
    price: "From ₹1.42 Cr*",
    possession: "Late 2026",
    rera: "P51800049210",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/7761cb98db9659b20149a3df2c377374d055bdd0-5166x1892.png"
  },
  {
    id: "gs-heights",
    name: "HUM GS Heights",
    tagline: "Elevated Twin-Tower Living",
    location: "Kandivali (West), Mumbai",
    config: "2 & 3 BHK Twin Towers",
    price: "From ₹1.50 Cr*",
    possession: "Dec 2026",
    rera: "P51800031940",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/dc5c3a6c0549738a8293add4be371768a4164ea4-1440x517.jpg"
  }
];

export function SobhaHeroParallax({
  onOpenBooking,
  onOpenBrochure,
  onOpenBrandFilm,
  onSelectProject
}: SobhaHeroParallaxProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentProject = HERO_PROJECTS[activeProjectIndex];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax Scale & Translate on scroll (Sobha style)
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.0,
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // Fade & translate content smoothly as user scrolls down
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          opacity: 0.15,
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "60% top",
            scrub: true
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0F172A] text-white pt-24 pb-10"
    >
      {/* Background Architectural Canvas with Parallax Scrub */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[115%] -top-[7%] scale-105 pointer-events-none transition-all duration-700 ease-out"
      >
        <Image
          src={currentProject.image}
          alt={currentProject.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.62] contrast-[1.08]"
        />
        {/* Subtle Architectural Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/75 via-transparent to-[#0F172A]/40" />
      </div>

      {/* Chapter Indicator (Azimute & Sobha Minimal Style) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex items-center justify-between text-xs tracking-[0.25em] uppercase text-white/70 font-semibold pt-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#265CA0]" />
          <span>HUM DEVELOPERS · MUMBAI</span>
        </div>
        <div className="flex items-center gap-2 text-white/60">
          <ShieldCheck className="w-4 h-4 text-[#265CA0]" />
          <span>MahaRERA: {currentProject.rera}</span>
        </div>
      </div>

      {/* Main Big Architectural Content (Clean, Big, WordPress Luxury Style) */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 my-auto py-12 flex flex-col items-start"
      >
        {/* Real Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs uppercase tracking-widest font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#265CA0]" />
          <span>{currentProject.tagline}</span>
        </div>

        {/* Minimal High-Impact Title */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] max-w-5xl uppercase">
          {currentProject.name}
        </h1>

        {/* Minimal Sub-line */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm sm:text-base text-slate-300 font-medium">
          <span className="flex items-center gap-1.5 text-white/90">
            <MapPin className="w-4 h-4 text-[#265CA0]" />
            {currentProject.location}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-white/90">{currentProject.config}</span>
          <span className="text-white/40">•</span>
          <span className="text-[#60A5FA] font-bold">{currentProject.price}</span>
        </div>

        {/* Action CTAs (WordPress Clean & Big Style) */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => onOpenBooking(currentProject.name)}
            className="brandFilledBtn text-xs sm:text-sm px-7 py-4 font-bold shadow-lg shadow-[#265CA0]/40 transition-all hover:scale-[1.02]"
          >
            <Calendar className="w-4 h-4 mr-1.5" />
            Schedule Site Visit
          </button>

          <button
            type="button"
            onClick={() => onOpenBrochure(currentProject.name)}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all"
          >
            <Download className="w-4 h-4 text-[#265CA0]" />
            Download E-Brochure
          </button>

          <button
            type="button"
            onClick={onOpenBrandFilm}
            className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded text-xs sm:text-sm font-semibold tracking-wider text-white/80 hover:text-white hover:bg-white/5 transition-all"
          >
            <Play className="w-4 h-4 text-[#265CA0] fill-[#265CA0]" />
            Watch Film
          </button>
        </div>
      </div>

      {/* Bottom Architectural Project Selector Strip & Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* 4 Big Project Thumbnails Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
          {HERO_PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => {
                setActiveProjectIndex(idx);
                if (onSelectProject) onSelectProject(proj.id);
              }}
              className={`text-left p-2.5 rounded transition-all flex items-center gap-3 border ${
                activeProjectIndex === idx
                  ? "bg-white/15 border-[#265CA0] shadow-md"
                  : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <div className="relative w-12 h-10 rounded overflow-hidden shrink-0">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-bold text-white truncate">
                  {proj.name.replace("HUM ", "")}
                </div>
                <div className="text-[10px] text-white/60 truncate">
                  {proj.location.split(",")[0]}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Scroll Cue (Sobha & Azimute style) */}
        <a
          href="#heritage"
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors group py-2"
        >
          <span>Scroll To Explore</span>
          <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#265CA0] group-hover:text-[#265CA0] transition-colors">
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
