import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import type {SectionName} from "@/lib/types"


export function useSectionInView(sectionName:SectionName,threshold = 0.6){
    const {ref,inView} = useInView({threshold});

    const {setActiveSection,timeOfLastClick} = useActiveSectionContext();
  
    //The time of last click is thing is here to check if the about component has come inview by scrolling or by
    //clicking some other component below about like projects, skills etc
  
    useEffect(()=>{
      if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection(sectionName)
    }},[inView,setActiveSection,timeOfLastClick,sectionName])

    return {ref}
    
}