"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function HumTestimonials() {
  return (
    <section className="py-24 bg-[#0A0A0C] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
              Homeowner Reflections
            </span>
            <span className="w-6 h-[1px] bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
            Endorsed by Over 10,000 Families
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mt-2 font-light">
            Genuine experiences from residents who trusted HUM Developers with their life’s greatest milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-[#141418] border border-[#27272A] rounded-xs p-8 flex flex-col justify-between hover:border-[#C5A880]/40 transition-colors"
            >
              <div>
                <div className="flex gap-1 text-[#C5A880] mb-5">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#C5A880]" />
                  ))}
                </div>

                <p className="text-[#CBD5E1] text-xs sm:text-sm italic leading-relaxed mb-6 font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 border-t border-[#27272A]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#27272A] shrink-0">
                  <Image src={t.avatarUrl} alt={t.authorName} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white tracking-wide">{t.authorName}</div>
                  <div className="text-[10px] text-[#94A3B8]">{t.authorRole}</div>
                  <div className="text-[10px] text-[#C5A880]">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
