"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useTheme } from '@/context/theme-context'
import ExperienceItem from '@/components/experience-item'

export default function Experience() {
  
  const {ref} = useSectionInView("Experience");
  const {theme} = useTheme()

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeading> My experience </SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item,index)=>
          <React.Fragment key={index}>
            <ExperienceItem  {...item} />
          </React.Fragment>
       )}
      </VerticalTimeline>

    </section>
  )
}
