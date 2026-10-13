"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { mainNavItems, footerNavItems } from "@/data/navigation";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0C] border-t border-[#27272A] pt-20 pb-12 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#27272A]">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/humLogoWhite.png"
                alt="HUM Developers"
                width={150}
                height={50}
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-sm leading-relaxed mb-6 font-light">
              Building dreams, shaping futures, and creating legacies across Mumbai for over two decades. Dedicated to architectural excellence, transparency, and timely handover.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#CBD5E1]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>Kandivali West & Borivali West, Mumbai, MH - 400067</span>
              </div>
              <div className="flex items-center gap-2 text-[#CBD5E1]">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href="tel:+919920061100" className="hover:text-[#C5A880] transition-colors">
                  +91 99200 61100
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#CBD5E1]">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href="mailto:info@humdevelopers.com" className="hover:text-[#C5A880] transition-colors">
                  info@humdevelopers.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase font-semibold text-[#C5A880] tracking-[0.2em] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MahaRERA & Compliance */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase font-semibold text-[#C5A880] tracking-[0.2em] mb-4">
              MahaRERA Disclosures
            </h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 font-light">
              All ongoing residential developments are registered under the Real Estate (Regulation and Development) Act (RERA). Details of projects, approved layouts, and quarterly disclosures are available on the official Maharashtra RERA portal (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="text-[#C5A880] hover:underline">maharera.mahaonline.gov.in</a>).
            </p>
            <div className="p-3 bg-[#141418] border border-[#27272A] rounded-xs flex items-center gap-2.5 text-[11px] text-[#CBD5E1]">
              <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>Emerald Heights MahaRERA: <strong>PM1180002502952</strong></span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-[#64748B] gap-4">
          <p>
            &copy; {new Date().getFullYear()} HUM Developers Pvt. Ltd. All rights reserved. Redesigned with Agency Microsite Engine.
          </p>
          <div className="flex gap-6">
            {footerNavItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#94A3B8] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
