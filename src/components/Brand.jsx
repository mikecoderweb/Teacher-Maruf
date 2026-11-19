/*
 * One brand block used in the navbar and the footer, so both show the
 * same mark size and the same name style in light and dark themes.
 * The mark is the cropped academy symbol; the name uses the theme text colour.
 */
export default function Brand({ hideNameOnTiny = false, className = '' }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center sm:h-11 sm:w-11">
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
