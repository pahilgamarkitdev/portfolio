/* eslint-disable @typescript-eslint/no-unused-vars */
import { StaticImageData } from "next/image";

import d1 from "@/images/direksyon/1.png";
import d2 from "@/images/direksyon/2.png";
import d3 from "@/images/direksyon/3.png";
import d4 from "@/images/direksyon/4.png";
import d5 from "@/images/direksyon/5.png";
import d6 from "@/images/direksyon/6.png";
import cp1 from "@/images/CounterPlay/cp1.jpg";
import cp2 from "@/images/CounterPlay/cp2.jpg";
import cp3 from "@/images/CounterPlay/cp3.jpg";
import cp4 from "@/images/CounterPlay/cp4.jpg";
import cp5 from "@/images/CounterPlay/cp5.jpg";
import cp6 from "@/images/CounterPlay/cp6.jpg";
import cp7 from "@/images/CounterPlay/cp7.jpg";
import cp8 from "@/images/CounterPlay/cp8.jpg";
import cp9 from "@/images/CounterPlay/cp9.jpg";

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
  {
    title: "Counter Play",
    description: "Counter Play is a web app for Mobile Legends: Bang Bang players. It lets you browse the full roster of heroes with their roles, view recommended item builds, discover strong counters, and explore hero synergy tips all in one place to help you dominate your matches.",
  techStack: ["Next.js", "React", "Supabase", "Shadcn"],
  private: false,
    github: "git@github.com:pahilgamarkitdev/counter_play.git",
    link: {
      href: "https://counter-play.vercel.app/",
      name: "counter-play.vercel.app/",
    },
    dialog: {
      images: [
        cp1, cp2, cp3, cp4, cp5, cp6, cp7, cp8, cp9
      ],
      title: "Counter Play",
      fullDescription: ["Counter Play is a modern web application designed for Mobile Legends: Bang Bang players who want to improve their gameplay strategy. It provides detailed hero information, recommended item builds, and counter matchups to help players make smarter choices during drafts and battles."],
    },

  },
];

