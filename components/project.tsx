"use client";
import React, { useRef } from 'react'
import {projectsData} from '@/lib/data'
import Image from 'next/image'
import {motion, useTransform} from 'framer-motion'
import {useScroll} from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]

export default function Project({title,description,tags,imageUrl,projectUrl} : ProjectProps){
  
  const ref = useRef<HTMLDivElement>(null)

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["0 1","1.33 1"]
  })

  const scaleProgress = useTransform(scrollYProgress,[0,1],[0.8,1])
  const opacityProgress = useTransform(scrollYProgress,[0,1],[0.6,1])

  return (
    <motion.div className="group mb-3 sm:mb-8 last:mb-0" ref={ref}  style={{scale:scaleProgress,opacity:opacityProgress}}>
      <section  className=' bg-gray-100 max-w-[52rem] border border-black/5 overflow-hidden
      sm:pr-8 relative  group-even:even:pl-8
      hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
     >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col gap-2 h-full sm:group-even:ml-[26rem]">
          <a className='text-2xl font-semibold hover:scale-110 hover:translate-x-5'
          href={projectUrl} target="_blank">{title}</a>
          <p className='my-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag,index)=>
              <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white
              rounded-full dark:text-white/80'>{tag}</li>
            )}
          </ul>
        </div>
        <Image src={imageUrl} alt='Project Image' quality={95}
        className='absolute top-8 -right-40 w-[32rem] rounded-t-lg group-even:right-[intial] group-even:-left-40
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
        hidden sm:block' />
      </section>
    </motion.div>
  )
}