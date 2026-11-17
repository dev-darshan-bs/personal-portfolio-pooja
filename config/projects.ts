import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "ctbs-plus-billing",
    companyName: "CTBS Plus – Billing System",
    type: "Professional",
    category: ["Full Stack"],
    shortDescription:
      "Enterprise billing system with Master Screens, consignment modification, rate calculation & aggregation modules for customer-level billing at DTDC.",
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2022-04-01"),
    endDate: new Date("2026-11-01"),
    companyLogoImg: "/projects/dtdc/booking.svg",
    pagesInfoArr: [
      {
        title: "Billing Architecture",
        description:
          "Master Screens for organizational data management, consignment modification with business rules, and rate calculation modules for customer-level billing.",
        imgArr: ["/projects/dtdc/booking.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "CTBS Plus is the core billing system at DTDC Express. I designed and developed Master Screens to manage organizational data, enhanced the consignment modification module by adding new business rules, and built rate calculation and aggregation modules for customer-level billing.",
        "Responsible for code commits, WAR packaging, and production deployments. Faced issues with slow SQL queries in billing; optimized queries and applied indexing which improved performance. During migration, refactored modules from Spring MVC to Spring Boot, ensuring backward compatibility.",
      ],
      bullets: [
        "Designed & developed Master Screens for organizational data management.",
        "Enhanced consignment modification module with new business rules.",
        "Built rate calculation and aggregation modules for customer-level billing.",
        "Optimized slow SQL queries with indexing for improved billing performance.",
        "Refactored modules from Spring MVC to Spring Boot ensuring backward compatibility.",
        "Responsible for code commits, WAR packaging, and production deployments.",
      ],
    },
  },
  {
    id: "tat-master-upload",
    companyName: "TAT Master Upload",
    type: "Professional",
    category: ["Full Stack"],
    shortDescription:
      "React.js frontend with Spring Boot backend for file upload, retrieval, and metadata management with date-range query capabilities.",
    techStack: [
      "React",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Java",
    ],
    startDate: new Date("2022-04-01"),
    endDate: new Date("2026-11-01"),
    companyLogoImg: "/projects/dtdc/booking.svg",
    pagesInfoArr: [
      {
        title: "Upload Architecture",
        description:
          "React.js frontend for intuitive file upload with Spring Boot backend services handling file processing, storage, and REST API-based metadata management.",
        imgArr: ["/projects/dtdc/booking.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a full-stack file management system with a React.js frontend for intuitive file upload and retrieval. The Spring Boot backend processes, stores, and manages uploaded files securely.",
        "Designed REST APIs for file upload, retrieval, and metadata management. Handled challenges around efficient file uploads, data integrity, and syncing frontend date-range queries with backend file metadata.",
      ],
      bullets: [
        "Built React.js frontend for intuitive file upload and retrieval experience.",
        "Implemented Spring Boot backend services to process, store, and manage uploaded files.",
        "Designed REST APIs for file upload, retrieval, and metadata management.",
        "Ensured files are stored and retrieved securely from specified directories.",
        "Implemented robust file validation and directory management.",
        "Designed efficient query mechanisms for date-range based file retrieval.",
      ],
    },
  },
  {
    id: "ctbs-scheduler",
    companyName: "CTBS Booking vs Delivery Scheduler",
    type: "Professional",
    category: ["Backend"],
    shortDescription:
      "Multithreaded scheduler for automated report generation and distribution, improving performance of DTDC's booking vs delivery reporting modules.",
    websiteLink: "https://www.dtdc.in",
    techStack: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    startDate: new Date("2019-09-01"),
    endDate: new Date("2022-03-31"),
    companyLogoImg: "/projects/dtdc/booking.svg",
    pagesInfoArr: [
      {
        title: "Scheduler Architecture",
        description:
          "Multithreaded scheduler built with Java 8 and Spring Boot for faster report generation with integrated mail APIs for automated distribution.",
        imgArr: ["/projects/dtdc/booking.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a scheduler leveraging Java multithreading for faster report generation, comparing booking data against delivery records at DTDC.",
        "Integrated with mail APIs for automated report distribution to stakeholders. Improved overall performance of the reporting modules significantly.",
      ],
      bullets: [
        "Built scheduler with multithreading for faster report generation.",
        "Integrated with mail APIs for automated distribution.",
        "Improved performance of reporting modules.",
        "Used Java 8, Spring Boot, MySQL, and REST Templates.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
