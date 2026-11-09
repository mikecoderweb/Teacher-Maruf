/*
 * ============================================================
 *  EDIT SITE CONTENT HERE
 *  Prices, contacts, course details, results and testimonials.
 *  Keep only verified information.
 * ============================================================
 */

export const CONTACT = {
  telegramUrl: 'https://t.me/MARUFXON_ABDUVALIEV',
  telegramHandle: '@MARUFXON_ABDUVALIEV',
  phoneHref: 'tel:+998933531633',
  phoneDisplay: '+998 93 353 16 33',
  instagramUrl: 'https://www.instagram.com/teacher.maruf/',
  instagramHandle: '@teacher.maruf',
  resultsChannelUrl: 'https://t.me/SpeakUP_Results',
  resultsChannelHandle: '@SpeakUP_Results',
  youtubeUrl: 'https://youtube.com/@maruf.teacher',
  youtubeHandle: '@maruf.teacher',
  telegramChannelUrl: 'https://t.me/Marufxon_Speaking',
  telegramChannelHandle: '@Marufxon_Speaking',
};

// Prices in UZS. Lesson frequency is per week.
export const COURSES = [
  {
    id: 'group-basic',
    type: 'group',
    price: 499000,
    lessonsPerWeek: 3,
    name: { en: 'Group Basic', uz: 'Guruh Basic', ru: 'Групповой Basic' },
    desc: {
      en: 'A structured group course to build daily speaking habits.',
      uz: 'Kundalik gapirish odatini shakllantiruvchi tizimli guruh kursi.',
      ru: 'Структурированный групповой курс для ежедневной практики разговорной речи.',
    },
    included: {
      en: ['Group speaking lessons', '3 lessons per week', 'Speaking practice with the teacher'],
      uz: ['Guruhda speaking darslari', 'Haftada 3 ta dars', 'Ustoz bilan speaking amaliyoti'],
      ru: ['Групповые занятия по speaking', '3 занятия в неделю', 'Практика говорения с преподавателем'],
    },
  },
  {
    id: 'group-intensive',
    type: 'group',
    price: 599000,
    lessonsPerWeek: 5,
    name: { en: 'Group Intensive', uz: 'Guruh Intensive', ru: 'Групповой Intensive' },
    desc: {
      en: 'Five group lessons a week for faster progress.',
      uz: 'Tezroq natija uchun haftasiga besh guruh darsi.',
      ru: 'Пять групповых занятий в неделю для более быстрого прогресса.',
    },
    included: {
      en: ['Group speaking lessons', '5 lessons per week', 'Intensive speaking practice'],
      uz: ['Guruhda speaking darslari', 'Haftada 5 ta dars', 'Intensiv speaking amaliyoti'],
      ru: ['Групповые занятия по speaking', '5 занятий в неделю', 'Интенсивная практика говорения'],
    },
  },
  {
    id: 'individual-basic',
    type: 'individual',
    price: 999000,
    lessonsPerWeek: 2,
    name: { en: 'Individual Basic', uz: 'Individual Basic', ru: 'Индивидуальный Basic' },
    desc: {
      en: 'One-to-one speaking lessons at a relaxed pace.',
      uz: 'Bir-biriga bir, qulay tempdagi speaking darslari.',
      ru: 'Индивидуальные занятия в комфортном темпе.',
    },
    included: {
      en: ['1-to-1 lessons with Teacher Maruf', '2 lessons per week'],
      uz: ['Teacher Maruf bilan 1-to-1 darslar', 'Haftada 2 ta dars'],
      ru: ['Индивидуальные занятия 1-to-1 с Teacher Maruf', '2 занятия в неделю'],
    },
  },
  {
    id: 'individual-standard',
    type: 'individual',
    price: 1499000,
    lessonsPerWeek: 4,
    name: { en: 'Individual Standard', uz: 'Individual Standard', ru: 'Индивидуальный Standard' },
    desc: {
      en: 'One-to-one lessons with more frequent practice.',
      uz: 'Ko‘proq mashq bilan bir-biriga bir darslar.',
      ru: 'Индивидуальные занятия с более частой практикой.',
    },
    included: {
      en: ['1-to-1 lessons with Teacher Maruf', '4 lessons per week'],
      uz: ['Teacher Maruf bilan 1-to-1 darslar', 'Haftada 4 ta dars'],
      ru: ['Индивидуальные занятия 1-to-1 с Teacher Maruf', '4 занятия в неделю'],
    },
  },
  {
    id: 'individual-premium',
    type: 'individual',
    price: 1999000,
    lessonsPerWeek: 5,
    name: { en: 'Individual Premium', uz: 'Individual Premium', ru: 'Индивидуальный Premium' },
    desc: {
      en: 'Our most intensive one-to-one track, five lessons every week.',
      uz: 'Eng jadal individual kurs — haftasiga besh dars.',
      ru: 'Наш самый интенсивный индивидуальный формат — пять занятий в неделю.',
    },
    included: {
      en: ['1-to-1 lessons with Teacher Maruf', '5 lessons per week'],
      uz: ['Teacher Maruf bilan 1-to-1 darslar', 'Haftada 5 ta dars'],
      ru: ['Индивидуальные занятия 1-to-1 с Teacher Maruf', '5 занятий в неделю'],
    },
  },
];

// Verified IELTS Speaking results from students' screenshots (first name + initial only).
export const RESULTS = [
  { id: 'r1', name: 'Musharraf A.', exam: 'IELTS Academic', image: '/results/musharraf.png', scores: { listening: 8.5, reading: 7.5, writing: 7.0, speaking: 8.5, overall: 8.0 } },
  { id: 'r2', name: 'Manzura', exam: 'IELTS Academic', image: '/results/manzura.png', scores: { listening: 7.5, reading: 6.5, writing: 6.0, speaking: 7.0, overall: 7.0 } },
  { id: 'r3', name: 'Marhabo', exam: 'IELTS Academic', image: '/results/marhabo.png', scores: { listening: 7.0, reading: 7.5, writing: 6.0, speaking: 8.0, overall: 7.0 } },
  { id: 'r4', name: 'Shakhzod J.', exam: 'IELTS Academic', image: '/results/shakhzod.png', scores: { listening: 7.5, reading: 7.0, writing: 6.0, speaking: 7.0, overall: 7.0 } },
  { id: 'r5', name: 'Zukhra I.', exam: 'IELTS Academic', image: '/results/zukhra.png', scores: { listening: 6.0, reading: 5.0, writing: 6.0, speaking: 7.5, overall: 6.0 } },
];

// Student messages from screenshots. "original" keeps the student's wording.
export const TESTIMONIALS = [
  {
    id: 't1',
    student: 'Zukhra I.',
    speaking: '7.5',
    original: 'I adore your lessons teacher. Thank you very much. Allahim rozi bo‘lsin Ustoz. Umuman 7 uxlab tushimga kirmagan.',
    en: 'I adore your lessons, teacher. Thank you very much. May Allah bless you, Ustoz. I never even dreamed of a 7.',
    ru: 'Обожаю ваши занятия, учитель. Большое спасибо. Пусть Аллах вас благословит, Устоз. Я даже не ожидала 7.',
  },
  {
    id: 't2',
    student: 'Musharraf A.',
    speaking: '8.5',
    original: "I can't believe in my eyes",
    en: "I can't believe my eyes.",
    ru: 'Не могу поверить своим глазам.',
  },
  {
    id: 't3',
    student: 'Manzura',
    speaking: '7.0',
    original: 'Bergan bilimlaringizga rozi bo‘ling katta rahmat sizga',
    en: 'Thank you very much for the knowledge you gave me.',
    ru: 'Большое спасибо за знания, которыми вы со мной поделились.',
  },
  {
    id: 't4',
    student: 'Marhabo',
    speaking: '8.0',
    original: 'Yana qayta tayyorlanadigan bo‘ldim, lekin speakingdan 8 chiqishi xayolimga ham kelmagandi.',
    en: 'I will prepare again, but I never even imagined getting an 8 in speaking.',
    ru: 'Я снова буду готовиться, но даже не мечтала получить 8 в Speaking.',
  },
];

// Verified profile figures (from the teacher's own results).
export const PROFILE = {
  speakingBand: '7.5',
  multilevel: '69 (C1)',
};

// Payment and product prices (UZS). Card number is shown publicly on the site as requested.
export const PAYMENT = {
  card: '5614 6838 1552 1018',
  holder: 'Abduvaliev Marufxon',
  mockPrice: 40000,
  bookPrice: 33000,
};

export const CHANNELS = {
  mockChannelUrl: 'https://t.me/Speakup_mock',
  mockChannelHandle: '@Speakup_mock',
  idpUrl: 'https://t.me/IDP_Register',
  idpHandle: '@IDP_Register',
  britishUrl: 'https://t.me/British_Register',
  britishHandle: '@British_Register',
};

// Book reader feedback (anonymous).
export const BOOK_REVIEW = {
  en: 'Okay, good. There are a lot of structures, and I have already gone through them. Starting the workbook today.',
  uz: 'Ha, ma’qul. Juda ko‘p structure bor ekan, men chiqarib ham bo‘ldim. Bugundan workbook ni ishlashni boshlayman.',
  ru: 'Хорошо. Структур очень много, я уже прошла их. Сегодня начну работать с workbook.',
};

// Anonymous client feedback about the registration service.
export const REG_FEEDBACK = [
  {
    id: 'f1',
    text: {
      en: 'The service is perfect.',
      uz: 'Servis juda zo‘r.',
      ru: 'Сервис отличный.',
    },
  },
  {
    id: 'f2',
    text: {
      en: "It was the perfect service I've ever received.",
      uz: 'Hayotimda olgan eng zo‘r servis.',
      ru: 'Это лучший сервис, который я когда-либо получала.',
    },
  },
  {
    id: 'f3',
    text: {
      en: "I couldn't solve my problem for three days, but they fixed it in no time. Great service!",
      uz: 'Uch kun muammoni hal qila olmadim, ular bir zumda hal qilishdi. Zo‘r servis!',
      ru: 'Три дня не могла решить свою проблему, а они решили её очень быстро. Отличный сервис!',
    },
  },
  {
    id: 'f4',
    text: {
      en: 'They helped me register for my IELTS exam quickly and smoothly, and answered all my questions patiently.',
      uz: 'IELTS imtihoniga ro‘yxatdan o‘tishda tez va silliq yordam berishdi, barcha savollarimga sabr bilan javob berishdi.',
      ru: 'Быстро и без проблем помогли зарегистрироваться на экзамен IELTS и терпеливо ответили на все вопросы.',
    },
  },
  {
    id: 'f5',
    text: {
      en: "I've been using this service for 2 years. Whatever the problem, they always solve it. Thank you so much.",
      uz: 'Men bu servisdan 2 yildan beri foydalanaman, qanday muammo bo‘lsa ham doim hal qilishgan. Rahmat katta.',
      ru: 'Пользуюсь этим сервисом 2 года. Какая бы ни была проблема, её всегда решают. Огромное спасибо.',
    },
  },
  {
    id: 'f6',
    text: {
      en: 'They even changed my exam date for me, with no extra fees.',
      uz: 'Imtihon sanamni qayta o‘zgartirib ham berishdi, hech qanday ortiqcha to‘lovsiz.',
      ru: 'Даже перенесли мою дату экзамена без каких-либо доплат.',
    },
  },
];

// Real client review screenshots (shown full size in a lightbox).
export const REVIEW_SHOTS = [
  '/reviews/review-1.jpg',
  '/reviews/review-2.jpg',
  '/reviews/review-3.jpg',
  '/reviews/review-4.jpg',
];

// Indicative study-time assumption used by the Band Score Predictor (hours per band step).
// This is an estimate for planning only, not a guarantee.
export const PREDICTOR = {
  hoursPerBand: 100,
};
