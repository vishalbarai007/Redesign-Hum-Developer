"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ShieldCheck, Calendar, Download, ArrowRight, Layers } from "lucide-react";
import { humProjectsData, HumProject } from "@/data/projects";

interface ProjectsShowcaseProps {
  onOpenBooking: (projectName?: string) => void;
  onOpenBrochure: (projectName?: string) => void;
  externalFilter?: string;
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
    <section id="projects" className="py-24 bg-[#0F0F11] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                Portfolio of Landmarks
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Flagship Developments
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] max-w-xl mt-2 font-light">
              Explore our landmark residential complexes meticulously constructed across prime Mumbai destinations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Kandivali", "Borivali", "Ongoing", "Completed"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-xs transition-colors ${
                  activeFilter === filter
                    ? "bg-[#C5A880] text-[#0A0A0C] font-semibold"
                    : "bg-[#141418] text-[#94A3B8] border border-[#27272A] hover:text-white"
                }`}
              >
                {filter === "All" ? "All Projects" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#141418] border border-[#27272A] rounded-xs overflow-hidden flex flex-col justify-between group hover:border-[#C5A880]/50 transition-colors"
            >
              <div>
                {/* Elevation Image */}
                <div className="relative h-60 w-full overflow-hidden bg-[#0A0A0C]">
                  <Image
                    src={project.thumbnailImage || project.bannerImage}
                    alt={`${project.name} Mumbai Residential Development`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-xs bg-[#0A0A0C]/90 text-[10px] uppercase tracking-wider text-[#C5A880] font-medium border border-[#27272A]">
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-0.5 rounded-xs bg-[#0A0A0C]/90 text-[9px] uppercase tracking-wider text-[#94A3B8] border border-[#27272A] flex items-center gap-1">
                      <ShieldCheck className="w-2.5 h-2.5 text-[#C5A880]" />
                      RERA Verified
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1 text-[11px] text-[#94A3B8] mb-1.5">
                    <MapPin className="w-3 h-3 text-[#C5A880]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-normal mb-1">
                    {project.name}
                  </h3>

                  <p className="text-xs text-[#C5A880] tracking-wide mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2 mb-4">
                    {project.overview}
                  </p>

                  <div className="pt-4 border-t border-[#27272A] grid grid-cols-2 gap-3 text-xs mb-4">
                    <div>
                      <span className="text-[10px] uppercase text-[#94A3B8] block">Configuration</span>
                      <span className="text-white font-medium">{project.config.split("+")[0]}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#94A3B8] block">Price Guidance</span>
                      <span className="text-[#C5A880] font-medium">{project.priceGuidance}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(project.name)}
                  className="goldenFilledBtn flex-1 text-[11px] py-2.5 px-3 text-center"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  Site Visit
                </button>
                <button
                  type="button"
                  onClick={() => onOpenBrochure(project.name)}
                  className="secondarySolidBtn flex-1 text-[11px] py-2.5 px-3 text-center"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Brochure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
