import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Maria T.",
    location: "Florida",
    text: "Courtney made the whole process feel easy. She didn't try to oversell me — she listened to what I needed and found a policy that fit perfectly within my budget. I finally feel like my family is protected.",
    rating: 5,
    product: "Final Expense Insurance",
  },
  {
    name: "James & Linda K.",
    location: "Texas",
    text: "We were overwhelmed trying to figure out mortgage protection on our own. Courtney explained everything in plain English, compared multiple options, and got us covered in less than a week. Highly recommend.",
    rating: 5,
    product: "Mortgage Protection Insurance",
  },
  {
    name: "David R.",
    location: "Michigan",
    text: "I'd been putting off getting life insurance for years — felt like I didn't understand it enough. After talking with Courtney for 20 minutes, I had complete clarity and a plan in place. The process was quick and completely pressure-free.",
    rating: 5,
    product: "Term Life Insurance",
  },
  {
    name: "Sandra M.",
    location: "Georgia",
    text: "What stood out was Courtney's patience. She answered every question I had, never made me feel rushed, and followed up after I applied to make sure everything went smoothly. That's the kind of service you remember.",
    rating: 5,
    product: "Whole Life Insurance",
  },
  {
    name: "Robert & Cynthia P.",
    location: "Ohio",
    text: "We wanted coverage that could grow with us financially. Courtney walked us through several universal life options and helped us understand the cash value component clearly. Best insurance experience we've had.",
    rating: 5,
    product: "Universal Life Insurance",
  },
  {
    name: "Angela N.",
    location: "Massachusetts",
    text: "I'm a single mom on a budget and needed final expense coverage without breaking the bank. Courtney found me a plan I could actually afford — and she never once made me feel like just another sale.",
    rating: 5,
    product: "Final Expense Insurance",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-wide">
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title mb-4">
            Real Families. Real Peace of Mind.
          </h2>
          <p className="section-subtitle mx-auto">
            We let results speak for themselves. Here's what clients across the country say about working with CK Financial.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 70}>
              <div className="bg-surface rounded-2xl p-6 border border-gray-100 hover:shadow-card transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
                <Quote className="w-8 h-8 text-gold/30 mb-4 shrink-0" />
                <p className="text-text-secondary leading-relaxed text-sm flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.location}</p>
                  </div>
                  <div className="text-right">
                    <StarRating rating={t.rating} />
                    <p className="text-text-muted text-xs mt-1">{t.product}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Overall rating */}
        <AnimateOnScroll className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-navy/5 rounded-2xl px-8 py-4">
            <div>
              <p className="font-heading font-bold text-navy text-4xl">5.0</p>
              <StarRating rating={5} />
            </div>
            <div className="w-px h-12 bg-navy/20" />
            <p className="text-text-secondary text-sm text-left">
              Average rating across<br />all client reviews
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
