import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Clock, BookOpen, Search } from "lucide-react";
import {
  ALL_ARTICLES,
  CATEGORY_META,
  FEATURED_ARTICLES,
  ArticleCategory,
  getArticlesByCategory,
} from "@/lib/articles-data";

export const metadata: Metadata = {
  title: "Learning Center | CK Financial",
  description:
    "Learn everything about life insurance — from final expense to retirement planning. Educational articles written for real people, not insurance professionals.",
  openGraph: {
    title: "CK Financial Learning Center",
    description:
      "200+ educational articles on life insurance, family protection, estate planning, and more.",
    type: "website",
  },
  alternates: {
    canonical: "https://ckfinancial.com/learning-center",
  },
};

const CATEGORIES = Object.keys(CATEGORY_META) as ArticleCategory[];

export default function LearningCenterPage() {
  const recentArticles = [...ALL_ARTICLES]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy/90 pt-32 pb-20">
        <div className="container-wide text-center">
          <AnimateOnScroll>
            <div className="section-label text-gold mb-3">{ALL_ARTICLES.length}+ Educational Articles</div>
            <h1 className="section-title text-white mb-4">CK Financial Learning Center</h1>
            <p className="section-subtitle text-white/70 max-w-2xl mx-auto mb-8">
              Life insurance doesn&apos;t have to be confusing. Our guides explain everything in plain English — so you can make confident decisions for your family.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <AnimateOnScroll>
            <h2 className="section-title text-navy text-center mb-2">Browse by Topic</h2>
            <p className="text-center text-gray-500 mb-10">Find articles tailored to your situation and goals</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => {
              const meta = CATEGORY_META[cat];
              const count = getArticlesByCategory(cat).length;
              return (
                <AnimateOnScroll key={cat}>
                  <Link
                    href={`/learning-center/category/${cat}`}
                    className={`bg-gradient-to-br ${meta.color} rounded-2xl p-5 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group block`}
                  >
                    <h3 className="font-bold text-navy text-base mb-1 font-poppins group-hover:text-gold transition-colors">
                      {meta.label}
                    </h3>
                    <p className="text-gray-500 text-xs leading-snug mb-3 line-clamp-2">{meta.description}</p>
                    <span className="text-xs font-semibold text-navy/60 flex items-center gap-1 group-hover:gap-2 transition-all">
                      {count} articles <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <AnimateOnScroll>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="section-label text-gold mb-1">Editor&apos;s Picks</div>
                <h2 className="text-2xl font-bold text-navy font-poppins">Featured Articles</h2>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_ARTICLES.map((article) => {
              const catMeta = CATEGORY_META[article.category];
              return (
                <AnimateOnScroll key={article.slug}>
                  <Link href={`/learning-center/${article.slug}`}>
                    <article className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                      <div className={`bg-gradient-to-br ${catMeta.color} h-28 flex items-center justify-center`}>
                        <BookOpen className="w-8 h-8 text-navy/20" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">
                          {catMeta.label}
                        </span>
                        <h3 className="font-bold text-navy text-sm leading-snug mb-2 group-hover:text-gold transition-colors font-poppins flex-1">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min read
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <AnimateOnScroll>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="section-label text-gold mb-1">Fresh Content</div>
                <h2 className="text-2xl font-bold text-navy font-poppins">Recently Published</h2>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            {recentArticles.map((article) => {
              const catMeta = CATEGORY_META[article.category];
              const date = new Date(article.publishDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
              return (
                <AnimateOnScroll key={article.slug}>
                  <Link href={`/learning-center/${article.slug}`}>
                    <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-5 hover:shadow-card transition-all group flex gap-4 items-center">
                      <div className={`bg-gradient-to-br ${catMeta.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <BookOpen className="w-5 h-5 text-navy/30" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-gold">{catMeta.label}</span>
                          <span className="text-gray-300">·</span>
                          <span className="text-xs text-gray-400">{date}</span>
                        </div>
                        <h3 className="font-semibold text-navy text-sm group-hover:text-gold transition-colors font-poppins leading-snug">
                          {article.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0">
                        <Clock className="w-3 h-3" />
                        {article.readTime} min
                      </div>
                      <ArrowRight className="w-4 h-4 text-navy/30 group-hover:text-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Categories Deep Dive */}
      {CATEGORIES.map((cat) => {
        const meta = CATEGORY_META[cat];
        const articles = getArticlesByCategory(cat).slice(0, 4);
        return (
          <section key={cat} className="py-14 border-b border-gray-100 bg-white">
            <div className="container-wide">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="section-label text-gold">{meta.label}</span>
                  <h2 className="text-xl font-bold text-navy font-poppins mt-1">{meta.description.split("—")[0].trim()}</h2>
                </div>
                <Link
                  href={`/learning-center/category/${cat}`}
                  className="text-sm font-semibold text-navy hover:text-gold transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {articles.map((article) => (
                  <Link key={article.slug} href={`/learning-center/${article.slug}`}>
                    <div className="bg-gray-50 rounded-xl p-4 hover:bg-navy/5 hover:shadow-soft transition-all group h-full">
                      <h3 className="text-sm font-semibold text-navy leading-snug mb-2 group-hover:text-gold transition-colors font-poppins">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        {article.readTime} min read
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
