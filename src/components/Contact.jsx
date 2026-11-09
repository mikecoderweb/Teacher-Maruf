import { Phone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { CONTACT } from '../data/content.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { InstagramIcon, TelegramIcon, YoutubeIcon } from './icons.jsx';

function ChannelLink({ href, icon, label, value, external = false, wide = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`card flex min-w-0 items-center gap-4 !p-5 hover:border-accent/40 ${wide ? 'sm:col-span-2' : ''}`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-ink">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wider text-ink/50">{label}</span>
        <span className="mt-0.5 block break-all font-bold text-ink">{value}</span>
      </span>
    </a>
  );
}

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-24 bg-deep py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading align="left" eyebrow={t('contact_eyebrow')} title={t('contact_title')} subtitle={t('contact_sub')} />

          <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2">
            <ChannelLink
              href={CONTACT.telegramUrl}
              external
              icon={<TelegramIcon className="h-5 w-5" />}
              label={t('telegram')}
              value={CONTACT.telegramHandle}
            />
            <ChannelLink
              href={CONTACT.telegramChannelUrl}
              external
              icon={<TelegramIcon className="h-5 w-5" />}
              label={t('tg_channel')}
              value={CONTACT.telegramChannelHandle}
            />
            <ChannelLink
              href={CONTACT.youtubeUrl}
              external
              icon={<YoutubeIcon className="h-5 w-5" />}
              label={t('yt_label')}
              value={CONTACT.youtubeHandle}
            />
            <ChannelLink
              href={CONTACT.instagramUrl}
              external
              icon={<InstagramIcon className="h-5 w-5" />}
              label={t('instagram')}
              value={CONTACT.instagramHandle}
            />
            <ChannelLink
              href={CONTACT.phoneHref}
              icon={<Phone size={20} />}
              label={t('phone')}
              value={CONTACT.phoneDisplay}
              wide
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="card flex h-full flex-col !p-8 sm:!p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-ink">
              <TelegramIcon className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-ink">{t('dm_title')}</h3>
            <p className="mt-3 leading-relaxed text-ink/65">{t('dm_text')}</p>
            <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-auto w-full">
              {t('dm_button')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
