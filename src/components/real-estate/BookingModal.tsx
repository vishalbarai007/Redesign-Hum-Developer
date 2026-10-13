"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Calendar, ShieldCheck, CheckCircle2, Loader2, Phone, Mail, User, Building2 } from "lucide-react";
import { humProjectsData } from "@/data/projects";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export function BookingModal({ isOpen, onClose, defaultProject }: BookingModalProps) {
  const [selectedProject, setSelectedProject] = useState(defaultProject || humProjectsData[0].name);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("11:00 AM - 01:00 PM");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send submission
      await new Promise((r) => setTimeout(r, 900));
      setIsSuccess(true);
    } catch {
      // fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleReset()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-lg bg-[#0F0F11] border border-[#27272A] rounded-sm p-6 sm:p-8 z-50 shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-start pb-4 border-b border-[#27272A] mb-6">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold mb-1">
                <ShieldCheck className="w-3 h-3 text-[#C5A880]" />
                Direct Developer Appointment Desk
              </div>
              <Dialog.Title className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Schedule Private Site Visit
              </Dialog.Title>
              <Dialog.Description className="font-sans text-xs text-[#94A3B8] mt-1">
                Experience the sample residences and masterplan with a dedicated senior property relationship manager.
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                onClick={handleReset}
                className="p-2 text-[#94A3B8] hover:text-white hover:bg-[#1A1A22] rounded-sm transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {isSuccess ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 bg-[#141418] border border-[#C5A880] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C5A880]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">Viewing Request Confirmed</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md mx-auto mb-6">
                Thank you, <span className="text-white font-medium">{fullName}</span>. Our senior site manager for <span className="text-[#C5A880]">{selectedProject}</span> will connect with you via <span className="text-white">{phone}</span> to confirm your VIP tour.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="goldenFilledBtn text-xs py-2.5 px-6"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                  Select Project
                </label>
                <div className="relative">
                  <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full bg-[#141418] border border-[#27272A] text-white text-xs px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                    required
                  >
                    {humProjectsData.map((p) => (
                      <option key={p.id} value={p.name} className="bg-[#0F0F11] text-white">
                        {p.name} ({p.location})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-[#141418] border border-[#27272A] text-white text-xs px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#141418] border border-[#27272A] text-white text-xs px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  >
                    <option value="10:00 AM - 12:00 PM">Morning (10 AM - 12 PM)</option>
                    <option value="12:00 PM - 02:00 PM">Afternoon (12 PM - 2 PM)</option>
                    <option value="02:00 PM - 04:00 PM">Afternoon (2 PM - 4 PM)</option>
                    <option value="04:00 PM - 06:30 PM">Evening (4 PM - 6:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Patel"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full bg-[#141418] border border-[#27272A] text-white text-xs pl-9 pr-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                  <User className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="+91 98200 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-[#141418] border border-[#27272A] text-white text-xs pl-9 pr-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                    <Phone className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-3.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-[#141418] border border-[#27272A] text-white text-xs pl-9 pr-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                    <Mail className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="goldenFilledBtn w-full text-xs py-3 justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Securing Site Appointment...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 mr-1.5" />
                      Confirm Private Site Visit
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[10px] text-[#94A3B8] pt-1">
                Zero spam policy &bull; Your inquiry is guarded under MahaRERA privacy guidelines.
              </div>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
