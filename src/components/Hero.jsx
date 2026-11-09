import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { PROFILE } from '../data/content.js';
import TeacherPhoto from './TeacherPhoto.jsx';

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 700], [0, -70]);
  const words = t('hero_title').split(' ');
  const trust = [t('trust_lessons'), t('trust_attention'), t('trust_structure')];

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-70 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] animate-float rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <h1
            aria-label={t('hero_title')}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: EASE }}
                className={`mr-[0.28em] inline-block ${i === words.length - 1 ? 'text-gradient' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg lg:mx-0"
          >
            {t('hero_sub')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href="#courses" className="btn-primary">
              {t('explore')} <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              {t('join')}
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
            className="mt-12 grid gap-4 border-t border-ink/10 pt-8 text-left sm:grid-cols-3"
          >
            {trust.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm font-semibold text-ink">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-[420px] sm:max-w-md"
        >
          <div className="absolute -inset-5 rounded-full border border-gold/40" aria-hidden="true" />
          <div className="absolute -inset-2.5 animate-spin-slow rounded-full border border-dashed border-accent/20" aria-hidden="true" />
          <TeacherPhoto className="aspect-square w-full rounded-full shadow-2xl" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-2 rounded-2xl border border-ink/5 bg-panel px-4 py-3 shadow-xl sm:-bottom-2 sm:-left-8 sm:px-5 sm:py-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-gold">{t('hero_card_exp')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
