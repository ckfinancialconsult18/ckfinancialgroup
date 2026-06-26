"use client";

import { useState } from "react";
import { Calculator, Home, Heart, HelpCircle, ArrowRight, ChevronRight, Shield } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

function LifeInsuranceCalculator() {
  const [age, setAge] = useState(35);
  const [income, setIncome] = useState(75000);
  const [dependents, setDependents] = useState(2);
  const [debt, setDebt] = useState(200000);
  const [savings, setSavings] = useState(50000);

  const incomeReplacement = income * 10;
  const debtCoverage = debt;
  const childCare = dependents * 50000;
  const recommended = Math.max(0, incomeReplacement + debtCoverage + childCare - savings);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="bg-white rounded-3xl shadow-card overflow-hidden" id="life-calculator">
      <div className="bg-gradient-hero p-6 text-white">
        <div className="flex items-center gap-3 mb-1">
          <Calculator className="w-6 h-6 text-gold" />
          <h3 className="font-heading font-bold text-xl">Life Insurance Calculator</h3>
        </div>
        <p className="text-white/70 text-sm">Estimate how much coverage your family needs</p>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { label: "Your Age", value: age, min: 18, max: 80, step: 1, set: setAge, display: `${age} years` },
              { label: "Annual Income", value: income, min: 20000, max: 500000, step: 5000, set: setIncome, display: fmt(income) },
              { label: "Number of Dependents", value: dependents, min: 0, max: 8, step: 1, set: setDependents, display: `${dependents}` },
              { label: "Total Debt (mortgage, loans)", value: debt, min: 0, max: 1000000, step: 10000, set: setDebt, display: fmt(debt) },
              { label: "Liquid Savings & Assets", value: savings, min: 0, max: 500000, step: 5000, set: setSavings, display: fmt(savings) },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-navy">{item.label}</label>
                  <span className="text-sm font-bold text-gold">{item.display}</span>
                </div>
                <input type="range" min={item.min} max={item.max} step={item.step} value={item.value}
                  onChange={(e) => item.set(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gold" />
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-2xl p-6 text-white h-fit">
            <p className="text-white/60 text-sm mb-1">Estimated Coverage Needed</p>
            <p className="font-heading font-bold text-4xl text-white mb-6">{fmt(recommended)}</p>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-white/60">Income replacement (10×)</span>
                <span className="text-white">{fmt(incomeReplacement)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Debt payoff</span>
                <span className="text-white">{fmt(debtCoverage)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Child care fund</span>
                <span className="text-white">{fmt(childCare)}</span>
              </div>
              <div className="flex justify-between border-t border-white/20 pt-3">
                <span className="text-white/60">Minus existing savings</span>
                <span className="text-rose-300">–{fmt(savings)}</span>
              </div>
            </div>

            <Link href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-gold text-navy font-heading font-semibold text-sm px-5 py-3 rounded-full hover:bg-gold-400 transition-colors">
              Get a Real Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-white/40 text-xs text-center mt-3">
              Free, no-obligation consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FuneralCostCalculator() {
  const [service, setService] = useState<"burial" | "cremation">("burial");
  const [items, setItems] = useState({
    funeral: true, casket: true, burial: true, flowers: true,
    obituary: true, reception: false, headstone: true,
  });

  const COSTS: Record<string, Record<string, number>> = {
    burial: { funeral: 4500, casket: 2500, burial: 1500, flowers: 400, obituary: 250, reception: 1200, headstone: 1800 },
    cremation: { funeral: 2000, casket: 0, burial: 800, flowers: 300, obituary: 200, reception: 1000, headstone: 600 },
  };

  const LABELS: Record<string, string> = {
    funeral: "Funeral home services", casket: service === "burial" ? "Casket" : "Cremation urn",
    burial: service === "burial" ? "Burial plot & opening" : "Scattering/interment",
    flowers: "Flowers & arrangements", obituary: "Obituary & printing",
    reception: "Reception/gathering", headstone: "Monument/marker",
  };

  const total = Object.entries(items).filter(([, v]) => v).reduce(
    (sum, [k]) => sum + (COSTS[service][k] || 0), 0
  );
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="bg-white rounded-3xl shadow-card overflow-hidden" id="funeral-calculator">
      <div className="bg-gradient-to-r from-navy to-navy-600 p-6 text-white">
        <div className="flex items-center gap-3 mb-1">
          <Heart className="w-6 h-6 text-gold" />
          <h3 className="font-heading font-bold text-xl">Funeral Cost Estimator</h3>
        </div>
        <p className="text-white/70 text-sm">See what final expenses might cost your family</p>
      </div>

      <div className="p-6 md:p-8">
        {/* Service type toggle */}
        <div className="flex gap-3 mb-6">
          {(["burial", "cremation"] as const).map((t) => (
            <button key={t} onClick={() => setService(t)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors capitalize ${
                service === t ? "bg-navy text-white" : "bg-surface text-text-muted hover:bg-gray-200"
              }`}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {Object.entries(items).map(([key, checked]) => (
              <label key={key} className="flex items-center justify-between bg-surface rounded-xl p-3.5 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="checkbox" checked={checked}
                    onChange={() => setItems((p) => ({ ...p, [key]: !p[key as keyof typeof p] }))}
                    className="w-4 h-4 accent-gold rounded" />
                  <span className="text-sm text-text-secondary">{LABELS[key]}</span>
                </div>
                <span className="text-sm font-semibold text-navy">
                  {fmt(COSTS[service][key] || 0)}
                </span>
              </label>
            ))}
          </div>

          <div className="bg-surface rounded-2xl p-6 h-fit">
            <p className="text-text-muted text-sm mb-1">Estimated Total Cost</p>
            <p className="font-heading font-bold text-4xl text-navy mb-2">{fmt(total)}</p>
            <p className="text-text-muted text-xs mb-6">
              Costs vary by region and provider. This is an estimate based on national averages.
            </p>
            <div className="bg-navy/5 rounded-xl p-4 mb-5">
              <p className="text-sm text-navy font-medium">Without insurance, this falls entirely on your family.</p>
            </div>
            <Link href="/services/final-expense"
              className="w-full flex items-center justify-center gap-2 bg-navy text-white font-heading font-semibold text-sm px-5 py-3 rounded-full hover:bg-navy-600 transition-colors">
              Learn About Final Expense Insurance <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoverageQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const QUESTIONS = [
    {
      question: "What's your primary goal?",
      options: ["Protect my family's income", "Cover my mortgage", "Plan for final expenses", "Build long-term wealth"],
    },
    {
      question: "What's your age range?",
      options: ["Under 35", "35–50", "50–65", "65+"],
    },
    {
      question: "Do you have dependents (children, spouse, etc.)?",
      options: ["Yes, young children", "Yes, older children or spouse", "No dependents", "Planning to soon"],
    },
    {
      question: "What matters most to you?",
      options: ["Lowest monthly cost", "Coverage for life", "Building cash value", "Quick, simple approval"],
    },
  ];

  const RECOMMENDATIONS: Record<string, { type: string; desc: string; href: string }> = {
    "income-young-yes-cost": { type: "20-Year Term Life", desc: "Maximum coverage at the lowest cost — ideal for young families protecting income.", href: "/services/term-life" },
    "mortgage": { type: "Mortgage Protection Insurance", desc: "Keep your family in their home with targeted mortgage protection.", href: "/services/mortgage-protection" },
    "final-expense": { type: "Final Expense Insurance", desc: "Affordable, accessible whole life coverage designed for end-of-life costs.", href: "/services/final-expense" },
    "wealth": { type: "Whole or Universal Life", desc: "Permanent coverage with tax-advantaged cash value for long-term financial planning.", href: "/services/whole-life" },
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [step]: answer };
    setAnswers(newAnswers);

    if (step === QUESTIONS.length - 1) {
      // Simple recommendation logic
      const goal = newAnswers[0] || "";
      if (goal.includes("mortgage")) setResult("mortgage");
      else if (goal.includes("final")) setResult("final-expense");
      else if (goal.includes("wealth")) setResult("wealth");
      else setResult("income-young-yes-cost");
    } else {
      setStep(step + 1);
    }
  };

  const recommendation = result ? RECOMMENDATIONS[result] : null;

  return (
    <div className="bg-white rounded-3xl shadow-card overflow-hidden" id="quiz">
      <div className="bg-gradient-to-r from-gold to-gold-500 p-6">
        <div className="flex items-center gap-3 mb-1">
          <HelpCircle className="w-6 h-6 text-navy" />
          <h3 className="font-heading font-bold text-xl text-navy">Coverage Recommendation Quiz</h3>
        </div>
        <p className="text-navy/70 text-sm">Answer 4 quick questions to find your best fit</p>
      </div>

      <div className="p-6 md:p-8">
        {result && recommendation ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl">🎯</span>
            </div>
            <p className="text-text-muted text-sm mb-2">Based on your answers, we recommend:</p>
            <h4 className="font-heading font-bold text-2xl text-navy mb-3">{recommendation.type}</h4>
            <p className="text-text-muted leading-relaxed mb-8 max-w-md mx-auto">{recommendation.desc}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={recommendation.href} className="btn-primary">Learn More</Link>
              <Link href="/contact" className="btn-gold">Get a Free Quote</Link>
              <button onClick={() => { setStep(0); setAnswers({}); setResult(null); }}
                className="text-sm text-text-muted hover:text-navy underline">
                Start over
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div className="flex gap-1.5 mb-8">
              {QUESTIONS.map((_, i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-gold" : "bg-gray-200"}`} />
              ))}
            </div>

            <h4 className="font-heading font-semibold text-navy text-xl mb-6">
              {QUESTIONS[step].question}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUESTIONS[step].options.map((opt) => (
                <button key={opt} onClick={() => handleAnswer(opt)}
                  className="text-left p-4 bg-surface rounded-2xl border-2 border-transparent hover:border-gold/50 hover:bg-gold/5 transition-all text-sm text-text-secondary hover:text-navy font-medium">
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function MortgageProtectionCalculator() {
  const [loanBalance, setLoanBalance] = useState(350000);
  const [remainingYears, setRemainingYears] = useState(25);
  const [monthlyPayment, setMonthlyPayment] = useState(1800);
  const [income, setIncome] = useState(75000);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  // Estimate monthly premium (simplified formula)
  const age = 40; // assumed
  const basePremium = (loanBalance / 100000) * 12 + (remainingYears > 20 ? 8 : 5);
  const estimatedMonthly = Math.round(basePremium);
  const incomePercent = ((estimatedMonthly * 12) / income * 100).toFixed(1);
  const payoffAtDeath = loanBalance; // simplified: level coverage

  return (
    <div className="bg-white rounded-3xl shadow-card overflow-hidden" id="mortgage-calculator">
      <div className="bg-gradient-to-br from-emerald-700 to-teal-800 p-6 text-white">
        <div className="flex items-center gap-3 mb-1">
          <Home className="w-6 h-6 text-emerald-300" />
          <h3 className="font-heading font-bold text-xl">Mortgage Protection Calculator</h3>
        </div>
        <p className="text-white/70 text-sm">Estimate the cost of protecting your home for your family</p>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { label: "Current Loan Balance", value: loanBalance, min: 50000, max: 1500000, step: 10000, set: setLoanBalance, display: fmt(loanBalance) },
              { label: "Remaining Loan Term", value: remainingYears, min: 5, max: 30, step: 1, set: setRemainingYears, display: `${remainingYears} years` },
              { label: "Monthly Mortgage Payment", value: monthlyPayment, min: 400, max: 8000, step: 50, set: setMonthlyPayment, display: fmt(monthlyPayment) },
              { label: "Annual Household Income", value: income, min: 25000, max: 500000, step: 5000, set: setIncome, display: fmt(income) },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-navy">{item.label}</label>
                  <span className="text-sm font-bold text-emerald-600">{item.display}</span>
                </div>
                <input
                  type="range"
                  min={item.min}
                  max={item.max}
                  step={item.step}
                  value={item.value}
                  onChange={(e) => item.set(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: "#059669" }}
                />
              </div>
            ))}

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Note:</strong> This is an estimate only. Your actual premium will depend on your age, health, and the carrier you qualify with. Get a real quote for accurate numbers.
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-emerald-700 rounded-2xl p-6 text-white">
              <p className="text-white/60 text-sm mb-1">Estimated Monthly Premium</p>
              <p className="font-heading font-bold text-4xl text-white mb-1">{fmt(estimatedMonthly)}<span className="text-lg font-normal text-white/60">/mo</span></p>
              <p className="text-emerald-200 text-sm">≈ {incomePercent}% of your monthly income</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
              <p className="text-sm font-semibold text-navy mb-3">What This Coverage Provides</p>
              {[
                { label: "Loan Payoff at Death", value: fmt(payoffAtDeath) },
                { label: "Monthly Payments Covered", value: `${remainingYears * 12} months` },
                { label: "Family Stays in Home", value: "✓ Protected" },
                { label: "No Mortgage Burden", value: "✓ For Your Family" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-gray-500">{row.label}</span>
                  <span className="font-semibold text-navy">{row.value}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white font-heading font-semibold text-sm px-5 py-3 rounded-full hover:bg-emerald-800 transition-colors"
            >
              Get My Real Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnScroll>
            <span className="section-label text-gold">Planning Tools</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mt-2 mb-4">
              Tools to Help You Plan
            </h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto">
              Use our free calculators and quiz to better understand your coverage needs — then let us help you act on them.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-wide space-y-10">
          <AnimateOnScroll><LifeInsuranceCalculator /></AnimateOnScroll>
          <AnimateOnScroll><MortgageProtectionCalculator /></AnimateOnScroll>
          <AnimateOnScroll><FuneralCostCalculator /></AnimateOnScroll>
          <AnimateOnScroll><CoverageQuiz /></AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
