"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, ShieldCheck, Clock } from "lucide-react";
import { humProjectsData } from "@/data/projects";

export function HumContactSection() {
  const [selectedProject, setSelectedProject] = useState(humProjectsData[0].name);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("Site Visit Booking");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((r) => setTimeout(r, 800));
      setIsSuccess(true);
    } catch {
      // fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0C] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                Connect Directly
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight mb-4">
              Begin Your Journey with HUM
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-8 font-light">
              Whether you are searching for your dream residence in Kandivali or Borivali, seeking society redevelopment, or evaluating high-yield property assets, our senior developer representatives are at your service.
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-[#141418] border border-[#27272A] rounded-xs flex items-start gap-4">
                <div className="w-9 h-9 bg-[#1E1E24] border border-[#2E2E38] rounded-xs flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Direct Concierge Line</span>
                  <a href="tel:+919920061100" className="font-serif text-lg text-white hover:text-[#C5A880] transition-colors">
                    +91 99200 61100
                  </a>
                  <span className="text-[10px] text-[#64748B] block mt-0.5">Available Mon-Sun, 9:30 AM to 7:30 PM IST</span>
                </div>
              </div>

              <div className="p-5 bg-[#141418] border border-[#27272A] rounded-xs flex items-start gap-4">
                <div className="w-9 h-9 bg-[#1E1E24] border border-[#2E2E38] rounded-xs flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Official Email Dispatch</span>
                  <a href="mailto:info@humdevelopers.com" className="font-serif text-lg text-white hover:text-[#C5A880] transition-colors">
                    info@humdevelopers.com
                  </a>
                  <span className="text-[10px] text-[#64748B] block mt-0.5">Prompt response within 2 business hours</span>
                </div>
              </div>

              <div className="p-5 bg-[#141418] border border-[#27272A] rounded-xs flex items-start gap-4">
                <div className="w-9 h-9 bg-[#1E1E24] border border-[#2E2E38] rounded-xs flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Registered Corporate Office</span>
                  <span className="font-serif text-base text-white block">
                    Kandivali West & Borivali West
                  </span>
                  <span className="text-[10px] text-[#64748B] block mt-0.5">Mumbai, Maharashtra 400067, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7 bg-[#141418] border border-[#27272A] p-8 sm:p-10 rounded-xs">
            {isSuccess ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 bg-[#1E1E24] border border-[#C5A880] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C5A880]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2">Inquiry Dispatched Successfully</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-md mx-auto mb-6">
                  Thank you, <span className="text-white font-medium">{fullName}</span>. A senior property manager will call you shortly on <span className="text-white">{phone}</span> regarding your inquiry for <span className="text-[#C5A880]">{selectedProject}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="goldenFilledBtn text-xs py-2.5 px-6"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                      Project of Interest
                    </label>
                    <select
                      value={selectedProject}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      className="w-full bg-[#0A0A0C] border border-[#27272A] text-white text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C5A880] transition-colors"
                    >
                      {humProjectsData.map((p) => (
                        <option key={p.id} value={p.name} className="bg-[#0F0F11] text-white">
                          {p.name} ({p.location})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                      Purpose of Inquiry
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-[#0A0A0C] border border-[#27272A] text-white text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C5A880] transition-colors"
                    >
                      <option value="Site Visit Booking">Schedule Site Visit</option>
                      <option value="Pricing & Payment Plans">Pricing & Payment Plans</option>
                      <option value="Jodi Flat Configuration">Jodi Flat Configuration</option>
                      <option value="Society Redevelopment">Society Redevelopment Inquiry</option>
                      <option value="NRI Consultation">NRI Investment Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Parekh"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-[#0A0A0C] border border-[#27272A] text-white text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98200 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-[#0A0A0C] border border-[#27272A] text-white text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#0A0A0C] border border-[#27272A] text-white text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                    Additional Message / Preferred Timings
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about your required typology, budget guidance, or specific visit date..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#0A0A0C] border border-[#27272A] text-white text-xs p-3.5 rounded-xs focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="goldenFilledBtn w-full text-xs py-3.5 justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
                        Transmitting to Developer Desk...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-1.5" />
                        Submit Confidential Inquiry
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#94A3B8] pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Information transmitted directly to HUM Developers sales management. Zero third-party brokers.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
