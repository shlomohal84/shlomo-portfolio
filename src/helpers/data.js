import yelpCampEjsImg from "../assets/imgs/thumbnails/yelpCampThumb.jpg";
import reactColorPickerImg from "../assets/imgs/thumbnails/react_color_picker_thumb.jpg";
import sudokuImg from "../assets/imgs/thumbnails/sudoku_thumb.jpg";
import yelpCampReact from "../assets/imgs/thumbnails/yelpcamp_react.jpg";
const tools = {
  frontend: {
    react: "ReactJS",
    vanillaJs: "Vanilla JS",
    ejs: "EJS",
  },
  backend: {
    node: "NodeJS",
  },
  db: {
    mongo: "MongoDB",
    none: {
      localStorage: "None (Local Storage)",
    },
  },
  styling: {
    bootstrap: "Bootstrap",
    mui: "Material UI 5",
    css: "CSS",
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
      frontend: tools.frontend.ejs,
      backend: tools.backend.node,
      db: tools.db.mongo,
      styling: tools.styling.bootstrap,
    },
  },
  {
    id: 3,
    title: "YelpCamp - ReactJS Version",
    description: "ReactJS yelpCamp's version",
    img: yelpCampReact,
    siteUrl: "https://yelpcamp-react-shlomo.herokuapp.com/",
    ghUrl: "https://github.com/shlomohal84/yelpcamp-react",
    tools: {
      frontend: tools.frontend.react,
      backend: tools.backend.node,
      db: tools.db.mongo,
      styling: tools.styling.bootstrap,
    },
  },
  {
    id: 1,
    title: "React Color Picker",
    description: `Pick and copy color codes (hex/rgb/rgba formats) from existing palettes
       or create your own palettes.Data is stored locally on browser's localStorage object `,
    img: reactColorPickerImg,
    siteUrl: "https://shlomohal84.github.io/React-Color-Picker/",
    ghUrl: "https://github.com/shlomohal84/React-Color-Picker",
    tools: {
      frontend: tools.frontend.react,
      // backend: "none",
      // db: tools.db.none.localStorage,
      styling: tools.styling.mui,
    },
  },
  {
    id: 2,
    title: "Sudoku Validator Beta",
    description: `Static Vanilla JS HTML page with fake authentication featuring a sudoku board with 3 difficulty levels.\nCurrently only working as a premade board with basic full board validation`,
    img: sudokuImg,
    siteUrl: "https://shlomohal84.github.io/Sudoku-1st-edition",
    ghUrl: "https://github.com/shlomohal84/Sudoku-1st-edition",
    tools: {
      frontend: tools.frontend.vanillaJs,
      backend: null,
      db: null,
      styling: tools.styling.css,
    },
  },
];
