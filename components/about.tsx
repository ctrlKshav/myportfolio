"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section  initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.175}}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" id="about" >

<SectionHeading> About Me </SectionHeading>

<p className="mb-3">
  Hi, I'm <span className="font-bold text-gray-950">Keshav Mittal</span>, a fresher with  a passion for coding looking to gain some professional experience. <br />
  I usually work with <span className="font-bold">MERN stack</span>, but also have built strong foundations in <span className="font-medium">Java and Python</span>. I do have some hands-on experience working with <span className="font-medium">Django </span> 
  and have also Explored the domain of <span className="font-medium">Data Science and Machine Learning</span> using python libraries like <span className="font-medium">pandas, seaborn, matplotlib, sklearn</span>. <br />
  I also have good command over <span className="font-medium">Bash</span>, <span className="font-medium">Git</span> and <span className="font-medium">general computing skills</span>. <br />
  I'm constantly <span className="font-medium">learning and improving</span> my repertoire. My favorite part of programming is solving <span className="font-medium">real life problems</span> with my laptop.
  I'm particularly interested in keeping myself updated with the latest <span className="font-medium">AI tools</span> arriving in the tech domain.
</p>

<p>
  <span className="italic">Outside of coding</span>, I enjoy playing <span className="font-medium">Basketball and Chess</span><br />
</p>


    </motion.section >
  )
}
