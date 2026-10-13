"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, Menu, X, ShieldCheck, Mail } from "lucide-react";

interface LuxuryNavbarProps {
  onOpenBooking: () => void;
}

export function LuxuryNavbar({ onOpenBooking }: LuxuryNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Clean White & Subtle Border */}
      <div className="bg-[#F8FAFC] border-b border-slate-200/80 text-slate-600 text-[11px] py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#265CA0] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#265CA0]" />
              MahaRERA: PM1180002502952 &bull; Official Developer Portal
            </span>
            <span className="text-slate-500">Kandivali (W) &bull; Borivali (W) &bull; Mumbai</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <a
              href="mailto:info@humdevelopers.com"
              className="flex items-center gap-1.5 hover:text-[#265CA0] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#265CA0]" />
              info@humdevelopers.com
            </a>
        
          </div>
        </div>
      </div>

      {/* Main Header - Pristine White Floating Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md shadow-slate-900/5"
            : "bg-white border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo - Uses humLogo.svg (#265CA0 Blue on White) */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/humLogo.svg"
              alt="HUM Developers"
              width={160}
              height={52}
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-102"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-[0.15em] font-semibold text-slate-700">
            <a href="#overview" className="hover:text-[#265CA0] transition-colors py-1">
              Overview
            </a>
            <a href="#projects" className="hover:text-[#265CA0] transition-colors py-1">
              Projects
            </a>
            <a href="#residences" className="hover:text-[#265CA0] transition-colors py-1">
              Residences
            </a>
            <a href="#amenities" className="hover:text-[#265CA0] transition-colors py-1">
              Amenities
            </a>
            <a href="#gallery" className="hover:text-[#265CA0] transition-colors py-1">
              Gallery
            </a>
            <a href="#connectivity" className="hover:text-[#265CA0] transition-colors py-1">
              Location
            </a>
            <a href="#faqs" className="hover:text-[#265CA0] transition-colors py-1">
              FAQs
            </a>
            <a href="#contact" className="hover:text-[#265CA0] transition-colors py-1">
              Contact
            </a>
          </nav>

          {/* Actions Desk */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919920061100"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#265CA0] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#265CA0]" />
              <span>+91 99200 61100</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="brandFilledBtn text-xs py-2.5 px-5"
            >
              <Calendar className="w-3.5 h-3.5 mr-1" />
              Schedule Visit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#265CA0] transition-colors"
            aria-label="Toggle mobile navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <nav className="flex flex-col gap-4 text-xs uppercase tracking-wider font-semibold text-slate-800">
              <a
                href="#overview"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#265CA0] py-1 border-b border-slate-100"
              >
                Overview
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#265CA0] py-1 border-b border-slate-100"
              >
                Projects
              </a>
              <a
                href="#residences"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#265CA0] py-1 border-b border-slate-100"
              >
                Residences &amp; Plans
              </a>
              <a
                href="#amenities"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#265CA0] py-1 border-b border-slate-100"
              >
                Amenities
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#265CA0] py-1 border-b border-slate-100"
              >
                Lifestyle Gallery
              </a>
              <a
                href="#connectivity"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#265CA0] py-1 border-b border-slate-100"
              >
                Connectivity
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#265CA0] py-1 border-b border-slate-100"
              >
                FAQs
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#265CA0] py-1"
              >
                Contact
              </a>
            </nav>

            <div className="pt-6 mt-4 border-t border-slate-200 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="brandFilledBtn w-full py-3 text-xs justify-center"
              >
                <Calendar className="w-3.5 h-3.5 mr-1" />
                Schedule Private Viewing
              </button>

              <a
                href="tel:+919920061100"
                className="brandBorderBtn w-full py-3 text-xs justify-center"
              >
                <Phone className="w-3.5 h-3.5 mr-1" />
                Call: +91 99200 61100
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
