import Link from "next/link";
import { Phone, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

const TRUST_BADGES = [
  { icon: "🏆", text: "Licensed Independent Broker" },
  { icon: "🗺️", text: `Serving ${BUSINESS.stateCount} States` },
  { icon: "📱", text: "Phone & Virtual Appointments" },
  { icon: "🤝", text: "Multiple Top-Rated Carriers" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold accent orbs */}
        <div className="absolute top-20 right-[35%] w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute top-40 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Licensed in 12 States · Free Consultations</span>
            </div>

            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Protect What{" "}
              <span className="text-gold">Matters</span>
              {" "}Most.
            </h1>

            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Helping individuals and families find personalized life insurance solutions that protect their future, preserve their legacy, and provide peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-heading font-semibold text-sm px-8 py-4 rounded-full hover:bg-gold-500 transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
              >
                Get My Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-heading font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
            </div>

            {/* Quick trust signals */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/70">
              {[
                "No obligation or pressure",
                "Personalized recommendations",
                "Access to top carriers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait placeholder + decorative */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Gold abstract shapes */}
            <div className="absolute -top-8 -left-8 w-64 h-64 border-2 border-gold/20 rounded-3xl rotate-12" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 rounded-3xl -rotate-6" />

            {/* Portrait frame */}
            <div className="relative z-10 w-80 h-96 lg:w-96 lg:h-[480px]">
              {/* Glow behind portrait */}
              <div className="absolute inset-4 bg-gold/20 rounded-3xl blur-2xl" />

              {/* Portrait card */}
              <div className="relative w-full h-full bg-gradient-to-br from-navy-400/50 to-navy-600/50 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-hero">
                {/* Placeholder gradient for portrait — replace with actual <Image /> */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-300/30 via-transparent to-navy-700/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold/40">
                      <span className="font-heading font-bold text-gold text-2xl">CK</span>
                    </div>
                    <p className="font-heading font-semibold text-white text-lg">{BUSINESS.owner}</p>
                    <p className="text-white/60 text-sm">Independent Insurance Broker</p>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-card">
                  <p className="font-heading font-bold text-navy text-xl leading-none">12</p>
                  <p className="text-text-muted text-xs mt-0.5">States Licensed</p>
                </div>
                <div className="absolute top-6 left-6 bg-gold rounded-2xl p-3 shadow-gold">
                  <p className="font-heading font-bold text-navy text-xs leading-none">FREE</p>
                  <p className="text-navy/80 text-[10px] mt-0.5">Consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-3 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-white/80 text-sm font-medium leading-tight">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
