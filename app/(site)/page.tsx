"use client";

import React, { useState } from "react";
import { LuxuryNavbar } from "@/components/real-estate/LuxuryNavbar";
import { LuxuryPropertyHero } from "@/components/real-estate/LuxuryPropertyHero";
import { EditorialPhilosophy } from "@/components/real-estate/EditorialPhilosophy";
import { ProjectsShowcase } from "@/components/real-estate/ProjectsShowcase";
import { UnitInventory } from "@/components/real-estate/UnitInventory";
import { AmenitiesShowcase } from "@/components/real-estate/AmenitiesShowcase";
import { ConnectivitySection } from "@/components/real-estate/ConnectivitySection";
import { ServicesPillars } from "@/components/real-estate/ServicesPillars";
import { HumTestimonials } from "@/components/real-estate/HumTestimonials";
import { HumFaqAccordion } from "@/components/real-estate/HumFaqAccordion";
import { HumContactSection } from "@/components/real-estate/HumContactSection";
import { Footer } from "@/components/reusable/Footer";
import { BookingModal } from "@/components/real-estate/BookingModal";
import { BrochureModal } from "@/components/real-estate/BrochureModal";
import { BrandFilmModal } from "@/components/real-estate/BrandFilmModal";
import { FloatingBookingFab } from "@/components/real-estate/FloatingBookingFab";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isBrandFilmOpen, setIsBrandFilmOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string>("All");
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
    <div className="flex flex-col min-h-screen bg-[#0A0A0C] text-[#F8FAFC]">
      {/* Top Navbar */}
      <LuxuryNavbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Lodha-Inspired Cinematic Video Hero with Property Search */}
        <LuxuryPropertyHero
          onOpenBooking={() => handleOpenBooking()}
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenBrandFilm={() => setIsBrandFilmOpen(true)}
          onFilterChange={(filter) => setProjectFilter(filter)}
        />

        {/* 20+ Years Legacy & Heritage Story */}
        <EditorialPhilosophy />

        {/* Interactive Landmark Projects Portfolio */}
        <ProjectsShowcase
          onOpenBooking={handleOpenBooking}
          onOpenBrochure={handleOpenBrochure}
          externalFilter={projectFilter}
        />

        {/* Residences & Zoomable Blueprint Lightbox Modal */}
        <UnitInventory onOpenBooking={handleOpenBooking} />

        {/* Curated World-Class Amenities Grid */}
        <AmenitiesShowcase />

        {/* Strategic Mumbai Connectivity & Travel Times */}
        <ConnectivitySection />

        {/* Development Capabilities & Redevelopment Pillars */}
        <ServicesPillars onOpenBooking={() => handleOpenBooking()} />

        {/* Homeowner Reflections & Verified Testimonials */}
        <HumTestimonials />

        {/* Frequently Addressed Queries (RERA, Loans, Handover) */}
        <HumFaqAccordion />

        {/* Direct Developer Contact & Site Visit Booking Desk */}
        <HumContactSection />
      </main>

      {/* Luxury Footer with MahaRERA disclosures */}
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

      {/* Cinematic Brand Film Player Modal (Lodha Experience) */}
      <BrandFilmModal
        isOpen={isBrandFilmOpen}
        onClose={() => setIsBrandFilmOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
        onOpenBrochure={() => handleOpenBrochure()}
      />

      {/* Persistent Floating Viewing Scheduler FAB */}
      <FloatingBookingFab onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
