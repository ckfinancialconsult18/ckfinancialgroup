import Link from "next/link";
import { ArrowRight, Heart, Home, Shield, Star, Infinity } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SERVICES } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, Home, Shield, Star, Infinity,
};

const SERVICE_DETAILS = [
  {
    id: "final-expense",
    highlight: "No medical exam required for many plans",
    benefit: "Coverage from $5K–$35K",
  },
  {
    id: "mortgage-protection",
    highlight: "Tied directly to your mortgage balance",
    benefit: "Keeps your family in their home",
  },
  {
    id: "term-life",
    highlight: "10, 20, or 30-year terms available",
    benefit: "Most affordable coverage option",
  },
  {
    id: "whole-life",
    highlight: "Builds cash value over time",
    benefit: "Guaranteed lifelong protection",
  },
  {
    id: "universal-life",
    highlight: "Flexible premiums and death benefit",
    benefit: "Adjusts to life changes",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-wide">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title mb-4">
            Insurance Solutions for Every Stage of Life
          </h2>
          <p className="section-subtitle mx-auto">
            Whether you're protecting your family, your home, or planning for the future, we'll help you find the right coverage at the right price.
          </p>
        </AnimateOnScroll>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            const detail = SERVICE_DETAILS.find((d) => d.id === service.id);

            return (
              <AnimateOnScroll key={service.id} delay={i * 80}>
                <Link
                  href={service.slug}
                  className="group block bg-white rounded-2xl p-7 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gold/20 h-full"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-6 h-6 ${service.accentColor}`} />
                  </div>

                  <h3 className="font-heading font-semibold text-navy text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Meta */}
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <p className="text-xs text-text-muted mb-1">{detail?.highlight}</p>
                    <p className="text-sm font-semibold text-gold">{detail?.benefit}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-navy text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}

          {/* CTA Card */}
          <AnimateOnScroll delay={SERVICES.length * 80} className="md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-hero rounded-2xl p-7 h-full flex flex-col justify-between min-h-[280px]">
              <div>
                <span className="inline-block bg-gold/20 text-gold text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4">
                  Not sure where to start?
                </span>
                <h3 className="font-heading font-bold text-white text-xl mb-3">
                  Take our 2-minute Coverage Quiz
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Answer a few simple questions and we'll recommend the coverage that fits your situation and budget.
                </p>
              </div>
              <Link
                href="/tools#quiz"
                className="inline-flex items-center gap-2 bg-gold text-navy font-heading font-semibold text-sm px-6 py-3 rounded-full hover:bg-gold-400 transition-colors mt-6 self-start"
              >
                Take the Quiz
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
