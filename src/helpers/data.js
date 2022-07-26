import yelpCampEjsImg from "../assets/imgs/thumbnails/yelpCampThumb.jpg";

const tools = {
  frontend: {
    react: "ReactJS",
  },
  backend: {
    node: "NodeJS",
  },
  db: {
    mongo: "MongoDB",
  },
  styling: {
    bootstrap: "Bootstrap",
  },
};

export const data = [
  {
    id: 0,
    title: "YelpCamp - EJS Version",
    description:
      "Welcome to YelpCamp! Jump right in and explore our many campgrounds. Feel free to share some of your own and comment on others!",
    img: yelpCampEjsImg,
    siteUrl: "https://shlomo-yelp-camp.herokuapp.com/",
    ghUrl: "https://github.com/shlomohal84/yelpCamp",
    tools: {
      frontend: tools.frontend.react,
      backend: tools.backend.node,
      db: tools.db.mongo,
      styling: tools.styling.bootstrap,
    },
  },
  {
    id: 1,
    title: "test",
    img: yelpCampEjsImg,
    description:
      "Welcome to YelpCamp! Jump right in and explore our many campgrounds. Feel free to share some of your own and comment on others!",
    url: "",
    tools: {
      frontend: tools.frontend.react,
      backend: tools.backend.node,
      db: tools.db.mongo,
    },
  },
];
