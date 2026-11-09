import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Download, Eye, Quote } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { BOOK_REVIEW, CONTACT, PAYMENT } from '../data/content.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Modal from './Modal.jsx';

const formatPrice = (value) => value.toLocaleString('de-DE');

const BOOKS = [
  { prefix: 'book1', cover: '/books/cover-grammar.png', sample: '/books/namuna.pdf' },
  { prefix: 'book2', cover: '/books/cover-beginner.jpg' },
];

function BookCard({ book, onPreview }) {
  const { t } = useLanguage();
  const p = book.prefix;

  return (
    <article className="group card flex h-full flex-col overflow-hidden !p-0 sm:flex-row">
      <div className="flex items-center justify-center bg-[#f4f1ea] p-8 [perspective:900px] sm:w-2/5">
        <img
          src={book.cover}
          alt={t(`${p}_title`)}
          loading="lazy"
          className="w-full max-w-[200px] rounded-md shadow-2xl transition duration-700 ease-out group-hover:[transform:rotateY(-14deg)_translateY(-4px)]"
        />
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
          {t(`${p}_tag`)}
        </span>
        <h3 className="mt-4 text-xl font-bold leading-snug text-ink">{t(`${p}_title`)}</h3>

        <ul className="mt-5 space-y-3">
          {t(`${p}_points`).map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
              <Check size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm font-medium text-ink/50">{t(`${p}_for`)}</p>

        <div className="mt-auto pt-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-ink">{formatPrice(PAYMENT.bookPrice)}</span>
            <span className="text-sm font-semibold text-ink/50">{t('sum')}</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" onClick={() => onPreview(book)} className="btn-outline flex-1 basis-36">
              <Eye size={16} aria-hidden="true" className="shrink-0" /> {t('preview')}
            </button>
            {book.sample ? (
              <a href={book.sample} download className="btn-outline flex-1 basis-48 whitespace-nowrap !px-5">
                <Download size={16} aria-hidden="true" className="shrink-0" /> {t('book_sample')}
              </a>
            ) : (
              <span className="hidden sm:block" aria-hidden="true" />
            )}
          </div>

          <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 w-full">
            {t('order_now')} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function BookPreview({ book, onClose }) {
  const { t } = useLanguage();
  const p = book.prefix;

  return (
    <Modal label={t(`${p}_title`)} wide onClose={onClose}>
      <div className="grid gap-8 md:grid-cols-5">
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-[#f4f1ea] md:col-span-3">
          {book.sample ? (
            <>
              <iframe
                src={`${book.sample}#toolbar=0&navpanes=0&view=FitH`}
                title={t(`${p}_title`)}
                className="hidden h-[65vh] w-full md:block"
              />
              <div className="flex flex-col items-center gap-5 p-8 text-center md:hidden">
                <img src={book.cover} alt={t(`${p}_title`)} className="max-h-[50vh] rounded-md shadow-2xl" />
                <a href={book.sample} download className="btn-outline">
                  <Download size={16} aria-hidden="true" className="shrink-0" /> {t('book_sample')}
                </a>
              </div>
            </>
          ) : (
            <img src={book.cover} alt={t(`${p}_title`)} className="mx-auto max-h-[65vh] p-6" />
          )}
        </div>

        <div className="flex flex-col md:col-span-2">
          <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            {t(`${p}_tag`)}
          </span>
          <h3 className="mt-4 text-2xl font-bold leading-snug text-ink">{t(`${p}_title`)}</h3>
          <ul className="mt-5 space-y-3">
            {t(`${p}_points`).map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                <Check size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink/50">{t(`${p}_for`)}</p>

          {!book.sample && <p className="mt-4 text-sm text-ink/50">{t('preview_soon')}</p>}

          <div className="mt-auto pt-8">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-ink">{formatPrice(PAYMENT.bookPrice)}</span>
              <span className="text-sm font-semibold text-ink/50">{t('sum')}</span>
            </div>
            <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 w-full">
              {t('order_now')} <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default function Books() {
  const { t, lang } = useLanguage();
  const [preview, setPreview] = useState(null);

  return (
    <section id="books" className="scroll-mt-24 bg-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={t('books_eyebrow')} title={t('books_title')} subtitle={t('books_sub')} />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {BOOKS.map((book, i) => (
            <Reveal key={book.prefix} delay={i * 0.1} className="h-full">
              <BookCard book={book} onPreview={setPreview} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <figure className="card mx-auto max-w-3xl !p-8 sm:!p-10">
            <Quote size={26} className="text-gold" aria-hidden="true" />
            <blockquote className="mt-4 text-lg leading-relaxed text-ink/80">“{BOOK_REVIEW[lang]}”</blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-gold">
              {t('reader_label')} · {t('books_review_title')}
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <AnimatePresence>
        {preview && <BookPreview key={preview.prefix} book={preview} onClose={() => setPreview(null)} />}
      </AnimatePresence>
    </section>
  );
}
