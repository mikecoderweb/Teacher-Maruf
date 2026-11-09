import { useState } from 'react';
import Brand from './Brand.jsx';

/*
 * Shows /public/teacher-maruf.jpg. If the file is missing,
 * a branded circle with the logo is shown instead.
 */
export default function TeacherPhoto({ className = '' }) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className={`flex items-center justify-center rounded-full bg-panel ${className}`}>
        <div className="p-4">
          <Brand />
        </div>
      </div>
    );
  }

  return (
    <img
      src="/teacher-maruf.jpg"
      alt="Teacher Maruf, English speaking instructor"
      onError={() => setMissing(true)}
      className={`object-cover ${className}`}
    />
  );
}
