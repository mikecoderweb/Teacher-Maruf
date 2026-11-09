import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Modal({ label, onClose, wide = false, children }) {
  const { t } = useLanguage();

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-canvas/85 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className={`relative max-h-[90vh] w-full overflow-y-auto rounded-3xl border border-ink/10 bg-panel/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8 ${
          wide ? 'max-w-5xl' : 'max-w-lg'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t('close')}
          className="absolute right-4 top-4 rounded-full bg-ink/[0.06] p-2.5 text-ink transition hover:bg-ink/10"
        >
          <X size={20} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}
