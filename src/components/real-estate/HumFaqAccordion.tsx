"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/faqs";

export function HumFaqAccordion() {
  return (
    <section id="faqs" className="py-20 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#265CA0]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#265CA0] font-bold">
              TRANSPARENCY &amp; ADVISORY
            </span>
            <span className="w-6 h-[2px] bg-[#265CA0]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
            Key details about our MahaRERA compliance, home loan tie-ups, and handover procedures.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3.5">
          {faqsData.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="bg-white border border-slate-200 rounded-lg px-6 py-1.5 transition-all data-[state=open]:border-[#265CA0] shadow-sm data-[state=open]:shadow-md"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full py-4 flex items-center justify-between text-left group">
                  <span className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#265CA0] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#265CA0] transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
