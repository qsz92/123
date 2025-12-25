import { Link } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext';
import { translations } from '../data/translations';

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  isAd?: boolean;
}

export default function ArticleCard({ slug, title, description, isAd }: ArticleCardProps) {
  const { language } = useI18n();
  const t = translations[language];

  return (
    <Link
      to={`/article/${slug}`}
      className="block p-6 rounded-lg hover:bg-[#FEEADA] transition-colors group"
    >
      {isAd && (
        <span className="inline-block text-xs text-[#575655] mb-2 px-2 py-1 bg-gray-100 rounded">
          {t.adLabel}
        </span>
      )}
      <h3 className="text-xl font-semibold text-[#201E1D] mb-2 group-hover:text-[#FC7321] transition-colors">
        {title}
      </h3>
      <p className="text-[#575655] mb-4 leading-relaxed">
        {description}
      </p>
      <span className="text-[#575655] group-hover:text-[#FC7321] transition-colors border-b border-transparent group-hover:border-[#FC7321]">
        {t.readMore} →
      </span>
    </Link>
  );
}
