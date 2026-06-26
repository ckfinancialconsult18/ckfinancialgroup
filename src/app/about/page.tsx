import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Heart, Shield, Users, Award } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTASection } from "@/components/sections/CTASection";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Courtney Kegresse | CK Financial",
  description:
    "Meet Courtney Kegresse, the independent insurance broker behind CK Financial. Licensed in 12 states, Courtney helps families find personalized life insurance with no pressure and no jargon.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Family First",
    description:
      "Every recommendation I make is filtered through one question: what would I want for my own family? That mindset guides everything.",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description:
      "No hidden fees, no confusing fine print, no selling you things you don't need. I explain everything plainly — the good and the less exciting.",
  },
  {
    icon: Users,
    title: "True Independence",
    description:
      "I work for you, not for a carrier. That means comparing options honestly and recommending what genuinely fits your life.",
  },
  {
    icon: Award,
    title: "Ongoing Partnership",
    description:
      "My relationship with clients doesn't end when a policy is issued. I'm here for questions, updates, and future planning as your life evolves.",
  },
];

const MILESTONES = [
  { year: "Today", event: "Serving clients in 12 states as a licensed independent broker" },
  { year: "Multi-carrier", event: "Access to multiple A-rated insurance carriers for unbiased recommendations" },
  { year: "All products", event: "Expertise across final expense, mortgage protection, term, whole, and universal life" },
  { year: "Every client", event: "Free, no-pressure consultations available by phone or video" },
];

export default function AboutPage() {
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
              <span className="section-label text-gold">About CK Financial</span>
              <h1 className="font-heading font-bold text-5xl md:text-6xl text-white leading-tight mt-2 mb-6">
                Insurance That Feels Personal, Because It Is
              </h1>
              <p className="text-white/75 text-xl leading-relaxed">
                I built CK Financial on the belief that everyone deserves clear, honest guidance about life insurance — without the pressure, the jargon, or the one-size-fits-all approach.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Portrait */}
            <AnimateOnScroll animation="slide-right">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-gold/8 rounded-3xl rotate-3" />
                <div className="relative z-10 aspect-[3/4] bg-gradient-to-br from-navy-50 to-navy-100 rounded-3xl overflow-hidden shadow-hero">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-navy/30">
                      <div className="w-32 h-32 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="font-heading font-bold text-navy/40 text-5xl">CK</span>
                      </div>
                      <p className="text-sm font-medium">Professional Portrait</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-8">
                    <p className="font-heading font-bold text-white text-xl">{BUSINESS.owner}</p>
                    <p className="text-white/70 text-sm">Licensed Independent Insurance Broker</p>
                    <p className="text-gold text-sm mt-1">Licensed in {BUSINESS.stateCount} States</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Bio text */}
            <AnimateOnScroll>
              <span className="section-label">My Story</span>
              <h2 className="section-title mb-6">
                Why I Do This Work
              </h2>
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  My name is Courtney Kegresse, and I started CK Financial because I saw firsthand how confusing and uncomfortable the insurance process can be — and how much families suffer when they're either underinsured or sold the wrong product.
                </p>
                <p>
                  I wanted to change that experience. I wanted to be the kind of advisor I would want if my family needed help — someone who takes the time to really listen, who explains things honestly, and who has your back even after the policy is issued.
                </p>
                <p>
                  As an independent broker, I'm not loyal to any single insurance company. I'm loyal to you. That means I compare options across multiple top-rated carriers and recommend what genuinely fits your life — your health, your budget, your goals, your family.
                </p>
                <p>
                  Whether you're a young parent trying to protect your kids, a homeowner wanting peace of mind, or a senior looking to ease the burden on your family, I'll bring the same care and honesty to your situation that I'd bring to my own.
                </p>
                <p>
                  I believe life insurance should feel empowering — not confusing or pressured. My job is to educate you first, help you understand your options clearly, and then support whatever decision feels right for you. No hard closes. No quotas. Just honest guidance.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/contact" className="btn-primary">
                  Schedule a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-outline">
                  View Services
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="container-wide">
          <AnimateOnScroll className="text-center mb-16">
            <span className="section-label">My Approach</span>
            <h2 className="section-title mb-4">What You Can Count On</h2>
            <p className="section-subtitle mx-auto">
              These aren't marketing talking points — they're commitments I make to every client I work with.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimateOnScroll key={v.title} delay={i * 100}>
                  <div className="flex gap-5 bg-white rounded-2xl p-7 shadow-soft">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy text-lg mb-2">{v.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-white">
        <div className="container-narrow">
          <AnimateOnScroll className="text-center mb-12">
            <span className="section-label">Credentials</span>
            <h2 className="section-title mb-4">Qualified, Licensed, and Ready to Help</h2>
          </AnimateOnScroll>

          <div className="space-y-4">
            {MILESTONES.map((m, i) => (
              <AnimateOnScroll key={m.event} delay={i * 80}>
                <div className="flex items-start gap-4 bg-surface rounded-2xl p-5">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-semibold text-gold text-sm">{m.year}: </span>
                    <span className="text-text-secondary text-sm">{m.event}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Licensed States */}
          <AnimateOnScroll className="mt-12">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="font-heading font-semibold text-lg mb-4">Licensed States</h3>
              <div className="flex flex-wrap gap-2">
                {BUSINESS.states.map((state) => (
                  <span key={state} className="bg-white/10 text-white/80 text-sm px-3 py-1.5 rounded-lg">
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        title="Let's Talk About Your Family's Future"
        subtitle="A free, no-pressure consultation is just a call or click away."
      />
    </>
  );
}
