import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Use | CK Financial",
  description: "Terms and conditions for using the CK Financial website and services.",
  alternates: {
    canonical: "https://ckfinancial.com/terms",
  },
};

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    content: [
      `By accessing and using the CK Financial website (ckfinancial.com), you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use this website.`,
      `We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of any changes.`,
    ],
  },
  {
    title: "Use of Website",
    content: [
      `This website is provided for informational purposes only. The content on this site is intended to help visitors understand life insurance products and services — it is not a substitute for professional insurance or financial advice tailored to your specific situation.`,
      `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit anyone else's use of the website.`,
      `You may not use this website to transmit any unlawful, threatening, defamatory, obscene, or otherwise objectionable material.`,
    ],
  },
  {
    title: "No Insurance Application",
    content: [
      `Submitting a contact form, requesting a quote, or scheduling a consultation through this website does not constitute the submission of an insurance application, nor does it create an insurance policy or coverage of any kind.`,
      `Insurance coverage only takes effect after a completed application has been submitted to a licensed insurance carrier, approved through underwriting, and the first premium payment has been received.`,
    ],
  },
  {
    title: "Informational Content",
    content: [
      `All content on this website — including articles, guides, calculators, and tools — is provided for general educational purposes only. It should not be construed as insurance, legal, tax, or financial advice.`,
      `Insurance products, availability, rates, and regulations vary by state. Information presented on this website may not apply to your specific state, age, health profile, or coverage needs. Always consult with a licensed insurance professional before making any coverage decisions.`,
      `While we strive to keep information current and accurate, we make no warranties or representations about the accuracy, completeness, or timeliness of the content on this website.`,
    ],
  },
  {
    title: "Calculators and Tools",
    content: [
      `The calculators and tools on this website are provided for illustrative purposes only. Results are estimates based on general industry assumptions and are not guaranteed. Actual insurance premiums and coverage amounts will depend on individual underwriting factors specific to each applicant.`,
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      `All content on this website, including text, graphics, logos, and design elements, is the property of CK Financial or its content suppliers and is protected by applicable intellectual property laws.`,
      `You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission.`,
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      `This website may contain links to third-party websites for your convenience. These links do not constitute an endorsement of those sites or their content. We are not responsible for the content, accuracy, or practices of any third-party websites.`,
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      `This website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
      `We do not warrant that this website will be uninterrupted, error-free, or free of viruses or other harmful components.`,
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      `To the fullest extent permitted by law, CK Financial and its owner shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of (or inability to use) this website or its content.`,
    ],
  },
  {
    title: "Governing Law",
    content: [
      `These Terms of Use shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law provisions.`,
    ],
  },
  {
    title: "Contact",
    content: [
      `For questions about these Terms of Use, please contact us:`,
    ],
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy to-navy/90 py-16">
        <div className="container-narrow text-center text-white">
          <div className="section-label text-gold mb-3">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Terms of Use</h1>
          <p className="text-white/70 text-lg">Last Updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-narrow">
          {/* Intro */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-10 text-gray-600 leading-relaxed">
            <p>
              Please read these Terms of Use carefully before using the {BUSINESS.name} website. These terms govern your access to and use of our website and services. By using this website, you agree to these terms.
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
            <Link href="/privacy" className="text-sm text-navy hover:underline">Privacy Policy</Link>
            <Link href="/contact" className="text-sm text-navy hover:underline">Contact Us</Link>
            <Link href="/" className="text-sm text-navy hover:underline">Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
