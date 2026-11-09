import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { CONTACT, RESULTS } from '../data/content.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Testimonials from './Testimonials.jsx';
import Lightbox from './Lightbox.jsx';
import { TelegramIcon } from './icons.jsx';

const SKILLS = ['listening', 'reading', 'writing', 'speaking'];

// Every card (result cards and the Telegram card) shares exactly these dimensions.
const SCROLLER =
  'flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden';
const SLIDE =
  'w-[78%] max-w-[320px] shrink-0 snap-center sm:w-[300px] lg:w-[320px] flex flex-col !p-4 sm:!p-5';
const IMAGE_BOX =
  'flex h-[340px] w-full items-center justify-center rounded-2xl border border-ink/10 bg-panel p-3 sm:h-[340px] lg:h-[400px]';

function ResultCard({ result, onOpen, t }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(result)}
      className={`card group ${SLIDE} text-left hover:border-gold/40`}
    >
      <div className={IMAGE_BOX}>
        <img
          src={result.image}
          alt={`${result.name} · IELTS ${t('overall')} ${result.scores.overall.toFixed(1)}`}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="mt-auto flex items-end justify-between px-1 pt-5">
        <div>
          <p className="font-bold text-ink">{result.name}</p>
          <p className="mt-0.5 text-xs text-ink/50">{result.exam}</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/50">{t('speaking')}</p>
          <p className="text-3xl font-extrabold text-gradient">{result.scores.speaking.toFixed(1)}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between px-1 text-sm text-ink/60">
        <span>{t('speaking')}</span>
        <span className="text-lg font-bold text-gold">{result.scores.speaking.toFixed(1)}</span>
      </div>
    </button>
  );
}

function MoreCard({ t }) {
  return (
    <a
      href={CONTACT.resultsChannelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`card group ${SLIDE} justify-between hover:border-gold/40`}
    >
      <div className="flex h-[340px] w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-gold p-6 text-center sm:h-[340px] lg:h-[400px]">
        <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl">
          <TelegramIcon className="h-9 w-9 text-gold" />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#090d16]/80">{t('fame_more')}</p>
        <p className="mt-2 text-xl font-extrabold text-[#090d16] sm:text-2xl">{CONTACT.resultsChannelHandle}</p>
      </div>

      <p className="mt-auto px-1 pt-5 text-sm text-ink/60">{t('fame_more_text')}</p>

      <span className="btn-primary mt-5 w-full !min-h-[2.75rem] py-2.5 text-sm">
        Telegram <ArrowRight size={16} aria-hidden="true" className="shrink-0" />
      </span>
    </a>
  );
}

export default function Results() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(null);
  const scrollRef = useRef(null);

  const items = [...RESULTS].sort((a, b) => b.scores.speaking - a.scores.speaking);

  const [edges, setEdges] = useState({ start: true, end: false });

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  };

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section id="results" className="scroll-mt-24 bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={t('fame_eyebrow')} title={t('fame_title')} subtitle={t('fame_sub')} />

        <div className="mt-12">
          <p className="text-sm text-ink/50" aria-live="polite">
            {t('fame_count', items.length)}
          </p>
        </div>

        <div className="relative mt-6">
        <motion.div
          key="results"
          ref={scrollRef}
          onScroll={onScroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className={`${SCROLLER} lg:-mx-8 lg:px-8`}
        >
          {items.map((result) => (
            <ResultCard key={result.id} result={result} onOpen={setOpen} t={t} />
          ))}
          <MoreCard t={t} />
        </motion.div>

          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            disabled={edges.start}
            className={`absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full sm:h-11 sm:w-11 border border-ink/10 bg-canvas/90 text-ink/70 shadow-lg backdrop-blur transition duration-300 hover:border-gold/40 hover:text-ink ${edges.start ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            style={{ left: '0.25rem' }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next"
            disabled={edges.end}
            className={`absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full sm:h-11 sm:w-11 border border-ink/10 bg-canvas/90 text-ink/70 shadow-lg backdrop-blur transition duration-300 hover:border-gold/40 hover:text-ink ${edges.end ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            style={{ right: '0.25rem' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {items.length === 0 && <p className="mt-10 text-center text-ink/50">{t('fame_empty')}</p>}

        <div className="mt-24">
          <h3 className="mb-10 text-center text-2xl font-bold text-ink">{t('testimonials_title')}</h3>
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </div>

      {open && (
        <Lightbox
          key={open.id}
          src={open.image}
          alt={`${open.name} · IELTS`}
          closeLabel={t('close')}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
