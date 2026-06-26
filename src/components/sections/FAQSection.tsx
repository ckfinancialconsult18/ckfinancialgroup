"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  limit?: number;
}

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Have questions? We have answers. If you don't see yours here, just reach out.",
  limit,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayed = limit ? items.slice(0, limit) : items;

  return (
    <section className="py-24 bg-surface">
      <div className="container-narrow">
        <AnimateOnScroll className="text-center mb-14">
          <span className="section-label">FAQ</span>
          <h2 className="section-title mb-4">{title}</h2>
          <p className="section-subtitle mx-auto">{subtitle}</p>
        </AnimateOnScroll>

        <div className="space-y-3">
          {displayed.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 40}>
              <div
                className={cn(
                  "bg-white rounded-2xl border transition-all duration-200 overflow-hidden",
                  openIndex === i
                    ? "border-gold/30 shadow-gold"
                    : "border-gray-100 shadow-soft hover:border-gold/20"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-heading font-semibold text-navy text-base">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                      openIndex === i
                        ? "bg-gold text-navy"
                        : "bg-surface text-text-muted"
                    )}
                  >
                    {openIndex === i ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-text-secondary leading-relaxed text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
