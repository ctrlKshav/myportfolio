"use client"
import Image from 'next/image'
import React from 'react'
import MyProfile from '@/public/MyProfile.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {BsArrowRight, BsGithub, BsLinkedin} from 'react-icons/bs'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'

export default function Intro() {

  const {ref} = useSectionInView("Home",0.5)
  
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96" id='home' ref={ref}>
        <div className="flex items-center justify-center">
            <div className="relative">

                <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{type:"tween",duration:0.25}}>
                  <Image src={MyProfile} alt='Keshav Profile' priority={true}
                  className='h-24 w-24 rounded-full border-[0.20rem] border-white object-cover' />
                </motion.div>

                <motion.span className='text-2xl absolute bottom-0 right-0'
                 initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}}
                 transition={{type:"spring",stiffness:125,delay:0.05,duration:0.5}}>🧑‍💻</motion.span>
            </div>
        </div>

        <motion.p className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl'
        initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}>

        <span className="font-bold">Hey there, Keshav this side.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> on weekdays and a{" "}
        <span className="font-bold">full-slack developer</span> on weekends. I like doing <span className="italic">cool internet stuff</span>.
        Usually I work with {" "}
        <span className="underline">React (Next.js)</span> to create functional and responsive Web Apps.


        </motion.p>

        <motion.div className='flex flex-col justify-center items-center gap-3 px-4 text-lg font-medium sm:flex-row '
        initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>

          <Link href='#contact' className=' group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105
          transition'>
            {/* Apparently the text itself is considered a flex item I didn't know that */}
            Contact Me <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> 
          </Link>

          <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full
           outline-none  hover:scale-110  active:scale-105
          transition cursor-pointer
          border border-black/10' href='https://drive.google.com/file/d/12wKg8dGpzr2eqybf5evU62vfVrACJxXR/view?usp=sharing'
          target='blank'>
            Resume 
            <FaExternalLinkAlt className='opacity-60 group-hover:translate-x-1 transition'/>
          </a>

          <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none  hover:scale-[1.15]  active:scale-[1.15]
          transition cursor-pointer hover:text-gray-950
          border border-black/10'
          href='https://www.linkedin.com/in/keshav3511/' target='_blank'>
            <BsLinkedin></BsLinkedin>
          </a>

          <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none  hover:scale-[1.15]  active:scale-[1.15]
          transition cursor-pointer hover:text-gray-950
          border border-black/10'
          href='https://github.com/ctrlKshav' target='_blank'>
            <BsGithub></BsGithub>
          </a>

        </motion.div>

    </section>
  )
}
