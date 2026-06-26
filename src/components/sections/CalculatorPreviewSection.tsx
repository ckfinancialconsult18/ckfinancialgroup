"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function CalculatorPreviewSection() {
  const [income, setIncome] = useState(60000);
  const [years, setYears] = useState(20);

  const recommended = income * years;
  const monthly = Math.round((recommended * 0.0008) / 12);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <section className="py-24 bg-surface">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll animation="slide-right">
            <span className="section-label">Quick Estimate</span>
            <h2 className="section-title mb-5">
              How Much Coverage Do You Need?
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              A simple rule of thumb: most families need 10–15× their annual income in life insurance coverage. Use this quick calculator to get a ballpark estimate — then let's talk about your specific situation.
            </p>

            {/* Sliders */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-heading font-medium text-navy text-sm">Annual Income</label>
                  <span className="font-heading font-bold text-gold text-lg">{formatCurrency(income)}</span>
                </div>
                <input
                  type="range"
                  min={20000}
                  max={300000}
                  step={5000}
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between text-xs text-text-muted mt-1">
                  <span>$20,000</span>
                  <span>$300,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-heading font-medium text-navy text-sm">Years of Coverage Needed</label>
                  <span className="font-heading font-bold text-gold text-lg">{years} years</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={5}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between text-xs text-text-muted mt-1">
                  <span>5 years</span>
                  <span>30 years</span>
                </div>
              </div>
            </div>

            <Link href="/tools#life-calculator" className="btn-primary mt-8 inline-flex">
              <Calculator className="w-4 h-4" />
              Get a Full Estimate
            </Link>
          </AnimateOnScroll>

          {/* Result Card */}
          <AnimateOnScroll>
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-10 text-white shadow-hero">
              <div className="mb-8">
                <p className="text-white/60 text-sm mb-2">Estimated Coverage Needed</p>
                <p className="font-heading font-bold text-5xl text-white">
                  {formatCurrency(recommended)}
                </p>
                <p className="text-gold text-sm mt-2">
                  Based on {income === 60000 ? "your" : formatCurrency(income) + " income ×"} {years}-year income replacement
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                  <span className="text-white/70 text-sm">Estimated monthly premium</span>
                  <span className="font-heading font-semibold text-gold">~{formatCurrency(monthly)}/mo</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                  <span className="text-white/70 text-sm">Recommended type</span>
                  <span className="font-heading font-semibold text-white">
                    {years <= 10 ? "10-Year Term" : years <= 20 ? "20-Year Term" : "Whole Life"}
                  </span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                  <span className="text-white/70 text-sm">Application process</span>
                  <span className="font-heading font-semibold text-white">As fast as 24hrs</span>
                </div>
              </div>

              <p className="text-white/50 text-xs leading-relaxed mb-6">
                * This is a rough estimate only. Actual premiums depend on your age, health, and the carrier. A personalized quote is free and takes minutes.
              </p>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-gold text-navy font-heading font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-gold-400 transition-colors"
              >
                Get My Real Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
