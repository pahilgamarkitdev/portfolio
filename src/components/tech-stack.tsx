import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import Image from 'next/image'

type skillStack = {
    img: string,
    name: string
}

const stack: skillStack[] = [
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        name: "React"
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        name: "NextJs"
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
        name: "Supabase"
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        name: "Python"
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        name: "JavaScript"
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        name: "Java"
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        name: "Git"
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        name: "Docker"
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        name: "TypeScript"
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
        name: "MongoDB"
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
        name: "NodeJS"
    },
     
]

export default function TechStack() {
    return (
        <div className='flex flex-col gap-2 pb-5'>
            <h1 className='font-semibold text-xl'>Skills:</h1>
            <div className='flex flex-row gap-4'>
                {
                    stack.map((stack, index) => (
                        <div key={index}>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Image src={stack.img}
                                            alt={stack.name}
                                            width={30}
                                            height={30}
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{stack.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
