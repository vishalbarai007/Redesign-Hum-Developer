"use client";

import React from "react";
import { Calendar, Phone, MessageCircle } from "lucide-react";

interface FloatingBookingFabProps {
  onOpenBooking: () => void;
}

export function FloatingBookingFab({ onOpenBooking }: FloatingBookingFabProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 drop-shadow-2xl">
      {/* WhatsApp Direct Concierge */}
      <a
        href="https://wa.me/919920061100?text=Hi%20HUM%20Developers,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20residences%20in%20Mumbai.%20Please%20share%20floor%20plans%20and%20pricing."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95"
        aria-label="Chat with Concierge on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>

      {/* Direct Phone Concierge */}
      <a
        href="tel:+919920061100"
        className="hidden sm:inline-flex items-center justify-center w-12 h-12 bg-white border border-slate-200 hover:border-[#265CA0] rounded-full text-[#265CA0] hover:bg-[#265CA0] hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95"
        aria-label="Call Concierge Desk"
        title="Call +91 99200 61100"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Main VIP Viewing FAB Button */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#265CA0] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#183C68] transition-all duration-200 shadow-xl shadow-[#265CA0]/30 hover:scale-102 active:scale-98"
      >
        <Calendar className="w-4 h-4 text-white" />
        <span>Book Private Viewing</span>
      </button>
    </div>
  );
}
