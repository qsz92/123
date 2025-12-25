import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useI18n } from '../contexts/I18nContext';
import { translations } from '../data/translations';
import { articles } from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABox from '../components/CTABox';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useI18n();
  const t = translations[language];

  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-[#201E1D] mb-4">
            {language === 'en' ? 'Article not found' : 'Статья не найдена'}
          </h1>
          <Link to="/" className="text-[#FC7321] hover:underline">
            {language === 'en' ? 'Back to home' : 'На главную'}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {article.isAd && (
          <span className="inline-block text-sm text-[#575655] mb-4 px-3 py-1 bg-gray-100 rounded">
            {t.adLabel}
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#201E1D] mb-8 leading-tight">
          {article.title[language]}
        </h1>
        <div
          className="prose prose-lg max-w-none article-content"
          dangerouslySetInnerHTML={{ __html: article.content[language] }}
        />
        <CTABox />
      </article>
      <Footer />
    </div>
  );
}
