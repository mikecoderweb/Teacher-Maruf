import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

export default function CountUp({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
