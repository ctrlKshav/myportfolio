﻿"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useInView } from 'react-intersection-observer'

export default function Experience() {
  
  const {ref} = useSectionInView("Experience");

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeading> My experience </SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item,index)=>{
          const {ref,inView} = useInView({threshold:0})
        return (
          <div key={index} className='vertical-timeline-element' ref={ref}>
            <VerticalTimelineElement visible={inView} contentStyle={{background:"#f3f4f6",boxShadow:"none",
            border:"1px solid rgba(0,0,0,0.5)",textAlign:"left",padding:"1.3rem 2rem"
            }}
            contentArrowStyle={{borderRight:"0.4rem solid #9ca3af"}}
            date={item.date} icon={item.icon} iconStyle={{background:"white",fontSize:"1.5rem"}} >
              <h3 className="font-bold capitalize">{item.title}</h3>
              <p className='!font-medium !mt-1'>{item.location}</p>
              <p className='!font-normal text-gray-800'>{item.description}</p>
            
            </VerticalTimelineElement>
          </div>
        )})}
      </VerticalTimeline>

    </section>
  )
}
