"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Download,
  Calendar,
  ShieldCheck,
  MapPin,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Search,
  ArrowRight,
  Film,
  Building2,
  Maximize2
} from "lucide-react";

interface LuxuryPropertyHeroProps {
  onOpenBooking: () => void;
  onOpenBrochure: () => void;
  onOpenBrandFilm: () => void;
  onFilterChange?: (filter: string) => void;
}

const HERO_SCENES = [
  {
    id: "architecture",
    title: "Landmark Architecture",
    type: "video" as const,
    videoUrl: "https://assets.mixkit.co/videos/4861/4861-720.mp4",
    posterUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg",
    label: "01 • Architectural Grandeur"
  },
  {
    id: "skyline",
    title: "Mumbai Coastal Horizon",
    type: "video" as const,
    videoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Timelapse_at_Marine_Drive_Mumbai.webm",
    posterUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/cffe754409c8cee80dd0bafbc1acebf73a314fbd-1440x517.jpg",
    label: "02 • Mumbai Coastal Skyline"
  },
  {
    id: "penthouse",
    title: "Luxury Penthouse Living",
    type: "video" as const,
    videoUrl: "https://assets.mixkit.co/videos/5047/5047-720.mp4",
    posterUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/3389b12891977e718ac7bf619b35fad3e5732f28-5166x1892.png",
    label: "03 • Curated Living Spaces"
  },
  {
    id: "urban-vista",
    title: "Panoramic Sunset Views",
    type: "video" as const,
    videoUrl: "https://assets.mixkit.co/videos/4183/4183-720.mp4",
    posterUrl: "https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png",
    label: "04 • Panoramic Horizons"
  }
];

export function LuxuryPropertyHero({
  onOpenBooking,
  onOpenBrochure,
  onOpenBrandFilm,
  onFilterChange
}: LuxuryPropertyHeroProps) {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Property Finder Filter State
  const [searchLocation, setSearchLocation] = useState("All");
  const [searchTypology, setSearchTypology] = useState("All");
  const [searchPossession, setSearchPossession] = useState("All");

  const currentScene = HERO_SCENES[activeSceneIndex];

  useEffect(() => {
    if (videoRef.current && currentScene.type === "video") {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [activeSceneIndex, currentScene.type]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!sectionRef.current) return;
    if (!document.fullscreenElement) {
      sectionRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFilterChange) {
      onFilterChange(searchLocation === "All" ? "All" : searchLocation);
    }
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="relative min-h-screen flex flex-col justify-between pt-10 pb-8 overflow-hidden bg-white"
    >
      {/* =========================================================================
          FULLSCREEN VIDEO BACKGROUND WITH CRISP CINEMATIC OVERLAYS
         ========================================================================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-900">
        <video
          ref={videoRef}
          key={currentScene.videoUrl}
          src={currentScene.videoUrl}
          poster={currentScene.posterUrl}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000"
        />

        {/* Crisp Luxury Gradient Protection for Maximum Typography Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
      </div>

      {/* =========================================================================
          TOP CONTROLS & RERA TRUST BADGE
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* MahaRERA Trust Capsule */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-white/60 rounded-full shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#265CA0]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                MahaRERA: PM1180002502952 &bull; Registered
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/60 backdrop-blur-md border border-white/20 rounded-full text-[10px] uppercase tracking-wider text-slate-200">
              <MapPin className="w-3 h-3 text-[#3A75C4]" />
              Kandivali (W) &bull; Borivali (W)
            </div>
          </div>

          {/* Fullscreen Video & Audio Controls */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md border border-white/60 rounded-full text-xs text-slate-800 shadow-sm font-medium">
            <button
              type="button"
              onClick={togglePlay}
              className="p-1 hover:text-[#265CA0] transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
              title={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#265CA0]" /> : <Play className="w-3.5 h-3.5 fill-current text-[#265CA0]" />}
            </button>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={toggleMute}
              className="p-1 hover:text-[#265CA0] transition-colors"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-500" /> : <Volume2 className="w-3.5 h-3.5 text-[#265CA0]" />}
            </button>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1 hover:text-[#265CA0] transition-colors"
              title="Fullscreen Mode"
            >
              <Maximize2 className="w-3.5 h-3.5 text-slate-700" />
            </button>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={onOpenBrandFilm}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#265CA0] hover:text-[#183C68] transition-colors font-bold pl-1"
            >
              <Film className="w-3 h-3" />
              Brand Film
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO HEADLINE & VIDEO SCENE SWITCHER (Outfit Logo Font)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 w-full my-auto py-8">
        {/* Interactive Video Scene Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-5 scrollbar-none">
          {HERO_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => setActiveSceneIndex(idx)}
              className={`text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 shrink-0 flex items-center gap-2 ${
                activeSceneIndex === idx
                  ? "bg-[#265CA0] text-white font-bold shadow-lg shadow-[#265CA0]/30"
                  : "bg-white/80 text-slate-800 hover:bg-white backdrop-blur-sm border border-white/40 font-semibold"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeSceneIndex === idx ? "bg-white" : "bg-[#265CA0]"}`} />
              {scene.label}
            </button>
          ))}
        </div>

        {/* Punchy Typography in Outfit Logo Font (Reduced Text Content) */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-7 h-[2px] bg-[#3A75C4]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white font-bold drop-shadow">
              HUM DEVELOPERS &bull; MUMBAI
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-4 drop-shadow-md">
            BUILDING DREAMS. <br />
            <span className="text-[#60A5FA]">SHAPING LEGACIES.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-2xl leading-relaxed mb-7 drop-shadow">
            Curated 1, 2 &amp; 3 BHK luxury residences across Mumbai’s prime western corridor.
            Zero space wastage, panoramic horizon views, and rooftop lifestyle recreation.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <button
              type="button"
              onClick={onOpenBooking}
              className="brandFilledBtn text-xs py-3.5 px-7 shadow-xl shadow-[#265CA0]/40"
            >
              <Calendar className="w-4 h-4 mr-1.5" />
              Schedule Private Viewing
            </button>

            <button
              type="button"
              onClick={onOpenBrochure}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#265CA0] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-lg"
            >
              <Download className="w-4 h-4 text-[#265CA0]" />
              Download Master Brochure
            </button>

            <button
              type="button"
              onClick={onOpenBrandFilm}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-900/70 border border-white/30 text-white hover:bg-white hover:text-[#265CA0] transition-colors rounded-sm text-xs uppercase tracking-wider font-semibold backdrop-blur-md"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#60A5FA]" />
              Experience Film
            </button>
          </div>
        </div>

        {/* =========================================================================
            WHITE GLASS PROPERTY FINDER SEARCH BAR
           ========================================================================= */}
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200 p-4 sm:p-5 rounded-lg shadow-2xl max-w-5xl">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Location Select */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-600 font-bold mb-1.5">
                Location
              </label>
              <select
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 text-slate-800 font-semibold text-xs px-3 py-2.5 rounded focus:outline-none focus:border-[#265CA0] transition-colors"
              >
                <option value="All">All Locations (Mumbai)</option>
                <option value="Kandivali">Kandivali (West)</option>
                <option value="Borivali">Borivali (West)</option>
              </select>
            </div>

            {/* Typology Select */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-600 font-bold mb-1.5">
                Configuration
              </label>
              <select
                value={searchTypology}
                onChange={(e) => setSearchTypology(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 text-slate-800 font-semibold text-xs px-3 py-2.5 rounded focus:outline-none focus:border-[#265CA0] transition-colors"
              >
                <option value="All">All Typologies</option>
                <option value="1BHK">1 BHK Smart Luxe</option>
                <option value="2BHK">2 &amp; 2.5 BHK Residences</option>
                <option value="3BHK">3 BHK &amp; Jodi Apartments</option>
              </select>
            </div>

            {/* Possession Timeline */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-600 font-bold mb-1.5">
                Possession Status
              </label>
              <select
                value={searchPossession}
                onChange={(e) => setSearchPossession(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-300 text-slate-800 font-semibold text-xs px-3 py-2.5 rounded focus:outline-none focus:border-[#265CA0] transition-colors"
              >
                <option value="All">All Timelines</option>
                <option value="Dec 2026">Dec 2026</option>
                <option value="Mid 2027">Mid 2027</option>
                <option value="Ongoing">Under Construction</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full brandFilledBtn text-xs py-3 px-4 justify-center"
              >
                <Search className="w-3.5 h-3.5 mr-1.5" />
                Explore 5 Residences
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* =========================================================================
          KEY CREDIBILITY STAT TICKER (White Frosted Cards)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-3.5 rounded-lg flex items-center gap-3 shadow-sm">
            <span className="font-heading text-2xl sm:text-3xl text-[#265CA0] font-black leading-none">20+</span>
            <div>
              <div className="text-xs text-slate-900 font-bold">Years of Excellence</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Since 2004 in Mumbai</div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-3.5 rounded-lg flex items-center gap-3 shadow-sm">
            <span className="font-heading text-2xl sm:text-3xl text-slate-900 font-black leading-none">10K+</span>
            <div>
              <div className="text-xs text-slate-900 font-bold">Delighted Families</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Kandivali &amp; Borivali</div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-3.5 rounded-lg flex items-center gap-3 shadow-sm">
            <span className="font-heading text-2xl sm:text-3xl text-[#265CA0] font-black leading-none">5M+</span>
            <div>
              <div className="text-xs text-slate-900 font-bold">Sq.Ft. Realized</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Delivered Sites</div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-3.5 rounded-lg flex items-center gap-3 shadow-sm">
            <span className="font-heading text-2xl sm:text-3xl text-slate-900 font-black leading-none">100%</span>
            <div>
              <div className="text-xs text-slate-900 font-bold">MahaRERA Verified</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">On-Time Execution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}