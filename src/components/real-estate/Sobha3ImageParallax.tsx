"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

interface Sobha3ImageParallaxProps {
  onOpenBooking?: (projectName?: string) => void;
}

export function Sobha3ImageParallax({ onOpenBooking }: Sobha3ImageParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const titleWrapRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const centerInitialBadgeRef = useRef<HTMLDivElement>(null);
  const slide1FullBadgeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Master GSAP Timeline tied to ScrollTrigger
      // Total scroll length: 160vh (50vh title + 50vh scale + 30vh Solaris + 30vh Emerald Heights)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // ------------------------------------------------------------------------
      // STAGE 1: 0 -> 50vh (Timeline 0 -> 50)
      // Title starts small and smoothly scales up to full size
      // ------------------------------------------------------------------------
      gsap.set(titleWrapRef.current, { scale: 0.72, opacity: 0.75, transformOrigin: "center center" });
      tl.to(
        titleWrapRef.current,
        {
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          duration: 50,
        },
        0
      );

      // ------------------------------------------------------------------------
      // STAGE 2: 50vh -> 100vh (Timeline 50 -> 100)
      // Center image expands to full screen (100vw x 100vh).
      // Left and right floating cards slide out and fade away.
      // Title fades out.
      // ------------------------------------------------------------------------
      tl.to(
        titleWrapRef.current,
        {
          opacity: 0,
          y: -40,
          scale: 1.05,
          duration: 25,
          ease: "power1.in",
        },
        50
      );

      if (leftCardRef.current) {
        tl.to(
          leftCardRef.current,
          {
            xPercent: -60,
            opacity: 0,
            duration: 35,
            ease: "power1.in",
          },
          50
        );
      }

      if (rightCardRef.current) {
        tl.to(
          rightCardRef.current,
          {
            xPercent: 60,
            opacity: 0,
            duration: 35,
            ease: "power1.in",
          },
          50
        );
      }

      // Initial card label fades out as image expands
      if (centerInitialBadgeRef.current) {
        tl.to(
          centerInitialBadgeRef.current,
          {
            opacity: 0,
            duration: 20,
            ease: "power1.in",
          },
          50
        );
      }

      // Center card expands to fill 100vw x 100vh with 0 border radius and borderless
      if (centerCardRef.current) {
        tl.to(
          centerCardRef.current,
          {
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            borderWidth: "0px",
            borderColor: "transparent",
            boxShadow: "none",
            duration: 50,
            ease: "power2.inOut",
          },
          50
        );
      }

      // Full-bleed editorial badge for Slide 1 appears when expansion completes
      if (slide1FullBadgeRef.current) {
        gsap.set(slide1FullBadgeRef.current, { opacity: 0, y: 30 });
        tl.to(
          slide1FullBadgeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 20,
            ease: "power1.out",
          },
          80
        );
      }

      // ------------------------------------------------------------------------
      // STAGE 3: 100vh -> 130vh (Timeline 100 -> 130)
      // Horizontal slide right-to-left: HUM Solaris covers entire screen (continuous, 0 gap)
      // ------------------------------------------------------------------------
      if (trackRef.current) {
        tl.to(
          trackRef.current,
          {
            xPercent: -33.333333,
            duration: 30,
            ease: "none",
          },
          100
        );

        // ----------------------------------------------------------------------
        // STAGE 4: 130vh -> 160vh (Timeline 130 -> 160)
        // Horizontal slide right-to-left: HUM Emerald Heights covers entire screen (continuous, 0 gap)
        // ----------------------------------------------------------------------
        tl.to(
          trackRef.current,
          {
            xPercent: -66.666666,
            duration: 30,
            ease: "none",
          },
          130
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="relative w-full h-[100svh] overflow-hidden bg-[#FFFFFF] text-slate-900"
    >
      {/* Background Architectural Texture (Repeat, 50% Opacity) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-50 bg-repeat"
        style={{
          backgroundImage: "url('/Image/bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
        aria-hidden="true"
      />

      <div id="heritage" className="absolute top-0 pointer-events-none" />

      {/* Pinned Viewport Stage */}
      <div
        ref={pinWrapperRef}
        className="relative w-full h-[100svh] overflow-hidden flex items-center justify-center bg-[#FFFFFF]"
      >
        {/* Background Architectural Texture (Repeat, 50% Opacity) */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50 bg-repeat"
          style={{
            backgroundImage: "url('/Image/bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
          aria-hidden="true"
        />
        {/*
          STAGE 1 TITLE:
          Starts small, scales up to full size over 50vh, then fades as center image expands.
        */}
        <div
          ref={titleWrapRef}
          className="absolute top-8 sm:top-12 md:top-14 z-30 text-center max-w-4xl mx-auto px-6 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-8 h-[2px] bg-[#265CA0]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#265CA0] font-bold">
              HUM DEVELOPERS HERITAGE
            </span>
            <span className="w-8 h-[2px] bg-[#265CA0]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight uppercase leading-[1.1]">
            Crafted For Connoisseurs
          </h2>
         
        </div>

        {/* Left Floating Image Card (Stage 1 & 2) */}
        <div
          ref={leftCardRef}
          className="hidden md:block absolute left-[3%] lg:left-[6%] top-1/2 -translate-y-1/2 z-20 w-[220px] lg:w-[260px] h-[320px] lg:h-[390px] rounded-0 overflow-hidden shadow-xl border border-slate-200 bg-white pointer-events-none"
        >
          <div className="relative w-full h-full">
            <Image
              src="https://cdn.sanity.io/images/3wmbb6cw/production/cffe754409c8cee80dd0bafbc1acebf73a314fbd-1440x517.jpg"
              alt="HUM Emerald Heights"
              fill
              sizes="260px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[#60A5FA] font-bold block mb-0.5">
                KANDIVALI (W)
              </span>
              <span className="text-sm font-bold truncate block">HUM Emerald Heights</span>
            </div>
          </div>
        </div>

        {/* Right Floating Image Card (Stage 1 & 2) */}
        <div
          ref={rightCardRef}
          className="hidden md:block absolute right-[3%] lg:right-[6%] top-1/2 -translate-y-1/2 z-20 w-[220px] lg:w-[260px] h-[320px] lg:h-[390px] rounded-0 overflow-hidden shadow-xl border border-slate-200 bg-white pointer-events-none"
        >
          <div className="relative w-full h-full">
            <Image
              src="https://cdn.sanity.io/images/3wmbb6cw/production/3389b12891977e718ac7bf619b35fad3e5732f28-5166x1892.png"
              alt="HUM Solaris"
              fill
              sizes="260px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[#60A5FA] font-bold block mb-0.5">
                BORIVALI (W)
              </span>
              <span className="text-sm font-bold truncate block">HUM Solaris</span>
            </div>
          </div>
        </div>

        {/*
          CONTINUOUS FULLSCREEN HORIZONTAL SLIDER TRACK:
          w-[300vw] h-full flex with 0 gap between slides.
          Slide 1 contains the center expanding card.
          Slide 2 contains HUM Solaris.
          Slide 3 contains HUM Emerald Heights.
        */}
        <div
          ref={trackRef}
          className="absolute inset-0 z-10 flex h-full w-[300vw] will-change-transform pointer-events-auto"
        >
          {/* ================================================================ */}
          {/* SLIDE 1: CENTER CARD THAT EXPANDS TO FULL SCREEN                  */}
          {/* ================================================================ */}
          <div className="relative w-[100vw] h-full shrink-0 flex items-center justify-center overflow-hidden">
            <div
              ref={centerCardRef}
              className="relative w-[88vw] sm:w-[580px] lg:w-[640px] h-[360px] sm:h-[440px] lg:h-[480px] rounded-0 overflow-hidden shadow-2xl border-2 border-white/80 bg-slate-900 transition-none will-change-[width,height,border-radius]"
            >
              <Image
                src="https://cdn.sanity.io/images/3wmbb6cw/production/98cb2c2d4f9a75bfb71f3458d5036e9fc0b98c47-2000x1125.jpg"
                alt="Double-Height Grand Italian Marble Lobby"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

              {/* Initial Center Card Label (Stage 1) */}
              <div
                ref={centerInitialBadgeRef}
                className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3 pointer-events-none"
              >
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#60A5FA] font-bold block mb-1">
                    LANDMARK SPECIFICATION
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold font-heading">
                    Double-Height Grand Italian Marble Lobby
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-1 max-w-md">
                    24-Ft Clear Ceiling • Acoustic Double-Glazing • 24/7 Concierge
                  </p>
                </div>
              </div>

              {/* Fullscreen Editorial Overlay (Stage 2: Reference Video Style) */}
              <div
                ref={slide1FullBadgeRef}
                className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pointer-events-auto"
              >
                <div className="max-w-xl text-white">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/70 font-semibold mb-1.5">
                    01 / 03 · LANDMARK ARRIVAL
                  </div>
                  <h3 className="font-heading text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                    Double-Height Grand Marble Lobby
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 mt-1.5 font-normal">
                    24-Ft Clear Ceiling • Italian Imported Marble • 24/7 White-Glove Concierge Desk
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking?.("Double-Height Grand Italian Marble Lobby")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all shadow-lg cursor-pointer shrink-0"
                >
                  <span>Explore Lobby</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* SLIDE 2: HUM SOLARIS (Next 30vh Scroll, Edge-to-Edge)            */}
          {/* ================================================================ */}
          <div className="relative w-[100vw] h-full shrink-0 flex items-center justify-center overflow-hidden">
            <Image
              src="https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png"
              alt="HUM Solaris Borivali West"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

            {/* Editorial Bottom Overlay (Reference Video Style) */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pointer-events-auto">
              <div className="max-w-xl text-white">
                <div className="text-xs uppercase tracking-[0.25em] text-[#60A5FA] font-semibold mb-1.5">
                  02 / 03 · SIGNATURE HIGH-RISE
                </div>
                <h3 className="font-heading text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                  HUM Solaris
                </h3>
                <p className="text-xs sm:text-sm text-white/75 mt-1.5 font-normal">
                  Borivali (West), Mumbai • 2 & 3 BHK Panoramic High-Rise Residences with Rooftop Sky Lounge
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking?.("HUM Solaris")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all shadow-lg cursor-pointer shrink-0"
              >
                <span>Explore Solaris</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ================================================================ */}
          {/* SLIDE 3: HUM EMERALD HEIGHTS (Next 30vh Scroll, Edge-to-Edge)     */}
          {/* ================================================================ */}
          <div className="relative w-[100vw] h-full shrink-0 flex items-center justify-center overflow-hidden">
            <Image
              src="https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg"
              alt="HUM Emerald Heights Chembur"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

            {/* Editorial Bottom Overlay (Reference Video Style) */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pointer-events-auto">
              <div className="max-w-xl text-white">
                <div className="text-xs uppercase tracking-[0.25em] text-[#34D399] font-semibold mb-1.5">
                  03 / 03 · MODERN URBAN LIVING
                </div>
                <h3 className="font-heading text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                  HUM Emerald Heights
                </h3>
                <p className="text-xs sm:text-sm text-white/75 mt-1.5 font-normal">
                  Kandivali / Chembur, Mumbai • 1, 2 & 3 BHK Contemporary Luxury with 25+ Lifestyle Amenities
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking?.("HUM Emerald Heights")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all shadow-lg cursor-pointer shrink-0"
              >
                <span>Explore Emerald</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobha3ImageParallax;
