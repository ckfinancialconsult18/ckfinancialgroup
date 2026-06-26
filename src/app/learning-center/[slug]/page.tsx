import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2, Phone, BookOpen } from "lucide-react";
import { ALL_ARTICLES, CATEGORY_META, getArticleBySlug, getRelatedArticles } from "@/lib/articles-data";
import { BUSINESS } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  const categoryMeta = CATEGORY_META[article.category];

  return {
    title: `${article.title} | CK Financial Learning Center`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishDate,
      authors: [BUSINESS.owner],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
    alternates: {
      canonical: `https://ckfinancial.com/learning-center/${slug}`,
    },
  };
}

// Article content generation based on article metadata
function generateArticleContent(slug: string, title: string, excerpt: string, category: string): string[] {
  // In a real implementation, this would load from a CMS or MDX files.
  // For now, we return structured placeholder paragraphs that match the article topic.
  return [
    excerpt,
    `Understanding ${title.toLowerCase().replace("?", "")} is essential for anyone looking to protect their financial future. In this guide, we'll walk you through everything you need to know to make an informed decision.`,
    `When most people think about life insurance, they focus on the premium price tag — but the real conversation should be about the protection value. The right coverage at the right time can mean the difference between a family that thrives and one that struggles to stay afloat.`,
    `As an independent broker licensed in 12 states, Courtney Kegresse works with multiple top-rated carriers to find coverage that fits your budget and your life. There's no one-size-fits-all policy — and that's exactly why working with an independent broker matters.`,
    `Here's what you need to know before making any decisions: every family's situation is different. Income, debts, dependents, health history, and long-term goals all play a role in determining the right type and amount of coverage.`,
    `One of the most common questions we hear is, "Is now really the right time?" The answer is almost always yes — the longer you wait, the older you get, and older means higher premiums. Locking in coverage while you're younger and healthier is one of the smartest financial moves you can make.`,
    `If you have questions about your specific situation, the best next step is a free consultation with Courtney. There's no pressure, no obligation — just honest, clear guidance to help you make the best decision for your family.`,
  ];
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const categoryMeta = CATEGORY_META[article.category];
  const relatedArticles = getRelatedArticles(article, 3);
  const paragraphs = generateArticleContent(slug, article.title, article.excerpt, article.category);

  const formattedDate = new Date(article.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: BUSINESS.owner,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
    },
    datePublished: article.publishDate,
    keywords: article.tags?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>/</span>
            <Link href="/learning-center" className="hover:text-navy transition-colors">Learning Center</Link>
            <span>/</span>
            <Link href={`/learning-center/category/${article.category}`} className="hover:text-navy transition-colors capitalize">
              {categoryMeta.label}
            </Link>
            <span>/</span>
            <span className="text-gray-700 truncate max-w-[200px]">{article.title}</span>
          </nav>
        </div>
      </div>

      <main className="bg-white">
        <div className="container-wide py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Article Content */}
            <article className="lg:col-span-8">
              {/* Back Link */}
              <Link
                href="/learning-center"
                className="inline-flex items-center gap-2 text-sm text-navy/70 hover:text-navy transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Learning Center
              </Link>

              {/* Category Badge */}
              <div className="mb-4">
                <Link
                  href={`/learning-center/category/${article.category}`}
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-navy/10 text-navy hover:bg-navy/20 transition-colors"
                >
                  {categoryMeta.label}
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-6 font-poppins">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-200 mb-8">
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">CK</div>
                  <span className="font-medium text-gray-700">{BUSINESS.owner}</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {article.readTime} min read
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {/* Lead paragraph */}
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8">
                  {paragraphs[0]}
                </p>

                {paragraphs.slice(1).map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-6">
                    {para}
                  </p>
                ))}

                {/* Key Takeaways */}
                <div className="bg-navy/5 border border-navy/10 rounded-2xl p-6 my-10">
                  <h3 className="text-lg font-bold text-navy mb-4 font-poppins">Key Takeaways</h3>
                  <ul className="space-y-3">
                    {[
                      "Every family's situation is unique — there's no universal coverage amount.",
                      "Buying younger locks in lower premiums for the life of your policy.",
                      "Independent brokers shop multiple carriers, not just one company's products.",
                      "A free consultation costs nothing and could save your family thousands.",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Ready to take the next step? Courtney offers free, no-obligation consultations by phone or video — available evenings and weekends to fit your schedule. Call{" "}
                  <a href={`tel:${BUSINESS.phone}`} className="text-navy font-semibold hover:underline">
                    {BUSINESS.phone}
                  </a>{" "}
                  or use the button below to schedule a time that works for you.
                </p>
              </div>

              {/* Tags */}
              {article.tags && (
                <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-200">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Author Card */}
              <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex gap-4">
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  CK
                </div>
                <div>
                  <p className="font-bold text-navy text-lg font-poppins">{BUSINESS.owner}</p>
                  <p className="text-sm text-gold font-semibold mb-2">Licensed Insurance Broker · {BUSINESS.stateCount} States</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Courtney is an independent life insurance broker helping families across {BUSINESS.stateCount} states find the coverage they need at a price that makes sense. She works with multiple top-rated carriers to deliver personalized, no-pressure guidance.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* CTA Card */}
              <div className="bg-navy text-white rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-2 font-poppins">Get Your Free Quote</h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Have questions about your coverage options? Courtney offers free, no-pressure consultations — phone or virtual.
                </p>
                <a
                  href={BUSINESS.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center block mb-3"
                >
                  Schedule Consultation
                </a>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-navy text-lg mb-4 font-poppins flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gold" />
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/learning-center/${related.slug}`}
                        className="block group"
                      >
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-navy transition-colors leading-snug mb-1">
                          {related.title}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {related.readTime} min read
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={`/learning-center/category/${article.category}`}
                    className="mt-4 block text-sm text-navy font-semibold hover:underline"
                  >
                    View all {categoryMeta.label} articles →
                  </Link>
                </div>
              )}

              {/* Share */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share this article
                </p>
                <p className="text-xs text-gray-500">
                  Know someone who could benefit from this information? Share it with a friend or family member who's thinking about life insurance.
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-br from-navy to-navy-800 py-16">
          <div className="container-narrow text-center text-white">
            <h2 className="text-3xl font-bold mb-4 font-poppins">
              Ready to Protect Your Family?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get a free, no-obligation quote from Courtney. Phone and virtual appointments available on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold">
                Get My Free Quote
              </Link>
              <a href={`tel:${BUSINESS.phone}`} className="btn-outline-white">
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
