"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Building2, Users, ShieldCheck, ArrowRight } from "lucide-react";

interface Sobha3ImageParallaxProps {
  onOpenBooking?: () => void;
}

export function Sobha3ImageParallax({ onOpenBooking }: Sobha3ImageParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const centerColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 3-Plane Parallax Depth (Sobha Privy signature motion)
      if (leftColRef.current) {
        gsap.to(leftColRef.current, {
          yPercent: -16,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

      if (rightColRef.current) {
        gsap.to(rightColRef.current, {
          yPercent: 16,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

      if (centerColRef.current) {
        gsap.fromTo(
          centerColRef.current,
          { scale: 0.95 },
          {
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }

      // Metric Badges Stagger Reveal
      if (metricsRef.current) {
        gsap.from(metricsRef.current.children, {
          y: 25,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: metricsRef.current,
            start: "top 85%"
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
      className="py-24 sm:py-32 bg-[#F8FAFC] text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      <div id="heritage" className="absolute top-0" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Minimalist Editorial Headline (Sobha Privy Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#265CA0]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#265CA0] font-bold">
              HUM DEVELOPERS HERITAGE
            </span>
            <span className="w-8 h-[2px] bg-[#265CA0]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight uppercase">
            Crafted For Connoisseurs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 font-normal">
            Over two decades of architectural distinction shaping Mumbai’s premier Western Suburbs.
          </p>
        </div>

        {/* 3-Image Multi-Plane Parallax Stage (Sobha Signature Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center my-12">
          {/* Left Floating Image Card (Moves Upward on Scroll) */}
          <div
            ref={leftColRef}
            className="md:col-span-3 flex flex-col gap-4 relative"
          >
            <div className="relative h-72 sm:h-96 w-full rounded-lg overflow-hidden shadow-lg border border-slate-200 bg-white group">
              <Image
                src="https://cdn.sanity.io/images/3wmbb6cw/production/cffe754409c8cee80dd0bafbc1acebf73a314fbd-1440x517.jpg"
                alt="HUM Developers Kandivali Tower"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#60A5FA] font-bold block">
                  KANDIVALI (W)
                </span>
                <span className="text-sm font-bold">HUM Emerald Heights</span>
              </div>
            </div>
          </div>

          {/* Center Dominant Image Card (Scales Upward on Scroll) */}
          <div
            ref={centerColRef}
            className="md:col-span-6 relative z-10"
          >
            <div className="relative h-96 sm:h-[480px] w-full rounded-xl overflow-hidden shadow-2xl border-2 border-white ring-1 ring-slate-200 bg-white group">
              <Image
                src="https://cdn.sanity.io/images/3wmbb6cw/production/98cb2c2d4f9a75bfb71f3458d5036e9fc0b98c47-2000x1125.jpg"
                alt="Grand Double-Height Marble Entrance Lobby"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#60A5FA] font-bold block mb-1">
                    LANDMARK SPECIFICATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading">
                    Double-Height Grand Italian Marble Lobby
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-md">
                    24-Ft Clear Ceiling • Acoustic Double-Glazing • 24/7 Concierge
                  </p>
                </div>
                {onOpenBooking && (
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="brandFilledBtn shrink-0 text-[11px] py-2.5 px-4 shadow-md"
                  >
                    View Details
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Floating Image Card (Moves Downward on Scroll) */}
          <div
            ref={rightColRef}
            className="md:col-span-3 flex flex-col gap-4 relative"
          >
            <div className="relative h-72 sm:h-96 w-full rounded-lg overflow-hidden shadow-lg border border-slate-200 bg-white group">
              <Image
                src="https://cdn.sanity.io/images/3wmbb6cw/production/3389b12891977e718ac7bf619b35fad3e5732f28-5166x1892.png"
                alt="HUM Developers Borivali Tower"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#60A5FA] font-bold block">
                  BORIVALI (W)
                </span>
                <span className="text-sm font-bold">HUM Solaris</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Big, Clean Metric Badges (WordPress Style) */}
        {/* <div
          ref={metricsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 p-6 sm:p-8 bg-white border border-slate-200 rounded-xl shadow-sm"
        >
          <div className="flex flex-col items-center text-center p-3">
            <div className="w-12 h-12 rounded-full bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
              <Award className="w-6 h-6" />
            </div>
            <span className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              20+
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">
              Years of Legacy
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <div className="w-12 h-12 rounded-full bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              1.2M+
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">
              Sq. Ft. Delivered
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <div className="w-12 h-12 rounded-full bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <span className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              1,000+
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">
              Happy Families
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <div className="w-12 h-12 rounded-full bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              100%
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">
              MahaRERA Registered
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
