"use client";
import React from 'react'
import SectionHeading from '@/components/section-heading'
import { useSectionInView } from '@/lib/hooks'
import { motion} from 'framer-motion'
import {sendEmail} from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';


export default function Contact() {
    const {ref} = useSectionInView("Contact")
    

  return (
    <motion.section id="contact" className="scroll-mt-28 sm:mb-40 mb-28 w-[min(100%,38rem)] text-center" ref={ref}
    initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.9}} viewport={{once:true}}>
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-gray-700 -mt-3 dark:text-white/80">You can contact me directly at{" "}
            <a href="mailto:keshavm9978@gmail.com" className='underline'>keshavm9978@gmail.com</a> or through this form.</p>
        
        <form action={async (formData)=>{
            console.log('Client Side Action')
            const {response,error} = await sendEmail(formData)
            if(error){
                toast.error(error);
                return;
            }
            toast.success("Submitted Successfully")
        }} className='mt-10 flex flex-col dark:text-black'>
            <input type="email" className='h-14 rounded-lg border borderBlack px-4 dark:bg-white/80 dark:focus:bg-white/100 transition-all dark:outline-none' placeholder="Enter Your email" required
            maxLength={200} name="senderemail" /> 
            <textarea  className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/80 dark:focus:bg-white/100 transition-all dark:outline-none' placeholder='Your Message'
            maxLength={5000} required name="message"></textarea> 
            <SubmitBtn />

        </form>

    </motion.section>
  )
}
