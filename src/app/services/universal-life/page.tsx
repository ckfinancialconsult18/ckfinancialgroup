import type { Metadata } from "next";
import { Infinity, TrendingUp, Settings, Shield, DollarSign, Zap, RefreshCw, Lock } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { ALL_FAQS } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Universal Life Insurance | CK Financial",
  description:
    "Universal life insurance offers permanent coverage with the flexibility to adjust premiums and death benefits over time. Learn about IUL, GUL, and VUL options from an independent broker.",
};

const BENEFITS = [
  { icon: Settings, title: "Flexible Premiums", description: "Adjust your premium payments within policy limits to adapt to changes in your income or financial priorities." },
  { icon: TrendingUp, title: "Cash Value Growth", description: "Cash value grows based on interest rates or market indices (depending on product type), with downside protection built in." },
  { icon: Shield, title: "Permanent Coverage", description: "Like whole life, universal life provides lifelong coverage — but with more control over how the policy is structured." },
  { icon: Infinity, title: "Adjustable Death Benefit", description: "Increase or decrease your death benefit over time (subject to underwriting), matching your changing coverage needs." },
  { icon: DollarSign, title: "Tax-Deferred Growth", description: "Cash value accumulation is tax-deferred — you only owe taxes if you surrender the policy or over-distribute." },
  { icon: Zap, title: "Market-Linked Upside (IUL)", description: "Indexed UL policies can tie your cash value growth to a stock index with a guaranteed floor — upside potential without market risk." },
];

const WHO_FOR = [
  { title: "Those Who Want Flexibility", description: "If your income varies or your financial picture may change, adjustable premiums can be a major advantage." },
  { title: "High Earners Seeking Tax Advantages", description: "Indexed UL is popular among high-income earners who've maxed other tax-advantaged accounts." },
  { title: "Long-Term Retirement Planners", description: "Cash value can be accessed tax-free in retirement through policy loans, creating a supplemental income stream." },
  { title: "Business Owners", description: "Flexible death benefits and cash value access make UL policies popular for executive benefit planning." },
  { title: "Those Wanting Permanent Coverage Without Rigidity", description: "Universal life offers the permanence of whole life with the adjustability many clients prefer." },
  { title: "Estate Planning Clients", description: "Guaranteed Universal Life (GUL) provides an affordable permanent death benefit for estate transfer purposes." },
];

const FAQS = ALL_FAQS.filter((f) => f.category === "Universal Life" || f.category === "Estate & Planning").slice(0, 8);

export default function UniversalLifePage() {
  return (
    <ServicePageTemplate
      title="Universal Life Insurance"
      heroTagline="Permanent protection that moves with your life."
      subtitle="Universal life insurance combines the lifelong coverage of permanent insurance with the flexibility to adjust how much you pay and how much protection you carry — as your life evolves."
      overview={[
        "Universal life (UL) insurance is a type of permanent life insurance that offers more flexibility than whole life. You can adjust your premium payments (within limits) and modify your death benefit amount over time — making it uniquely adaptable to major life changes like career transitions, children leaving the nest, or a shift in financial goals.",
        "There are several types of universal life insurance. Traditional UL grows cash value based on current interest rates. Indexed Universal Life (IUL) ties cash value growth to a market index like the S&P 500, offering upside potential while protecting against loss. Guaranteed Universal Life (GUL) provides a simplified permanent death benefit with minimal cash value — an affordable option for estate planning purposes.",
        "As an independent broker, I work with multiple carriers offering different types of UL products and can help you identify which structure aligns best with your goals — whether that's retirement income, estate transfer, maximum protection, or flexible premium management.",
      ]}
      benefits={BENEFITS}
      whoIsItFor={WHO_FOR}
      faqs={FAQS}
      ctaTitle="Explore Flexible, Permanent Coverage Today"
    />
  );
}
