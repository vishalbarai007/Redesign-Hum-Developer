"use client";

import React, { useState } from "react";
import { LuxuryNavbar } from "@/components/real-estate/LuxuryNavbar";
import { HeroParallax } from "@/components/real-estate/HeroParallax";
import { ImageGallery } from "@/components/real-estate/ImageGallery";
import { AmenityScroller } from "@/components/real-estate/AmenityScroller";
import { AboutHumDeveloper } from "@/components/real-estate/AboutHumDeveloper";
import { FloorPlanScrubber } from "@/components/real-estate/FloorPlanScrubber";
import { LocationRadar } from "@/components/real-estate/LocationRadar";
import { Contact } from "@/components/real-estate/Contact";
import { Footer } from "@/components/reusable/Footer";
import { BookingModal } from "@/components/real-estate/BookingModal";
import { BrochureModal } from "@/components/real-estate/BrochureModal";
import { BrandFilmModal } from "@/components/real-estate/BrandFilmModal";
import { About } from "@/components/real-estate/About";

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
      {/* Final Navbar  */}
      <LuxuryNavbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Final Hero section - Will contain short video of Hum Emerald Project like 1 BHK, 2BHK, 3BHK internal rooms video  */}
        <HeroParallax
          onOpenBooking={handleOpenBooking}
          onOpenBrochure={handleOpenBrochure}
          onOpenBrandFilm={() => setIsBrandFilmOpen(true)}
        />

        {/* Final About Hum Emerald heights */}
        <About />

        {/* Final About Hum Developers  */}
        <AboutHumDeveloper
          onOpenBooking={handleOpenBooking}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* Final Image Gallery Section  */}
        <ImageGallery onOpenBooking={() => handleOpenBooking()} />

        {/* Final Amenities Section  */}
        <AmenityScroller
          onOpenBooking={handleOpenBooking}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* Final Floor Plans Section */}
        <FloorPlanScrubber onOpenBooking={handleOpenBooking} />

        {/* Final Location Section  */}
        <LocationRadar onOpenBooking={handleOpenBooking} />

        {/* Final Contact Section */}
        <Contact onOpenBooking={handleOpenBooking} />

      </main>

      {/* Final Footer */}
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
    </div>
  );
}
