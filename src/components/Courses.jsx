import { Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { COURSES, CONTACT } from '../data/content.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const formatPrice = (value) => value.toLocaleString('de-DE'); // 499.000 style used in Uzbekistan

function CourseCard({ course }) {
  const { t, lang } = useLanguage();

  return (
    <div className="card flex h-full flex-col">
      <h3 className="text-xl font-bold text-ink">{course.name[lang]}</h3>
      <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-ink/60">{course.desc[lang]}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-extrabold tracking-tight text-ink">{formatPrice(course.price)}</span>
        <span className="text-sm font-semibold text-ink/60">UZS {t('per_month')}</span>
      </div>

      <span className="mt-4 inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
        {t('lessons_week', course.lessonsPerWeek)}
      </span>

      <div className="mt-6 border-t border-ink/10 pt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">{t('included')}</p>
        <ul className="mt-4 space-y-3">
          {course.included[lang].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
              <Check size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={CONTACT.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-8 w-full"
      >
        {t('enroll_course')}
      </a>
    </div>
  );
}

export default function Courses() {
  const { t } = useLanguage();
  const groups = COURSES.filter((c) => c.type === 'group');
  const individual = COURSES.filter((c) => c.type === 'individual');

  return (
    <section id="courses" className="scroll-mt-24 bg-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={t('courses_eyebrow')} title={t('courses_title')} subtitle={t('courses_sub')} />

        <div className="mt-16">
          <h3 className="mb-6 text-lg font-bold text-ink">{t('group_heading')}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {groups.map((course, i) => (
              <Reveal key={course.id} delay={i * 0.08}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-lg font-bold text-ink">{t('individual_heading')}</h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {individual.map((course, i) => (
              <Reveal key={course.id} delay={i * 0.08}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
