"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/theme-context'

export default function Experience() {
  
  const {ref} = useSectionInView("Experience");
  const {theme} = useTheme()

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeading> My experience </SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item,index)=>{
          const {ref,inView} = useInView({threshold:0})
        return (
          <div key={index} className='vertical-timeline-element' ref={ref}>
            <VerticalTimelineElement visible={inView} 
            contentStyle={{
              background:  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.5)",
              boxShadow:"none",
              border:"1px solid rgba(0,0,0,0.5)",textAlign:"left",padding:"1.3rem 2rem"
            }}
            contentArrowStyle={{borderRight:theme === "light"?"0.4rem solid #9ca3af":"0.4rem solid rgba(255,255,255,0.5)"}}
            date={item.date} icon={item.icon} iconStyle={{background:theme === "light"?"white":"rgba(255,255,255,0.5)",fontSize:"1.5rem"}} >
              <h3 className="font-bold capitalize">{item.title}</h3>
              <p className='!font-medium !mt-1'>{item.location}</p>
              <p className='!font-normal text-gray-800 dark:text-white/70'>{item.description}</p>
            
            </VerticalTimelineElement>
          </div>
        )})}
      </VerticalTimeline>

    </section>
  )
}
