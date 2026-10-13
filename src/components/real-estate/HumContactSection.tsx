"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, ShieldCheck, Clock, Building2 } from "lucide-react";
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
    <section id="contact" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#265CA0]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                CONNECT DIRECTLY
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Begin Your Journey with HUM
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8 font-normal">
              Whether you are searching for your dream residence in Kandivali or Borivali, society redevelopment, or property investments, our senior developer representatives are at your service.
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-[#F8FAFC] border border-slate-200 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EBF3FC] text-[#265CA0] rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Direct Concierge Line</span>
                  <a href="tel:+919920061100" className="font-heading text-lg font-bold text-slate-900 hover:text-[#265CA0] transition-colors">
                    +91 99200 61100
                  </a>
                  <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">Mon-Sun, 9:30 AM to 7:30 PM IST</span>
                </div>
              </div>

              <div className="p-5 bg-[#F8FAFC] border border-slate-200 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EBF3FC] text-[#265CA0] rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Official Communications</span>
                  <a href="mailto:info@humdevelopers.com" className="font-heading text-base font-bold text-slate-900 hover:text-[#265CA0] transition-colors">
                    info@humdevelopers.com
                  </a>
                  <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">Verified Developer Response within 4 Hours</span>
                </div>
              </div>

              <div className="p-5 bg-[#F8FAFC] border border-slate-200 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EBF3FC] text-[#265CA0] rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Developer Head Office</span>
                  <p className="text-xs font-semibold text-slate-900 mt-0.5 leading-snug">
                    Kandivali West &amp; Borivali West Experience Galleries, Mumbai, MH - 400067
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-xl p-7 sm:p-9 shadow-md">
            {isSuccess ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 bg-[#EBF3FC] text-[#265CA0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                  Inquiry Successfully Registered
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. Your inquiry for <strong className="text-[#265CA0]">{selectedProject}</strong> has been assigned to a senior relationship manager.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="brandFilledBtn text-xs py-2.5 px-6"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#265CA0] font-bold block mb-1">
                    DIRECT SITE VISIT &amp; INQUIRY DESK
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-1">
                    Book an Appointment
                  </h3>
                  <p className="text-xs text-slate-600 mb-4">
                    Our sales advisors will arrange private transport or site viewing at your preferred time.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1">
                      Project of Interest *
                    </label>
                    <select
                      value={selectedProject}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      className="w-full bg-white border border-slate-300 text-slate-900 text-xs px-3.5 py-2.5 rounded focus:outline-none focus:border-[#265CA0] font-medium"
                    >
                      {humProjectsData.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.location.split(",")[0]})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1">
                      Nature of Inquiry
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-white border border-slate-300 text-slate-900 text-xs px-3.5 py-2.5 rounded focus:outline-none focus:border-[#265CA0] font-medium"
                    >
                      <option value="Site Visit Booking">Site Visit &amp; Sample Flat Tour</option>
                      <option value="Pricing & Cost Sheet">Price Guidance &amp; Payment Plan</option>
                      <option value="Society Redevelopment">Society Redevelopment Proposal</option>
                      <option value="NRI Advisory">Global NRI Property Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Shah"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-slate-300 text-slate-900 text-xs px-3.5 py-2.5 rounded focus:outline-none focus:border-[#265CA0]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-300 text-slate-900 text-xs px-3.5 py-2.5 rounded focus:outline-none focus:border-[#265CA0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-slate-300 text-slate-900 text-xs px-3.5 py-2.5 rounded focus:outline-none focus:border-[#265CA0]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1">
                    Special Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your preferred floor, budget range, or configuration..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-slate-300 text-slate-900 text-xs px-3.5 py-2.5 rounded focus:outline-none focus:border-[#265CA0]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full brandFilledBtn py-3.5 text-xs justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Registering Your Details...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Private Site Visit Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
