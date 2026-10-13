"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { offeringsData } from "@/data/offerings";

interface ServicesPillarsProps {
  onOpenBooking: () => void;
}

export function ServicesPillars({ onOpenBooking }: ServicesPillarsProps) {
  return (
    <section id="services" className="py-20 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-[2px] bg-[#265CA0]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
              DEVELOPMENT EXPERTISE
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Real Estate Verticals
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-2 font-normal">
            Proven mastery in greenfield residential towers, trusted society redevelopment, and premier NRI investment management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offeringsData.map((offering) => (
            <div
              key={offering.id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-[#265CA0] hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={offering.imageUrl}
                    alt={offering.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  {offering.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-[#265CA0] text-[10px] uppercase tracking-wider text-white font-bold shadow-md">
                        {offering.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#265CA0] font-bold block mb-1">
                    {offering.tagline}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {offering.description}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700">
                    {offering.features?.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#265CA0] mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="brandLineBtn text-xs pt-3"
                >
                  Consult Our Experts <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
