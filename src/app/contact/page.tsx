"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Phone, Mail, Clock, CheckCircle2, Send } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BUSINESS, SERVICES } from "@/lib/utils";

const STATES = [
  "California", "Florida", "Georgia", "Kentucky", "Massachusetts",
  "Michigan", "New York", "Ohio", "South Carolina", "Texas", "Virginia", "Washington",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnScroll>
            <span className="section-label text-gold">Get in Touch</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mt-2 mb-4">
              Let's Find the Right Coverage for You
            </h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto">
              Request a free, no-obligation quote or schedule a consultation. I typically respond within a few hours.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <AnimateOnScroll animation="slide-right" className="lg:col-span-1">
              <div className="space-y-6 sticky top-24">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-navy mb-2">Contact CK Financial</h2>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Phone and virtual appointments only. No in-person office. Available 7 days a week.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-4 bg-surface rounded-2xl p-4 hover:shadow-card transition-shadow group">
                    <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Call or Text</p>
                      <p className="font-heading font-semibold text-navy">{BUSINESS.phone}</p>
                    </div>
                  </a>

                  <a href={`mailto:${BUSINESS.email}`}
                    className="flex items-center gap-4 bg-surface rounded-2xl p-4 hover:shadow-card transition-shadow group">
                    <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Email</p>
                      <p className="font-heading font-semibold text-navy text-sm">{BUSINESS.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 bg-surface rounded-2xl p-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Appointments</p>
                      <p className="font-heading font-semibold text-navy text-sm">Phone & Virtual Only</p>
                    </div>
                  </div>
                </div>

                <div className="bg-navy rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-white text-sm mb-3">Licensed States</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {STATES.map((s) => (
                      <span key={s} className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-lg">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll className="lg:col-span-2">
              {submitted ? (
                <div className="bg-surface rounded-3xl p-12 text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-navy mb-3">Thank You!</h2>
                  <p className="text-text-muted leading-relaxed max-w-md mx-auto">
                    Your request has been received. Courtney will typically reach out within a few hours during business hours. We look forward to speaking with you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface rounded-3xl p-8 md:p-10">
                  <h2 className="font-heading font-bold text-2xl text-navy mb-2">Request My Free Quote</h2>
                  <p className="text-text-muted text-sm mb-8">
                    Fill out the form below and Courtney will reach out to discuss your options.
                  </p>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">First Name *</label>
                      <input required type="text" name="firstName" placeholder="Jane"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors" />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Last Name *</label>
                      <input required type="text" name="lastName" placeholder="Smith"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors" />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Phone Number *</label>
                      <input required type="tel" name="phone" placeholder="(555) 000-0000"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors" />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Email Address *</label>
                      <input required type="email" name="email" placeholder="jane@example.com"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors" />
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Your State *</label>
                      <select required name="state"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors appearance-none">
                        <option value="">Select your state</option>
                        {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Coverage Interest */}
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Coverage Interest</label>
                      <select name="coverage"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors appearance-none">
                        <option value="">Not sure yet</option>
                        {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
                        <option value="multiple">Multiple types</option>
                      </select>
                    </div>

                    {/* Comments */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-navy mb-1.5">Additional Comments</label>
                      <textarea name="comments" rows={4} placeholder="Tell us a bit about your situation, any health considerations, budget range, or questions you have..."
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors resize-none" />
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-3 text-xs text-text-muted mb-6">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>By submitting this form, you agree to be contacted by CK Financial regarding your insurance inquiry. We respect your privacy and will never sell your information.</span>
                  </div>

                  <button type="submit" disabled={loading}
                    className="btn-gold w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Request My Quote
                      </span>
                    )}
                  </button>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
