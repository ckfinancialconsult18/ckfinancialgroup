import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MeetCourtneySection } from "@/components/sections/MeetCourtneySection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CalculatorPreviewSection } from "@/components/sections/CalculatorPreviewSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { HOME_FAQS } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "CK Financial | Life Insurance & Final Expense Specialist",
  description:
    "CK Financial helps families find personalized life insurance solutions across 12 states. Licensed independent broker offering final expense, mortgage protection, term life, whole life, and universal life insurance. Free consultations.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <MeetCourtneySection />
      <WhyChooseSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CalculatorPreviewSection />
      <FAQSection
        items={HOME_FAQS}
        title="Your Questions, Answered"
        subtitle="Common questions about life insurance and working with CK Financial."
      />
      <CTASection />
    </>
  );
}
