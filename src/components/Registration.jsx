import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { CHANNELS, REVIEW_SHOTS } from '../data/content.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Lightbox from './Lightbox.jsx';
import { TelegramIcon } from './icons.jsx';

function ContactCard({ href, label, handle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card flex items-center gap-4 !p-6 hover:border-accent/40"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-ink">
        <TelegramIcon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wider text-ink/50">{label}</span>
        <span className="mt-0.5 block font-bold text-ink">{handle}</span>
      </span>
    </a>
  );
}

export default function Registration() {
  const { t } = useLanguage();
  const [activeShot, setActiveShot] = useState(null);
  const closeShot = () => setActiveShot(null);

  return (
    <section id="registration" className="scroll-mt-24 bg-panel py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={t('reg_eyebrow')} title={t('reg_title')} subtitle={t('reg_sub')} />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="card h-full !p-8 sm:!p-10">
              <h3 className="text-lg font-bold text-ink">{t('reg_bonus_title')}</h3>
              <ul className="mt-6 space-y-4">
                {t('reg_bonuses').map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/80">
                    <BadgeCheck size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4 lg:col-span-5">
            <ContactCard href={CHANNELS.idpUrl} label={t('reg_idp')} handle={CHANNELS.idpHandle} />
            <ContactCard href={CHANNELS.britishUrl} label={t('reg_british')} handle={CHANNELS.britishHandle} />
          </Reveal>
        </div>

        <div className="mt-24">
          <div className="mb-3 text-center">
            <h3 className="text-2xl font-bold text-ink">{t('reg_feedback_title')}</h3>
            <p className="mt-2 text-sm text-ink/50">{t('gallery_hint')}</p>
          </div>

          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-4">
            {REVIEW_SHOTS.map((src, i) => (
              <Reveal key={src} delay={i * 0.08} className="mb-5 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setActiveShot(src)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-ink/10 bg-panel shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <img
                    src={src}
                    alt={t('reg_feedback_title')}
                    loading="lazy"
                    className="w-full transition duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeShot && (
          <Lightbox
            key="lightbox"
            src={activeShot}
            alt={t('reg_feedback_title')}
            closeLabel={t('close')}
            onClose={closeShot}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
