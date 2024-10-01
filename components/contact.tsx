"use client";
import React from 'react'
import SectionHeading from '@/components/section-heading'
import { useSectionInView } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa';
import {animate, motion} from 'framer-motion'
import {sendEmail} from '@/actions/sendEmail'


export default function Contact() {
    const {ref} = useSectionInView("Contact")
    

  return (
    <motion.section id="contact" className="scroll-mt-28 sm:mb-40 mb-28 w-[min(100%,38rem)] text-center" ref={ref}
    initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.9}} viewport={{once:true}}>
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-gray-700 -mt-3">You can contact me directly at{" "}
            <a href="mailto:keshavm9978@gmail.com" className='underline'>keshavm9978@gmail.com</a> or through this form.</p>
        
        <form action={async (formData)=>{
            console.log('Client Side Action')
            const response = await sendEmail(formData)
        }} className='mt-10 flex flex-col'>
            <input type="email" className='h-14 rounded-lg border borderBlack px-4' placeholder="Enter Your email" required
            maxLength={200} name="senderemail" /> 
            <textarea  className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='Your Message'
            maxLength={600} required name="message"></textarea> 
            <button type="submit" className='group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
            flex items-center justify-center gap-2 active:scale-105 hover:scale-110'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all
            group-hover:translate-x-1 group-hover:-translate-y-1' /> </button>

        </form>

    </motion.section>
  )
}
