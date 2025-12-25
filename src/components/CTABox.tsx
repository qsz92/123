import { useI18n } from '../contexts/I18nContext';
import { translations } from '../data/translations';

export default function CTABox() {
  const { language } = useI18n();
  const t = translations[language];

  return (
    <div className="mt-12 p-8 bg-[#FEEADA] rounded-2xl">
      <h3 className="text-2xl font-bold text-[#201E1D] mb-4">
        {t.ctaTitle}
      </h3>
      <p className="text-[#575655] mb-6 leading-relaxed">
        {t.ctaText}
      </p>
      <a
        href="https://t.me/nodepaynews"
        target="_blank"
        rel="noreferrer"
        className="inline-block text-[#201E1D] hover:text-[#FC7321] border-b-2 border-[#201E1D] hover:border-[#FC7321] transition-colors pb-1"
      >
        {t.ctaButton}
      </a>
    </div>
  );
}
