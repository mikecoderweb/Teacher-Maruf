import { ArrowUpRight, Check, Mic, Send } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { CHANNELS, CONTACT, PAYMENT } from '../data/content.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const formatPrice = (value) => value.toLocaleString('de-DE');

export default function MockTest() {
  const { t } = useLanguage();

  return (
    <section id="mock" className="scroll-mt-24 bg-panel py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={t('mock_eyebrow')} title={t('mock_title')} subtitle={t('mock_sub')} />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="card flex h-full flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Mic size={22} aria-hidden="true" />
              </span>
              <ul className="mt-6 space-y-4">
                {t('mock_features').map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/80">
                    <Check size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-baseline gap-2 border-t border-ink/10 pt-6">
                <span className="text-sm font-semibold text-ink/60">{t('mock_price_label')}:</span>
                <span className="text-4xl font-extrabold tracking-tight text-ink">{formatPrice(PAYMENT.mockPrice)}</span>
                <span className="text-sm font-semibold text-ink/60">{t('sum')}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-panel p-8 text-ink sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t('mock_pay_title')}</p>
              <h3 className="relative mt-4 text-2xl font-bold sm:text-3xl">{t('mock_book_title')}</h3>
              <p className="relative mt-3 leading-relaxed text-ink/65">{t('mock_book_text')}</p>

              <div className="relative mt-auto grid gap-3 pt-10 sm:grid-cols-2">
                <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  <Send size={16} aria-hidden="true" /> {t('mock_admin')}
                </a>
                <a href={CHANNELS.mockChannelUrl} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
                  {t('mock_channel_label').replace(/:\s*$/, '')} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
