import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Marquee() {
  const { t } = useLanguage();
  const items = [...t('marquee'), ...t('marquee')];

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-panel py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.2em] text-ink/80">
            {item}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
