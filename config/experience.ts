import { ValidSkills } from "./constants";

export type ExperienceKind = "work" | "education";

export interface ExperienceInterface {
  id: string;
  kind: ExperienceKind;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "dtdc-sr-engineer",
    kind: "work",
    position: "Sr. Software Engineer IT",
    company: "DTDC Express Limited",
    location: "Bangalore, India",
    startDate: new Date("2022-04-01"),
    endDate: "Present",
    description: [
      "Designed & developed Master Screens to manage organizational data for the CTBS Plus Billing System.",
      "Enhanced consignment modification module by adding new business rules and built rate calculation and aggregation modules for customer-level billing.",
      "Developed the React.js frontend for intuitive file upload and retrieval (TAT Master Upload), implemented Spring Boot backend services, and designed REST APIs for file upload, retrieval, and metadata management.",
    ],
    achievements: [
      "Migrated apps from Java 8 → Java 21 and Spring 4.x → Spring Boot 3.x (WAR → JAR, actuator integration).",
      "Improved performance with batch processing for Excel & DB ops, reducing processing time significantly.",
      "Implemented Excel upload & validation (Apache POI), reducing manual effort by 60%.",
      "Optimized SQL queries & indexing strategies, improving response time of billing/reporting modules.",
      "Integrated with BRIM APIs, GST Master APIs for seamless business flow.",
      "Set up ELK stack integration & structured logging for monitoring and debugging.",
      "Ensured zero-downtime production deployments via careful planning & coordination with DevOps.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "React",
      "Jenkins",
      "Docker",
      "Kubernetes",
    ],
    companyUrl: "https://www.dtdc.in",
  },
  {
    id: "dtdc-engineer",
    kind: "work",
    position: "Software Engineer IT",
    company: "DTDC Express Limited",
    location: "Bangalore, India",
    startDate: new Date("2019-09-01"),
    endDate: new Date("2022-03-31"),
    description: [
      "Developed scheduler with multithreading for faster report generation (CTBS Booking vs Delivery Scheduler).",
      "Integrated with mail APIs for automated distribution and improved performance of reporting modules.",
    ],
    achievements: [
      "Built CTBS Booking vs Delivery Scheduler using Java 8, Spring Boot, MySQL, and multithreading.",
      "Integrated automated mail distribution for scheduled reports.",
      "Improved performance of reporting modules significantly.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
    ],
    companyUrl: "https://www.dtdc.in",
  },
  {
    id: "dtdc-trainee",
    kind: "work",
    position: "Software Trainee – CO-IT",
    company: "DTDC Express Limited",
    location: "Bangalore, India",
    startDate: new Date("2018-07-01"),
    endDate: new Date("2019-08-31"),
    description: [
      "End-to-end development of core ADM Billing and EDD (Expected Delivery Date) module using Java & Spring.",
      "Integrated REST APIs for real-time delivery date calculation and supported production deployment.",
    ],
    achievements: [
      "Delivered core billing module from scratch using Java & Spring.",
      "Integrated REST APIs for real-time expected delivery date calculation.",
      "Supported production deployment and issue resolution.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
    ],
    companyUrl: "https://www.dtdc.in",
  },
  {
    id: "ewit",
    kind: "education",
    position: "BE: Bachelor of Engineering in ECE",
    company: "East West Institute of Technology",
    location: "VTU Karnataka, India",
    startDate: new Date("2013-08-01"),
    endDate: new Date("2017-06-01"),
    description: [
      "Completed a Bachelor of Engineering in Electronics and Communication Engineering from VTU Karnataka.",
    ],
    achievements: [
      "Graduated with a Bachelor of Engineering in ECE (2017).",
    ],
    skills: ["Java", "HTML 5", "CSS 3"],
    companyUrl: "",
  },
];

export const workExperiences = experiences.filter((e) => e.kind === "work");
export const educationExperiences = experiences.filter(
  (e) => e.kind === "education"
);
