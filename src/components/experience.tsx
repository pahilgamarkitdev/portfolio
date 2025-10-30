"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "./ui/card-spotlight";

type experienceType = {
  title: string;
  link?: string;
  company?: string;
  date?: string;
  accomplishment: string[];
};

const experience: experienceType[] = [
  {
    title: "Student",
    link: "https://westerninstituteoftechnology.com/",
    company: "Western Institute of Technology",
    date: "2023 - Current",
    accomplishment: [
      "As a second-year Information Technology student, I’m still building hands-on experience, " +
      "but my coursework has given me a strong foundation in programming, databases, networking, and web development. " +
      "I’ve completed projects like Direksyon, which helped me develop problem-solving and technical skills. " +
      "I’m eager to apply my knowledge in real-world settings and learn quickly through new challenges."
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col min-h-full justify-center">
      <h1 className="text-2xl font-bold px-3 ml-auto pb-2 pt-5">Experience</h1>
      {experience.map((experience, index) => (
         <CardSpotlight className="w-full" color="#19303a">
              <motion.div
                id='about'
                className='
                p-4
                flex flex-col justify-center
               xl:gap-3 xl:text-[1.1rem]
                mobile_s:gap-2 mobile_s:text-base
                dark:text-white
              '
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2
            className="font-bold
                            lg:text-2xl
                            mobile_s:text-lg 
                        "
          >
            {experience.title}
          </h2>

          <div className="flex items-center justify-between gap-2">
            <Link
              href={experience.link || "#"}
              className="cursor-pointer dark:hover:text-teal-100 hover:text-teal-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3
                className="font-semibold
                            lg:text-lg
                            mobile_s:text-sm
                            "
              >
                {experience.company}
              </h3>
            </Link>
            <p className="lg:text-[1.1rem] mobile_s:text-sm">
              {experience.date}
            </p>
          </div>
          <ul>
            {experience.accomplishment.map((accomplishment, index) => (
              <li
                key={index}
                className="list-disc ml-5
                                    lg:text-base
                                    mobile_s:text-xs
                                    "
              >
                {accomplishment}
              </li>
            ))}
          </ul>
        </motion.div>
        </CardSpotlight>
      ))}
    </div>
  );
}
