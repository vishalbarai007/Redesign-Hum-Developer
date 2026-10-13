"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Download, ShieldCheck, CheckCircle2, Loader2, Phone, Mail, User } from "lucide-react";
import { humProjectsData } from "@/data/projects";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export function BrochureModal({ isOpen, onClose, defaultProject }: BrochureModalProps) {
  const [selectedProject, setSelectedProject] = useState(defaultProject || humProjectsData[0].name);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleReset()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-md bg-[#0F0F11] border border-[#27272A] rounded-sm p-6 sm:p-8 z-50 shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-start pb-4 border-b border-[#27272A] mb-6">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold mb-1">
                <ShieldCheck className="w-3 h-3 text-[#C5A880]" />
                Official E-Brochure Dispatch
              </div>
              <Dialog.Title className="font-serif text-2xl text-white font-normal">
                Download Project Brochure
              </Dialog.Title>
              <Dialog.Description className="font-sans text-xs text-[#94A3B8] mt-1">
                Instant delivery of comprehensive masterplan, floor plans, specifications, and pricing sheet.
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
            <div className="py-6 text-center">
              <div className="w-12 h-12 bg-[#141418] border border-[#C5A880] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C5A880]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl text-white mb-2">Brochure Dispatched</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm mx-auto mb-5">
                The high-resolution brochure for <span className="text-[#C5A880] font-medium">{selectedProject}</span> has been sent to <span className="text-white">{email}</span> and WhatsApp on <span className="text-white">{phone}</span>.
              </p>
              <a
                href="/floorplan.jpg"
                download="HUM-Developers-Brochure.jpg"
                className="goldenFilledBtn text-xs py-2 px-5 inline-flex"
              >
                <Download className="w-3.5 h-3.5 mr-1" />
                Download Direct Copy
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1 font-medium">
                  Select Project
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full bg-[#141418] border border-[#27272A] text-white text-xs px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                >
                  {humProjectsData.map((p) => (
                    <option key={p.id} value={p.name} className="bg-[#0F0F11] text-white">
                      {p.name} ({p.location})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1 font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full bg-[#141418] border border-[#27272A] text-white text-xs pl-9 pr-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                  <User className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1 font-medium">
                  Mobile Number (WhatsApp)
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="+91 99200 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-[#141418] border border-[#27272A] text-white text-xs pl-9 pr-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                  <Phone className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#CBD5E1] mb-1 font-medium">
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

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="goldenFilledBtn w-full text-xs py-2.5 justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
                      Generating Brochure Packet...
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 mr-1.5" />
                      Download Instant E-Brochure
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
