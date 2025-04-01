import Link from "next/link";
import React from "react";

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
        <div
          key={index}
          className="flex flex-col gap-3 backdrop-blur-[1.5px] rounded-[0.5rem] shadow-light_shadow
                    lg:p-10 lg:mb-6
                    mobile_s:p-5 mobile_s:mb-4
                    dark:shadow-dark_shadow
                    "
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
        </div>
      ))}
    </div>
  );
}
