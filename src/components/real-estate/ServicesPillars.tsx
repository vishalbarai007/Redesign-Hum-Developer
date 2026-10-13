"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { offeringsData } from "@/data/offerings";

interface ServicesPillarsProps {
  onOpenBooking: () => void;
}

export function ServicesPillars({ onOpenBooking }: ServicesPillarsProps) {
  return (
    <section id="services" className="py-24 bg-[#0F0F11] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
              Core Capabilities
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
            Specialized Real Estate Verticals
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#94A3B8] max-w-xl mt-2 font-light">
            Comprehensive development expertise spanning greenfield residential construction, urban redevelopment, and global NRI portfolio curation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offeringsData.map((offering) => (
            <div
              key={offering.id}
              className="bg-[#141418] border border-[#27272A] rounded-xs overflow-hidden flex flex-col justify-between group hover:border-[#C5A880]/50 transition-colors"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-[#0A0A0C]">
                  <Image
                    src={offering.imageUrl}
                    alt={offering.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  {offering.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-xs bg-[#0A0A0C]/90 text-[10px] uppercase tracking-wider text-[#C5A880] font-medium border border-[#27272A]">
                        {offering.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block mb-1">
                    {offering.tagline}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 font-light">
                    {offering.description}
                  </p>

                  {offering.features && (
                    <ul className="space-y-2.5 mb-6 pt-4 border-t border-[#27272A]">
                      {offering.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                          <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="goldenLineBtn text-[11px] w-full justify-between"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
