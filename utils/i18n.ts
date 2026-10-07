export type Locale = 'en' | 'fa'

const en = {
  titles: {
    home: 'Mahdi Mirshafiee — Full-Stack Web Developer',
    about: 'About | Mahdi Mirshafiee',
    projects: 'Projects | Mahdi Mirshafiee',
    contact: 'Contact | Mahdi Mirshafiee',
    notFound: '404 — Page Not Found',
  },
  aria: {
    toggleMenu: 'Toggle menu',
    toggleTheme: 'Toggle Theme',
    changeLanguage: 'Change Language',
  },
  nav: {
    '/about': 'About',
    '/projects': 'Projects',
    '/contact': 'Contact',
  },
  home: {
    h1a: 'Software developer,',
    h1b: 'Web developer',
    p1: "I'm Mahdi Mirshafiee, a software developer passionate about continuous learning,",
    p2: 'building web applications with the JavaScript ecosystem, and exploring new technologies.',
    terminal: {
      name: 'Mahdi',
      title: 'Web Developer',
      location: 'Mashhad, Iran',
      status: 'Open to work',
      quote:
        '"In a time of destruction, create something" \n - Maxine Hong Kingston',
      labels: {
        name: 'Name',
        title: 'Title',
        location: 'Location',
        status: 'Status',
        favoriteQuote: 'Favorite quote',
      },
    },
  },
  about: {
    h1: "I'm Mahdi. I build things for the web.",
    p1: "I'm a {age}-year-old software developer specializing in full-stack web development, currently studying Computer Engineering in Mashhad, Iran.",
    p2: "With {exp}+ years of experience, My stack revolves around the JavaScript ecosystem, using technologies such as TypeScript, Next.js, React, and Node.js. I'm passionate about building performant, scalable applications and continuously improving my skills through learning and hands-on experience.",
    p3: "I enjoy open-source projects, knowledge sharing, and collaborating with developers building meaningful things, whether it's solving real problems or just having fun.",
    p4: "Outside of work, I'm into cybersecurity, financial markets, and emerging tech. I also enjoy reading and gaming.",
    viewResume: 'View Résumé',
  },
  jobs: {
    title: 'Work Experience',
    name: 'Self-Employed',
    jobTitle: 'Full-Stack Web Developer',
    present: 'Present',
    description:
      'Building full-stack web applications with TypeScript, React, Next.js, Node.js, and Express. Working on user interfaces, backend APIs, and database design.',
  },
  skills: {
    title: 'Skills',
    frontend: 'Frontend',
    backend: 'Backend',
  },
  projects: {
    h1: 'Made by Me',
    sub: "A collection of projects I've built: from side experiments to production-ready apps.",
    techStack: 'Tech Stack:',
    descriptions: {
      1: 'A backend clone of Digikala.com, API featuring authentication, users, products, basket, orders, payments, and RBAC.',
      2: 'A full-stack clone of Divar.ir, featuring user authentication, ad listings, and backend data management.',
      3: 'A web application for tracking cryptocurrency prices with CoinGecko API in real time.',
      4: 'A web-based chess game implementing core game logic and interactive gameplay.',
      5: 'A minimal web app that serves random quotes from notable figures.',
      6: 'A web application consuming product data from the FakeStoreAPI to display products with shopping basket functionality.',
      7: 'A car marketplace for browsing vehicles and viewing car specifications.',
      8: 'A food ordering website for browsing restaurant and food menu.',
    } as Record<number, string>,
  },
  contact: {
    h1: 'Get In Touch',
    sub: "Looking for a Web Developer? Let's connect and discuss how I can contribute to your team.",
    sendMessage: 'Send a Message',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    message: 'Message',
    namePlaceholder: 'Mahdi Mirshafiee',
    emailPlaceholder: 'mirshafieemahdi001@gmail.com',
    messagePlaceholder: 'Tell me about your project or opportunity...',
    errors: {
      nameRequired: 'Name is required',
      nameTooLong: 'Name is too long',
      invalidEmail: 'Invalid email',
      emailTooLong: 'Email is too long',
      messageTooShort: 'Message is too short',
      messageTooLong: 'Message is too long',
    },
    send: 'Send Message',
    sending: 'Sending...',
    toastSuccess: "Message sent successfully. I'll get back to you soon.",
    toastError: 'Failed to send message. Please try again later.',
    directContact: 'Direct Contact',
    connectOnline: 'Connect Online',
    labels: {
      Email: 'Email',
      Phone: 'Phone',
      Location: 'Location',
    } as Record<string, string>,
    locationValue: 'Mashhad, Iran',
  },
  footer: {
    builtWith: 'Built with:',
    copyright: 'Copyright © MIR {year} All rights Reserved',
  },
  notFound: {
    errorLabel: 'Error',
    errorValue: '404 — Page Not Found',
    statusLabel: 'Status',
    statusValue: 'Lost in the void',
    suggestionLabel: 'Suggestion',
    suggestionValue: 'Go back home',
    pathLabel: 'Path',
  },
}

export type Dictionary = typeof en

const fa: Dictionary = {
  titles: {
    home: 'مهدی میرشفیعی',
    about: 'درباره | مهدی میرشفیعی',
    projects: 'پروژه‌ها | مهدی میرشفیعی',
    contact: 'تماس | مهدی میرشفیعی',
    notFound: '۴۰۴ — صفحه پیدا نشد',
  },
  aria: {
    toggleMenu: 'باز و بسته کردن منو',
    toggleTheme: 'تغییر تم',
    changeLanguage: 'تغییر زبان',
  },
  nav: {
    '/about': 'درباره من',
    '/projects': 'پروژه‌ها',
    '/contact': 'تماس',
  },
  home: {
    h1a: 'توسعه‌دهنده نرم‌افزار،',
    h1b: 'توسعه‌دهنده وب',
    p1: 'من مهدی میرشفیعی هستم؛ توسعه‌دهنده نرم‌افزار و علاقه‌مند به یادگیری مداوم،',
    p2: 'که اپلیکیشن‌های وب را با اکوسیستم JavaScript می‌سازم و تکنولوژی‌های جدید را کشف می‌کنم.',
    terminal: {
      name: 'مهدی',
      title: 'توسعه‌دهنده وب',
      location: 'مشهد، ایران',
      status: 'آماده همکاری',
      quote: '«در زمان ویرانی، چیزی بیافرین» \n - مکسین هنگ کینگستون',
      labels: {
        name: 'نام',
        title: 'عنوان',
        location: 'موقعیت',
        status: 'وضعیت',
        favoriteQuote: 'جمله مورد علاقه',
      },
    },
  },
  about: {
    h1: 'من مهدی هستم. برای وب چیزهایی می‌سازم.',
    p1: 'من {age} ساله هستم؛ توسعه‌دهنده نرم‌افزار با تخصص در توسعه Full-Stack وب و دانشجوی مهندسی کامپیوتر در مشهد، ایران.',
    p2: 'با {exp}+ سال تجربه، استک من حول اکوسیستم JavaScript می‌چرخد و از تکنولوژی‌هایی مثل TypeScript، Next.js، React و Node.js استفاده می‌کنم. علاقه‌مندم اپلیکیشن‌هایی با پرفورمنس بالا و مقیاس‌پذیر بسازم و مهارت‌هایم را از طریق یادگیری و تجربه عملی به‌طور مداوم ارتقا بدهم.',
    p3: 'از پروژه‌های متن‌باز، به اشتراک‌گذاری دانش و همکاری با توسعه‌دهنده‌هایی که چیزهای معناداری می‌سازند لذت می‌برم؛ چه حل‌کردن مسئله‌های واقعی، چه صرفاً سرگرمی.',
    p4: 'بیرون از حوزه کار، به امنیت سایبری، بازارهای مالی و تکنولوژی‌های نوظهور علاقه‌مندم. از مطالعه و گیمینگ هم لذت می‌برم.',
    viewResume: 'مشاهده رزومه',
  },
  jobs: {
    title: 'سوابق کاری',
    name: 'خوداشتغال',
    jobTitle: 'Full-Stack Web Developer',
    present: 'اکنون',
    description:
      'ساخت اپلیکیشن‌های وب Full-Stack با TypeScript، React، Next.js، Node.js و Express. کار روی رابط‌های کاربری، APIهای Backend و طراحی دیتابیس.',
  },
  skills: {
    title: 'مهارت‌ها',
    frontend: 'Frontend',
    backend: 'Backend',
  },
  projects: {
    h1: 'ساخته‌ی من',
    sub: 'مجموعه‌ای از پروژه‌هایی که ساخته‌ام: از آزمایش‌های جانبی تا اپلیکیشن‌های آماده‌ی Production.',
    techStack: 'Tech Stack:',
    descriptions: {
      1: 'یک کلون Backend از Digikala.com؛ API با قابلیت‌های احراز هویت، کاربران، محصولات، سبد خرید، سفارش‌ها، پرداخت‌ها و RBAC.',
      2: 'یک کلون Full-Stack از Divar.ir با احراز هویت کاربران، نمایش آگهی‌ها و مدیریت داده‌ها در Backend.',
      3: 'یک وب‌اپلیکیشن برای رصد قیمت ارزهای دیجیتال با CoinGecko API به‌صورت لحظه‌ای.',
      4: 'یک بازی شطرنج تحت وب با پیاده‌سازی منطق اصلی بازی و گیم‌پلی تعاملی.',
      5: 'یک وب‌اپ مینیمال که نقل‌قول‌های تصادفی از چهره‌های سرشناس ارائه می‌دهد.',
      6: 'وب‌اپلیکیشنی که داده محصولات را از FakeStoreAPI دریافت و همراه با قابلیت سبد خرید نمایش می‌دهد.',
      7: 'بازاری برای جست‌وجوی خودروها و مشاهده مشخصات آن‌ها.',
      8: 'وب‌سایت سفارش آنلاین غذا برای مرور رستوران و منوی غذاها.',
    },
  },
  contact: {
    h1: 'در تماس باشیم',
    sub: 'دنبال یک Web Developer هستید؟ بیایید در ارتباط باشیم و ببینیم چطور می‌توانم به تیم شما کمک کنم.',
    sendMessage: 'ارسال پیام',
    yourName: 'نام شما',
    yourEmail: 'ایمیل شما',
    message: 'پیام',
    namePlaceholder: 'مهدی میرشفیعی',
    emailPlaceholder: 'mirshafieemahdi001@gmail.com',
    messagePlaceholder: 'از پروژه یا فرصت پیش‌آمده برایم بگویید...',
    errors: {
      nameRequired: 'نام الزامی است',
      nameTooLong: 'نام بیش از حد طولانی است',
      invalidEmail: 'ایمیل نامعتبر است',
      emailTooLong: 'ایمیل بیش از حد طولانی است',
      messageTooShort: 'پیام بیش از حد کوتاه است',
      messageTooLong: 'پیام بیش از حد طولانی است',
    },
    send: 'ارسال پیام',
    sending: 'در حال ارسال...',
    toastSuccess: 'پیام با موفقیت ارسال شد. به‌زودی پاسخ می‌دهم.',
    toastError: 'ارسال پیام ناموفق بود. لطفاً بعداً دوباره تلاش کنید.',
    directContact: 'ارتباط مستقیم',
    connectOnline: 'ارتباط آنلاین',
    labels: {
      Email: 'ایمیل',
      Phone: 'تلفن',
      Location: 'مکان',
    },
    locationValue: 'مشهد، ایران',
  },
  footer: {
    builtWith: 'ساخته‌شده با:',
    copyright: 'تمامی حقوق محفوظ است © MIR {year}',
  },
  notFound: {
    errorLabel: 'خطا',
    errorValue: '۴۰۴ — صفحه پیدا نشد',
    statusLabel: 'وضعیت',
    statusValue: 'گم‌شده در خلأ',
    suggestionLabel: 'پیشنهاد',
    suggestionValue: 'برگرد به خانه',
    pathLabel: 'مسیر',
  },
}

export const dictionaries: Record<Locale, Dictionary> = { en, fa }

export type PageTitleKey = keyof Dictionary['titles']

export function toFaDigits(value: string | number): string {
  return String(value).replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)])
}
