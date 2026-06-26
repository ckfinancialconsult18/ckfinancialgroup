import type { Metadata } from "next";
import { Home, Shield, DollarSign, Heart, Clock, FileCheck, Users, Zap } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { ALL_FAQS } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Mortgage Protection Insurance | CK Financial",
  description:
    "Keep your family in their home if something unexpected happens to you. Mortgage protection insurance pays off your mortgage so your loved ones never have to leave. Free consultation available.",
};

const BENEFITS = [
  { icon: Home, title: "Keeps the Family Home", description: "Your family stays in the home they love even if you're no longer there to make the payments." },
  { icon: DollarSign, title: "Tax-Free Death Benefit", description: "Your beneficiaries receive the payout tax-free to use toward the mortgage or however they choose." },
  { icon: Shield, title: "Coverage Tied to Your Loan", description: "Policies can be structured to match your mortgage balance as it decreases over time." },
  { icon: Zap, title: "Fast Approval", description: "Many mortgage protection plans are issued quickly — sometimes within 24–48 hours of applying." },
  { icon: Heart, title: "Peace of Mind", description: "Eliminate one of your family's biggest financial fears — losing the home you've worked so hard to own." },
  { icon: Users, title: "Protects Co-Borrowers Too", description: "Coverage can be extended to protect a spouse or co-borrower on the same mortgage." },
];

const WHO_FOR = [
  { title: "New Homeowners", description: "If you've recently purchased a home, now is the ideal time to protect the investment." },
  { title: "Families with One Primary Earner", description: "When the mortgage depends primarily on your income, protection is critical." },
  { title: "Two-Income Households", description: "Even if both spouses work, the loss of one income could still make payments unmanageable." },
  { title: "Parents with Young Children", description: "Children deserve stability — keeping them in their home during a difficult time matters enormously." },
  { title: "Homeowners Who Refinanced", description: "If you've extended your loan term or pulled equity, make sure your coverage reflects your current balance." },
  { title: "Anyone Without Life Insurance", description: "If you own a home but don't have life insurance, mortgage protection is the most urgent coverage to consider." },
];

const FAQS = ALL_FAQS.filter((f) => f.category === "Mortgage Protection" || f.category === "General").slice(0, 8);

export default function MortgageProtectionPage() {
  return (
    <ServicePageTemplate
      title="Mortgage Protection Insurance"
      heroTagline="Your family deserves to stay in their home."
      subtitle="A mortgage is one of the largest financial commitments most families make. Mortgage protection insurance ensures that commitment doesn't become a burden if something happens to you."
      overview={[
        "Mortgage protection insurance is a life insurance policy designed specifically to pay off your home loan if you pass away unexpectedly. Unlike private mortgage insurance (PMI), which protects the lender, mortgage protection insurance protects your family.",
        "If you were to pass away without this coverage, your family could face an impossible choice: come up with mortgage payments on a reduced income, or lose the home entirely. Mortgage protection insurance eliminates that risk — giving your loved ones time to grieve, stability to recover, and security for their future.",
        "As an independent broker, I work with multiple carriers to compare options including level term and decreasing term mortgage protection policies, so you get the structure that best fits your loan type and budget.",
      ]}
      benefits={BENEFITS}
      whoIsItFor={WHO_FOR}
      faqs={FAQS}
      ctaTitle="Protect Your Home and Your Family"
    />
  );
}
