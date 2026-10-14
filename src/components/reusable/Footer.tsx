"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { mainNavItems, footerNavItems } from "@/data/navigation";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/humLogo.svg"
                alt="HUM Developers"
                width={150}
                height={50}
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed mb-6 font-normal">
              Building dreams, shaping futures, and creating legacies across Mumbai for over two decades. Dedicated to architectural excellence, transparency, and timely handover.
            </p>

            <div className="space-y-2.5 text-xs font-medium">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-[#265CA0] shrink-0" />
                <span>Kandivali West &amp; Borivali West, Mumbai, MH - 400067</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-3.5 h-3.5 text-[#265CA0] shrink-0" />
                <a href="tel:+919920061100" className="hover:text-[#265CA0] transition-colors font-bold text-slate-900">
                  +91 99200 61100
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-3.5 h-3.5 text-[#265CA0] shrink-0" />
                <a href="mailto:info@humdevelopers.com" className="hover:text-[#265CA0] transition-colors">
                  info@humdevelopers.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase font-bold text-[#265CA0] tracking-[0.2em] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
              <li>
                <a href="#overview" className="hover:text-[#265CA0] transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#265CA0] transition-colors">
                  Flagship Projects
                </a>
              </li>
              <li>
                <a href="#residences" className="hover:text-[#265CA0] transition-colors">
                  Residences &amp; Plans
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#265CA0] transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#265CA0] transition-colors">
                  Lifestyle Gallery
                </a>
              </li>
              <li>
                <a href="#connectivity" className="hover:text-[#265CA0] transition-colors">
                  Connectivity
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#265CA0] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#265CA0] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* MahaRERA & Compliance */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase font-bold text-[#265CA0] tracking-[0.2em] mb-4">
              MahaRERA Disclosures
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              HUM Emerald Heights &bull; Registration No: <strong className="text-slate-900">PM1180002502952</strong>. Details available on the official MahaRERA website (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#265CA0] underline font-semibold">maharera.mahaonline.gov.in</a>) under registered projects.
            </p>

            <div className="p-3.5 bg-white border border-slate-200 rounded-lg flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#265CA0] shrink-0" />
              <div className="text-[11px] leading-tight text-slate-700">
                <span className="font-bold text-slate-900 block">Verified Real Estate Developer</span>
                Full compliance with MahaRERA guidelines and municipal approvals.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright & Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <p>
              &copy; {new Date().getFullYear()} HUM Developers. All rights reserved.
            </p>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-3">
              {footerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#265CA0] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-slate-500 text-center sm:text-right max-w-md">
            Disclaimer: The imagery, 3D renderings, walkthroughs, and specifications shown are artistic impressions and indicative for representation purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
