import type { Metadata } from "next";
import { Heart, DollarSign, Clock, Shield, UserCheck, Smile, FileCheck, Phone } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { ALL_FAQS } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Final Expense Insurance | CK Financial",
  description:
    "Final expense insurance helps cover burial costs, funeral expenses, and end-of-life bills so your family isn't left with financial burden. No medical exam required for many plans. Get a free quote.",
};

const BENEFITS = [
  { icon: Heart, title: "Protects Your Family", description: "Keeps your loved ones from facing unexpected funeral costs at an already emotional time." },
  { icon: DollarSign, title: "Affordable Premiums", description: "Coverage starts as low as $20–$30/month — designed specifically for those on fixed incomes." },
  { icon: Clock, title: "No Waiting Period (Level Benefit)", description: "Many plans offer full coverage from day one with no waiting period for healthy applicants." },
  { icon: Shield, title: "Permanent Coverage", description: "Final expense is whole life insurance — it never expires as long as premiums are paid." },
  { icon: UserCheck, title: "No Medical Exam Required", description: "Most plans only require answers to a few health questions — no lab work or exams." },
  { icon: FileCheck, title: "Cash Value Growth", description: "As a whole life product, your policy builds cash value you can borrow against if needed." },
];

const WHO_FOR = [
  { title: "Seniors Ages 45–85", description: "Designed for individuals who want to ensure their final expenses are covered without burdening family." },
  { title: "Those on Fixed Income", description: "If you're on Social Security or a retirement budget, final expense offers meaningful coverage at a price that fits." },
  { title: "Anyone Previously Declined", description: "Guaranteed issue options are available for those who have been denied traditional coverage." },
  { title: "People Without Other Coverage", description: "If you don't have life insurance, final expense is often the most accessible starting point." },
  { title: "Those with Pre-Existing Conditions", description: "Many plans accommodate diabetes, COPD, heart conditions, and other health histories." },
  { title: "Adult Children Planning Ahead", description: "Children often purchase final expense policies for aging parents to eliminate future financial stress." },
];

const FAQS = ALL_FAQS.filter((f) => f.category === "Final Expense" || f.category === "General").slice(0, 8);

export default function FinalExpensePage() {
  return (
    <ServicePageTemplate
      title="Final Expense Insurance"
      heroTagline="Leave a legacy of love, not a burden of debt."
      subtitle="Final expense insurance ensures your family can say goodbye with dignity — without worrying about how to pay for it. Affordable, accessible, and permanent coverage designed for real life."
      overview={[
        "Final expense insurance — sometimes called burial insurance or funeral insurance — is a type of whole life insurance policy specifically designed to cover the costs associated with end of life: funeral services, cremation or burial, grave markers, outstanding medical bills, and other debts your family might inherit.",
        "The average funeral in the United States costs between $8,000 and $12,000. Without coverage, those costs fall entirely on your loved ones — often at the worst possible moment. Final expense insurance removes that burden entirely.",
        "Unlike traditional life insurance, final expense policies are designed to be accessible. Most don't require a medical exam, coverage amounts are smaller (typically $5,000–$35,000), and premiums are structured to fit a fixed-income budget. As an independent broker, I work with multiple carriers to find the right plan for your health situation and budget.",
      ]}
      benefits={BENEFITS}
      whoIsItFor={WHO_FOR}
      faqs={FAQS}
      ctaTitle="Protect Your Family Before It's Too Late"
    />
  );
}
