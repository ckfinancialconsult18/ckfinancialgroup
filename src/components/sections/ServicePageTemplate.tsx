import Link from "next/link";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQItem } from "@/lib/faq-data";

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroTagline: string;
  overview: string[];
  benefits: { icon: LucideIcon; title: string; description: string }[];
  whoIsItFor: { title: string; description: string }[];
  faqs: FAQItem[];
  ctaTitle?: string;
  accent?: string;
}

export function ServicePageTemplate({
  title,
  subtitle,
  heroTagline,
  overview,
  benefits,
  whoIsItFor,
  faqs,
  ctaTitle,
  accent = "text-gold",
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
        />
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <span className="section-label text-gold">Insurance Solutions</span>
              <h1 className="font-heading font-bold text-5xl md:text-6xl text-white leading-tight mt-2 mb-4">
                {title}
              </h1>
              <p className="text-gold font-heading font-semibold text-xl mb-4">{heroTagline}</p>
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl">{subtitle}</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-navy font-heading font-semibold text-sm px-8 py-4 rounded-full hover:bg-gold-400 transition-colors shadow-gold"
                >
                  Get My Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-heading font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
                >
                  Use Our Calculator
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll>
              <span className="section-label">Overview</span>
              <h2 className="section-title mb-6">What You Need to Know</h2>
              <div className="space-y-4">
                {overview.map((para, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed">{para}</p>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="bg-surface rounded-2xl p-8 shadow-soft sticky top-24">
                <h3 className="font-heading font-semibold text-navy text-lg mb-5">Quick Summary</h3>
                <ul className="space-y-3">
                  {benefits.slice(0, 4).map((b) => {
                    const Icon = b.icon;
                    return (
                      <li key={b.title} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-navy text-sm">{b.title}</p>
                          <p className="text-text-muted text-xs mt-0.5 leading-relaxed">{b.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Link href="/contact" className="btn-primary w-full mt-6 justify-center">
                  Get a Free Quote
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-surface">
        <div className="container-wide">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label">Benefits</span>
            <h2 className="section-title mb-4">Why It Matters</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <AnimateOnScroll key={b.title} delay={i * 80}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1">
                    <div className="w-11 h-11 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading font-semibold text-navy mb-2">{b.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{b.description}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label">Is This Right for You?</span>
            <h2 className="section-title mb-4">Who Benefits Most</h2>
            <p className="section-subtitle mx-auto">
              This type of coverage isn't for everyone — but for the right person, it's invaluable. Here's who it serves best.
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoIsItFor.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 80}>
                <div className="flex items-start gap-4 bg-surface rounded-2xl p-6">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-sm mb-1">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        items={faqs}
        title="Common Questions"
        subtitle={`Everything you want to know about ${title.toLowerCase()}.`}
      />

      <CTASection
        title={ctaTitle || `Ready to Learn More About ${title}?`}
        subtitle="Let's talk about your situation and find the right coverage for your family."
      />
    </>
  );
}
