import React from 'react'

export default function About() {
  return (
    <section
      id='about'
     className='
     flex flex-col justify-center backdrop-blur-[1.5px] rounded-[0.5rem] shadow-light_shadow
     xl:p-12 xl:mt-7 xl:mb-14 xl:gap-3 xl:text-[1.1rem]
     mobile_s:p-5 mobile_s:mb-7 mobile_s:gap-2 mobile_s:text-base
     dark:shadow-dark_shadow
     '>
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
    </section>
  )
}
