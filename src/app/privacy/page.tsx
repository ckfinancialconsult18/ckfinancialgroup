import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy | CK Financial",
  description: "CK Financial's privacy policy explains how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://ckfinancial.com/privacy",
  },
};

const SECTIONS = [
  {
    title: "Information We Collect",
    content: [
      `When you submit a contact form, request a quote, or schedule a consultation through our website, we collect the personal information you provide, which may include your name, phone number, email address, state of residence, and coverage interests.`,
      `We may also collect non-personally identifiable information automatically when you visit our website, such as your browser type, IP address, pages visited, and time spent on the site. This information is collected through standard web analytics tools and is used solely to improve our website's performance and user experience.`,
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      `The information you provide is used exclusively to respond to your inquiries, provide insurance quotes, schedule consultations, and communicate with you about our services. We will never use your information for unrelated marketing purposes without your explicit consent.`,
      `We may use your email address to send follow-up correspondence related to your inquiry, or periodic educational newsletters about life insurance topics if you opt in. You may unsubscribe from any email communication at any time.`,
    ],
  },
  {
    title: "Information Sharing",
    content: [
      `CK Financial does not sell, rent, trade, or otherwise transfer your personal information to third parties for marketing purposes.`,
      `In the course of providing insurance services, we may share your information with licensed insurance carriers or their representatives for the purpose of obtaining insurance quotes or processing applications. This sharing is necessary to fulfill our services and is done only as needed.`,
      `We may disclose information as required by law, regulation, legal process, or governmental request.`,
    ],
  },
  {
    title: "Data Security",
    content: [
      `We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. Our website uses industry-standard SSL encryption for all data transmitted through our contact forms.`,
      `However, no method of internet transmission or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.`,
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      `Our website may use cookies — small text files stored on your device — to improve your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect certain functionality of our website.`,
      `We may use third-party analytics services (such as Google Analytics) to understand how visitors interact with our site. These services may collect information about your use of our website. Their use of that information is governed by their respective privacy policies.`,
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      `Our website may contain links to third-party websites (such as scheduling tools or carrier websites). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before submitting personal information.`,
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      `Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete it.`,
    ],
  },
  {
    title: "Your Rights",
    content: [
      `Depending on your state of residence, you may have rights regarding the personal information we hold about you, including the right to access, correct, or delete your data. To exercise any of these rights, please contact us at the information provided below.`,
      `California residents may have additional rights under the California Consumer Privacy Act (CCPA). For more information about your CCPA rights, please contact us directly.`,
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will post the updated policy on this page with a revised "Last Updated" date. Your continued use of our website after any changes constitutes acceptance of the revised policy.`,
    ],
  },
  {
    title: "Contact Us",
    content: [
      `If you have questions about this Privacy Policy or how we handle your personal information, please contact us:`,
    ],
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy to-navy/90 py-16">
        <div className="container-narrow text-center text-white">
          <div className="section-label text-gold mb-3">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Privacy Policy</h1>
          <p className="text-white/70 text-lg">
            Last Updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-narrow">
          {/* Intro */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-10 text-gray-600 leading-relaxed">
            <p>
              {BUSINESS.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us about our insurance services.
            </p>
            <p className="mt-3">
              By using our website, you agree to the practices described in this policy. If you disagree with any part of this policy, please do not use our website.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {SECTIONS.map((section, i) => (
              <div key={i} className="border-b border-gray-100 pb-10 last:border-0">
                <h2 className="text-xl font-bold text-navy mb-4 font-poppins">
                  {i + 1}. {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-gray-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                  {section.contact && (
                    <div className="bg-gray-50 rounded-xl p-5 mt-2">
                      <p className="font-semibold text-navy mb-1">{BUSINESS.name}</p>
                      <p className="text-gray-600">{BUSINESS.owner}, Licensed Insurance Broker</p>
                      <p className="text-gray-600">
                        Email:{" "}
                        <a href={`mailto:${BUSINESS.email}`} className="text-navy hover:underline">
                          {BUSINESS.email}
                        </a>
                      </p>
                      <p className="text-gray-600">
                        Phone:{" "}
                        <a href={`tel:${BUSINESS.phone}`} className="text-navy hover:underline">
                          {BUSINESS.phone}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer nav */}
          <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
            <Link href="/terms" className="text-sm text-navy hover:underline">Terms of Use</Link>
            <Link href="/contact" className="text-sm text-navy hover:underline">Contact Us</Link>
            <Link href="/" className="text-sm text-navy hover:underline">Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
