import { useI18n } from '../contexts/I18nContext';
import { translations } from '../data/translations';

export default function Footer() {
  const { language } = useI18n();
  const t = translations[language];

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-[#575655] text-center">
          {t.footerDisclaimer}
        </p>
      </div>
    </footer>
  );
}
