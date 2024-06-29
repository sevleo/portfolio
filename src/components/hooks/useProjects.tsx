import yogato from "../../assets/yogato.png";
import nuevashop from "../../assets/nuevashop.png";

export const useProjects = () => {
  const projects = [
    {
      link: "https://yogato.netlify.app",
      imgSrc: yogato,
      projectName: "Yogato",
      projectDescription:
        "A full-stack application dedicated to Yoga. The application assists yoga instructors and experienced practitioners in creating and following through their sequences. It features voice announcements, custom-made sequence timer, a smooth and fast user experience, and support for both desktop and mobile.",
    },
    {
      link: "https://heroic-horse-859bac.netlify.app/",
      imgSrc: nuevashop,
      projectName: "Nueva Shop",
      projectDescription:
        "A minimalist shopping cart implementation with ReactJS. Fetching products data from MockShop API and storing it locally in the browser. Using React components with states to implement neat and smooth user experience.",
    },
  ];

  return projects;
};
