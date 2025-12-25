import { useI18n } from '../contexts/I18nContext';
import { translations } from '../data/translations';
import { articles } from '../data/articles';
import ArticleCard from './ArticleCard';

export default function ArticleGrid() {
  const { language } = useI18n();
  const t = translations[language];

  return (
    <section id="articles" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1D] mb-12 text-center">
          {t.articlesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              title={article.title[language]}
              description={article.description[language]}
              isAd={article.isAd}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
