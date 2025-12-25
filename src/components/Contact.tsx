import { useI18n } from '../contexts/I18nContext';
import { translations } from '../data/translations';

export default function Contact() {
  const { language } = useI18n();
  const t = translations[language];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FEEADA]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1D] mb-6">
          {t.contactTitle}
        </h2>
        <p className="text-lg text-[#575655] mb-8 leading-relaxed">
          {t.contactText}
        </p>
        <a
          href="https://t.me/nodepaynews"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[#201E1D] hover:text-[#FC7321] border-b-2 border-[#201E1D] hover:border-[#FC7321] transition-colors pb-1"
        >
          {t.contactButton}
        </a>
      </div>
    </section>
  );
}
