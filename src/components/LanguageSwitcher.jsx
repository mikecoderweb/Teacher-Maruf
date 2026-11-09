import { useLanguage } from '../i18n/LanguageContext.jsx';

const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'uz', label: 'UZ', name: 'O‘zbekcha' },
  { code: 'ru', label: 'RU', name: 'Русский' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div role="group" aria-label="Language" className="inline-flex rounded-full border border-ink/15 p-1 text-xs font-semibold">
      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLang(item.code)}
          aria-pressed={lang === item.code}
          aria-label={item.name}
          className={`rounded-full px-2.5 py-1.5 transition sm:px-3 ${
            lang === item.code ? 'bg-panel text-ink' : 'text-ink/60 hover:text-ink'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
