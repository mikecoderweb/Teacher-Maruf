import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
