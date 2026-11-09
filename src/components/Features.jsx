import { Mic, MessageSquare, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const ICONS = [Mic, MessageSquare, Users, Sparkles];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="bg-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={t('features_eyebrow')} title={t('features_title')} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t('features').map((feature, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={feature.title} delay={i * 0.08} className="h-full">
                <div className="card h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-ink">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{feature.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
