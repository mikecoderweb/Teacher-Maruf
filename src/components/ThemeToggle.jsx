import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLanguage();
  const isLight = theme === 'light';
  const label = isLight ? t('theme_to_dark') : t('theme_to_light');

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/15 bg-ink/[0.04] text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-gold"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
