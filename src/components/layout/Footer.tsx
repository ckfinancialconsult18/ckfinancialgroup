import Link from "next/link";
import { Phone, Mail, MapPin, Shield, ChevronRight } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/utils";

const FOOTER_LINKS = {
  Services: SERVICES.map((s) => ({ label: s.shortTitle, href: s.slug })),
  Company: [
    { label: "About Courtney", href: "/about" },
    { label: "Learning Center", href: "/learning-center" },
    { label: "Tools & Calculators", href: "/tools" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Life Insurance Calculator", href: "/tools#life-calculator" },
    { label: "Mortgage Calculator", href: "/tools#mortgage-calculator" },
    { label: "Funeral Cost Calculator", href: "/tools#funeral-calculator" },
    { label: "Coverage Quiz", href: "/tools#quiz" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-gold to-gold-500">
        <div className="container-wide py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-2xl text-navy">
              Ready to protect your family?
            </h3>
            <p className="text-navy/70 mt-1">
              Get a personalized quote in minutes — no pressure, no obligation.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-heading font-semibold text-sm px-6 py-3 rounded-full hover:bg-navy-600 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 bg-white text-navy font-heading font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center">
                <span className="font-heading font-bold text-navy text-lg">CK</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">CK Financial</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Helping individuals and families find personalized life insurance solutions that protect their future and provide lasting peace of mind.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Phone & Virtual Appointments Only<br />Serving {BUSINESS.stateCount} States</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white text-sm tracking-wide mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1.5 text-white/60 hover:text-gold text-sm transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Licensed States */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <p className="text-white/50 text-xs">
              <span className="text-white/70 font-medium">Licensed Independent Broker</span> — Currently licensed in:{" "}
              {BUSINESS.states.join(", ")}.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40">
            <p>
              © {currentYear} CK Financial. All rights reserved. | Licensed Independent Insurance Broker
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
              <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">Sitemap</Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/30 leading-relaxed max-w-3xl">
            Insurance products and services are provided by Courtney Kegresse, an independent insurance producer. CK Financial is not affiliated with any single insurance carrier. Products available may vary by state. This website is for informational purposes only and does not constitute insurance advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
