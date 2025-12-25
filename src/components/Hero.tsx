import { useI18n } from '../contexts/I18nContext';
import { translations } from '../data/translations';

export default function Hero() {
  const { language } = useI18n();
  const t = translations[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#201E1D] mb-6 leading-tight">
          {t.heroTitle}
        </h1>
        <p className="text-lg sm:text-xl text-[#575655] mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.heroSubtitle}
        </p>
        <a
          href="https://t.me/nodepaynews"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[#201E1D] hover:text-[#FC7321] border-b-2 border-[#201E1D] hover:border-[#FC7321] transition-colors pb-1"
        >
          {t.heroCta}
        </a>
      </div>
    </section>
  );
}
