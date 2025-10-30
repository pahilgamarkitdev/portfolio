"use client";

import React from 'react'
import { motion } from "framer-motion";
import { CardSpotlight } from './ui/card-spotlight';


export default function About() {
  return (
    <CardSpotlight className="w-full" color="#19303a">
      <motion.section
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
      whileHover={{ scale: 1.02 }}>
      <h1 className='hidden text-2xl font-bold
      mobile_s:block
      '>About</h1>
      <p>
        I am Mark Lloyd Pahilga from the Western Institute of Technology.
      </p>
      <p>
      I am a jack of all trades and is eager to learn and try anything that interests me in tech, from Web, Mobile, Game, and AI. Currently, I mainly focus on Full Stack Development, I use React, and NextJs for my Front End, Node and ExpressJS for the Back End, and I use either PostgreSQL for SQL Database or MongoDB for NoSQL.
      </p>

      <p>
        I think taking a jack-of-all-trades route for now can help me become a better Software Engineer because, in the end, all the tech we use is just a tool, it just depends on the scenario on how and what tools we should use.
      </p>
    </motion.section>

  
    </CardSpotlight>
  )
}
