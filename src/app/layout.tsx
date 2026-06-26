import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2545",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ckfinancialconsult.com"),
  title: {
    default: "CK Financial | Life Insurance & Final Expense Specialist",
    template: "%s | CK Financial",
  },
  description:
    "CK Financial helps individuals and families find personalized life insurance solutions across 12 states. Expert guidance on final expense, mortgage protection, term life, whole life, and universal life insurance.",
  keywords: [
    "life insurance",
    "final expense insurance",
    "mortgage protection insurance",
    "term life insurance",
    "whole life insurance",
    "universal life insurance",
    "insurance broker",
    "independent insurance agent",
    "Courtney Kegresse",
    "CK Financial",
  ],
  authors: [{ name: "Courtney Kegresse", url: "https://www.ckfinancialconsult.com/about" }],
  creator: "CK Financial",
  publisher: "CK Financial",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ckfinancialconsult.com",
    siteName: "CK Financial",
    title: "CK Financial | Life Insurance & Final Expense Specialist",
    description:
      "Helping families find personalized life insurance solutions that protect their future and provide lasting peace of mind.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CK Financial – Protecting What Matters Most",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CK Financial | Life Insurance Specialist",
    description:
      "Helping families find personalized life insurance solutions across 12 states.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.ckfinancialconsult.com",
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "CK Financial",
              description:
                "Independent life insurance broker specializing in final expense, mortgage protection, term life, whole life, and universal life insurance.",
              url: "https://www.ckfinancialconsult.com",
              telephone: "+14136038341",
              email: "ckfinancialconsult@gmail.com",
              areaServed: [
                "California", "Florida", "Georgia", "Kentucky",
                "Massachusetts", "Michigan", "New York", "Ohio",
                "South Carolina", "Texas", "Virginia", "Washington",
              ],
              founder: {
                "@type": "Person",
                name: "Courtney Kegresse",
              },
              serviceType: [
                "Final Expense Insurance",
                "Mortgage Protection Insurance",
                "Term Life Insurance",
                "Whole Life Insurance",
                "Universal Life Insurance",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
