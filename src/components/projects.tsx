// React Server Components
import * as motion from "framer-motion/client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { CardSpotlight } from "./ui/card-spotlight";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import SayolongDialog from "./project/project-dialog";
import { projectsData } from "@/lib/projects-data";
import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center min-h-full gap-4 pt-20"
    >
      <h1 className="sticky top-0 text-2xl font-bold ml-2">Projects</h1>
      {projectsData.map((project, index: number) => (
        <Dialog key={index} open={project.private ? false : undefined}>
          <DialogTrigger asChild>
            <CardSpotlight className="w-full" color="#19303a">
              <motion.section
                key={index}
                className={cn(
   'p-4flex flex-col justify-center xl:gap-3 xl:text-[1.1rem] mobile_s:gap-2 mobile_s:text-base dark:text-white',         
             project.private && "cursor-default"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  borderTopColor: `hsl(0, 0%,${0 + index * 20}%)`,
                  borderTopWidth: 1 + index * 0.1,
                  top: 35 + index * 10,
                  zIndex: projectsData.length + index,
                  opacity: 1,
                  y: 0,
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
              <div className="flex items-center justify-between text-end">
                <h2
                  className="font-bold
                        lg:text-2xl
                        mobile_s:text-lg
                        "
                >
                  {project.title}
                </h2>

                {project.personal && (
                  <p className="font-medium">Personal Project</p>
                )}

                {project.company && (
                  <div>
                    <p className="font-medium">{project.company}</p>
                    <p className="font-light text-xs">{project.role}</p>
                  </div>
                )}
              </div>

              <p
                className="
                        lg:text-[1.1rem]
                        mobile_s:text-sm
                        "
              >
                {project.description}
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-3 flex-wrap">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center rounded-[0.4rem] max-h-[2rem] text-nowrap text-center
                                    lg:p-2 lg:text-base
                                    mobile_s:p-1 mobile_s:text-xs
                                    bg-white text-black
                                    dark:from-[#005F73] dark:to-[#1d3337]
                                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col items-end">
                  {project.github && (
                    <Link href={project.github} target="_blank">
                      <Button variant="ghost">
                        <FaGithub size={20} />
                      </Button>
                    </Link>
                  )}

                  {project.link && (
                    <Link href={project.link.href} target="_blank">
                      <Button variant="ghost" className="flex gap-1">
                        <Link2 />
                        <p>{project.link.name}</p>
                      </Button>
                    </Link>
                  )}
                </div>

                {project.title === "Taskbuddy" && (
                  <div>
                    <p className="text-xs font-extralight">Still in development and private</p>
                  </div>
                )}
              </div>
              </motion.section>
            </CardSpotlight>
          </DialogTrigger>

          <DialogContent className="min-w-[80%] min-h-[80%] max-w-[80%] max-h-[80%] flex flex-col">
            <DialogHeader>
              <DialogTitle className="lg: text-2xl">
                {project.title}
              </DialogTitle>
            </DialogHeader>
            <div className="overflow-auto">
              <SayolongDialog project={project} />
            </div>
            <DialogDescription></DialogDescription>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
