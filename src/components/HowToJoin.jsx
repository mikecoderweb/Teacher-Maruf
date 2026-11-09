import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { CONTACT } from '../data/content.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { TelegramIcon } from './icons.jsx';

export default function HowToJoin() {
  const { t } = useLanguage();

  return (
    <section className="bg-panel py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="[&_h2]:text-ink [&_p]:text-ink/60 [&_p.text-accent]:text-gold">
          <SectionHeading eyebrow={t('how_eyebrow')} title={t('how_title')} />
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {t('steps').map((step, i) => (
            <li key={step.title} className="h-full">
              <Reveal delay={i * 0.1} className="h-full rounded-3xl border border-ink/10 bg-surface/[0.03] p-8">
                <span className="text-5xl font-extrabold text-gold/80">0{i + 1}</span>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/60">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-14 flex justify-center">
          <a
            href={CONTACT.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-panel px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold hover:text-ink"
          >
            <TelegramIcon className="h-5 w-5" />
            {t('how_cta')}
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
