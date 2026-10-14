"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Award, Users, ShieldCheck, Clock, Compass } from "lucide-react";

export function EditorialPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%"
          }
        });
      }

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 25,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%"
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="py-16 bg-[#F8FAFC] text-slate-900 border-b border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* =========================================================================
            WORDPRESS 4-COLUMN TRUST METRICS STRIP
           ========================================================================= */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-white border border-slate-200 rounded-lg shadow-sm mb-16"
        >
          <div className="text-center p-3 border-r border-slate-100 last:border-none">
            <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#265CA0] block tracking-tight">
              20+
            </span>
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mt-1">
              Years Legacy
            </span>
          </div>

          <div className="text-center p-3 border-r border-slate-100 last:border-none">
            <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#265CA0] block tracking-tight">
              5M+
            </span>
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mt-1">
              Sq. Ft. Delivered
            </span>
          </div>

          <div className="text-center p-3 border-r border-slate-100 last:border-none">
            <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#265CA0] block tracking-tight">
              100%
            </span>
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mt-1">
              MahaRERA Registered
            </span>
          </div>

          <div className="text-center p-3">
            <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#265CA0] block tracking-tight">
              1,200+
            </span>
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mt-1">
              Happy Families
            </span>
          </div>
        </div>

        {/* Section Header (Punchy & Short) */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#265CA0]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
              ABOUT HUM DEVELOPERS
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Building Dreams. <span className="text-[#265CA0]">Shaping Legacies.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
            Two decades of architectural precision in Kandivali and Borivali West. Crafting homes with zero space wastage, cross-ventilation, and transparent legal clarity.
          </p>
        </div>

        {/* 4 Crisp Value Pillars (Reduced Text Content) */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#265CA0] hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
              Zero Space Wastage
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every square foot is maximized with optimal layout efficiency and cross-ventilation.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#265CA0] hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
              100% Legal Transparency
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All projects registered with MahaRERA, clear title land parcels, and verified bank approvals.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#265CA0] hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
              Scheduled Possession
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Disciplined construction milestones backed by trusted contractors and rapid milestone execution.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#265CA0] hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
              Rooftop Lifestyle
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              25+ podium &amp; rooftop amenities including sky lounge, fitness arena, and landscaped pavilions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
