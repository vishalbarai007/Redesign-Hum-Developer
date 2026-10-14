"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Sparkles,
  Camera,
  Layers,
  ArrowRight
} from "lucide-react";

interface PerspectiveSlide {
  id: string;
  tag: string;
  title: string;
  caption: string;
  dayImage: string;
  twilightImage: string;
  specs: string;
}

const PERSPECTIVES: PerspectiveSlide[] = [
  {
    id: "lobby",
    tag: "01 • ARRIVAL EXPERIENCE",
    title: "Double-Height Grand Entrance Lobby",
    caption: "Imported Italian marble flooring, 24/7 security concierge & guest waiting lounge.",
    dayImage: "https://cdn.sanity.io/images/3wmbb6cw/production/98cb2c2d4f9a75bfb71f3458d5036e9fc0b98c47-2000x1125.jpg",
    twilightImage: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg",
    specs: "24-Ft Clear Ceiling • Acoustic Glazing"
  },
  {
    id: "living-suite",
    tag: "02 • RESIDENCE INTERIORS",
    title: "Sunlit Master Living Suites",
    caption: "Floor-to-ceiling soundproof French windows, open-plan layout & private viewing sundeck.",
    dayImage: "https://cdn.sanity.io/images/3wmbb6cw/production/3e1294592a087152bcccb6ae5861fe9cce85c1c0-900x400.jpg",
    twilightImage: "https://cdn.sanity.io/images/3wmbb6cw/production/5305d4bb79173938d201b9cfaa7b0f86a6662a59-900x440.jpg",
    specs: "Zero Space Wastage • Vastu Aligned"
  },
  {
    id: "sky-deck",
    tag: "03 • ROOFTOP RECREATION",
    title: "Skyline Stargazing & Barbecue Terrace",
    caption: "Unobstructed 360-degree panoramas over the lush greens of Kandivali & Borivali West.",
    dayImage: "https://cdn.sanity.io/images/3wmbb6cw/production/5305d4bb79173938d201b9cfaa7b0f86a6662a59-900x440.jpg",
    twilightImage: "https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png",
    specs: "300 Ft Above City • Open Air Amphitheatre"
  },
  {
    id: "elevation",
    tag: "04 • ARCHITECTURAL ELEVATION",
    title: "Contemporary Tower Facade",
    caption: "Engineered weather-resistant architectural finishes with integrated facade illumination.",
    dayImage: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg",
    twilightImage: "https://cdn.sanity.io/images/3wmbb6cw/production/cffe754409c8cee80dd0bafbc1acebf73a314fbd-1440x517.jpg",
    specs: "Earthquake Resistant RCC • 3 Tier Security"
  },
  {
    id: "wellness",
    tag: "05 • HEALTH & CLUBHOUSE",
    title: "Cardio Gymnasium & Yoga Deck",
    caption: "State-of-the-art fitness machinery, crossfit corner, and open-air morning meditation deck.",
    dayImage: "https://cdn.sanity.io/images/3wmbb6cw/production/639529aff18041a10989bfef301c6b671bfa9236-920x540.png",
    twilightImage: "https://cdn.sanity.io/images/3wmbb6cw/production/98cb2c2d4f9a75bfb71f3458d5036e9fc0b98c47-2000x1125.jpg",
    specs: "Imported Equipment • Steam & Sauna"
  }
];

export function LivingExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTwilight, setIsTwilight] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const slide = PERSPECTIVES[currentIndex];
  const activeImage = isTwilight ? slide.twilightImage : slide.dayImage;

  // GSAP animation on slide change
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { scale: 1.06, opacity: 0.8 },
          { scale: 1, opacity: 1, duration: 1.1, ease: "power2.out" }
        );
      }

      if (contentWrapperRef.current) {
        gsap.fromTo(
          contentWrapperRef.current.children,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex, isTwilight]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PERSPECTIVES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PERSPECTIVES.length);
  };

  return (
    <section
      ref={containerRef}
      id="gallery"
      className={`py-16 bg-white text-slate-900 border-t border-slate-200 relative transition-all duration-300 ${
        isFullscreen ? "fixed inset-0 z-50 overflow-y-auto bg-white py-6" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                PERSPECTIVAS • ARCHITECTURAL VISTAS
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Every Dimension
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
              High-resolution perspectives of our entrance lobbies, rooftop horizons, and curated residences.
            </p>
          </div>

          {/* Interactive Ambiance & Fullscreen Controls */}
          <div className="flex items-center gap-3">
            {/* Daylight vs. Twilight Switcher */}
            <div className="inline-flex items-center p-1 bg-[#F8FAFC] border border-slate-200 rounded-lg shadow-sm">
              <button
                type="button"
                onClick={() => setIsTwilight(false)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold transition-all ${
                  !isTwilight
                    ? "bg-white text-[#265CA0] shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                Daylight
              </button>
              <button
                type="button"
                onClick={() => setIsTwilight(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold transition-all ${
                  isTwilight
                    ? "bg-white text-[#265CA0] shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-[#265CA0]" />
                Twilight
              </button>
            </div>

            {/* Fullscreen Expand/Collapse */}
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2.5 bg-white border border-slate-200 hover:border-[#265CA0] text-slate-700 hover:text-[#265CA0] rounded-lg transition-colors shadow-sm"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* =========================================================================
            FULL-SCREEN / CINEMATIC GSAP PERSPECTIVE VIEWER CONTAINER
           ========================================================================= */}
        <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
          {/* Main Visual Slide */}
          <div ref={imageWrapperRef} className="relative w-full h-full will-change-transform">
            <Image
              src={activeImage}
              alt={slide.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>

          {/* Clean Light-Protected Overlay at Bottom for Micro-Copy */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent p-6 sm:p-8 pt-16">
            <div ref={contentWrapperRef} className="max-w-3xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#265CA0] font-bold block mb-1">
                {slide.tag}
              </span>
              <h3 className="font-heading text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1.5">
                {slide.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-2xl mb-2">
                {slide.caption}
              </p>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-slate-200 rounded text-[11px] font-bold text-slate-800 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#265CA0]" />
                <span>{slide.specs}</span>
              </div>
            </div>
          </div>

          {/* Top Floating Slide Watermark */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-white/95 backdrop-blur-md border border-slate-200 rounded-full text-xs font-bold text-[#265CA0] shadow-sm">
            Perspectiva 0{currentIndex + 1} / 0{PERSPECTIVES.length}
          </div>

          {/* Prev / Next Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-[#265CA0] hover:text-white text-slate-800 flex items-center justify-center transition-all shadow-md z-10 border border-slate-200"
            aria-label="Previous perspective"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-[#265CA0] hover:text-white text-slate-800 flex items-center justify-center transition-all shadow-md z-10 border border-slate-200"
            aria-label="Next perspective"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* =========================================================================
            THUMBNAIL NAVIGATION STRIP (Clickable Instant Jump)
           ========================================================================= */}
        <div className="flex items-center gap-3 overflow-x-auto pt-4 pb-2 scrollbar-none">
          {PERSPECTIVES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-16 w-28 sm:h-20 sm:w-36 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                currentIndex === idx
                  ? "border-[#265CA0] shadow-md scale-102"
                  : "border-slate-200 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={isTwilight ? item.twilightImage : item.dayImage}
                alt={item.title}
                fill
                sizes="150px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white/90 px-1 py-0.5 text-[9px] font-bold text-slate-800 truncate text-center">
                0{idx + 1} &bull; {item.title.split(" ")[0]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
