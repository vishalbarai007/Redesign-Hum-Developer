"use client";

import React, { useState } from "react";
import { LuxuryNavbar } from "@/components/real-estate/LuxuryNavbar";
import { SobhaHeroParallax } from "@/components/real-estate/SobhaHeroParallax";
import { Sobha3ImageParallax } from "@/components/real-estate/Sobha3ImageParallax";
import { AzimutePinnedProjects } from "@/components/real-estate/AzimutePinnedProjects";
import { OurStorySection } from "@/components/real-estate/OurStorySection";
import { AzimuteResidencesScrubber } from "@/components/real-estate/AzimuteResidencesScrubber";
import { DayNightExperienceSlider } from "@/components/real-estate/DayNightExperienceSlider";
import { AmenitiesMomentumScrub } from "@/components/real-estate/AmenitiesMomentumScrub";
import { MinimalTransitRadar } from "@/components/real-estate/MinimalTransitRadar";
import { HumFaqAccordion } from "@/components/real-estate/HumFaqAccordion";
import { MinimalVIPConciergeDesk } from "@/components/real-estate/MinimalVIPConciergeDesk";
import { Footer } from "@/components/reusable/Footer";
import { BookingModal } from "@/components/real-estate/BookingModal";
import { BrochureModal } from "@/components/real-estate/BrochureModal";
import { BrandFilmModal } from "@/components/real-estate/BrandFilmModal";
import { FloatingBookingFab } from "@/components/real-estate/FloatingBookingFab";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isBrandFilmOpen, setIsBrandFilmOpen] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<string | undefined>(undefined);

  const handleOpenBooking = (projectOrUnit?: string) => {
    setActiveModalProject(projectOrUnit);
    setIsBookingOpen(true);
  };

  const handleOpenBrochure = (projectOrUnit?: string) => {
    setActiveModalProject(projectOrUnit);
    setIsBrochureOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-[#265CA0] selection:text-white">
      {/* 1. Pristine Brand Navbar */}
      <LuxuryNavbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        <SobhaHeroParallax
          onOpenBooking={handleOpenBooking}
          onOpenBrochure={handleOpenBrochure}
          onOpenBrandFilm={() => setIsBrandFilmOpen(true)}
        />

        <OurStorySection
          onOpenBooking={handleOpenBooking}
          onOpenBrochure={handleOpenBrochure}
        />


        <Sobha3ImageParallax onOpenBooking={() => handleOpenBooking()} />

        <AzimutePinnedProjects
          onOpenBooking={handleOpenBooking}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* 4. Our Story — Elevating the Everyday */}

        {/* 5. Azimute-Style Curated Residences & Interactive Blueprint Explorer */}
        <AzimuteResidencesScrubber onOpenBooking={handleOpenBooking} />

        {/* 6. Day vs. Twilight Living Experience Perspective Switcher */}
        <DayNightExperienceSlider onOpenBooking={handleOpenBooking} />

        {/* 7. World-Class Amenities Momentum Carousel */}
        <AmenitiesMomentumScrub />

        {/* 8. Strategic Western Suburban Mumbai Transit Radar */}
        <MinimalTransitRadar />

        {/* 9. Minimalist Transparency FAQs Accordion */}
        <HumFaqAccordion />

        {/* 10. Direct Developer VIP Consultation Desk */}
        <MinimalVIPConciergeDesk onOpenBrochure={() => handleOpenBrochure()} />
      </main>

      {/* 11. Luxury White Footer with MahaRERA Disclosures */}
      <Footer />

      {/* Interactive Booking & Appointment Drawer Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultProject={activeModalProject}
      />

      {/* Instant E-Brochure Download Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        defaultProject={activeModalProject}
      />

      {/* Cinematic Brand Film Player Modal */}
      <BrandFilmModal
        isOpen={isBrandFilmOpen}
        onClose={() => setIsBrandFilmOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
        onOpenBrochure={() => handleOpenBrochure()}
      />

      {/* Persistent Floating Viewing Scheduler FAB */}
      {/* <FloatingBookingFab onOpenBooking={() => handleOpenBooking()} /> */}
    </div>
  );
}
