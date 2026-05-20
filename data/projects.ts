import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const colorIcon = {
  js: "#F7E026",
  ts: "#367CC8",
  express: "#d2d2d2",
  next: "#040404",
  react: "#66dbfb",
  mongodb: "#2f6f14",
  postgresql: "#3A6C95",
  mysql: "#1A678E",
  nest: "#E12854",
};

export const projects = [
  {
    id: 1,
    title: "Digikala API clone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    demolink: "",
    ghlink: "",
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
    title: "Divar clone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    demolink: "",
    ghlink: "",
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
    title: "Divar clone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    demolink: "",
    ghlink: "",
    techstack: {
      backend: {
        icon: SiExpress,
        color: "#f9fbfb",
      },
      frontend: {
        icon: SiReact,
        color: "#66dbfb",
      },
      db: {
        icon: SiMongodb,
        color: "#2f6f14",
      },
    },
  },
  {
    id: 4,
    title: "Divar clone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    demolink: "",
    ghlink: "",
    techstack: {
      backend: {
        icon: SiExpress,
        color: "#f9fbfb",
      },
      frontend: {
        icon: SiReact,
        color: "#66dbfb",
      },
      db: {
        icon: SiMongodb,
        color: "#2f6f14",
      },
    },
  },
  {
    id: 5,
    title: "Divar clone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    demolink: "",
    ghlink: "",
    techstack: {
      backend: {
        icon: SiExpress,
        color: "#f9fbfb",
      },
      frontend: {
        icon: SiReact,
        color: "#66dbfb",
      },
      db: {
        icon: SiMongodb,
        color: "#2f6f14",
      },
    },
  },
];
// 
