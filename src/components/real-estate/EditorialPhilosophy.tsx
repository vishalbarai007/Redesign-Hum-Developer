"use client";

import React from "react";
import Image from "next/image";
import { Building2, Award, Users, ShieldCheck } from "lucide-react";

export function EditorialPhilosophy() {
  return (
    <section id="philosophy" className="py-24 bg-[#0A0A0C] text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow and Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
              Our Story & Heritage
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.15] mb-6">
            Building Dreams. <br />
            <span className="italic text-[#C5A880]">Creating Enduring Legacies.</span>
          </h2>
          <p className="font-sans text-[#94A3B8] text-sm sm:text-base leading-relaxed font-light">
            Founded in 2004, HUM Developers began with a simple yet profound vision: to create spaces that
            don’t just shelter, but inspire and elevate the human experience across Mumbai’s dynamic urban landscape.
            For over two decades, we have evolved from a boutique developer into one of Mumbai’s most trusted real estate names,
            spanning residential landmarks, commercial spaces, and mixed-use environments.
          </p>
        </div>

        {/* Dual Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Main Visual - Real Hum Developers Photo */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] w-full rounded-xs overflow-hidden border border-[#27272A] shadow-xl group">
            <Image
              src="https://cdn.sanity.io/images/3wmbb6cw/production/7524094be61ed0d0f85b03174c70202b8e5d5a65-687x581.png"
              alt="Hum Developers Heritage & Vision"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            {/* Solid Vignette Overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-[#0A0A0C]/90 p-6 border-t border-[#27272A]">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">
                The HUM Vision
              </span>
              <p className="font-serif text-base sm:text-lg text-white">
                &ldquo;Turning blueprints into experiences that elevate living for over 10,000 families.&rdquo;
              </p>
            </div>
          </div>

          {/* Secondary Editorial Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-7 bg-[#141418] border border-[#27272A] rounded-xs">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-5 h-5 text-[#C5A880]" />
                <h3 className="font-serif text-xl sm:text-2xl text-white">
                  Architectural Precision
                </h3>
              </div>
              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                In the pursuit of transforming the city’s skyline, our ideology is lateral and our orientation vertical.
                Every square foot is engineered for zero wastage, cross-ventilation, and natural solar daylighting.
              </p>
            </div>

            <div className="p-7 bg-[#141418] border border-[#27272A] rounded-xs">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#C5A880]" />
                <h3 className="font-serif text-xl sm:text-2xl text-white">
                  Ethical & Timely Handover
                </h3>
              </div>
              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                We believe in uncompromising integrity and transparency. All projects carry full MahaRERA compliance,
                clear legal titles, and a dedicated commitment to delivering homes well within scheduled time frames.
              </p>
            </div>

            <div className="p-7 bg-[#141418] border border-[#27272A] rounded-xs">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-[#C5A880]" />
                <h3 className="font-serif text-xl sm:text-2xl text-white">
                  Fostering True Belonging
                </h3>
              </div>
              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                Making home buyers an integral part of the HUM family. From the first site visit to post-handover society
                coordination, our relationship with our homeowners spans generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
