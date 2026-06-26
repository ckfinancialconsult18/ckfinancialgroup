import type { Metadata } from "next";
import { Shield, DollarSign, Clock, Zap, RefreshCw, Users, Heart, FileCheck } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { ALL_FAQS } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Term Life Insurance | CK Financial",
  description:
    "Term life insurance provides affordable, reliable protection for the years when your family needs it most. Choose 10, 20, or 30-year terms with competitive rates from top-rated carriers.",
};

const BENEFITS = [
  { icon: DollarSign, title: "Most Affordable Option", description: "Term life offers the highest death benefit for the lowest premium — ideal for income protection." },
  { icon: Clock, title: "Flexible Term Lengths", description: "Choose 10, 15, 20, or 30-year terms to align with your mortgage payoff, child-rearing years, or retirement." },
  { icon: Shield, title: "Guaranteed Level Premiums", description: "Your premium stays the same for the entire policy term — no surprises as you age." },
  { icon: RefreshCw, title: "Convertible to Permanent Coverage", description: "Many term policies include a conversion rider so you can switch to whole life without re-qualifying." },
  { icon: Zap, title: "Fast Underwriting", description: "Many carriers now offer no-exam term policies that can be approved within days, not weeks." },
  { icon: Users, title: "Income Replacement", description: "Replaces your income for your family so they can maintain their lifestyle even without you." },
];

const WHO_FOR = [
  { title: "Young Families", description: "The most common and sensible time to buy term life — when you have dependents and decades of income to protect." },
  { title: "Parents of Young Children", description: "Cover the years until your children are financially independent and no longer relying on your income." },
  { title: "Homeowners", description: "A term policy timed to your mortgage payoff is a natural complement to mortgage protection." },
  { title: "Budget-Conscious Buyers", description: "If you want substantial coverage without stretching your budget, term life is usually the answer." },
  { title: "Business Owners", description: "Key person protection and buy-sell funding are common applications for term life in business settings." },
  { title: "Anyone Building Savings", description: "Term life + investment accounts is a popular strategy: pure protection now while you build wealth." },
];

const FAQS = ALL_FAQS.filter((f) => f.category === "Term Life" || f.category === "General").slice(0, 8);

export default function TermLifePage() {
  return (
    <ServicePageTemplate
      title="Term Life Insurance"
      heroTagline="Maximum protection at the most affordable price."
      subtitle="Term life insurance is the most straightforward form of life insurance — and often the most powerful tool for income replacement and family protection during the years you need it most."
      overview={[
        "Term life insurance provides a guaranteed death benefit for a set period of time — commonly 10, 15, 20, or 30 years. If you pass away during the term, your beneficiaries receive the full death benefit, income tax-free. If you outlive the policy, coverage ends.",
        "Because term coverage is pure protection without a savings component, premiums are significantly lower than permanent policies — making it possible to buy a large benefit (often $500,000 or more) for a relatively small monthly payment. For young families especially, term life is often the most financially responsible choice.",
        "As an independent broker, I compare rates from multiple top-rated carriers to find the best combination of price, underwriting leniency, and policy features for your specific health profile and coverage goals.",
      ]}
      benefits={BENEFITS}
      whoIsItFor={WHO_FOR}
      faqs={FAQS}
      ctaTitle="Lock In Your Rate Today"
    />
  );
}
