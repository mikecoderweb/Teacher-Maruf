import Brand from './Brand.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { CONTACT } from '../data/content.js';
import { InstagramIcon, TelegramIcon, YoutubeIcon } from './icons.jsx';

const LINKS = [
  { href: '#home', key: 'nav_home' },
  { href: '#about', key: 'nav_about' },
  { href: '#courses', key: 'nav_courses' },
  { href: '#mock', key: 'nav_mock' },
  { href: '#books', key: 'nav_books' },
  { href: '#results', key: 'nav_results' },
  { href: '#registration', key: 'nav_registration' },
  { href: '#contact', key: 'nav_contact' },
];

const SOCIALS = [
  { href: CONTACT.telegramUrl, label: 'Telegram', icon: TelegramIcon },
  { href: CONTACT.telegramChannelUrl, label: 'Telegram channel', icon: TelegramIcon },
  { href: CONTACT.youtubeUrl, label: 'YouTube', icon: YoutubeIcon },
  { href: CONTACT.instagramUrl, label: 'Instagram', icon: InstagramIcon },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-panel text-ink">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <Brand />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/60">{t('footer_tagline')}</p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t('footer_nav')}</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink/70 transition hover:text-ink">
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t('footer_follow')}</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a href={CONTACT.phoneHref} className="mt-6 block text-sm text-ink/70 hover:text-ink">
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="relative border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 text-xs text-ink/50 lg:px-8">
          <p>© {year} Teacher Maruf. {t('rights')}</p>
          <a
            href="https://fortisweb.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 underline underline-offset-2 transition hover:text-ink"
          >
            Created by FortisWeb
          </a>
        </div>
      </div>
    </footer>
  );
}
