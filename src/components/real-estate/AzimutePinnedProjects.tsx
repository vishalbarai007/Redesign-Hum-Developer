"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  ShieldCheck,
  Calendar,
  Download,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles
} from "lucide-react";
import { humProjectsData, HumProject } from "@/data/projects";

interface AzimutePinnedProjectsProps {
  onOpenBooking: (projectName?: string) => void;
  onOpenBrochure: (projectName?: string) => void;
  selectedFilter?: string;
}

export function AzimutePinnedProjects({
  onOpenBooking,
  onOpenBrochure,
  selectedFilter = "All"
}: AzimutePinnedProjectsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});

  const filteredProjects = humProjectsData.filter((p) => {
    if (selectedFilter === "All") return true;
    return p.region === selectedFilter;
  });

  const totalSlides = filteredProjects.length;

  // Image toggle inside a card
  const handleToggleImage = (projectId: string, delta: number, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndices((prev) => {
      const current = prev[projectId] || 0;
      const next = (current + delta + totalImages) % totalImages;
      return { ...prev, [projectId]: next };
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Check if desktop viewport
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        const getScrollDistance = () => track.scrollWidth - window.innerWidth + 120;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Update live progress bar
              if (progressBarRef.current) {
                gsap.set(progressBarRef.current, {
                  scaleX: self.progress,
                  transformOrigin: "left"
                });
              }
              // Calculate active slide index
              const slide = Math.min(
                totalSlides,
                Math.max(1, Math.round(self.progress * (totalSlides - 1)) + 1)
              );
              setActiveSlide(slide);
            }
          }
        });

        tl.to(track, {
          x: () => -getScrollDistance(),
          ease: "none"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [totalSlides]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-white text-slate-900 overflow-hidden border-b border-slate-200"
    >
      {/* Top Sticky Header Strip with Chapter & Live Scrubber Progress (Azimute Style) */}
      <div className="pt-16 pb-6 px-6 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[2px] bg-[#265CA0]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#265CA0] font-bold">
              01 / LANDMARK PORTFOLIO
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Signature Developments
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal max-w-xl">
            RERA-certified high-rises engineered for multi-generational living in prime Kandivali & Borivali West.
          </p>
        </div>

        {/* Live Progress Scrubber (Azimute "Role para descobrir" Counter) */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <div className="flex items-center gap-3 text-xs tracking-widest font-bold uppercase text-slate-500">
            <span>Scroll To Discover</span>
            <span className="text-sm font-black text-[#265CA0]">
              0{activeSlide} <span className="text-slate-300 font-normal">/ 0{totalSlides}</span>
            </span>
          </div>
          {/* Progress track */}
          <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative">
            <div
              ref={progressBarRef}
              className="w-full h-full bg-[#265CA0] rounded-full scale-x-0 origin-left"
              style={{ transform: `scaleX(${activeSlide / totalSlides})` }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal Pinned Track (Azimute Signature Layout) */}
      <div className="py-12 px-6">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full lg:w-max items-stretch"
        >
          {filteredProjects.map((project, idx) => {
            const allImages = [
              project.thumbnailImage,
              ...(project.galleryImages || []),
              project.bannerImage
            ].filter(Boolean);

            const activeImgIdx = activeImageIndices[project.id] || 0;
            const currentImg = allImages[activeImgIdx] || project.thumbnailImage;

            return (
              <div
                key={project.id}
                className="w-full lg:w-[480px] xl:w-[520px] shrink-0 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:border-[#265CA0] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Big Image Canvas with In-Card Slider Controls */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={currentImg}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#265CA0]" />
                        {project.location}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-[#265CA0] text-white text-[11px] font-bold tracking-wide uppercase shadow">
                        {project.status}
                      </span>
                    </div>

                    {/* In-Card Next/Prev Slider Controls */}
                    {allImages.length > 1 && (
                      <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={(e) => handleToggleImage(project.id, -1, allImages.length, e)}
                          className="pointer-events-auto w-9 h-9 rounded-full bg-black/60 hover:bg-[#265CA0] text-white flex items-center justify-center transition-all shadow"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => handleToggleImage(project.id, 1, allImages.length, e)}
                          className="pointer-events-auto w-9 h-9 rounded-full bg-black/60 hover:bg-[#265CA0] text-white flex items-center justify-center transition-all shadow"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}

                    {/* Image indicator dots */}
                    {allImages.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                        {allImages.slice(0, 5).map((_, i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all ${
                              activeImgIdx === i
                                ? "w-5 bg-[#265CA0]"
                                : "bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Clean Content Body (WordPress Luxury Style) */}
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-widest text-[#265CA0] font-bold mb-1">
                      {project.tagline}
                    </div>
                    <h3 className="font-heading text-2xl font-black text-slate-900 uppercase">
                      {project.name}
                    </h3>

                    {/* Minimal Specs Strip */}
                    <div className="grid grid-cols-2 gap-3 my-4 p-3.5 bg-[#F8FAFC] border border-slate-200/80 rounded-lg">
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                          Configuration
                        </div>
                        <div className="text-xs font-bold text-slate-900 mt-0.5">
                          {project.config}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                          Price Guidance
                        </div>
                        <div className="text-xs font-bold text-[#265CA0] mt-0.5">
                          {project.priceGuidance}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                          Possession
                        </div>
                        <div className="text-xs font-bold text-slate-900 mt-0.5">
                          {project.possession}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                          MahaRERA ID
                        </div>
                        <div className="text-xs font-bold text-slate-900 mt-0.5">
                          {project.reraNumber}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Strip */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(project.name)}
                    className="brandFilledBtn flex-1 py-3 text-xs font-bold shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    Book Visit
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBrochure(project.name)}
                    className="brandBorderBtn flex-1 py-3 text-xs font-bold"
                  >
                    <Download className="w-3.5 h-3.5 mr-1" />
                    Brochure
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
