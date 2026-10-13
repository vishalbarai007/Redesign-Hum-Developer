"use client";

import React, { useState } from "react";
import Image from "next/image";
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

interface ProjectsShowcaseProps {
  onOpenBooking: (projectName?: string) => void;
  onOpenBrochure: (projectName?: string) => void;
  externalFilter?: string;
}

// Interactive Project Card with Multi-Image Slider
function ProjectCard({
  project,
  onOpenBooking,
  onOpenBrochure
}: {
  project: HumProject;
  onOpenBooking: (name: string) => void;
  onOpenBrochure: (name: string) => void;
}) {
  const allImages = [
    project.thumbnailImage,
    ...(project.galleryImages || []),
    project.bannerImage
  ].filter(Boolean);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-[#265CA0] hover:shadow-xl transition-all duration-300">
      <div>
        {/* Interactive Multi-Image Slider Container */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
          <Image
            src={allImages[activeImageIndex] || project.thumbnailImage}
            alt={`${project.name} - Slide ${activeImageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-102 transition-transform duration-500"
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
            <span className="px-2.5 py-1 rounded bg-[#265CA0] text-[10px] uppercase tracking-wider text-white font-bold shadow-md">
              {project.status}
            </span>
            <span className="px-2.5 py-1 rounded bg-white/95 text-[10px] uppercase tracking-wider text-[#265CA0] font-bold border border-slate-200 shadow-sm">
              {project.region} (W)
            </span>
          </div>

          <div className="absolute top-3 right-3 z-10">
            <div className="px-2.5 py-1 rounded bg-white/95 text-[9px] uppercase tracking-wider text-slate-700 font-semibold border border-slate-200 shadow-sm flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#265CA0]" />
              <span>{project.reraNumber.split(" ")[0]}</span>
            </div>
          </div>

          {/* Slider Prev / Next Arrows */}
          {allImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-[#265CA0] hover:text-white text-slate-800 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-[#265CA0] hover:text-white text-slate-800 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Slider Pagination Dots */}
          {allImages.length > 1 && (
            <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-10">
              {allImages.slice(0, 5).map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    activeImageIndex === idx ? "w-5 bg-[#265CA0]" : "w-1.5 bg-white/80 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Body (Reduced, High-Impact Text) */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5 font-medium">
            <span className="flex items-center gap-1 text-[#265CA0]">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
            <span className="font-semibold text-slate-700">Possession: {project.possession}</span>
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#265CA0] transition-colors mb-2">
            {project.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {project.overview}
          </p>

          {/* Quick Specifications Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            <span className="px-2 py-1 rounded bg-[#EBF3FC] text-[11px] font-semibold text-[#265CA0]">
              {project.config}
            </span>
            <span className="px-2 py-1 rounded bg-slate-100 text-[11px] font-semibold text-slate-700">
              {project.priceGuidance}
            </span>
          </div>

          {/* Concise Highlights */}
          <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
            {project.highlights.slice(0, 2).map((h, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#265CA0] shrink-0" />
                <span className="line-clamp-1">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Footers */}
      <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenBooking(project.name)}
          className="brandFilledBtn flex-1 text-[11px] py-2.5 px-3 justify-center"
        >
          <Calendar className="w-3.5 h-3.5 mr-1" />
          Visit Project
        </button>

        <button
          type="button"
          onClick={() => onOpenBrochure(project.name)}
          className="brandBorderBtn text-[11px] py-2.5 px-3"
          title="Download Brochure"
        >
          <Download className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export function ProjectsShowcase({
  onOpenBooking,
  onOpenBrochure,
  externalFilter
}: ProjectsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  React.useEffect(() => {
    if (externalFilter) {
      setActiveFilter(externalFilter);
    }
  }, [externalFilter]);

  const filteredProjects = humProjectsData.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Kandivali") return p.region === "Kandivali";
    if (activeFilter === "Borivali") return p.region === "Borivali";
    if (activeFilter === "Ongoing") return p.status === "Ongoing";
    if (activeFilter === "Completed") return p.status === "Completed";
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                PORTFOLIO OF LANDMARKS
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Flagship Developments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-2 font-normal">
              Explore our landmark residential complexes in Kandivali and Borivali. Swipe images to view real elevations, floorplans, and interiors.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Kandivali", "Borivali", "Ongoing", "Completed"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[11px] uppercase tracking-wider px-4 py-2 rounded-full transition-all font-semibold ${
                  activeFilter === filter
                    ? "bg-[#265CA0] text-white shadow-md shadow-[#265CA0]/20"
                    : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                {filter === "All" ? "All Projects" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenBooking={onOpenBooking}
              onOpenBrochure={onOpenBrochure}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
