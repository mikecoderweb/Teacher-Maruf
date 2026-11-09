import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { TESTIMONIALS } from '../data/content.js';

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const item = TESTIMONIALS[index];

  // Auto-advance; the timer restarts whenever the slide changes.
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(id);
  }, [index, total]);

  const go = (step) => setIndex((i) => (i + step + total) % total);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="card relative min-h-[16rem] overflow-hidden !p-10 text-center">
        <Quote size={32} className="mx-auto text-gold" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            aria-live="polite"
          >
            <p className="mt-5 text-xl font-semibold leading-relaxed text-ink sm:text-2xl">“{item.original}”</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/55">
              {t('translation_label')}: {lang === 'ru' ? item.ru : item.en}
            </p>
            <p className="mt-6 text-sm font-semibold text-accent">
              {item.student} · Speaking {item.speaking}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="rounded-full border border-ink/15 bg-panel p-2.5 text-ink transition hover:border-accent hover:text-accent"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2" role="tablist">
          {TESTIMONIALS.map((testimonial, i) => (
            <button
              key={testimonial.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-accent' : 'w-2 bg-ink/20'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="rounded-full border border-ink/15 bg-panel p-2.5 text-ink transition hover:border-accent hover:text-accent"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
