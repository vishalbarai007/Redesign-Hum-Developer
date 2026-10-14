"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  ApertureCarousel,
  ApertureCarouselHandle,
  Slide
} from "@/components/ui/aperture-carousel";

interface SobhaHeroParallaxProps {
  onOpenBooking: (projectName?: string) => void;
  onOpenBrochure?: (projectName?: string) => void;
  onOpenBrandFilm?: () => void;
  onSelectProject?: (slug: string) => void;
}

/**
 * 5 Full-Bleed Slides:
 * Slide 0: High-Impact Photography "Shaping Mumbai's Tomorrow" (5s autoplay)
 * Slide 1–4: Autoplaying Muted Videos for Emerald Heights, Solaris, Durga, and GS Heights
 */
const HERO_SLIDES: Slide[] = [
  {
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/98cb2c2d4f9a75bfb71f3458d5036e9fc0b98c47-2000x1125.jpg",
    title: "Shaping Mumbai's Tomorrow",
    caption: "Discover landmark projects crafted with state-of-the-art amenities for a modern lifestyle.",
    alt: "Shaping Mumbai's Tomorrow - Hum Developers",
    projectId: "mumbai-vision",
  },
  {
    video: "https://assets.mixkit.co/videos/4861/4861-720.mp4",
    poster: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg",
    title: "Hum Emerald Heights",
    caption: "Chembur, Mumbai · 1, 2 & 3 BHK Luxury Residences from ₹89 Lakhs*",
    alt: "Hum Emerald Heights",
    projectId: "hum-emerald-heights",
  },
  {
    video: "https://assets.mixkit.co/videos/5047/5047-720.mp4",
    poster: "https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png",
    title: "Hum Solaris",
    caption: "Ghatkopar East, Mumbai · 2 & 3 BHK High-Rise Panoramic Living from ₹1.38 Cr*",
    alt: "Hum Solaris",
    projectId: "hum-solaris",
  },
  {
    video: "https://assets.mixkit.co/videos/4183/4183-720.mp4",
    poster: "https://cdn.sanity.io/images/3wmbb6cw/production/7761cb98db9659b20149a3df2c377374d055bdd0-5166x1892.png",
    title: "Hum Durga",
    caption: "Santacruz East, Mumbai · 2 & 3 BHK Sophisticated Homes from ₹1.42 Cr*",
    alt: "Hum Durga",
    projectId: "hum-durga",
  },
  {
    video: "https://assets.mixkit.co/videos/4861/4861-720.mp4",
    poster: "https://cdn.sanity.io/images/3wmbb6cw/production/dc5c3a6c0549738a8293add4be371768a4164ea4-1440x517.jpg",
    title: "Hum GS Heights",
    caption: "Kurla West, Mumbai · 2 & 3 BHK Twin Towers Connected Living from ₹1.50 Cr*",
    alt: "Hum GS Heights",
    projectId: "gs-heights",
  },
];

/**
 * Static Bottom Navigation Switcher Projects (Always visible & interactive)
 */
const HERO_PROJECTS = [
  {
    id: "hum-emerald-heights",
    name: "HUM Emerald Heights",
    shortName: "Emerald Heights",
    location: "Chembur, Mumbai",
    config: "1, 2, 2.5 & 3 BHK",
    price: "From ₹89 Lakhs*",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg",
  },
  {
    id: "hum-solaris",
    name: "HUM Solaris",
    shortName: "Solaris",
    location: "Ghatkopar East, Mumbai",
    config: "2 & 3 BHK High-Rise",
    price: "From ₹1.38 Cr*",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png",
  },
  {
    id: "hum-durga",
    name: "HUM Durga",
    shortName: "Durga",
    location: "Santacruz East, Mumbai",
    config: "2 & 3 BHK Luxury",
    price: "From ₹1.42 Cr*",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/7761cb98db9659b20149a3df2c377374d055bdd0-5166x1892.png",
  },
  {
    id: "gs-heights",
    name: "HUM GS Heights",
    shortName: "GS Heights",
    location: "Kurla West, Mumbai",
    config: "2 & 3 BHK Twin Towers",
    price: "From ₹1.50 Cr*",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/dc5c3a6c0549738a8293add4be371768a4164ea4-1440x517.jpg",
  },
];

export function SobhaHeroParallax({
  onSelectProject
}: SobhaHeroParallaxProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const carouselRef = useRef<ApertureCarouselHandle>(null);

  const handleSelectThumbnail = (idx: number, id: string) => {
    // Project 0 corresponds to slide 1 (since slide 0 is "Shaping Mumbai's Tomorrow")
    carouselRef.current?.goTo(idx + 1);
    if (onSelectProject) {
      onSelectProject(id);
    }
  };

  return (
    <section id="overview" className="relative w-full h-[100svh] overflow-hidden bg-[#0A0F1D]">
      <style>{`
        @keyframes ap-fill-strip {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      {/* 5-Slide Aperture Iris Reveal Carousel */}
      <ApertureCarousel
        ref={carouselRef}
        slides={HERO_SLIDES}
        height="100svh"
        autoplay={5000}
        duration={1100}
        ink="#ffffff"
        onChange={setActiveSlideIndex}
      >
        {/*
          Static Bottom Strip:
          Persistent across all sliders, contains the auto-fill progress track,
          the 4 project thumbnails, and Scroll To Explore cue.
          Uses data-no-lens="1" so pointer events do not trigger the aperture lens canvas.
        */}
        <div
          data-no-lens="1"
          className="absolute bottom-0 inset-x-0 z-20 w-full pointer-events-auto bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/80 to-transparent pt-10 pb-8 sm:pb-10 px-4 sm:px-6"
        >
          {/* Auto-fill progress track placed just above Static Bottom Strip */}
          <div className="max-w-7xl mx-auto px-4 mb-3" aria-hidden="true">
            <div className="h-[2px] w-full bg-white/15 rounded-full overflow-hidden">
              {activeSlideIndex === 0 && (
                <div
                  key={`ap-fill-strip-${activeSlideIndex}`}
                  className="h-full bg-white origin-left"
                  style={{
                    animation: "ap-fill-strip 5000ms linear forwards",
                  }}
                  onAnimationEnd={() => carouselRef.current?.go(1)}
                />
              )}
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 pb-4 sm:pb-6 w-full flex flex-col md:flex-row items-center justify-between gap-5  pt-4">
            {/* 4 Big Project Thumbnails Switcher */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full md:w-auto">
              {HERO_PROJECTS.map((proj, idx) => {
                const isCurrentProject = activeSlideIndex === idx + 1;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectThumbnail(idx, proj.id);
                    }}
                    className={`text-left p-2 sm:p-2.5 rounded-lg transition-all duration-300 flex items-center gap-2.5 sm:gap-3 border backdrop-blur-md cursor-pointer ${
                      isCurrentProject
                        ? "bg-[#265CA0]/35 border-[#265CA0] shadow-[0_0_20px_rgba(38,92,160,0.5)] ring-1 ring-[#265CA0]"
                        : "bg-white/5 border-white/10 hover:bg-white/15 hover:border-white/25"
                    }`}
                  >
                    <div className="relative w-11 h-9 sm:w-12 sm:h-10 rounded overflow-hidden shrink-0 border border-white/10">
                      <Image
                        src={proj.image}
                        alt={proj.name}
                        fill
                        className="object-cover"
                        sizes="60px"
                      />
                      {isCurrentProject && (
                        <div className="absolute inset-0 bg-[#265CA0]/30 mix-blend-overlay" />
                      )}
                    </div>
                    <div className="min-w-0 pr-1">
                      <div className="text-[11px] sm:text-xs font-bold text-white truncate flex items-center gap-1.5">
                        <span>{proj.shortName}</span>
                        {isCurrentProject && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                        )}
                      </div>
                      <div className="text-[10px] text-white/60 truncate">
                        {proj.location.split(",")[0]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Side: Scroll Cue Only */}
            <div className="flex items-center self-end md:self-center">
              <a
                href="#heritage"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors group py-2"
              >
                <span className="hidden sm:inline">Scroll To Explore</span>
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#265CA0] group-hover:text-[#265CA0] transition-colors">
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </ApertureCarousel>
    </section>
  );
}

export default SobhaHeroParallax;
