"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  Download,
  Calendar,
  ShieldCheck,
  MapPin,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Search,
  Maximize2,
  Film,
  Building2,
  Sparkles
} from "lucide-react";

interface LuxuryPropertyHeroProps {
  onOpenBooking: () => void;
  onOpenBrochure: () => void;
  onOpenBrandFilm: () => void;
  onFilterChange?: (filter: string) => void;
}

const HERO_SLIDES = [
  {
    id: "emerald-heights",
    tag: "SIGNATURE LANDMARK • KANDIVALI (W)",
    title: "EMERALD HEIGHTS",
    highlight: "Kandivali West",
    tagline: "Curated 2 & 3 BHK Sky Sanctuaries with Rooftop Horizon Deck",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg",
    video: "https://assets.mixkit.co/videos/4861/4861-720.mp4",
    rera: "PM1180002502952",
    possession: "Dec 2026",
    carpet: "680 – 1,085 Sq. Ft."
  },
  {
    id: "hum-solitaire",
    tag: "BOUTIQUE RESIDENCES • BORIVALI (W)",
    title: "HUM SOLITAIRE",
    highlight: "Borivali West",
    tagline: "Ultra-Spacious 3 BHK & Jodi Residences in Prime Residential Enclave",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/cffe754409c8cee80dd0bafbc1acebf73a314fbd-1440x517.jpg",
    video: "https://assets.mixkit.co/videos/5047/5047-720.mp4",
    rera: "PM1180002503114",
    possession: "Mid 2027",
    carpet: "920 – 1,450 Sq. Ft."
  },
  {
    id: "rooftop-life",
    tag: "PODIUM & SKY RECREATION",
    title: "SKYLINE LIVING",
    highlight: "Rooftop Amenity Deck",
    tagline: "25+ Curated Lifestyle Amenities: Infinity Pool, Sky Lounge & Gymnasium",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/3389b12891977e718ac7bf619b35fad3e5732f28-5166x1892.png",
    video: "https://assets.mixkit.co/videos/4183/4183-720.mp4",
    rera: "MahaRERA Approved",
    possession: "Ready & Ongoing",
    carpet: "Zero Space Wastage"
  },
  {
    id: "mumbai-horizon",
    tag: "UNRIVALED CONNECTIVITY",
    title: "WESTERN CORRIDOR",
    highlight: "Metro & Link Road",
    tagline: "2 Mins to Metro Line 2A & Link Road. Minutes from S.V. Road & Railway Station",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png",
    video: "https://assets.mixkit.co/videos/4861/4861-720.mp4",
    rera: "100% Clear Titles",
    possession: "Fast-Track Handover",
    carpet: "Strategic Coordinates"
  }
];

export function LuxuryPropertyHero({
  onOpenBooking,
  onOpenBrochure,
  onOpenBrandFilm,
  onFilterChange
}: LuxuryPropertyHeroProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [searchLocation, setSearchLocation] = useState("All");
  const [searchTypology, setSearchTypology] = useState("All");
  const [searchPossession, setSearchPossession] = useState("All");

  const containerRef = useRef<HTMLElement>(null);
  const slideContentRef = useRef<HTMLDivElement>(null);
  const imageBgRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const autoPlayTweenRef = useRef<gsap.core.Tween | null>(null);

  const slide = HERO_SLIDES[currentSlideIndex];

  // GSAP slide transition animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background zoom transition
      if (imageBgRef.current) {
        gsap.fromTo(
          imageBgRef.current,
          { scale: 1.08, opacity: 0.8 },
          { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }
        );
      }

      // Staggered text content entrance
      if (slideContentRef.current) {
        gsap.fromTo(
          slideContentRef.current.children,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        );
      }

      // Progress bar animation
      if (progressBarRef.current) {
        if (autoPlayTweenRef.current) {
          autoPlayTweenRef.current.kill();
        }
        gsap.set(progressBarRef.current, { width: "0%" });
        if (isPlaying) {
          autoPlayTweenRef.current = gsap.to(progressBarRef.current, {
            width: "100%",
            duration: 6,
            ease: "none",
            onComplete: () => {
              setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
            }
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [currentSlideIndex, isPlaying]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
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
      ref={containerRef}
      id="overview"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-white text-slate-900 border-b border-slate-200"
    >
      {/* =========================================================================
          FULL-SCREEN GSAP ANIMATED VISUAL SLIDER (LIGHT ARCHITECTURAL BACKDROP)
         ========================================================================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-100">
        <div ref={imageBgRef} className="relative w-full h-full will-change-transform">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Clean, Bright Architectural Overlays (Light-First WordPress Luxury Polish) */}
        {/* Soft top-down light gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-white/95 pointer-events-none" />
        {/* Soft horizontal vignette for high contrast reading */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          TOP WORDPRESS TRUST BADGE BAR & SLIDER CONTROLS
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* MahaRERA Official Status Tag */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#265CA0]/25 rounded-full shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#265CA0]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                MahaRERA: {slide.rera}
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EBF3FC] border border-[#265CA0]/20 rounded-full text-[10px] uppercase tracking-wider text-[#265CA0] font-semibold">
              <MapPin className="w-3 h-3 text-[#265CA0]" />
              Kandivali &amp; Borivali West
            </div>
          </div>

          {/* Slider Pagination & Brand Film Trigger */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm text-xs font-semibold text-slate-700">
            {/* Slide Index Counter */}
            <span className="text-[11px] font-bold text-[#265CA0] tracking-widest">
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>

            <span className="text-slate-300">|</span>

            {/* Prev / Next Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="p-1 hover:text-[#265CA0] transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-1 hover:text-[#265CA0] transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="text-slate-300">|</span>

            {/* Play/Pause Autoplay */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 text-slate-500 hover:text-[#265CA0] transition-colors"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>

            <span className="text-slate-300">|</span>

            {/* Brand Film Button */}
            <button
              type="button"
              onClick={onOpenBrandFilm}
              className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#265CA0] hover:text-[#183C68] transition-colors font-bold"
            >
              <Film className="w-3 h-3 text-[#265CA0]" />
              Brand Film
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO HEADLINE & PUNCHY CONTENT (Reduced Text Content)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 w-full my-auto py-8">
        <div ref={slideContentRef} className="max-w-3xl">
          {/* Slide Kicker */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#265CA0]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#265CA0] font-bold">
              {slide.tag}
            </span>
          </div>

          {/* Slide Main Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-3">
            {slide.title} <br />
            <span className="text-[#265CA0]">{slide.highlight}</span>
          </h1>

          {/* Punchy 1-Line Tagline */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 font-medium max-w-xl leading-relaxed mb-6">
            {slide.tagline}
          </p>

          {/* Quick Specs Pill Row */}
          <div className="flex flex-wrap items-center gap-2 mb-7">
            <div className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-semibold text-slate-700 shadow-sm flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#265CA0]" />
              <span>Carpet: {slide.carpet}</span>
            </div>
            <div className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-semibold text-slate-700 shadow-sm flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#265CA0]" />
              <span>Possession: {slide.possession}</span>
            </div>
            <div className="px-3 py-1.5 bg-[#EBF3FC] border border-[#265CA0]/20 rounded text-xs font-bold text-[#265CA0] shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#265CA0]" />
              <span>Zero Space Wastage</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="brandFilledBtn text-xs py-3.5 px-6 shadow-md shadow-[#265CA0]/30"
            >
              <Calendar className="w-4 h-4 mr-1.5" />
              Schedule Private Viewing
            </button>

            <button
              type="button"
              onClick={onOpenBrochure}
              className="brandBorderBtn text-xs py-3.5 px-6"
            >
              <Download className="w-4 h-4 mr-1.5" />
              Download Master Brochure
            </button>

            <button
              type="button"
              onClick={onOpenBrandFilm}
              className="brandLightBtn text-xs py-3.5 px-5"
            >
              <Play className="w-3.5 h-3.5 fill-current mr-1" />
              Experience Film
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          WORDPRESS-STYLE PROPERTY FINDER FILTER BAR + ANIMATED PROGRESS BAR
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 w-full pb-8">
        {/* Animated GSAP Timeline Progress Bar */}
        <div className="w-full h-1 bg-slate-200/80 rounded-full overflow-hidden mb-3">
          <div ref={progressBarRef} className="h-full bg-[#265CA0] w-0" />
        </div>

        {/* Clean White WordPress Property Filter Bar */}
        <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-lg shadow-lg">
          <form
            onSubmit={handleSearchSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
          >
            {/* Location Select */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                Prime Location
              </label>
              <select
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-200 text-slate-800 font-semibold text-xs px-3 py-2.5 rounded focus:outline-none focus:border-[#265CA0] transition-colors"
              >
                <option value="All">All Locations (Mumbai)</option>
                <option value="Kandivali">Kandivali (West)</option>
                <option value="Borivali">Borivali (West)</option>
              </select>
            </div>

            {/* Typology Select */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                Configuration
              </label>
              <select
                value={searchTypology}
                onChange={(e) => setSearchTypology(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-200 text-slate-800 font-semibold text-xs px-3 py-2.5 rounded focus:outline-none focus:border-[#265CA0] transition-colors"
              >
                <option value="All">All Configurations</option>
                <option value="1BHK">1 BHK Smart Luxe</option>
                <option value="2BHK">2 &amp; 2.5 BHK Residences</option>
                <option value="3BHK">3 BHK &amp; Jodi Suites</option>
              </select>
            </div>

            {/* Possession Select */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                Handover Status
              </label>
              <select
                value={searchPossession}
                onChange={(e) => setSearchPossession(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-200 text-slate-800 font-semibold text-xs px-3 py-2.5 rounded focus:outline-none focus:border-[#265CA0] transition-colors"
              >
                <option value="All">All Timelines</option>
                <option value="Dec 2026">Dec 2026</option>
                <option value="Mid 2027">Mid 2027</option>
                <option value="Ongoing">Under Construction</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full brandFilledBtn text-xs py-2.5 px-4 justify-center"
              >
                <Search className="w-3.5 h-3.5 mr-1.5" />
                Find Landmark Residences
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}