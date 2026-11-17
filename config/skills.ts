import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Java",
    description:
      "Proficient in Core Java, Java SE 7/8, and Java EE with strong OOP concepts, exception handling, collections, multithreading, and memory management.",
    rating: 5,
    icon: Icons.java,
  },
  {
    name: "Spring Boot",
    description:
      "Expertise in Spring Framework including Spring Boot and Spring MVC for developing scalable and maintainable RESTful microservices and web applications.",
    rating: 5,
    icon: Icons.springboot,
  },
  {
    name: "MySQL",
    description:
      "Hands-on experience with MySQL for database design, complex queries, optimization, indexing strategies, and ORM integrations.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "REST APIs",
    description:
      "Experience building and consuming RESTful Web Services (JAX-RS), integrating with APIs, and handling JSON/XML data formats.",
    rating: 5,
    icon: Icons.link,
  },
  {
    name: "React",
    description:
      "Skilled in front-end development using React.js for building interactive and responsive user interfaces.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Javascript",
    description:
      "Skilled in JavaScript and jQuery for building responsive and interactive UI components.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Front-end development with HTML enabling responsive and accessible web design.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Styling and layout expertise with CSS for creating polished web interfaces.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Docker",
    description:
      "Exposure to Docker for containerization and cloud-native application deployment.",
    rating: 3,
    icon: Icons.docker,
  },
  {
    name: "Kubernetes",
    description:
      "Working knowledge of Kubernetes for container orchestration and deployment.",
    rating: 3,
    icon: Icons.kubernetes,
  },
  {
    name: "Jenkins",
    description:
      "Working knowledge of Jenkins for CI/CD pipelines and automated deployments.",
    rating: 4,
    icon: Icons.jenkins,
  },
  {
    name: "Git",
    description:
      "Proficient with GitLab for version control and collaborative development.",
    rating: 4,
    icon: Icons.git,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
