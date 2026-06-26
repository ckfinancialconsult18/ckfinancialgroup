import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Scale, Zap, ShieldCheck, Heart, Globe, Clock } from "lucide-react";

const REASONS = [
  {
    icon: Scale,
    title: "Truly Independent",
    description:
      "I represent you, not insurance companies. As an independent broker, I compare options across multiple carriers to find what's genuinely best for your situation.",
  },
  {
    icon: Heart,
    title: "Family-First Philosophy",
    description:
      "My approach is built around understanding your family's unique needs — not fitting you into a one-size-fits-all product.",
  },
  {
    icon: ShieldCheck,
    title: "No Pressure, Ever",
    description:
      "There are no sales quotas here. You'll never feel rushed or pressured. I believe the right decision is always one you make freely.",
  },
  {
    icon: Globe,
    title: "Licensed in 12 States",
    description:
      "Whether you're in Florida, Texas, California, or anywhere else we're licensed, I can serve you — wherever life takes you.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description:
      "Many clients get coverage within 24–48 hours. We make the process as smooth and fast as possible without cutting any corners.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description:
      "Getting coverage is just the beginning. I stay available after the sale to answer questions, process updates, and help as your life changes.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-wide">
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-label">Why CK Financial</span>
          <h2 className="section-title mb-4">
            What Makes Us Different
          </h2>
          <p className="section-subtitle mx-auto">
            There are plenty of insurance companies out there. Here's why families choose to work with CK Financial.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <AnimateOnScroll key={reason.title} delay={i * 80}>
                <div className="group flex flex-col gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-lg mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
