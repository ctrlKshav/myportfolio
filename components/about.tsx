"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import {useSectionInView} from "@/lib/hooks"

export default function About() {

 const {ref} = useSectionInView("About",0.6)

  return (
    <motion.section  initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.175}}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" id="about" ref={ref} >

<SectionHeading> About Me </SectionHeading>

<p className="mb-3">
  Hi, I'm <span className="font-bold">Keshav Mittal</span>, a fresher with a passion for coding, seeking an internship to gain professional experience. <br />
  I usually work with the <span className="font-bold">MERN stack</span>, but I have also built strong foundations in <span className="font-medium">TypeScript</span> and <span className="font-medium">Python</span>. I have hands-on experience with <span className="font-medium">Django</span> and <span className="font-medium">FastAPI</span>. I have also explored the domains of <span className="font-medium">Data Science</span> and <span className="font-medium">Machine Learning</span> using Python libraries like <span className="font-medium">pandas</span>, <span className="font-medium">seaborn</span>, <span className="font-medium">matplotlib</span>, and <span className="font-medium">sklearn</span>. <br />
  I have a strong command on <span className="font-medium">Bash</span> and <span className="font-medium">Git</span>. <br />
  Recently, I’ve expanded my skill set to include <span className="font-medium">DevOps</span> tools like <span className="font-medium">Docker</span> and <span className="font-medium">AWS</span>, and I am currently learning <span className="font-medium">AI concepts</span> such as <span className="font-medium">NLP</span> and <span className="font-medium">Autonomous Agents</span> to build an AI-assisted full-stack repertoire. <br />
  I'm constantly <span className="font-medium">learning and improving</span> myself. My favorite part of programming is solving <span className="font-medium">real-life problems</span> with my laptop. I'm particularly interested in staying updated with the latest <span className="font-medium">technologies</span> and <span className="font-medium">AI tools</span>.
</p>

<p>
  <span className="italic">Outside of coding</span>, I enjoy playing <span className="font-medium">Basketball</span> and <span className="font-medium">Chess</span>.
</p>



    </motion.section >
  )
}
