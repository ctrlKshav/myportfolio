import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/theme-context'
import { experiencesData } from '@/lib/data'

type ExperienceProps = (typeof experiencesData)[number]

export default function ExperienceItem({title,location,description,icon,date}:ExperienceProps) {

    const {ref,inView} = useInView({threshold:0})
    const {theme} = useTheme()
    
    return (
        <div className='vertical-timeline-element' ref={ref}>
          <VerticalTimelineElement visible={inView} 
          contentStyle={{
            background:  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.5)",
            boxShadow:"none",
            border:"1px solid rgba(0,0,0,0.5)",textAlign:"left",padding:"1.3rem 2rem"
          }}
          contentArrowStyle={{borderRight:theme === "light"?"0.4rem solid #9ca3af":"0.4rem solid rgba(255,255,255,0.5)"}}
          date={date} icon={icon} iconStyle={{background:theme === "light"?"white":"rgba(255,255,255,0.5)",fontSize:"1.5rem"}} >
            <h3 className="font-bold capitalize">{title}</h3>
            <p className='!font-medium !mt-1'>{location}</p>
            <p className='!font-normal text-gray-800 dark:text-white/70'>{description}</p>
          
          </VerticalTimelineElement>
        </div>
    )
}
