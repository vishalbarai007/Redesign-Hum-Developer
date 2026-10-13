"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/faqs";

export function HumFaqAccordion() {
  return (
    <section id="faqs" className="py-24 bg-[#0F0F11] border-t border-[#27272A] relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
              Clarifications & Advisory
            </span>
            <span className="w-6 h-[1px] bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
            Frequently Addressed Queries
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mt-2 font-light">
            Everything you need to know about our MahaRERA compliance, financing tie-ups, and handover procedures.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqsData.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="bg-[#141418] border border-[#27272A] rounded-xs px-6 py-2 transition-colors data-[state=open]:border-[#C5A880]/50"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full py-4 flex items-center justify-between text-left group">
                  <span className="font-serif text-lg sm:text-xl text-white group-hover:text-[#C5A880] transition-colors pr-4 font-normal">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#C5A880] transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="pb-5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light border-t border-[#27272A] pt-4 animate-in fade-in duration-200">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
