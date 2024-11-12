export const useExperiences = () => {
  const experiences = [
    {
      dates: "JUN 2024 — PRESENT",
      roleCompany: "Salesforce Developer · Customertimes",
      jobDescription: [
        "Working as a developer on Salesforce projects implementing custom logic",
        "- Writing Visualforce pages and custom Lightning components",
        "- Creating ApexClasses and ApexTriggers",
        "- Creating a framework implementing a no-code configuration of outbound and inbound integrations",
      ],
    },
    {
      dates: "OCT 2024 — PRESENT",
      roleCompany: "Full-stack Developer · Eloqra Project",
      jobDescription: [
        "Developed Eloqra, a full-stack application for transcribing voice into text and applying AI to refine the output",
        "- Frontend: Vue & TailwindCSS",
        "- Backend: Node.js, Express.js, and Mongoose, with MongoDB as the database",
        "- Deployed on Fly.io",
        "- Token-based authentication",
        "- OpenAI's Whisper API for transcription and Completions API to refine text",
        "- AWS S3 to handle large files",
        "- Paddle to handle payments",
        "- Docker to containerize and manage project images for consistent deployment",
      ],
    },
    {
      dates: "FEB 2024 — JUN 2024",
      roleCompany: "Full-stack Developer · YoGato Project",
      jobDescription: [
        "Developed YoGato, a full-stack application for a local yoga studio, which went live in March 2024",
        "- Frontend: Created with React & TailwindCSS",
        "- Backend: Developed using Node.js, Express.js, and Mongoose, with MongoDB as the database",
        "- Implemented user authentication with both password and Google login strategies",
        "- Implemented two verification methods: session-based with cookies and token-based with bearer-tokens",
        "- Designed and integrated a custom precise timer with configurable animations and voice announcements",
        "- Implemented drag-and-drop functionality with DND Kit library",
      ],
    },
    {
      dates: "JUN 2023 — JAN 2024",
      roleCompany: "Professional Development",
      jobDescription: [
        "I used this time to enhance my skills in modern programming languages and frameworks essential for transitioning into a full-stack programmer. This included JavaScript, TypeScript, React, Node.js with Express.js and Mongoose.js, Tailwind CSS, and MongoDB. ",
        "Additionally, I focused on strengthening my foundational knowledge of programming concepts, data structures, and algorithms, and regularly practiced solving problems on LeetCode.",
      ],
    },
    {
      dates: "MAR 2022 — JUN 2023",
      roleCompany: "Solution Architect · Customertimes USA",
      jobDescription: [
        "I designed and implemented a versatile litigation support platform, focusing on cost-efficiency and customization. Collaborated closely with stakeholders and SMEs to thoroughly understand client requirements and business models.",
        "My responsibilities included creating modular solutions, managing stakeholder expectations, prioritizing backlog items, and overseeing business analysts. I also authored and validated user stories to ensure alignment with project objectives.",
      ],
    },
    {
      dates: "JUL 2021 — MAR 2022",
      roleCompany: "Solution Architect · Customertimes Latvia",
      jobDescription: [
        "I successfully implemented Sales Cloud solutions, overseeing organization merges and migrations. My role involved analyzing databases and current configurations, mapping business processes to streamline operations, and identifying areas for improvement. ",
        "I executed data migrations and refined business processes to enhance efficiency. Additionally, I conducted comprehensive user training sessions to ensure seamless adoption of new systems.",
      ],
    },
    {
      dates: "JAN 2019 — JUL 2021",
      roleCompany: "Salesforce Architect · CT Consulting",
      jobDescription: [
        "Led development of a clinical trial app for a large US pharmaceutical company. Worked closely with BAs to refine requirements and to design modular solutions.",
        "Acted as proxy product owner and subject matter expert, enabling the team to have quick circumstancial business decisions and solutions.",
        "Created and maintained architecture documentation, supported end-suers and facilitated production issue resolution.",
      ],
    },
    {
      dates: "JAN 2016 — JAN 2019",
      roleCompany: "Salesforce Developer · CT Consulting",
      jobDescription: [
        "Developed CRM business logic inside the Salesforce ecosystem. Created forms, saved and extracted data from the database, created integration endpoints.",
        "Created custom Aura and Lightning components with javascript and view/edit forms with Visualforce.",
        "Wrote ApexClasses and ApexTriggers. Developed ApexBatches to handle large chunks of data.",
      ],
    },
  ];
  return experiences;
};
