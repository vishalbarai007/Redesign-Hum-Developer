"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Eye, Camera } from "lucide-react";

const GALLERY_SLIDES = [
  {
    id: "lobby",
    title: "Grand Air-Conditioned Entrance Lobby",
    subtitle: "Imported Italian marble finishes with 24/7 concierge desk",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/98cb2c2d4f9a75bfb71f3458d5036e9fc0b98c47-2000x1125.jpg",
    tag: "Arrival Experience"
  },
  {
    id: "sky-deck",
    title: "Rooftop Stargazing & Recreation Deck",
    subtitle: "Unobstructed 360-degree views of Mumbai’s western skyline",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/5305d4bb79173938d201b9cfaa7b0f86a6662a59-900x440.jpg",
    tag: "Rooftop Living"
  },
  {
    id: "living-suite",
    title: "Expansive Sunlit Living Spaces",
    subtitle: "Full-height acoustic soundproof French windows and private sun deck",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/3e1294592a087152bcccb6ae5861fe9cce85c1c0-900x400.jpg",
    tag: "Interior Excellence"
  },
  {
    id: "elevation",
    title: "Iconic Tower Elevations at Dusk",
    subtitle: "Sleek contemporary facade engineered for longevity and style",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg",
    tag: "Architectural Landmark"
  },
  {
    id: "amenities",
    title: "Curated Clubhouse & Wellness Center",
    subtitle: "Dedicated health zones, cardio studio, and peaceful yoga pavilion",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/639529aff18041a10989bfef301c6b671bfa9236-920x540.png",
    tag: "Wellness & Rejuvenation"
  },
  {
    id: "terrace",
    title: "Panoramic Skyline Horizons",
    subtitle: "Tranquil sunsets overlooking Kandivali & Borivali West greens",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png",
    tag: "Horizon Views"
  }
];

export function LivingExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_SLIDES.length);
  };

  const currentSlide = GALLERY_SLIDES[currentIndex];

  return (
    <section id="gallery" className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                VISUAL SHOWCASE
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Life at HUM Developments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-2 font-normal">
              Immerse yourself in real architectural finishes, entrance lobbies, rooftop pavilions, and sunlit residences.
            </p>
          </div>

          {/* Slider Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#265CA0] hover:text-white text-slate-800 flex items-center justify-center transition-all border border-slate-200 shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#265CA0] hover:text-white text-slate-800 flex items-center justify-center transition-all border border-slate-200 shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Grand Carousel Canvas */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full rounded-xl overflow-hidden border border-slate-200 shadow-xl group bg-slate-900"
        >
          <Image
            key={currentSlide.id}
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-102"
          />

          {/* Vignette Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

          {/* Top Tag Badge */}
          <div className="absolute top-5 left-5">
            <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] uppercase tracking-wider text-[#265CA0] font-bold shadow-md flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-[#265CA0]" />
              {currentSlide.tag}
            </span>
          </div>

          {/* Bottom Captions */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
                {currentSlide.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-normal drop-shadow">
                {currentSlide.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-bold text-white bg-slate-900/70 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                0{currentIndex + 1} / 0{GALLERY_SLIDES.length}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip Navigator */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-4">
          {GALLERY_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-18 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? "border-[#265CA0] ring-2 ring-[#265CA0]/30 scale-102 shadow-md"
                  : "border-transparent opacity-65 hover:opacity-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="150px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
