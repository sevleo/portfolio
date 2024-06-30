import yogato from "../../assets/projectImages/yogato.png";
import nuevashop from "../../assets/projectImages/nuevashop.png";
import cvbuilder from "../../assets/projectImages/cvbuilder.png";
import novaclima from "../../assets/projectImages/novaclima.png";
import battleship from "../../assets/projectImages/battleship.png";
import novatask from "../../assets/projectImages/novatask.png";
import novavistacafe from "../../assets/projectImages/novavistacafe.png";
import novavistadashboard from "../../assets/projectImages/novavistadashboard.png";
import novavistafrom from "../../assets/projectImages/novavistaform.png";

export const useProjects = () => {
  const projects = [
    {
      link: "https://yogato.netlify.app",
      githublink: "https://github.com/sevleo/YoGato",
      imgSrc: yogato,
      projectName: "Yogato",
      projectDescription:
        "A full-stack application dedicated to Yoga. The application assists yoga instructors and experienced practitioners in creating and following through their sequences. It features voice announcements, custom-made sequence timer, a smooth and fast user experience, and support for both desktop and mobile.",
    },
    {
      link: "https://heroic-horse-859bac.netlify.app/",
      githublink: "https://github.com/sevleo/TOP-ShoppingCart",
      imgSrc: nuevashop,
      projectName: "Nueva Shop",
      projectDescription:
        "A minimalist shopping cart implementation with ReactJS. Fetching products data from MockShop API and storing it locally in the browser. Using React components with states to implement neat and smooth user experience.",
    },
    {
      link: "https://main--chimerical-hummingbird-a514f5.netlify.app",
      githublink: "https://github.com/sevleo/TOP-CVMaker",
      imgSrc: cvbuilder,
      projectName: "CV Builder",
      projectDescription:
        "Built on React, this app allows quickly drafing a CV and exporting it into a PDF.",
    },
    {
      link: "https://sevleo.github.io/TOP-NovaClima/",
      githublink: "https://github.com/sevleo/TOP-NovaClima",
      imgSrc: novaclima,
      projectName: "Nova Clima",
      projectDescription:
        "Weather app built on vanilla JS, utilizing webpack to manually structure the project and Weather API to fetch the up to date weather data.",
    },
    {
      link: "https://sevleo.github.io/TOP-Battleship/",
      githublink: "https://github.com/sevleo/TOP-Battleship",
      imgSrc: battleship,
      projectName: "Battleship Game",
      projectDescription:
        "In this project, I challenged myself to implement the battleship game using pure javascript only. No external libraries or frameworks.",
    },
    {
      link: "https://sevleo.github.io/TOP-NovaTask/",
      githublink: "https://github.com/sevleo/TOP-NovaTask",
      imgSrc: novatask,
      projectName: "Nova Task",
      projectDescription:
        "Nova Task reimagines the classic todo list app with a fresh perspective, offering seamless animations and an intuitive user interface. Implemented with pure JS and CSS. No external libraries or frameworks.",
    },
    {
      link: "https://sevleo.github.io/TOP-RestaurantMenu/",
      githublink: "https://github.com/sevleo/TOP-RestaurantMenu",
      imgSrc: novavistacafe,
      projectName: "Nova Vista Cafe",
      projectDescription:
        "Playing with CSS to implement an interesting paralax effect with the background image. A nice little project intended to learn some CSS tricks.",
    },
    {
      link: "https://sevleo.github.io/TOP-Dashboard/",
      githublink: "https://github.com/sevleo/TOP-Dashboard",
      imgSrc: novavistadashboard,
      projectName: "Nova Vista Dashboard",
      projectDescription:
        "Employing the dynamic capabilities of CSS Grid and Flexbox, crafting a sleek and adaptable layout reminiscent of a dashboard. This approach ensures a clean, organized, and responsive design, accommodating various screen sizes effortlessly.",
    },
    {
      link: "https://sevleo.github.io/TOP-SignUpForm/",
      githublink: "https://github.com/sevleo/TOP-SignUpForm",
      imgSrc: novavistafrom,
      projectName: "Nova Vista Form",
      projectDescription:
        "Implementation of custom sign up form with custom data validations, highlightning valid/invalid data entry and providing helpers pup-ups to the users. Using CSS to create nice smooth feedback to the user when intracting with the form.",
    },
  ];

  return projects;
};

export const useMainProjects = () => {
  const projects = [
    {
      link: "https://yogato.netlify.app",
      githublink: "https://github.com/sevleo/YoGato",
      imgSrc: yogato,
      projectName: "Yogato",
      projectDescription:
        "A full-stack application dedicated to Yoga. The application assists yoga instructors and experienced practitioners in creating and following through their sequences. It features voice announcements, custom-made sequence timer, a smooth and fast user experience, and support for both desktop and mobile.",
      technologies: ["React", "NodeJS", "TailwindCSS", "TypeScript", "MongoDB"],
    },
    {
      link: "https://heroic-horse-859bac.netlify.app/",
      githublink: "https://github.com/sevleo/TOP-ShoppingCart",
      imgSrc: nuevashop,
      projectName: "Nueva Shop",
      projectDescription:
        "A minimalist shopping cart implementation with ReactJS. Fetching products data from MockShop API and storing it locally in the browser. Using React components with states to implement neat and smooth user experience.",
      technologies: ["React", "JavaScript", "TailwindCSS"],
    },

    {
      link: "https://sevleo.github.io/TOP-RestaurantMenu/",
      githublink: "https://github.com/sevleo/TOP-RestaurantMenu",
      imgSrc: novavistacafe,
      projectName: "Nova Vista Cafe",
      projectDescription:
        "Playing with CSS to implement an interesting paralax effect with the background image. A nice little project for learning some CSS tricks.",
      technologies: ["JavaScript", "CSS", "HTML"],
    },
    {
      link: "https://sevleo.github.io/TOP-Battleship/",
      githublink: "https://github.com/sevleo/TOP-Battleship",
      imgSrc: battleship,
      projectName: "Battleship Game",
      projectDescription:
        "In this project, I challenged myself to implement the battleship game using pure javascript only. No external libraries or frameworks.",
      technologies: ["JavaScript", "CSS", "HTML"],
    },
  ];

  return projects;
};
