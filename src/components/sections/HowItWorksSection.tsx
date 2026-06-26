import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import Link from "next/link";
import { MessageSquare, Search, FileCheck, Smile } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Tell Us About Yourself",
    description:
      "We start with a simple, no-pressure conversation about your situation, your family, and what you're looking to protect. No forms, no jargon — just a real conversation.",
    time: "15 minutes",
  },
  {
    icon: Search,
    title: "We Shop Multiple Carriers",
    description:
      "As an independent broker, I compare rates and coverage options from multiple top-rated insurance companies to find what's best for you — not for any single carrier.",
    time: "Same day",
  },
  {
    icon: FileCheck,
    title: "Review Your Options",
    description:
      "I'll walk you through your top options in plain language — no confusing fine print. You'll understand exactly what you're getting, what it costs, and why I'm recommending it.",
    time: "Your pace",
  },
  {
    icon: Smile,
    title: "Get Covered with Confidence",
    description:
      "When you're ready, applying is simple. I'll guide you through every step and stay available afterward for questions, changes, or additional coverage as your life evolves.",
    time: "As quick as 24hrs",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-wide">
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-label">The Process</span>
          <h2 className="section-title mb-4">
            Getting Covered Is Simpler Than You Think
          </h2>
          <p className="section-subtitle mx-auto">
            No confusing applications. No cold calls. Just a clear, comfortable process designed around you.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-0.5 bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.title} delay={i * 100}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon circle */}
                    <div className="relative z-10 w-24 h-24 bg-white rounded-2xl shadow-card flex items-center justify-center mb-6 border-2 border-gold/20 group-hover:border-gold transition-colors">
                      <Icon className="w-9 h-9 text-gold" />
                      {/* Step number */}
                      <span className="absolute -top-3 -right-3 w-7 h-7 bg-navy rounded-full flex items-center justify-center text-white font-heading font-bold text-xs">
                        {i + 1}
                      </span>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-soft w-full">
                      <h3 className="font-heading font-semibold text-navy text-base mb-2">
                        {step.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>

        {/* CTA below */}
        <AnimateOnScroll className="text-center mt-14">
          <p className="text-text-muted mb-5">Ready to get started? It only takes a few minutes.</p>
          <Link href="/contact" className="btn-primary inline-flex">
            Start My Free Consultation
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
