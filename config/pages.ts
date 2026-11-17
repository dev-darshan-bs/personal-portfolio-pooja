import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Pooja H S's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Full stack Java development, Spring Boot, React.js, and DevOps skills.",
    metadata: {
      title: "Skills",
      description:
        "Pooja H S's key skills in Java, Spring Boot, React.js, MySQL, and DevOps.",
    },
  },
  projects: {
    title: "Projects",
    description: "Enterprise billing, file management, and scheduling systems I have built.",
    metadata: {
      title: "Projects",
      description:
        "Pooja H S's projects — billing systems, file management platforms, and reporting schedulers.",
    },
  },
  contact: {
    title: "Contact",
    description: "",
    metadata: {
      title: "Contact",
      description: "Contact Pooja H S.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Pooja H S's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Pooja H S's resume.",
    metadata: {
      title: "Resume",
      description: "Pooja H S's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description: "Notes on full stack Java development, Spring Boot, and enterprise systems.",
    metadata: {
      title: "Blogs",
      description:
        "Pooja H S's blog — notes on Java development and enterprise engineering.",
    },
  },
  experience: {
    title: "Experience",
    description: "Work history and education.",
    metadata: {
      title: "Experience",
      description:
        "Pooja H S's work history and education.",
    },
  },
};
