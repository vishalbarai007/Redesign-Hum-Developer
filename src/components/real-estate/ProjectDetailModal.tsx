"use client";

import React, { useState, useEffect, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import {
  X,
  MapPin,
  ShieldCheck,
  Calendar,
  Download,
  MessageSquare,
  Check,
  // ChevronUp,
  // ChevronDown,
  Sparkles,
  Layers,
  Building2,
  Clock,
  ArrowRight
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { HumProject } from "@/data/projects";

interface ProjectDetailModalProps {
  project: HumProject | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking?: (projectName?: string) => void;
  onOpenBrochure?: (projectName?: string) => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onOpenBooking,
  onOpenBrochure
}: ProjectDetailModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [isPaused, setIsPaused] = useState(false);

  // Cache active project so exit animation has data during unmount
  const cachedProjectRef = useRef<HumProject | null>(project);
  if (project) {
    cachedProjectRef.current = project;
  }
  const currentProj = project || cachedProjectRef.current;

  // Stop background scroll and pause Lenis while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.stop === "function") {
      lenis.stop();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
    };
  }, [isOpen]);

  // Gather unique images
  const allImages = currentProj
    ? Array.from(
        new Set(
          [
            currentProj.thumbnailImage,
            ...(currentProj.galleryImages || []),
            currentProj.bannerImage
          ].filter(Boolean)
        )
      )
    : [];

  // Max 4 landscape thumbnail boxes on the right side
  const thumbnailImages = allImages.slice(0, 4);

  // Reset active index when project changes
  useEffect(() => {
    setActiveIndex(0);
    setDirection("up");
  }, [currentProj?.id]);

  // Auto-advance vertical carousel every 3.5s (pauses on hover)
  useEffect(() => {
    if (!isOpen || isPaused || thumbnailImages.length <= 1) return;

    const timer = setInterval(() => {
      setDirection("up");
      setActiveIndex((prev) => (prev + 1) % thumbnailImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isOpen, isPaused, thumbnailImages.length]);

  if (!currentProj) return null;

  const handlePrevImage = () => {
    setDirection("down");
    setActiveIndex((prev) =>
      prev === 0 ? thumbnailImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setDirection("up");
    setActiveIndex((prev) => (prev + 1) % thumbnailImages.length);
  };

  const handleSelectThumbnail = (idx: number) => {
    setDirection(idx > activeIndex ? "up" : "down");
    setActiveIndex(idx);
  };

  const currentImage = thumbnailImages[activeIndex] || currentProj.thumbnailImage;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog.Root
          open={isOpen}
          onOpenChange={(open) => {
            if (!open) onClose();
          }}
        >
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="fixed inset-0 bg-slate-950/75 backdrop-blur-md z-50"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: "-48%", x: "-50%" }}
                animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
                exit={{ opacity: 0, scale: 0.96, y: "-48%", x: "-50%" }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                data-lenis-prevent
                className="fixed top-1/2 left-1/2 w-[95vw] max-w-5xl max-h-[92vh] bg-white border border-slate-200 rounded-none z-50 shadow-2xl overflow-y-auto focus:outline-none"
              >
          {/* Modal Header Bar */}
          <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-10 py-4 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* <span className="w-6 h-[2px] bg-[#265CA0]" /> */}
              <div className="min-w-0">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#265CA0] font-bold block">
                  {currentProj.location}
                </span>
                <Dialog.Title className="font-heading text-lg sm:text-2xl font-black text-slate-900 uppercase truncate">
                  {currentProj.name}
                </Dialog.Title>
              </div>
            </div>

            <div className="flex items-center gap-3">
            
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close modal"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* =========================================================================
                TOP: VERTICAL BOTTOM-TO-TOP CAROUSEL WITH RIGHT-SIDE 4 LANDSCAPE THUMBNAILS
               ========================================================================= */}
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Main Vertical Carousel Stage (Takes 9 cols on desktop) */}
              <div className="lg:col-span-9 relative h-[320px] sm:h-[420px] md:h-[480px] w-full overflow-hidden bg-slate-900 rounded-none shadow-md">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={{
                      enter: (dir: "up" | "down") => ({
                        y: dir === "up" ? "100%" : "-100%",
                        opacity: 0.8
                      }),
                      center: {
                        y: 0,
                        opacity: 1
                      },
                      exit: (dir: "up" | "down") => ({
                        y: dir === "up" ? "-100%" : "100%",
                        opacity: 0.8
                      })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 28 },
                      opacity: { duration: 0.3 }
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={currentImage}
                      alt={`${currentProj.name} photo ${activeIndex + 1}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 75vw"
                      className="object-cover"
                    />
                    {/* Architectural gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>


                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#60A5FA] font-bold block">
                      ARCHITECTURAL PERSPECTIVE 0{activeIndex + 1} / 0{thumbnailImages.length}
                    </span>
                    <span className="text-sm font-bold truncate block">{currentProj.tagline}</span>
                  </div>
                 
                </div>
              </div>

              {/* Right Side: At Max 4 Small Landscape Thumbnail Boxes (width > height) */}
              <div className="lg:col-span-3 flex lg:flex-col gap-3 justify-between overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                {thumbnailImages.map((img, idx) => {
                  const isSelected = activeIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectThumbnail(idx)}
                      className={`relative flex-1 lg:flex-initial h-20 sm:h-24 lg:h-[110px] w-28 sm:w-36 lg:w-full shrink-0 overflow-hidden transition-all rounded-none border-2 text-left group/thumb ${
                        isSelected
                          ? "border-[#265CA0] shadow-md ring-2 ring-[#265CA0]/30"
                          : "border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                      />
                      <div
                        className={`absolute inset-0 transition-colors ${
                          isSelected ? "bg-[#265CA0]/20" : "bg-black/25 group-hover/thumb:bg-transparent"
                        }`}
                      />
                      <span className="absolute bottom-1 right-1.5 px-1.5 py-0.5 rounded bg-black/75 text-[9px] font-bold text-white tracking-widest">
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =========================================================================
                BELOW MODAL CAROUSEL: COMPLETE PROJECT DETAILS & SPECIFICATIONS
               ========================================================================= */}
            <div className="space-y-6 pt-2">
              {/* Tagline & Title */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FC] text-[#265CA0] text-xs uppercase tracking-widest font-bold mb-2">
                  {/* <Sparkles className="w-3.5 h-3.5" /> */}
                  <span>{currentProj.tagline}</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 uppercase">
                  {currentProj.name}
                </h3>
                <p className="text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                  {currentProj.overview}
                </p>
              </div>

              {/* 4 Big Specification Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-[#F8FAFC] border border-slate-200 rounded-none shadow-sm">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                    Configuration
                  </span>
                  <span className="font-heading text-sm sm:text-base font-bold text-slate-900 block mt-1">
                    {currentProj.config}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                    Price Guidance
                  </span>
                  <span className="font-heading text-sm sm:text-base font-bold text-[#265CA0] block mt-1">
                    {currentProj.priceGuidance}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                    Possession
                  </span>
                  <span className="font-heading text-sm sm:text-base font-bold text-slate-900 block mt-1">
                    {currentProj.possession}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                    MahaRERA Registration
                  </span>
                  <span className="font-heading text-sm sm:text-base font-bold text-slate-900 block mt-1">
                    {currentProj.reraNumber}
                  </span>
                </div>
              </div>

              {/* Key Architectural Highlights Checklist */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold mb-3">
                  Key Architectural Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentProj.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white border border-slate-200/90 rounded-none shadow-xs"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#EBF3FC] text-[#265CA0] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MahaRERA Official Verification Card */}
              <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-none shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {currentProj.reraQrCode && (
                    <div className="relative w-16 h-16 shrink-0 rounded-none overflow-hidden border border-slate-200 bg-white">
                      <Image
                        src={currentProj.reraQrCode}
                        alt={`${currentProj.name} MahaRERA QR`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                      <ShieldCheck className="w-4 h-4 text-[#265CA0]" />
                      <span>MahaRERA Registered Project</span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium mt-0.5">
                      Certificate No: <strong className="text-slate-900">{currentProj.reraNumber}</strong>
                    </div>
                    <a
                      href="https://maharera.mahaonline.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#265CA0] hover:underline font-semibold block mt-0.5"
                    >
                      Verify on maharera.mahaonline.gov.in &rarr;
                    </a>
                  </div>
                </div>

                <div className="text-center sm:text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-none bg-[#265CA0] text-white text-[11px] font-bold uppercase tracking-wider">
                    {currentProj.status} Development
                  </span>
                </div>
              </div>

              {/* Direct Action Buttons Strip */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenBooking?.(currentProj.name);
                  }}
                  className="brandFilledBtn w-full sm:flex-1 py-3.5 text-xs font-bold rounded-none shadow-md"
                >
                  <Calendar className="w-4 h-4 mr-1.5" />
                  Schedule Priority Site Visit
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenBrochure?.(currentProj.name);
                  }}
                  className="brandBorderBtn w-full sm:flex-1 py-3.5 text-xs font-bold rounded-none"
                >
                  <Download className="w-4 h-4 mr-1.5" />
                  Download E-Brochure
                </button>

                <a
                  href={`https://wa.me/919920061100?text=${encodeURIComponent(
                    `Hello HUM Developers, I am interested in ${currentProj.name} (${currentProj.location}). Please share complete floor plans and price sheet.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-none shadow transition-all shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  );
}
