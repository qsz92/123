import { useI18n } from '../contexts/I18nContext';
import { translations } from '../data/translations';

export default function Header() {
  const { language, setLanguage } = useI18n();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-lg font-medium text-[#201E1D]">
            {t.siteTitle}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('faq')}
              className="text-[#575655] hover:text-[#FC7321] transition-colors"
            >
              {t.faqNav}
            </button>
            <button
              onClick={() => scrollToSection('articles')}
              className="text-[#575655] hover:text-[#FC7321] transition-colors"
            >
              {t.guidesNav}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#575655] hover:text-[#FC7321] transition-colors"
            >
              {t.contactNav}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'text-[#FC7321] bg-[#FEEADA]'
                    : 'text-[#575655] hover:text-[#FC7321]'
                }`}
              >
                EN
              </button>
              <span className="text-[#575655]">/</span>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'ru'
                    ? 'text-[#FC7321] bg-[#FEEADA]'
                    : 'text-[#575655] hover:text-[#FC7321]'
                }`}
              >
                RU
              </button>
            </div>

            <a
              href="https://beta.nodepay.ai/ref/0wpyjyndpdog4me"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 bg-[#FC7321] text-white rounded-xl hover:bg-[#e66818] transition-colors"
            >
              {t.joinButton}
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded transition-colors ${
                  language === 'en'
                    ? 'text-[#FC7321] bg-[#FEEADA]'
                    : 'text-[#575655]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 text-sm rounded transition-colors ${
                  language === 'ru'
                    ? 'text-[#FC7321] bg-[#FEEADA]'
                    : 'text-[#575655]'
                }`}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
