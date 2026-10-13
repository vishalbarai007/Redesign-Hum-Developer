"use client";

import React from "react";
import { Calendar, Phone } from "lucide-react";

interface FloatingBookingFabProps {
  onOpenBooking: () => void;
}

export function FloatingBookingFab({ onOpenBooking }: FloatingBookingFabProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Direct Phone Quick Button */}
      <a
        href="tel:+919920061100"
        className="hidden sm:inline-flex items-center justify-center w-11 h-11 bg-[#141418] border border-[#27272A] rounded-full text-[#C5A880] hover:text-white hover:border-[#C5A880] transition-colors shadow-2xl"
        aria-label="Call Concierge"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Main VIP Viewing FAB Button */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C5A880] text-[#0A0A0C] font-semibold text-xs uppercase tracking-wider hover:bg-[#D4AF37] transition-all duration-200 shadow-2xl hover:scale-102 active:scale-98"
      >
        <Calendar className="w-4 h-4 text-[#0A0A0C]" />
        <span>Book Private Viewing</span>
      </button>
    </div>
  );
}
