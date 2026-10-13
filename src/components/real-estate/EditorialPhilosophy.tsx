"use client";

import React from "react";
import Image from "next/image";
import { Building2, Award, Users, ShieldCheck, CheckCircle2, Clock } from "lucide-react";

export function EditorialPhilosophy() {
  return (
    <section id="philosophy" className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Eyebrow & Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-[2px] bg-[#265CA0]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
              OUR HERITAGE &amp; VALUES
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            Building Dreams. Shaping Legacies.
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
            Since 2004, HUM Developers has delivered over 5 million square feet of landmark residences across Kandivali and Borivali West.
            Dedicated to intelligent space planning, uncompromised materials, and timely possession.
          </p>
        </div>

        {/* Dual Column Layout: Photo + 4 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Photo Banner */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] w-full rounded-xl overflow-hidden border border-slate-200 shadow-lg group bg-slate-100">
            <Image
              src="https://cdn.sanity.io/images/3wmbb6cw/production/7524094be61ed0d0f85b03174c70202b8e5d5a65-687x581.png"
              alt="Hum Developers Heritage & Vision"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-5 border-t border-slate-200">
              <span className="text-[10px] uppercase tracking-widest text-[#265CA0] font-bold block mb-1">
                THE HUM PROMISE
              </span>
              <p className="font-heading text-base sm:text-lg font-bold text-slate-900">
                &ldquo;Engineering residences that elevate family living for generations.&rdquo;
              </p>
            </div>
          </div>

          {/* 4 Crisp Value Pillars (Reduced Text Content) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#265CA0] transition-colors">
              <div className="w-10 h-10 rounded bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
                Zero Space Wastage
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Efficient floor planning maximizing every carpet square foot with natural cross ventilation.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#265CA0] transition-colors">
              <div className="w-10 h-10 rounded bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
                100% MahaRERA
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Crystal-clear title records, certified banking approvals, and strict compliance standards.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#265CA0] transition-colors">
              <div className="w-10 h-10 rounded bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
                On-Time Handover
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Two-decade track record of disciplined project milestones and scheduled key deliveries.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#265CA0] transition-colors">
              <div className="w-10 h-10 rounded bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
                10K+ Happy Families
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vibrant gated communities with active rooftop lounges, fitness clubs, and children play hubs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
