import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ALL_FAQS } from "@/lib/faq-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Life Insurance FAQ | CK Financial",
  description:
    "Get answers to your most common life insurance questions — from how policies work to what affects your rates. 50+ questions answered by a licensed independent broker.",
};

const CATEGORIES = [...new Set(ALL_FAQS.map((f) => f.category))].filter(Boolean) as string[];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnScroll>
            <span className="section-label text-gold">Knowledge Base</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mt-2 mb-4">
              Life Insurance, Explained
            </h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto">
              50+ frequently asked questions answered clearly and honestly — no jargon, no pressure.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Category filter nav */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <div className="container-wide">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <a key={cat} href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="shrink-0 text-sm font-medium px-4 py-2 rounded-full bg-surface hover:bg-gold/10 hover:text-gold text-text-secondary transition-colors">
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs by category */}
      {CATEGORIES.map((category) => {
        const items = ALL_FAQS.filter((f) => f.category === category);
        return (
          <div key={category} id={category.toLowerCase().replace(/\s+/g, "-")}>
            <FAQSection
              items={items}
              title={category}
              subtitle=""
            />
          </div>
        );
      })}

      {/* Still have questions */}
      <section className="py-16 bg-white">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <h2 className="font-heading font-bold text-3xl text-navy mb-4">
              Still Have Questions?
            </h2>
            <p className="text-text-muted mb-8 leading-relaxed">
              Don't see your question here? Reach out directly and I'll give you a straight, honest answer — no pressure, no pitch.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Ask Your Question</Link>
              <a href={`tel:${4136038341}`} className="btn-outline">(413) 603-8341</a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
