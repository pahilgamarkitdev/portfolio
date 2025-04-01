/* eslint-disable @typescript-eslint/no-unused-vars */
import { StaticImageData } from "next/image";

import d1 from "@/images/direksyon/1.png";
import d2 from "@/images/direksyon/2.png";
import d3 from "@/images/direksyon/3.png";
import d4 from "@/images/direksyon/4.png";
import d5 from "@/images/direksyon/5.png";
import d6 from "@/images/direksyon/6.png";

export type projectType = {
  title: string;
  description: string;
  techStack: string[];
  private: boolean | null;
  github: string | null;
  link: {
    href: string;
    name: string;
  } | null;
  dialog: {
    images: StaticImageData[];
    title: string;
    fullDescription: string[];
  };
  personal?: boolean;
  company?: string;
  role?: string;
};

export const projectsData: projectType[] = [
  {
    title: "Direksyon",
    description: "This map is just one of the ways we strive to make your experience at our school smoother, more efficient, and more enjoyable.",
    techStack: ["React", "TypeScript", "Next.js"],
    private: false,
    github: "https://github.com/username/direksyon",
    link: {
      href: "https://direksyon.vercel.app/",
      name: "direksyon.vercel.app/",
    },
    dialog: {
      images: [
        d1, d2, d3, d4, d5, d6
      ],
      title: "Direksyon Project",
      fullDescription: ["This project, titled Direksyon, is designed as part of my Information Technology coursework at Western Institute of Technology. The goal is to we’re committed to creating an environment that promotes learning, growth, and community. Our campus is a hub of academic excellence, and we want everyone to feel confident in navigating the spaces that help support their journey.  "],
    },
  },
];
