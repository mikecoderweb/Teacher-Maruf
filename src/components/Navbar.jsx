import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Brand from './Brand.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const LINKS = [
  { href: '#about', key: 'nav_about' },
  { href: '#courses', key: 'nav_courses' },
  { href: '#mock', key: 'nav_mock' },
  { href: '#books', key: 'nav_books' },
  { href: '#results', key: 'nav_results' },
  { href: '#registration', key: 'nav_registration' },
  { href: '#contact', key: 'nav_contact' },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-500 sm:px-4 ${
          scrolled
            ? 'border-ink/10 bg-canvas/80 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.8)]'
            : 'border-ink/[0.08] bg-canvas/40'
        }`}
      >
        <a href="#home" onClick={close} className="shrink-0 pl-1">
          <Brand hideNameOnTiny />
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-ink/60 hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-ink/[0.08] ring-1 ring-accent/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative whitespace-nowrap">{t(link.key)}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <a href="#contact" className="btn-primary !px-5 !py-2.5">
            {t('enroll')}
          </a>
        </div>

        <div className="shrink-0 xl:hidden">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink/[0.06] text-ink transition hover:bg-ink/10 xl:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 top-[4.5rem] max-h-[80vh] overflow-y-auto rounded-3xl border border-ink/10 bg-canvas/95 p-5 shadow-2xl backdrop-blur-xl xl:hidden sm:inset-x-5"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                >
                  <a
                    href={link.href}
                    onClick={close}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-ink transition hover:bg-ink/[0.05]"
                  >
                    {t(link.key)}
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
              <LanguageSwitcher />
              <ThemeToggle />
              <a href="#contact" onClick={close} className="btn-primary !px-5 !py-2.5">
                {t('enroll')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
