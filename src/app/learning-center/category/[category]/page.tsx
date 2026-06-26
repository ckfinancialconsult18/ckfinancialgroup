import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import {
  ALL_ARTICLES,
  CATEGORY_META,
  ArticleCategory,
  getArticlesByCategory,
} from "@/lib/articles-data";
import { BUSINESS } from "@/lib/utils";

interface Props {
  params: Promise<{ category: string }>;
}

const VALID_CATEGORIES = Object.keys(CATEGORY_META) as ArticleCategory[];

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!VALID_CATEGORIES.includes(category as ArticleCategory)) {
    return { title: "Category Not Found" };
  }
  const meta = CATEGORY_META[category as ArticleCategory];
  return {
    title: `${meta.label} Articles | CK Financial Learning Center`,
    description: meta.description,
    alternates: {
      canonical: `https://ckfinancial.com/learning-center/category/${category}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!VALID_CATEGORIES.includes(category as ArticleCategory)) notFound();

  const cat = category as ArticleCategory;
  const meta = CATEGORY_META[cat];
  const articles = getArticlesByCategory(cat);
  const featuredArticle = articles[0];
  const restArticles = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy/90 py-16">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/learning-center" className="hover:text-white transition-colors">Learning Center</Link>
            <span>/</span>
            <span className="text-white">{meta.label}</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label text-gold mb-3">{articles.length} Articles</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              {meta.label}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {meta.description}
            </p>
          </div>
        </div>
      </section>

      {/* Category Nav */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-20">
        <div className="container-wide overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            <Link
              href="/learning-center"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              All Topics
            </Link>
            {VALID_CATEGORIES.map((c) => (
              <Link
                key={c}
                href={`/learning-center/category/${c}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  c === cat
                    ? "bg-navy text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {CATEGORY_META[c].label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <main className="bg-gray-50 py-16">
        <div className="container-wide">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-12">
              <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Featured Article</p>
              <Link href={`/learning-center/${featuredArticle.slug}`}>
                <div className="bg-white rounded-3xl shadow-card overflow-hidden hover:shadow-gold transition-all duration-300 group">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className={`bg-gradient-to-br ${meta.color} p-12 flex items-center justify-center min-h-[280px]`}>
                      <div className="text-center">
                        <BookOpen className="w-16 h-16 text-navy/30 mx-auto mb-4" />
                        <span className="text-5xl font-bold text-navy/10 font-poppins">01</span>
                      </div>
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-xs font-semibold rounded-full mb-4">
                        {meta.label}
                      </span>
                      <h2 className="text-2xl font-bold text-navy mb-3 font-poppins group-hover:text-gold transition-colors leading-tight">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime} min read
                        </div>
                        <span className="text-navy font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Rest of Articles */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6 font-poppins">
              All {meta.label} Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restArticles.map((article) => (
                <Link key={article.slug} href={`/learning-center/${article.slug}`}>
                  <article className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                    <div className={`bg-gradient-to-br ${meta.color} h-32 flex items-center justify-center`}>
                      <BookOpen className="w-8 h-8 text-navy/20" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-bold text-navy text-base leading-snug mb-2 group-hover:text-gold transition-colors font-poppins">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min
                        </div>
                        <span className="text-xs text-navy font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-navy rounded-3xl p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-3 font-poppins">
              Questions About {meta.label}?
            </h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Courtney is a licensed broker who specializes in helping families find the right coverage. Free consultations, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-gold">
                Schedule Free Consultation
              </Link>
              <a href={`tel:${BUSINESS.phone}`} className="btn-outline-white">
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
