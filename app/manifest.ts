import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pooja H S | Sr. Software Engineer",
    short_name: "Pooja H S",
    description:
      "Pooja H S - Sr. Software Engineer with 7+ years of experience in Java, Spring Boot, React.js, and MySQL at DTDC Express Limited.",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#111111",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "full stack",
      "software engineering",
      "java",
      "developer",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
