import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si'

const colorIcon = {
  js: '#F7E026',
  ts: '#367CC8',
  express: '#d2d2d2',
  next: '#d2d2d2',
  react: '#66dbfb',
  mongodb: '#2f6f14',
  postgresql: '#3A6C95',
  mysql: '#1A678E',
  nest: '#E12854',
}

export const projects = [
  {
    id: 1,
    title: 'Clone of Digikala.com API',
    description:
      'A backend clone of Digikala.com, API featuring authentication, users, products, basket, orders, payments, and RBAC.',
    demolink: null,
    ghlink: 'https://github.com/MahdiMirshafiee/Digikala-Clone-API',
    techstack: {
      lang: {
        icon: SiJavascript,
        color: colorIcon.js,
      },
      backend: {
        icon: SiExpress,
        color: colorIcon.express,
      },
      frontend: {
        icon: null,
        color: null,
      },
      db: {
        icon: SiMysql,
        color: colorIcon.mysql,
      },
    },
  },
  {
    id: 2,
    title: 'Clone of Divar.ir',
    description:
      'A full-stack clone of Divar.ir, featuring user authentication, ad listings, and backend data management.',
    demolink: null,
    ghlink: 'https://github.com/MahdiMirshafiee/Divar-Website-front',
    techstack: {
      lang: {
        icon: SiJavascript,
        color: colorIcon.js,
      },
      backend: {
        icon: SiExpress,
        color: colorIcon.express,
      },
      frontend: {
        icon: SiReact,
        color: colorIcon.react,
      },
      db: {
        icon: SiMongodb,
        color: colorIcon.mongodb,
      },
    },
  },
  {
    id: 3,
    title: 'Crypto Market Tracker',
    description:
      'A web application for tracking cryptocurrency prices with CoinGecko API in real time.',
    demolink: 'https://crypto-app-eta-ten.vercel.app/',
    ghlink: 'https://github.com/MahdiMirshafiee/crypto-app',
    techstack: {
      lang: {
        icon: SiJavascript,
        color: colorIcon.js,
      },
      backend: {
        icon: null,
        color: null,
      },
      frontend: {
        icon: SiReact,
        color: colorIcon.react,
      },
      db: {
        icon: null,
        color: null,
      },
    },
  },
  {
    id: 4,
    title: 'Chess',
    description:
      'A web-based chess game implementing core game logic and interactive gameplay.',
    demolink: 'https://chess-nu-jet.vercel.app/',
    ghlink: 'https://github.com/MahdiMirshafiee/chess',
    techstack: {
      lang: {
        icon: SiJavascript,
        color: colorIcon.js,
      },
      backend: {
        icon: null,
        color: null,
      },
      frontend: {
        icon: SiReact,
        color: colorIcon.react,
      },
      db: {
        icon: null,
        color: null,
      },
    },
  },
  {
    id: 5,
    title: 'Quoty',
    description:
      'A minimal web app that serves random quotes from notable figures.',
    demolink: 'https://quotyty.vercel.app/',
    ghlink: 'https://github.com/MahdiMirshafiee/Quoty',
    techstack: {
      lang: {
        icon: SiTypescript,
        color: colorIcon.ts,
      },
      backend: {
        icon: null,
        color: null,
      },
      frontend: {
        icon: SiNextdotjs,
        color: colorIcon.next,
      },
      db: {
        icon: null,
        color: null,
      },
    },
  },
  {
    id: 6,
    title: 'Shop with Basket',
    description:
      'A web application consuming product data from the FakeStoreAPI to display products with shopping basket functionality.',
    demolink: 'https://poker-shop.vercel.app/products',
    ghlink: 'https://github.com/MahdiMirshafiee/PokerShop',
    techstack: {
      lang: {
        icon: SiJavascript,
        color: colorIcon.js,
      },
      backend: {
        icon: null,
        color: null,
      },
      frontend: {
        icon: SiReact,
        color: colorIcon.react,
      },
      db: {
        icon: null,
        color: null,
      },
    },
  },
  {
    id: 7,
    title: 'Car Marketplace',
    description:
      'A car marketplace for browsing vehicles and viewing car specifications.',
    demolink: 'https://poker-car.vercel.app/cars',
    ghlink: 'https://github.com/MahdiMirshafiee/PokerCar',
    techstack: {
      lang: {
        icon: SiJavascript,
        color: colorIcon.js,
      },
      backend: {
        icon: null,
        color: null,
      },
      frontend: {
        icon: SiNextdotjs,
        color: colorIcon.next,
      },
      db: {
        icon: null,
        color: null,
      },
    },
  },
  {
    id: 8,
    title: 'Food Ordering',
    description:
      'A food ordering website for browsing restaurant and food menu.',
    demolink: 'https://poker-food.vercel.app/',
    ghlink: 'https://github.com/MahdiMirshafiee/PokerFood',
    techstack: {
      lang: {
        icon: SiJavascript,
        color: colorIcon.js,
      },
      backend: {
        icon: null,
        color: null,
      },
      frontend: {
        icon: SiNextdotjs,
        color: colorIcon.next,
      },
      db: {
        icon: null,
        color: null,
      },
    },
  },
]
//
