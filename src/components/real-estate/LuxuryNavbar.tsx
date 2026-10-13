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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Luxury Ticker - Solid Dark, No Gradients */}
      <div className="bg-[#0A0A0C] border-b border-[#27272A] text-[#94A3B8] text-[11px] py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#C5A880] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              MahaRERA: PM1180002502952 &bull; Official Developer Portal
            </span>
            <span className="text-[#64748B]">Kandivali (W) &bull; Borivali (W) &bull; Mumbai</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:info@humdevelopers.com"
              className="flex items-center gap-1.5 hover:text-[#C5A880] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#C5A880]" />
              info@humdevelopers.com
            </a>
            <span className="text-[#334155]">|</span>
            <a
              href="tel:+919920061100"
              className="flex items-center gap-1.5 text-white hover:text-[#C5A880] transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              +91 99200 61100
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Header - Solid Obsidian Background */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0A0C] border-b border-[#27272A] py-3.5 shadow-xl"
            : "bg-[#0A0A0C] border-b border-[#1E1E24] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
              <Image
                src="/humLogo.svg"
                alt="HUM Developers Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.15em] font-medium text-white group-hover:text-[#C5A880] transition-colors">
                HUM DEVELOPERS
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880] font-sans -mt-0.5">
                Building Legacies Since 2004
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-[0.18em] text-[#CBD5E1]">
            <a href="#overview" className="hover:text-[#C5A880] transition-colors py-1">
              Overview
            </a>
            <a href="#projects" className="hover:text-[#C5A880] transition-colors py-1">
              Projects
            </a>
            <a href="#philosophy" className="hover:text-[#C5A880] transition-colors py-1">
              Philosophy
            </a>
            <a href="#residences" className="hover:text-[#C5A880] transition-colors py-1">
              Floor Plans
            </a>
            <a href="#amenities" className="hover:text-[#C5A880] transition-colors py-1">
              Amenities
            </a>
            <a href="#connectivity" className="hover:text-[#C5A880] transition-colors py-1">
              Location
            </a>
            <a href="#faqs" className="hover:text-[#C5A880] transition-colors py-1">
              FAQs
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="goldenBorderBtn text-[11px] py-2.5 px-5"
            >
              <Calendar className="w-3.5 h-3.5 mr-1" />
              Book Private Viewing
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-[#C5A880] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0C] border-b border-[#27272A] px-6 py-6 text-sm flex flex-col gap-3">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E2E8F0] uppercase tracking-wider text-xs py-2 border-b border-[#1E1E24]"
            >
              Overview
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E2E8F0] uppercase tracking-wider text-xs py-2 border-b border-[#1E1E24]"
            >
              Landmark Projects
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E2E8F0] uppercase tracking-wider text-xs py-2 border-b border-[#1E1E24]"
            >
              Our Philosophy & Story
            </a>
            <a
              href="#residences"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E2E8F0] uppercase tracking-wider text-xs py-2 border-b border-[#1E1E24]"
            >
              Residences & Floor Plans
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E2E8F0] uppercase tracking-wider text-xs py-2 border-b border-[#1E1E24]"
            >
              Lifestyle Amenities
            </a>
            <a
              href="#connectivity"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E2E8F0] uppercase tracking-wider text-xs py-2 border-b border-[#1E1E24]"
            >
              Mumbai Connectivity
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E2E8F0] uppercase tracking-wider text-xs py-2 border-b border-[#1E1E24]"
            >
              Frequently Asked Questions
            </a>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="goldenFilledBtn w-full text-center py-3"
              >
                Book Private Viewing
              </button>
              <a
                href="tel:+919920061100"
                className="secondarySolidBtn w-full text-center py-2.5"
              >
                <Phone className="w-3.5 h-3.5 mr-1" /> Call +91 99200 61100
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
