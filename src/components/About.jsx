import { CheckCircle2, Quote } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import TeacherPhoto from './TeacherPhoto.jsx';
import CountUp from './CountUp.jsx';

const STATS = [
  { to: 7, suffix: '+', key: 'stat_years' },
  { to: 8.5, decimals: 1, key: 'stat_band' },
  { to: 5, key: 'stat_formats' },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 bg-panel py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-5 lg:grid-cols-12 lg:px-8">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-4 rounded-full border border-gold/40" aria-hidden="true" />
            <TeacherPhoto className="aspect-square w-full rounded-full shadow-xl" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading align="left" eyebrow={t('about_eyebrow')} title={t('about_title')} />

          <Reveal delay={0.1} className="mt-8 space-y-8">
            <p className="text-lg leading-relaxed text-ink/75">{t('about_bio')}</p>

            <div className="border-l-2 border-gold pl-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{t('philosophy_title')}</h3>
              <p className="mt-3 leading-relaxed text-ink/75">{t('philosophy')}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{t('approach_title')}</h3>
              <ul className="mt-4 space-y-3">
                {t('approach').map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/80">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{t('creds_title')}</h3>
              <ul className="mt-4 space-y-3">
                {t('creds').map((item) => (
                  <li key={item} className="rounded-2xl bg-deep px-5 py-4 text-sm font-medium text-ink/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <figure className="relative rounded-3xl bg-panel p-8 text-ink">
              <Quote size={28} className="text-gold" aria-hidden="true" />
              <p className="mt-4 text-lg leading-relaxed text-ink/90">{t('message')}</p>
              <figcaption className="mt-6 text-sm font-semibold text-gold">{t('message_title')}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      <Reveal className="mx-auto mt-20 grid max-w-5xl grid-cols-3 gap-3 px-5 sm:gap-6 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.key} className="rounded-3xl border border-ink/10 bg-deep p-5 text-center sm:p-8">
            <p className="text-3xl font-extrabold text-accent sm:text-5xl">
              <CountUp to={stat.to} decimals={stat.decimals} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs font-medium leading-snug text-ink/60 sm:text-sm">{t(stat.key)}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
