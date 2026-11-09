import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Lightbox({ src, alt, closeLabel, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-canvas/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute right-4 top-4 rounded-full bg-surface/10 p-2.5 text-ink transition hover:bg-surface/20"
      >
        <X size={22} />
      </button>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl"
      />
    </motion.div>
  );
}
