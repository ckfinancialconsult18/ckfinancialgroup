import Link from "next/link";
import { BUSINESS } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-bold text-navy">404</span>
        </div>
        <h1 className="text-3xl font-bold text-navy mb-3 font-poppins">Page Not Found</h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          We couldn&apos;t find the page you&apos;re looking for. It may have been moved or the URL might be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <a href={`tel:${BUSINESS.phone}`} className="btn-outline">
            Call {BUSINESS.phone}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-navy">
          <Link href="/services" className="hover:underline">Our Services</Link>
          <Link href="/learning-center" className="hover:underline">Learning Center</Link>
          <Link href="/tools" className="hover:underline">Tools</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </main>
  );
}
