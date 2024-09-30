"use client";

import React from 'react'
import {skillsData} from "@/lib/data"
import SectionHeading from "@/components/section-heading"
import { useSectionInView } from '@/lib/hooks'
import {motion} from 'framer-motion'

export default function Skills() {

    const {ref} = useSectionInView("Skills")
    const fadeInAnimationsVariants = {
        initial : {opacity:0,y:100},
        animate : (index:number) => ({opacity:1,y:0,transition:{delay:0.05*index}})
    }

  return (
    <section className="max-w-[53rem] scroll-mt-28 text-center mb-28 sm:mb-40" id="skills" ref={ref}
     >
        <SectionHeading>My skills</SectionHeading>
        <ul className='flex flex-wrap max-w-1/2 gap-3 justify-center text-lg '>
           {skillsData.map((skill,index)=>
                {
                return( 
                <motion.li className='min-w-24 bg-white text-gray-950 border border-black/15 rounded-lg px-5 py-3 text-center '
                variants={fadeInAnimationsVariants} initial="initial"  whileInView="animate"
                viewport={{once:true}}
                custom={index}
                key={index}>
                    {skill}
                </motion.li>
                )}
        )}
        </ul>
        
    </section>  
  )
}
