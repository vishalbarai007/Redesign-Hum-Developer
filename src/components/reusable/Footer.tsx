"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { footerNavItems } from "@/data/navigation";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Instagram,
  Linkedin,
  Facebook
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white pt-16 sm:pt-20 md:pt-24 pb-8 border-t border-slate-800 relative overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* TOP SECTION: Headline & Navigation Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 sm:pb-16">
          {/* Left Column: Headline, Narrative & Contact (Matches "Experience liftoff" style) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 font-heading">
                Experience liftoff
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed mb-8 font-light">
                Building dreams, shaping futures, and creating legacies across Mumbai for over two decades. Dedicated to architectural excellence, transparency, and timely handover.
              </p>
            </div>

            {/* Direct Contact Coordinates & Socials */}
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#3A75C4] shrink-0 mt-0.5" />
                <span>Kandivali West &amp; Borivali West, Mumbai, MH - 400067</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-[#3A75C4] shrink-0" />
                <a
                  href="tel:+919920061100"
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  +91 99200 61100
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-[#3A75C4] shrink-0" />
                <a
                  href="mailto:info@humdevelopers.com"
                  className="hover:text-white transition-colors"
                >
                  info@humdevelopers.com
                </a>
              </div>

              {/* Social Media Channels */}
              <div className="flex items-center gap-4 pt-2">
                {siteConfig.contact.socials.instagram && (
                  <a
                    href={siteConfig.contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow HUM Developers on Instagram"
                    className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                )}
                {siteConfig.contact.socials.linkedin && (
                  <a
                    href={siteConfig.contact.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with HUM Developers on LinkedIn"
                    className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                {siteConfig.contact.socials.facebook && (
                  <a
                    href={siteConfig.contact.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with HUM Developers on Facebook"
                    className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Columns: Structured Navigation (Matches "Product" and "Resources" layout) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-12">
            {/* Column 1: Navigation ("Product" in reference) */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 mb-5">
                Navigation
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <a
                    href="#overview"
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    Flagship Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#residences"
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    Residences &amp; Plans
                  </a>
                </li>
                <li>
                  <a
                    href="#amenities"
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    Lifestyle Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#connectivity"
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    Connectivity
                  </a>
                </li>
                <li>
                  <a
                    href="#faqs"
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    Contact Desk
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: MahaRERA Disclosures & Compliance ("Resources" in reference) */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 mb-5">
                Compliance
              </h3>
              <div className="space-y-4">
                <div className="text-sm text-slate-300 leading-relaxed">
                  <p className="font-medium text-white">HUM Emerald Heights</p>
                  <p className="text-xs text-slate-400 mt-1">
                    MahaRERA Reg No:{" "}
                    <strong className="text-white font-semibold">
                      PM1180002502952
                    </strong>
                  </p>
                  <Image src="/Image/QR.png" alt={"MAHARERA QR"} width={100} height={100}/>
                  <a
                    href="https://maharera.mahaonline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#3A75C4] hover:text-white transition-colors mt-1 font-medium underline"
                  >
                    <span>maharera.mahaonline.gov.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Massive "Emerald" Wordmark Display (Matches "Antigravity" in reference image) */}
        <div className="w-full select-none pointer-events-none pt-4 sm:pt-6 md:pt-8 pb-2 sm:pb-4 md:pb-6 overflow-hidden">
          <span className="block text-[17vw] sm:text-[18vw] md:text-[19vw] lg:text-[19.5vw] font-bold text-white tracking-tighter leading-[0.8] text-left font-heading whitespace-nowrap">
            Emerald
          </span>
        </div>

        {/* BOTTOM SECTION: Sub-footer with Brand Logo & Legal Links (Matches "Google" bar in reference image) */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          {/* Left: Brand Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <Link
              href="/"
              aria-label="HUM Developers Home"
              className="transition-opacity hover:opacity-90 inline-block"
            >
              <Image
                src="/humLogoWhite.png"
                alt="HUM Developers"
                width={140}
                height={40}
                className="h-7 w-auto object-contain"
              />
            </Link>
            <span className="text-white/20 hidden sm:inline">&bull;</span>
            <p className="text-slate-400 text-[11px] sm:text-xs text-center sm:text-left">
              &copy; {currentYear} HUM Developers. All rights reserved.
            </p>
          </div>

          {/* Right: Quick Legal Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5 sm:gap-6 text-xs text-slate-400">
            <a href="#overview" className="hover:text-white transition-colors">
              About HUM
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Statutory Disclaimer */}
        <div className="pt-4 pb-2 text-center md:text-left">
          <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed max-w-4xl">
            Disclaimer: The imagery, 3D renderings, walkthroughs, floorplans, and specifications shown are artistic impressions and indicative for representation purposes only. Actual developments may vary according to approvals from relevant authorities.
          </p>
        </div>
      </div>
    </footer>
  );
}
