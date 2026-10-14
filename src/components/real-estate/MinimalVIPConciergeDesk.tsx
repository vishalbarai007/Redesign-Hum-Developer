"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Calendar,
  Send,
  MessageSquare,
  Sparkles,
  Download
} from "lucide-react";
import { toast } from "sonner";
import { submitContactForm } from "@/app/actions/submitContactForm";

interface MinimalVIPConciergeDeskProps {
  onOpenBrochure?: () => void;
}

export function MinimalVIPConciergeDesk({ onOpenBrochure }: MinimalVIPConciergeDeskProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    project: "HUM Emerald Heights (Kandivali W)"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      toast.error("Please enter your name and phone number");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitContactForm({
        fullName: formData.fullName,
        email: `${formData.phone.replace(/[^0-9]/g, "")}@hum-enquiry.com`,
        phone: formData.phone,
        message: `Direct site visit request for ${formData.project}`
      });

      if (res.success) {
        toast.success("Site Visit Booked!", {
          description: "Our senior sales consultant will contact you within 15 minutes."
        });
        setFormData({
          fullName: "",
          phone: "",
          project: "HUM Emerald Heights (Kandivali W)"
        });
      } else {
        toast.error("Unable to submit. Please call +91 99200 61100 directly.");
      }
    } catch {
      toast.error("Submission error. Please call +91 99200 61100 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 sm:p-14 shadow-xl">
          {/* Left Column: Direct Developer Credentials & RERA Seal */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#265CA0] font-bold">
                06 / PRIVATE CONSULTATION
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase leading-[1.1]">
              Connect Directly With The Developer
            </h2>

            <p className="text-sm text-slate-600 font-normal max-w-lg">
              Receive verified floor plans, transparent price sheets, and prioritize your preferred tier at our direct Kandivali & Borivali West site offices.
            </p>

            {/* Direct Contact Pills */}
            <div className="space-y-3 pt-2">
              <a
                href="tel:+919920061100"
                className="flex items-center gap-3 text-slate-800 hover:text-[#265CA0] transition-colors font-bold text-sm"
              >
                <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#265CA0] shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 99200 61100</span>
              </a>

              <a
                href="mailto:info@humdevelopers.com"
                className="flex items-center gap-3 text-slate-800 hover:text-[#265CA0] transition-colors font-medium text-sm"
              >
                <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#265CA0] shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@humdevelopers.com</span>
              </a>

              <div className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#265CA0] shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Kandivali West & Borivali West, Mumbai 400067</span>
              </div>
            </div>

            {/* MahaRERA Badge with Official QR Code Preview */}
            <div className="pt-4 flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm max-w-md">
              <div className="relative w-16 h-16 shrink-0 rounded overflow-hidden border border-slate-200">
                <Image
                  src="https://cdn.sanity.io/images/3wmbb6cw/production/d8df8e640b64e1186a582da9d185ef4f3104b025-256x256.png"
                  alt="MahaRERA QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-[#265CA0]" />
                  <span>MahaRERA Registered</span>
                </div>
                <div className="text-[11px] text-slate-500 font-semibold truncate mt-0.5">
                  PM1180002502952 (Emerald Heights)
                </div>
                <div className="text-[10px] text-[#265CA0] font-bold mt-0.5">
                  maharera.mahaonline.gov.in
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean 3-Field Booking Desk Form (WordPress Style) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-lg">
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-wider text-[#265CA0] font-bold block">
                PRIORITY ACCESS
              </span>
              <h3 className="font-heading text-2xl font-black text-slate-900 uppercase">
                Schedule A Site Visit
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-slate-600 font-bold block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Mehta"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#265CA0] focus:ring-1 focus:ring-[#265CA0] transition-all"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-slate-600 font-bold block mb-1.5">
                  Phone Number (+91)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98200 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#265CA0] focus:ring-1 focus:ring-[#265CA0] transition-all"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-slate-600 font-bold block mb-1.5">
                  Project of Interest
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#265CA0] focus:ring-1 focus:ring-[#265CA0] transition-all"
                >
                  <option value="HUM Emerald Heights (Kandivali W)">
                    HUM Emerald Heights — Kandivali (West)
                  </option>
                  <option value="HUM Solaris (Borivali W)">
                    HUM Solaris — Borivali (West)
                  </option>
                  <option value="HUM Durga (Kandivali W)">
                    HUM Durga — Kandivali (West)
                  </option>
                  <option value="HUM GS Heights (Kandivali W)">
                    HUM GS Heights — Kandivali (West)
                  </option>
                  <option value="HUM Gagansagar (Borivali W)">
                    HUM Gagansagar — Borivali (West)
                  </option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="brandFilledBtn flex-1 py-4 text-xs font-bold shadow-md"
                >
                  <Calendar className="w-4 h-4 mr-1.5" />
                  {isSubmitting ? "Booking..." : "Confirm Site Visit"}
                </button>

                <a
                  href={`https://wa.me/919920061100?text=${encodeURIComponent(
                    `Hello HUM Developers, I would like to schedule a site visit for ${formData.project}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
