"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Download,
  Calendar,
  ShieldCheck,
  MapPin,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Search,
  ArrowRight,
  Film,
  Building2,
  CheckCircle2,
  SlidersHorizontal
} from "lucide-react";
import { humProjectsData } from "@/data/projects";

interface LuxuryPropertyHeroProps {
  onOpenBooking: () => void;
  onOpenBrochure: () => void;
  onOpenBrandFilm: () => void;
  onFilterChange?: (filter: string) => void;
}

const HERO_SCENES = [
  {
    id: "skyline",
    title: "Mumbai Skyline",
    type: "video" as const,
    videoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Timelapse_at_Marine_Drive_Mumbai.webm",
    posterUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg",
    label: "01 • Mumbai Skyline (Cinematic)"
  },
  {
    id: "emerald",
    title: "HUM Emerald Heights",
    type: "image" as const,
    imageUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg",
    label: "02 • Emerald Heights (Kandivali W)"
  },
  {
    id: "oceanic",
    title: "Panoramic Living",
    type: "video" as const,
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
    posterUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/3389b12891977e718ac7bf619b35fad3e5732f28-5166x1892.png",
    label: "03 • Horizon Living (Borivali W)"
  }
];

export function LuxuryPropertyHero({
  onOpenBooking,
  onOpenBrochure,
  onOpenBrandFilm,
  onFilterChange
}: LuxuryPropertyHeroProps) {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Search Bar State (Lodha style)
  const [searchLocation, setSearchLocation] = useState("All");
  const [searchTypology, setSearchTypology] = useState("All");
  const [searchPossession, setSearchPossession] = useState("All");

  const currentScene = HERO_SCENES[activeSceneIndex];

  useEffect(() => {
    if (videoRef.current && currentScene.type === "video") {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [activeSceneIndex, currentScene.type]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFilterChange) {
      onFilterChange(searchLocation === "All" ? "All" : searchLocation);
    }
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="overview"
      className="relative min-h-[100vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#0A0A0C]"
    >
      {/* =========================================================================
          BACKGROUND MEDIA CANVAS (Cinematic Video + Smooth Architectural Fallback)
         ========================================================================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {currentScene.type === "video" ? (
          <video
            ref={videoRef}
            key={currentScene.videoUrl}
            src={currentScene.videoUrl}
            poster={currentScene.posterUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000"
          />
        ) : (
          <Image
            src={currentScene.imageUrl}
            alt="HUM Developers Architectural Elevation"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-center transition-all duration-700"
          />
        )}

        {/* Lodha-Grade Luxury Obsidian Vignette & Lighting Protection */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/65 to-[#0A0A0C]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/90 via-[#0A0A0C]/40 to-transparent" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A0A0C]/30 to-[#0A0A0C]/80" />
      </div>

      {/* =========================================================================
          TOP EYEBROW & AMBIENT CONTROLS
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* MahaRERA & Location Stamp */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141418]/90 border border-[#C5A880]/40 rounded-xs backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                MahaRERA: PM1180002502952 &bull; Registered
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141418]/90 border border-[#27272A] rounded-xs text-[10px] uppercase tracking-wider text-[#CBD5E1] backdrop-blur-md">
              <MapPin className="w-3 h-3 text-[#C5A880]" />
              Kandivali (W) &bull; Borivali (W) &bull; Mumbai
            </div>
          </div>

          {/* Ambient Video & Audio Controls (Lodha Style) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141418]/80 border border-[#27272A] rounded-xs backdrop-blur-md text-xs text-[#CBD5E1]">
            {currentScene.type === "video" && (
              <>
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-1 hover:text-[#C5A880] transition-colors"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  title={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                </button>
                <span className="text-[#334155]">|</span>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-1 hover:text-[#C5A880] transition-colors"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  title={isMuted ? "Unmute Sound" : "Mute Sound"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#C5A880]" />}
                </button>
                <span className="text-[#334155]">|</span>
              </>
            )}

            <button
              type="button"
              onClick={onOpenBrandFilm}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#C5A880] hover:text-white transition-colors font-medium pl-1"
            >
              <Film className="w-3 h-3" />
              Watch Brand Film
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN EDITORIAL HERO HEADLINE & SCENE SWITCHER
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 w-full my-auto py-10">
        {/* Interactive Scene Switcher (Lodha Experience Tour) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {HERO_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => setActiveSceneIndex(idx)}
              className={`text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-xs transition-all duration-200 shrink-0 flex items-center gap-2 ${
                activeSceneIndex === idx
                  ? "bg-[#C5A880] text-[#0A0A0C] font-semibold shadow-lg shadow-[#C5A880]/20"
                  : "bg-[#141418]/80 text-[#94A3B8] border border-[#27272A] hover:text-white backdrop-blur-sm"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeSceneIndex === idx ? "bg-[#0A0A0C]" : "bg-[#C5A880]"}`} />
              {scene.label}
            </button>
          ))}
        </div>

        {/* High-Impact Lodha-Style Typography */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              The Art of Landmark Living
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.04] mb-6">
            Building Dreams. <br />
            <span className="italic font-light text-[#C5A880]">Shaping Legacies.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#CBD5E1] font-light max-w-2xl leading-relaxed mb-8">
            Distinguished residential landmarks across Mumbai&rsquo;s western corridor. Engineered with zero space wastage,
            breathtaking panoramic vistas, and curated rooftop recreation clubs for over 10,000 satisfied families.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <button
              type="button"
              onClick={onOpenBooking}
              className="goldenFilledBtn text-xs py-3.5 px-6 shadow-xl"
            >
              <Calendar className="w-3.5 h-3.5 mr-1" />
              Schedule Private Viewing
            </button>

            <button
              type="button"
              onClick={onOpenBrochure}
              className="goldenBorderBtn text-xs py-3.5 px-6 shadow-xl"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              Download Master Brochure
            </button>

            <button
              type="button"
              onClick={onOpenBrandFilm}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#141418]/80 border border-[#27272A] text-white hover:border-[#C5A880] hover:text-[#C5A880] transition-colors rounded-xs text-xs uppercase tracking-wider font-medium backdrop-blur-md"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#C5A880]" />
              Experience Film (2 Min)
            </button>
          </div>
        </div>

        {/* =========================================================================
            LODHA-STYLE FLOATING QUICK SEARCH & PROPERTY FINDER
           ========================================================================= */}
        <div className="mt-4 bg-[#141418]/95 border border-[#27272A] hover:border-[#C5A880]/30 transition-colors p-4 sm:p-5 rounded-xs backdrop-blur-xl shadow-2xl">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Location Select */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#94A3B8] font-medium mb-1.5">
                Location
              </label>
              <select
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full bg-[#0A0A0C] border border-[#27272A] text-white text-xs px-3 py-2.5 rounded-xs focus:outline-none focus:border-[#C5A880] transition-colors"
              >
                <option value="All">All Locations (Mumbai)</option>
                <option value="Kandivali">Kandivali (West)</option>
                <option value="Borivali">Borivali (West)</option>
              </select>
            </div>

            {/* Typology Select */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#94A3B8] font-medium mb-1.5">
                Configuration
              </label>
              <select
                value={searchTypology}
                onChange={(e) => setSearchTypology(e.target.value)}
                className="w-full bg-[#0A0A0C] border border-[#27272A] text-white text-xs px-3 py-2.5 rounded-xs focus:outline-none focus:border-[#C5A880] transition-colors"
              >
                <option value="All">All Typologies</option>
                <option value="1BHK">1 BHK Luxury</option>
                <option value="2BHK">2 &amp; 2.5 BHK Residences</option>
                <option value="3BHK">3 BHK &amp; Jodi Apartments</option>
              </select>
            </div>

            {/* Possession Timeline */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#94A3B8] font-medium mb-1.5">
                Possession Status
              </label>
              <select
                value={searchPossession}
                onChange={(e) => setSearchPossession(e.target.value)}
                className="w-full bg-[#0A0A0C] border border-[#27272A] text-white text-xs px-3 py-2.5 rounded-xs focus:outline-none focus:border-[#C5A880] transition-colors"
              >
                <option value="All">All Timelines</option>
                <option value="Dec 2026">Dec 2026</option>
                <option value="Mid 2027">Mid 2027</option>
                <option value="Ongoing">Under Construction</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full goldenFilledBtn text-xs py-3 px-4 justify-center"
              >
                <Search className="w-3.5 h-3.5 mr-1" />
                Explore 5 Residences
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* =========================================================================
          LODHA-GRADE 20+ YEARS LEGACY & PERFORMANCE TICKER
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-8 border-t border-[#1E1E24]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <span className="font-serif text-3xl sm:text-4xl text-[#C5A880] font-normal leading-none">20+</span>
            <div>
              <div className="text-xs text-white font-medium">Years of Excellence</div>
              <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Since 2004 in Mumbai</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-serif text-3xl sm:text-4xl text-white font-normal leading-none">10K+</span>
            <div>
              <div className="text-xs text-white font-medium">Delighted Families</div>
              <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Across Kandivali &amp; Borivali</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-serif text-3xl sm:text-4xl text-white font-normal leading-none">5M+</span>
            <div>
              <div className="text-xs text-white font-medium">Sq.Ft. Realized</div>
              <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Delivered &amp; Active Sites</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-serif text-3xl sm:text-4xl text-[#C5A880] font-normal leading-none">100%</span>
            <div>
              <div className="text-xs text-white font-medium">MahaRERA Compliant</div>
              <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">On-Time Handover Track</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}