﻿"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {projectsData} from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {

  const {ref} = useSectionInView("Projects",0.4)

  return (
    <section className='scroll-mt-28 mb-28 sm:mb-40' id="projects" ref={ref}>
        <SectionHeading>
            My projects
        </SectionHeading>

        <div className="">
          {projectsData.map((project,index)=>
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          )}
        </div>

        
    </section>
  )
}



