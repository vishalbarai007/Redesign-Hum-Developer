"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function HumTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#265CA0]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
              VERIFIED HOMEOWNER REVIEWS
            </span>
            <span className="w-6 h-[2px] bg-[#265CA0]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by 10,000+ Families
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
            Real reflections from proud homeowners across Kandivali and Borivali West.
          </p>
        </div>

        {/* Testimonials Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t, idx) => (
            <div
              key={t.id}
              className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-[#265CA0] hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                  ))}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/80">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-300 shrink-0">
                  <Image src={t.avatarUrl} alt={t.authorName} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.authorName}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{t.authorRole}</div>
                  <div className="text-[10px] text-[#265CA0] font-semibold">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
