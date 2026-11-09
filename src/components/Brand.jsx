/*
 * One brand block used in the navbar and the footer, so both show the
 * same mark size and the same name style in light and dark themes.
 * The mark is the square logo; the name uses the theme text colour.
 */
export default function Brand({ hideNameOnTiny = false, className = '' }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="grid h-10 w-10 shrink-0 sm:h-11 sm:w-11 place-items-center rounded-xl bg-canvas ring-1 ring-ink/15 shadow-[0_0_24px_-6px_rgba(245,158,11,0.45)]">
        <img src="/logo-mark.png" alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
      </span>
      <span
        className={`text-base font-bold tracking-tight text-ink sm:text-lg ${
          hideNameOnTiny ? 'hidden min-[420px]:inline' : ''
        }`}
      >
        Teacher Maruf
      </span>
    </span>
  );
}
