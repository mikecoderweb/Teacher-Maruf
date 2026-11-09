# Teacher Maruf — Speaking Course Website

React + Vite + Tailwind CSS + Framer Motion. Single-page, bilingual (EN / UZ).

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Project structure

```
public/
  logo.png              Teacher Maruf logo
  teacher-maruf.jpg     Teacher photo (hero and About section)
src/
  App.jsx               Page composition and course-to-contact preselection
  main.jsx              Entry point (wraps app in LanguageProvider)
  index.css             Tailwind layers and shared button/card styles
  data/content.js       ALL site content: contacts, courses, prices, results, testimonials
  i18n/
    translations.js     EN and UZ interface text
    LanguageContext.jsx Language state (remembered in localStorage)
  components/
    Navbar, Hero, About, Courses, Results, Testimonials, Features,
    Books, MockTest, Registration, HowToJoin, Contact, Footer, TeacherPhoto,
    SectionHeading, Reveal (scroll animation), LanguageSwitcher, Modal, Lightbox, icons
```

## Updating content

- Prices, lesson frequency and course details: `src/data/content.js` → `COURSES`
- Contact details and social links: `src/data/content.js` → `CONTACT`
- Student results: `src/data/content.js` → `RESULTS` (only verified scores)
- Testimonials: `src/data/content.js` → `TESTIMONIALS` (only with student permission)
- Interface wording: `src/i18n/translations.js`

## Contact

There is no contact form. Visitors message Teacher Maruf directly on Telegram
(`CONTACT.telegramUrl` in `src/data/content.js`). Course "Enroll" and book "Order" buttons open the same chat.
Payment details (`PAYMENT` in `src/data/content.js`) are paid via Telegram and are not shown on the site.

Book previews: the PDF preview is shown on desktop only. On mobile a cover and a download button are shown instead, because most phone browsers do not display PDFs inside a page.

## Deployment

Any static host works (Vercel, Netlify, Cloudflare Pages). Build command: `npm run build`.
Output directory: `dist`.
