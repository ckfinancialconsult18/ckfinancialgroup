import type { Metadata } from "next";
import { Star, TrendingUp, Shield, Clock, DollarSign, Heart, Lock, Gift } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { ALL_FAQS } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Whole Life Insurance | CK Financial",
  description:
    "Whole life insurance provides lifelong protection and builds cash value that grows tax-deferred over time. Learn how it can be part of your long-term financial strategy.",
};

const BENEFITS = [
  { icon: Clock, title: "Lifelong Coverage", description: "Whole life never expires. As long as premiums are paid, your death benefit is guaranteed — no matter how long you live." },
  { icon: TrendingUp, title: "Cash Value Growth", description: "A portion of each premium builds guaranteed cash value that grows tax-deferred at a rate set by the carrier." },
  { icon: Lock, title: "Fixed Premiums Forever", description: "Your premiums are locked in when you apply — they never increase, even as you age or if your health changes." },
  { icon: DollarSign, title: "Access to Cash Value", description: "You can borrow against or withdraw from your cash value while you're alive — tax-advantaged liquidity." },
  { icon: Star, title: "Guaranteed Death Benefit", description: "Your beneficiaries are guaranteed to receive the death benefit regardless of when you pass." },
  { icon: Gift, title: "Wealth Transfer Tool", description: "Whole life is a powerful, tax-efficient way to transfer wealth to the next generation." },
];

const WHO_FOR = [
  { title: "Those Seeking Lifelong Protection", description: "If you want coverage that will never expire, whole life is the only option that guarantees that." },
  { title: "Estate Planning Clients", description: "Whole life provides instant, tax-free liquidity for heirs to cover taxes, settle debts, or equalize inheritances." },
  { title: "Business Owners", description: "Used for buy-sell agreements, key person coverage, and executive benefit plans." },
  { title: "Parents of Young Children", description: "Lock in low childhood rates and give your child a head start on lifelong coverage and cash value." },
  { title: "High-Income Earners", description: "Whole life's tax-advantaged cash value growth can complement other retirement accounts." },
  { title: "Final Expense Planning", description: "Many whole life policies are designed specifically for final expense coverage at an affordable price for seniors." },
];

const FAQS = ALL_FAQS.filter((f) => f.category === "Whole Life" || f.category === "Estate & Planning").slice(0, 8);

export default function WholeLifePage() {
  return (
    <ServicePageTemplate
      title="Whole Life Insurance"
      heroTagline="Lifelong protection. Guaranteed growth. True peace of mind."
      subtitle="Whole life insurance offers something term insurance can't: coverage that lasts forever, premiums that never change, and a savings component that grows steadily over time."
      overview={[
        "Whole life insurance is a permanent life insurance policy that covers you for your entire life — not just a set term. From the day you're approved until the day you pass, your beneficiaries are protected. And unlike term, the premiums you pay are locked in forever at the rate you receive when you first apply.",
        "Beyond the death benefit, whole life policies build cash value. Each month, a portion of your premium goes into a guaranteed savings account inside the policy. This cash value grows at a set rate defined by the carrier — it's not subject to market fluctuation — and accumulates tax-deferred over time. You can borrow against it, withdraw from it, or let it grow.",
        "For the right client, whole life insurance is a cornerstone of a long-term financial plan. I'll help you understand exactly how it works, whether it fits your goals, and which carriers offer the best combination of premiums, dividends, and cash value performance.",
      ]}
      benefits={BENEFITS}
      whoIsItFor={WHO_FOR}
      faqs={FAQS}
      ctaTitle="Build Protection That Lasts a Lifetime"
    />
  );
}
