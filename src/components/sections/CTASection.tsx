import Link from "next/link";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BUSINESS } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "dark" | "gold";
}

export function CTASection({
  title = "Ready to Protect What Matters Most?",
  subtitle = "A 15-minute conversation could be all it takes. Get your free, no-obligation quote today.",
  variant = "dark",
}: CTASectionProps) {
  return (
    <section
      className={
        variant === "dark"
          ? "bg-gradient-hero py-20 relative overflow-hidden"
          : "bg-gradient-gold py-20 relative overflow-hidden"
      }
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-wide relative z-10">
        <AnimateOnScroll className="text-center max-w-3xl mx-auto">
          <h2
            className={`font-heading font-bold text-3xl md:text-5xl mb-5 ${
              variant === "dark" ? "text-white" : "text-navy"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-lg leading-relaxed mb-10 ${
              variant === "dark" ? "text-white/70" : "text-navy/70"
            }`}
          >
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 font-heading font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 ${
                variant === "dark"
                  ? "bg-gold text-navy hover:bg-gold-400 shadow-gold"
                  : "bg-navy text-white hover:bg-navy-600 shadow-soft"
              }`}
            >
              Get My Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
              className={`inline-flex items-center justify-center gap-2 font-heading font-semibold text-sm px-8 py-4 rounded-full border-2 transition-all duration-200 ${
                variant === "dark"
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-navy/30 text-navy hover:bg-navy/10"
              }`}
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
          </div>

          <p
            className={`mt-8 text-sm ${
              variant === "dark" ? "text-white/50" : "text-navy/50"
            }`}
          >
            No commitment required · Phone & Virtual appointments available
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
