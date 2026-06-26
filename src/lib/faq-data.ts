export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const ALL_FAQS: FAQItem[] = [
  // General
  {
    category: "General",
    question: "What is life insurance and why do I need it?",
    answer:
      "Life insurance is a contract between you and an insurance company where you pay premiums in exchange for a tax-free death benefit paid to your beneficiaries when you pass. It's designed to replace your income, pay off debts, and protect your family from financial hardship after you're gone. For anyone with dependents, a mortgage, or financial obligations, life insurance is one of the most important financial decisions you can make.",
  },
  {
    category: "General",
    question: "How much life insurance coverage do I actually need?",
    answer:
      "A general rule of thumb is to carry 10–15 times your annual income in coverage. However, the right amount depends on several factors: how many dependents you have, your outstanding debts (mortgage, car loans, student loans), your spouse's income, and what long-term goals you want to protect — like college funding. I walk every client through this individually to find the right number for their situation.",
  },
  {
    category: "General",
    question: "What's the difference between term and permanent life insurance?",
    answer:
      "Term life insurance covers you for a set period — typically 10, 20, or 30 years — and pays a death benefit only if you pass within that term. It's usually the most affordable option. Permanent life insurance (whole life, universal life) provides lifelong coverage and includes a cash value component that grows over time. Which is right for you depends on your goals, budget, and stage of life.",
  },
  {
    category: "General",
    question: "When is the best time to get life insurance?",
    answer:
      "The best time to get life insurance is as early as possible. Premiums are based largely on your age and health — the younger and healthier you are when you apply, the lower your rates will be. Many people wait until they have a major life event (marriage, baby, home purchase), but those who apply early lock in better rates for the long term. There's no benefit to waiting.",
  },
  {
    category: "General",
    question: "Do I need a medical exam to get life insurance?",
    answer:
      "Not always. Many products — particularly final expense and simplified issue policies — require no medical exam at all. For larger term or permanent policies, carriers may require bloodwork and a health questionnaire. As your broker, I'll match you with products that align with your health situation so you're not applying for coverage you won't qualify for.",
  },
  {
    category: "General",
    question: "How do I name a beneficiary and can I change it?",
    answer:
      "When you apply for life insurance, you'll name a primary beneficiary (and often a contingent beneficiary as a backup). You can name a spouse, child, family member, trust, or even a charity. In most cases, you can update your beneficiary designation at any time by contacting the carrier — no underwriting required. It's important to keep your beneficiaries current, especially after major life events like marriage, divorce, or the birth of a child.",
  },
  {
    category: "General",
    question: "Is life insurance tax-free?",
    answer:
      "In most cases, yes. Death benefits paid to beneficiaries are generally income tax-free under federal law. Cash value growth inside permanent life insurance policies is also typically tax-deferred. However, there are specific situations (like large estates or business-owned policies) where tax implications can arise. I always recommend speaking with a tax advisor for your specific situation.",
  },
  {
    category: "General",
    question: "Can I have more than one life insurance policy?",
    answer:
      "Absolutely. Many people carry multiple policies — for example, a term policy for income replacement and a small whole life or final expense policy to cover end-of-life expenses. There's no rule against it, though carriers may look at your total insured amount relative to your income when underwriting larger policies.",
  },
  // Final Expense
  {
    category: "Final Expense",
    question: "What is final expense insurance?",
    answer:
      "Final expense insurance (also called burial insurance or funeral insurance) is a type of whole life insurance designed to cover the costs associated with death — funeral services, burial or cremation, outstanding medical bills, and other end-of-life expenses. Policies typically range from $5,000 to $35,000 in coverage and are designed to be affordable for seniors on fixed incomes.",
  },
  {
    category: "Final Expense",
    question: "Who qualifies for final expense insurance?",
    answer:
      "Final expense insurance is one of the most accessible types of coverage available. Most policies are available to individuals between the ages of 45 and 85, and many do not require a medical exam. Even individuals with pre-existing conditions like diabetes, COPD, or heart disease can often qualify — sometimes immediately, and other times after a brief waiting period depending on their health history.",
  },
  {
    category: "Final Expense",
    question: "How much does a funeral actually cost?",
    answer:
      "The average funeral in the United States costs between $8,000 and $12,000 when accounting for the funeral service, casket, burial plot, grave marker, and related expenses. Cremation is generally less expensive, ranging from $2,000 to $5,000. Without insurance, these costs fall entirely on your family — often at an already emotionally difficult time.",
  },
  {
    category: "Final Expense",
    question: "What's the difference between level and graded final expense benefits?",
    answer:
      "A 'level benefit' policy pays the full death benefit from day one. A 'graded benefit' policy — typically offered to higher-risk applicants — pays a reduced benefit (often a return of premiums plus interest) if the insured passes within the first two years. After two years, the full benefit applies. The policy type you qualify for depends on your health history.",
  },
  {
    category: "Final Expense",
    question: "Can I get final expense insurance if I've been denied before?",
    answer:
      "In many cases, yes. Different carriers have different underwriting guidelines. A denial from one company doesn't mean you'll be denied everywhere. Guaranteed issue policies — which accept virtually anyone regardless of health — are also available, though they come with higher premiums and a graded benefit period. I'll help find the best-fit option for your situation.",
  },
  // Mortgage Protection
  {
    category: "Mortgage Protection",
    question: "What is mortgage protection insurance?",
    answer:
      "Mortgage protection insurance is a life insurance policy designed specifically to pay off or cover your mortgage payments if you pass away unexpectedly. Unlike lender-required PMI (private mortgage insurance), mortgage protection insurance benefits your family — not the bank. It ensures your loved ones can stay in their home without the financial burden of a mortgage payment.",
  },
  {
    category: "Mortgage Protection",
    question: "Is mortgage protection insurance the same as PMI?",
    answer:
      "No — these are very different products. PMI (private mortgage insurance) is required by lenders when your down payment is less than 20% and protects the lender if you default. Mortgage protection insurance is voluntary life insurance that protects your family by paying off your mortgage if you die. The two serve completely different purposes.",
  },
  {
    category: "Mortgage Protection",
    question: "How does mortgage protection insurance work?",
    answer:
      "You purchase a policy with a death benefit that matches your current mortgage balance. If you pass away during the policy term, your beneficiaries receive the death benefit — which can be used to pay off the mortgage. Some policies are structured as decreasing term (the death benefit decreases as your mortgage balance does), while others offer a level term benefit that doesn't change.",
  },
  {
    category: "Mortgage Protection",
    question: "Should I get mortgage protection as a separate policy or bundle it with other coverage?",
    answer:
      "It depends on your situation. Some clients prefer a standalone mortgage protection policy so coverage aligns directly with their loan balance. Others prefer a larger term life policy that covers both their income replacement needs and their mortgage. I'll help you compare both approaches and find what works best for your budget and family situation.",
  },
  // Term Life
  {
    category: "Term Life",
    question: "What is term life insurance?",
    answer:
      "Term life insurance provides coverage for a specific period — usually 10, 15, 20, or 30 years. If you pass away during the term, your beneficiaries receive the death benefit tax-free. If you outlive the policy, coverage ends with no payout. Term life is the most straightforward and typically most affordable type of life insurance, making it ideal for income replacement, mortgage protection, or covering the years when your financial obligations are highest.",
  },
  {
    category: "Term Life",
    question: "How long of a term should I choose?",
    answer:
      "The right term length depends on your financial obligations. Common guidance: choose a term that lasts until your youngest child is financially independent (often 20–25 years), or until your mortgage is paid off, or until retirement. If you're 35 with young kids and a 30-year mortgage, a 30-year term is a solid choice. I'll help you think through the timeline that makes the most sense.",
  },
  {
    category: "Term Life",
    question: "What happens when my term life policy expires?",
    answer:
      "When a term policy expires, coverage ends and no benefit is paid. Your options at that point include: letting it expire (if your financial obligations are reduced), purchasing a new policy (though rates will be higher due to age), or converting to a permanent policy if your original policy included a conversion rider. Planning ahead is key — I often recommend clients lock in a longer term than they think they need.",
  },
  {
    category: "Term Life",
    question: "Can I convert my term life policy to whole life?",
    answer:
      "Many term life policies include a conversion rider that allows you to convert all or part of your coverage to a permanent policy without re-qualifying medically. This is a valuable feature — especially if your health changes during your term. When shopping for term coverage, I always look for policies with strong conversion options.",
  },
  // Whole Life
  {
    category: "Whole Life",
    question: "What is whole life insurance?",
    answer:
      "Whole life insurance is a type of permanent life insurance that covers you for your entire life as long as premiums are paid. Unlike term insurance, whole life never expires. It also builds cash value over time — a savings component that grows at a guaranteed rate and can be accessed via loans or withdrawals during your lifetime. Premiums are fixed and won't increase as you age.",
  },
  {
    category: "Whole Life",
    question: "What is the cash value in whole life insurance?",
    answer:
      "A portion of every whole life premium goes into a cash value account that grows over time on a tax-deferred basis. You can borrow against this cash value, withdraw from it, or use it to pay premiums. The growth rate is guaranteed by the carrier — not subject to market fluctuations. This makes whole life a reliable, conservative asset in a diversified financial plan.",
  },
  {
    category: "Whole Life",
    question: "Is whole life insurance a good investment?",
    answer:
      "Whole life insurance is not designed to be a pure investment vehicle — it's a protection product with a stable savings component. For families seeking guaranteed death benefit coverage plus a conservative, tax-advantaged savings vehicle, it can be a valuable part of a financial strategy. However, for maximizing investment returns, other vehicles may be more appropriate. I help clients use whole life where it genuinely fits their goals.",
  },
  {
    category: "Whole Life",
    question: "Who is whole life insurance best suited for?",
    answer:
      "Whole life is a strong fit for: individuals who want lifelong coverage without worrying about policy expiration, those looking to leave a guaranteed inheritance or cover final expenses, business owners using it for key person or buy-sell purposes, and high-income individuals seeking tax-advantaged savings. It's also a good fit for parents who want to lock in low rates for their children early in life.",
  },
  // Universal Life
  {
    category: "Universal Life",
    question: "What is universal life insurance?",
    answer:
      "Universal life (UL) insurance is a type of permanent life insurance that offers more flexibility than whole life. You can adjust your premium payments and death benefit amount over time within certain limits. Like whole life, it builds cash value — but the interest credited to your account may fluctuate based on market rates or indices, depending on the type of UL policy.",
  },
  {
    category: "Universal Life",
    question: "What types of universal life insurance exist?",
    answer:
      "There are several types: Traditional Universal Life grows cash value based on current interest rates. Indexed Universal Life (IUL) ties growth to a stock market index (like the S&P 500) with a floor protecting against losses. Variable Universal Life (VUL) ties cash value directly to investment sub-accounts (higher risk, higher potential reward). Each has different risk profiles and is suited for different client goals.",
  },
  {
    category: "Universal Life",
    question: "What makes universal life different from whole life?",
    answer:
      "The key differences are flexibility and risk. Whole life has fixed, guaranteed premiums and a guaranteed growth rate. Universal life allows you to adjust premiums and death benefits, and the interest credited on cash value can vary. Universal life may be better for clients who want more control; whole life may be better for those who prefer simplicity and guarantees.",
  },
  // Working with CK Financial
  {
    category: "Working with CK Financial",
    question: "What does an independent broker do for me?",
    answer:
      "As an independent broker, I'm not tied to any single insurance company. I work with multiple top-rated carriers and compare their products, pricing, and underwriting guidelines to find the best fit for your specific situation. Unlike a captive agent who can only sell one company's products, I can shop the market on your behalf — at no additional cost to you.",
  },
  {
    category: "Working with CK Financial",
    question: "Is there a fee to work with CK Financial?",
    answer:
      "No. My services as a broker are completely free to you. I'm compensated by the insurance carrier when a policy is issued — meaning you get access to my expertise, personalized guidance, and carrier shopping at zero cost. The price you pay for a policy through me is the same as going directly to the carrier.",
  },
  {
    category: "Working with CK Financial",
    question: "What states does CK Financial serve?",
    answer:
      "I'm currently licensed to serve clients in California, Florida, Georgia, Kentucky, Massachusetts, Michigan, New York, Ohio, South Carolina, Texas, Virginia, and Washington. If you're located in another state, I'm happy to refer you to a trusted colleague.",
  },
  {
    category: "Working with CK Financial",
    question: "How do virtual appointments work?",
    answer:
      "Most of our consultations happen over the phone or via video call — no office visit required. I'll walk you through your options, answer your questions, and help you compare carriers. If you decide to apply, the application process is handled digitally as well. The entire process can be completed from the comfort of your home.",
  },
  {
    category: "Working with CK Financial",
    question: "How quickly can I get coverage?",
    answer:
      "Some policies — particularly final expense and simplified issue term products — can be approved and issued within 24 to 72 hours. Fully underwritten policies that require a medical exam typically take 4 to 8 weeks from application to approval. I'll always be upfront about the expected timeline for any product I recommend.",
  },
  {
    category: "Working with CK Financial",
    question: "What carriers do you work with?",
    answer:
      "I work with multiple top-rated carriers across the life insurance spectrum. Carriers change based on underwriting guidelines and rate competitiveness, and my goal is always to find the best-rated carrier for your specific health profile and coverage needs. I'm happy to discuss specific carriers during your consultation.",
  },
  {
    category: "Working with CK Financial",
    question: "What if I need to file a claim?",
    answer:
      "While the claims process is handled directly between the beneficiary and the insurance carrier, I'm available to help guide your family through the process if needed. I'll provide documentation, contact information, and support to make sure the claims experience is as smooth as possible during what is already a difficult time.",
  },
  {
    category: "Working with CK Financial",
    question: "Can I change or update my policy after it's issued?",
    answer:
      "In many cases, yes. You can typically change beneficiaries, adjust coverage on flexible policies, or add riders at any time. Changes to coverage amounts or underwriting-based features may require new applications. I'll help you understand what's possible under your specific policy and coordinate with the carrier on your behalf.",
  },
  // Underwriting
  {
    category: "Underwriting & Health",
    question: "Does my health history affect my life insurance rates?",
    answer:
      "Yes — your health history is a major factor in life insurance pricing. Conditions like diabetes, heart disease, cancer history, and high blood pressure can affect your rates and the products you qualify for. However, many conditions don't disqualify you entirely — it depends on the carrier's underwriting guidelines and how well the condition is managed. I know each carrier's appetite for different health profiles and will match you accordingly.",
  },
  {
    category: "Underwriting & Health",
    question: "What is a guaranteed issue life insurance policy?",
    answer:
      "A guaranteed issue policy accepts anyone within the eligible age range (typically 45–85) regardless of health — no medical questions asked. These policies are smaller in coverage (usually up to $25,000) and come with a graded benefit period (2 years) where only a return of premiums is paid if the insured passes from non-accidental causes. They're a last resort option for those who can't qualify for traditional coverage.",
  },
  {
    category: "Underwriting & Health",
    question: "What happens if I'm a smoker? Can I still get life insurance?",
    answer:
      "Yes, smokers can absolutely get life insurance — but tobacco use significantly increases premiums, often by 2–3× compared to non-smoker rates. If you've quit smoking and remain tobacco-free for 12 months (some carriers require up to 2–3 years), you may qualify for non-smoker rates. I'll help you find the most competitive rates given your situation.",
  },
  {
    category: "Underwriting & Health",
    question: "I have diabetes — can I get life insurance?",
    answer:
      "Yes. Many people with Type 1 or Type 2 diabetes qualify for life insurance, particularly if the condition is well-controlled. Carriers look at factors like A1C levels, whether you use insulin, and any related complications. Some final expense products are available even with more advanced diabetes history. I work with carriers who are knowledgeable about diabetic underwriting.",
  },
  {
    category: "Underwriting & Health",
    question: "What is a life insurance medical exam like?",
    answer:
      "For fully underwritten policies, a paramedical exam may be required. This is typically a brief in-home visit from a nurse or technician who will measure your height, weight, blood pressure, and collect blood and urine samples. The exam is free and usually takes 20–30 minutes. Results are sent directly to the carrier. Many of today's top carriers also offer no-exam options using your existing medical records.",
  },
  // Cost & Premiums
  {
    category: "Cost & Premiums",
    question: "How much does life insurance cost per month?",
    answer:
      "Costs vary significantly based on the type of coverage, your age, health, and the amount of coverage. A healthy 35-year-old might pay $25–$40/month for a $500,000 20-year term policy. Final expense coverage of $15,000 for a healthy 65-year-old might run $50–$80/month. The only way to know your actual rate is to get a quote based on your specific information.",
  },
  {
    category: "Cost & Premiums",
    question: "Can I get life insurance on a fixed income?",
    answer:
      "Absolutely. Final expense and smaller whole life policies are specifically designed for individuals on fixed incomes — including Social Security recipients. Premiums can often be structured to fit within a tight monthly budget, starting as low as $20–$30/month for modest coverage amounts. I'll always make sure any recommendation fits your actual budget.",
  },
  {
    category: "Cost & Premiums",
    question: "What happens if I miss a premium payment?",
    answer:
      "Most policies have a grace period — typically 30 days — during which you can make a late payment without losing coverage. After the grace period, some policies lapse (terminate), though you may have reinstatement options. Permanent life policies with sufficient cash value may automatically continue coverage using the cash value. I'll walk you through what your specific policy allows.",
  },
  {
    category: "Cost & Premiums",
    question: "Can I get a discount if I pay annually instead of monthly?",
    answer:
      "Yes, many carriers offer a discount for paying premiums annually or semi-annually instead of monthly. The discount varies by carrier but is typically 3–5%. If you're able to pay upfront, it can represent meaningful savings over the life of the policy.",
  },
  {
    category: "Cost & Premiums",
    question: "Why did my life insurance rate go up?",
    answer:
      "If you have a term life or final expense policy, your premiums should be level (fixed) for the duration of the policy. If you're experiencing premium increases, it may be due to a return-of-premium policy, an older form of universal life that wasn't properly funded, or an annual renewable term policy. Some policies do have increasing premiums by design. Contact me and I'll review your policy with you.",
  },
  // Estate & Planning
  {
    category: "Estate & Planning",
    question: "Can life insurance be used as part of my estate plan?",
    answer:
      "Yes. Life insurance is a powerful estate planning tool. It can provide immediate, tax-free liquidity to pay estate taxes, settle debts, or equalize inheritances among heirs. For larger estates, an irrevocable life insurance trust (ILIT) can keep the death benefit outside your taxable estate. I recommend working with an estate planning attorney alongside your insurance plan.",
  },
  {
    category: "Estate & Planning",
    question: "Can I leave my life insurance to a charity?",
    answer:
      "Absolutely. You can name a charity as the primary or contingent beneficiary on any life insurance policy. This allows you to make a significant charitable gift at your death while potentially retaining other assets for your family during your lifetime. Some people also use life insurance to 'replace' the wealth they gift to charity during their lifetime.",
  },
  {
    category: "Estate & Planning",
    question: "What is a trust as a life insurance beneficiary?",
    answer:
      "Rather than naming individuals directly, you can name a trust as your beneficiary. This gives you control over how and when the death benefit is distributed — for example, providing for minor children until they reach a certain age, or structuring payments over time. Trusts as beneficiaries require proper legal setup — I always recommend coordinating with an estate planning attorney.",
  },
  {
    category: "Estate & Planning",
    question: "Can life insurance replace a will?",
    answer:
      "No. Life insurance is a supplement to estate planning — not a replacement for a will or trust. Life insurance pays benefits to named beneficiaries outside of probate, which is a significant advantage. But a will or trust handles the distribution of your other assets, guardianship of minor children, and other critical instructions that life insurance can't address. Having both is ideal.",
  },
  {
    category: "Estate & Planning",
    question: "How can I use life insurance to protect my business?",
    answer:
      "Business owners often use life insurance in several ways: key person insurance protects a business against the financial loss of a critical employee or owner; buy-sell agreements funded by life insurance allow surviving partners to buy out a deceased partner's share; and business loan protection ensures debts won't burden the surviving owners. I have experience structuring insurance for business owners.",
  },
  // Seniors
  {
    category: "Seniors",
    question: "Is life insurance worth it after 60?",
    answer:
      "Yes, for many people it absolutely is. After 60, life insurance can still serve important purposes: covering final expenses to protect your family from burial costs, leaving a tax-free inheritance, paying off remaining debts, or supplementing estate planning. While premiums are higher at older ages, many products are still affordable and accessible for seniors in reasonable health.",
  },
  {
    category: "Seniors",
    question: "What is the best life insurance for seniors?",
    answer:
      "For most seniors, final expense whole life insurance offers the best combination of affordability, accessibility, and value. It provides lifelong coverage, fixed premiums, and a small but meaningful death benefit — all without requiring a medical exam. For healthier seniors with larger coverage needs, guaranteed universal life can provide affordable permanent coverage up to age 90, 95, or even 121.",
  },
  {
    category: "Seniors",
    question: "What's the oldest age I can apply for life insurance?",
    answer:
      "It depends on the product. Most term life policies are available up to age 65–75 for new applicants. Whole life and universal life policies are often available up to age 85. Guaranteed issue final expense policies typically go up to age 85. The older you are, the fewer options are available — which is why applying sooner rather than later is always advisable.",
  },
];

export const HOME_FAQS = ALL_FAQS.slice(0, 8);
