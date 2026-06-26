"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn, BUSINESS, NAV_LINKS } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
              <span className="font-heading font-bold text-gold text-lg">CK</span>
            </div>
            <div>
              <span className={cn("font-heading font-bold text-lg transition-colors", scrolled ? "text-navy" : "text-white")}>
                CK Financial
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative group">
                {link.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors",
                      scrolled
                        ? "text-text-secondary hover:text-navy hover:bg-surface"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors",
                      scrolled
                        ? "text-text-secondary hover:text-navy hover:bg-surface"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-hero border border-gray-100 py-2 transition-all duration-150",
                      activeDropdown === link.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    )}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center px-4 py-2.5 text-sm text-text-secondary hover:text-navy hover:bg-surface transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                scrolled ? "text-navy" : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-gold text-sm px-5 py-2.5">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-navy hover:bg-surface" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-hero">
          <nav className="container-wide py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-text-secondary hover:text-navy hover:bg-surface rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-text-muted hover:text-navy hover:bg-surface rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 px-4 py-3 text-navy font-semibold"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="btn-gold w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Get My Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
