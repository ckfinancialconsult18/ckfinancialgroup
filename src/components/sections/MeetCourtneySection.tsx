import Link from "next/link";
import { CheckCircle2, ArrowRight, Award, Users, Clock } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BUSINESS } from "@/lib/utils";

const HIGHLIGHTS = [
  "Licensed in 12 states with active, up-to-date credentials",
  "Independent broker — not tied to any single carrier",
  "Access to multiple A-rated insurance carriers",
  "No pressure, no quotas — only your best interest",
  "Phone and virtual appointments available 7 days a week",
  "Fluent in translating insurance into plain language",
];

const STATS = [
  { icon: Award, value: "12", label: "States Licensed" },
  { icon: Users, value: "5+", label: "Top-Rated Carriers" },
  { icon: Clock, value: "Free", label: "Consultations" },
];

export function MeetCourtneySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Portrait + Stats */}
          <AnimateOnScroll animation="slide-right">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-gold/8 rounded-3xl rotate-3" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-navy/10 rounded-3xl -rotate-3" />

              {/* Portrait placeholder */}
              <div className="relative z-10 aspect-[4/5] bg-gradient-to-br from-navy-50 to-navy-100 rounded-3xl overflow-hidden shadow-hero">
                <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-navy/20" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-8">
                  <p className="font-heading font-bold text-white text-xl">{BUSINESS.owner}</p>
                  <p className="text-white/70 text-sm">Licensed Independent Insurance Broker</p>
                </div>

                {/* Center placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-navy/30">
                    <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-heading font-bold text-navy/40 text-3xl">CK</span>
                    </div>
                    <p className="text-sm">Portrait Photo</p>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="relative z-10 mt-6 grid grid-cols-3 gap-3">
                {STATS.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="bg-surface rounded-2xl p-4 text-center shadow-soft">
                    <Icon className="w-5 h-5 text-gold mx-auto mb-1.5" />
                    <p className="font-heading font-bold text-navy text-xl">{value}</p>
                    <p className="text-text-muted text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Bio */}
          <AnimateOnScroll>
            <span className="section-label">Meet Your Advisor</span>
            <h2 className="section-title mb-6">
              A Trusted Partner,<br />Not Just a Policy
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>
                Hi, I'm Courtney Kegresse — an independent insurance broker and the founder of CK Financial. My work isn't about selling policies. It's about helping real families understand their options and make decisions they feel confident about.
              </p>
              <p>
                As an independent broker, I'm not loyal to any single company. I work for you. That means I shop across multiple top-rated carriers to find coverage that fits your life, your health situation, and your budget — without pressure, without jargon, and without the runaround.
              </p>
              <p>
                Whether you're a parent looking to protect your children, a homeowner wanting to secure your mortgage, or someone planning ahead for final expenses — I'll take the time to listen, explain your options clearly, and help you find the right fit.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-2.5 mb-10">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Read My Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Schedule a Call
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
