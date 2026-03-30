import publora from "../../assets/projectImages/publora.png";
import skribra from "../../assets/projectImages/skribra.png";

export const useProjects = () => {
  const projects: never[] = [];

  return projects;
};

export const useMainProjects = () => {
  const projects = [
    {
      link: "https://publora.com/",
      imgSrc: publora,
      projectName: "Publora",
      projectDescription:
        "An AI-powered social media management platform featuring a Google Docs-styled editor, intelligent content scheduling, and API access. Supports 8+ major social platforms including Instagram, TikTok, YouTube, and X.",
      technologies: [
        "Vue",
        "NuxtJS",
        "NodeJS",
        "TypeScript",
        "TailwindCSS",
        "MongoDB",
        "AWS S3",
        "OpenAI API",
        "Fly.io",
        "Render.com",
        "Docker",
      ],
    },
    {
      link: "https://skribra.com/",
      imgSrc: skribra,
      projectName: "Skribra",
      projectDescription:
        "A web-based SEO content platform that creates and plans contextual content designed to rank in search engines. Takes a human-first approach, generating content aligned with actual search intent.",
      technologies: [
        "React",
        "NextJS",
        "NestJS",
        "Nx",
        "TypeScript",
        "MongoDB",
        "AWS S3",
        "BullMQ",
        "OpenAI API",
        "Render.com",
      ],
    },
  ];

  return projects;
};
