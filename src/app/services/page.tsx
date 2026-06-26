import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/utils";
import { ArrowRight, Heart, Home, Shield, Star, Infinity } from "lucide-react";

export const metadata: Metadata = {
  title: "Life Insurance Services | CK Financial",
  description:
    "CK Financial offers final expense, mortgage protection, term life, whole life, and universal life insurance across 12 states. Get a free consultation with an independent broker.",
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, Home, Shield, Star, Infinity,
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnScroll>
            <span className="section-label text-gold">Our Services</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mt-2 mb-4">
              Coverage for Every Chapter of Life
            </h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto">
              As an independent broker, I compare options across multiple top-rated carriers to find the right coverage for your specific situation — at no extra cost to you.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="space-y-8">
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon];
              const isEven = i % 2 === 0;
              return (
                <AnimateOnScroll key={service.id} delay={i * 50}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                        <Icon className={`w-7 h-7 ${service.accentColor}`} />
                      </div>
                      <h2 className="font-heading font-bold text-3xl text-navy mb-4">{service.title}</h2>
                      <p className="text-text-muted leading-relaxed mb-6 text-lg">{service.description}</p>
                      <Link href={service.slug} className="btn-primary inline-flex">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className={`${isEven ? "" : "lg:order-1"} bg-surface rounded-3xl p-8 border border-gray-100`}>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {service.id === "final-expense" && "Final expense insurance provides a small but meaningful whole life policy — typically $5,000–$35,000 — designed to cover funeral costs and outstanding debts so your family isn't left holding the bill."}
                        {service.id === "mortgage-protection" && "Mortgage protection insurance ties directly to your home loan balance, ensuring your family can continue living in their home even if you're no longer around to make payments."}
                        {service.id === "term-life" && "Term life is the most affordable form of life insurance — providing large coverage amounts at low monthly premiums during the years your family needs it most."}
                        {service.id === "whole-life" && "Whole life insurance provides permanent protection that never expires, with a cash value component that grows tax-deferred and can be accessed during your lifetime."}
                        {service.id === "universal-life" && "Universal life combines permanent coverage with flexibility — adjustable premiums, adjustable death benefits, and cash value that may grow based on interest rates or market indices."}
                      </p>
                      <div className="mt-5 bg-white rounded-2xl p-5 shadow-soft">
                        <p className="text-xs text-text-muted mb-1">Best suited for</p>
                        <p className="font-heading font-semibold text-navy text-sm">
                          {service.id === "final-expense" && "Seniors, individuals on fixed income, those without other coverage"}
                          {service.id === "mortgage-protection" && "Homeowners, new buyers, single-income families"}
                          {service.id === "term-life" && "Young families, budget-conscious buyers, income earners with dependents"}
                          {service.id === "whole-life" && "Long-term planners, estate planning clients, business owners"}
                          {service.id === "universal-life" && "High earners, retirement planners, those wanting flexibility"}
                        </p>
                      </div>
                    </div>
                  </div>
                  {i < SERVICES.length - 1 && <hr className="border-gray-100 mt-8" />}
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Not Sure Which Policy Is Right for You?" subtitle="That's exactly what we're here for. A free consultation takes 15 minutes and answers all your questions — no pressure." />
    </>
  );
}
