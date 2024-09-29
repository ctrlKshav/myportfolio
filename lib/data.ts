import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TS1 from "@/public/TS1.jpg"
import AQ2 from "@/public/AQ2.jpg"
import CA2 from "@/public/CA2.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "TaskSync",
    description:
      `A full-stack productivity tool where users can organize tasks, take notes, and schedule their upcoming events all at one place.
      Integrated with Google API for seamless calendar sync. Unique project experience as I used React in frontend and Django for the backend.`,
    tags: ["React", "Django", "Bootstrap", "PostgreSQL", "Google API"],
    imageUrl: TS1,
    projectUrl:"https://github.com/ctrlKshav/TaskSync",
    
  },
  {
    title: "Air Quality Analysis",
    description:
      `A data analysis project focused on visualizing air quality metrics across different time periods in Delhi(infamous for its pollution).
       I used Python libraries to generate some insightful charts and trends.`,
    tags: ["Python", "pandas", "matplotlib", "seaborn"],
    imageUrl: AQ2,
    projectUrl:"https://github.com/ctrlKshav/AirQualityAnalysis",
    
  },
  {
    title: "Course Academy",
    description:
      `A simple online distance learning platform built with Vanilla HTML,CSS,JS.
      I tried to make myself familiar with how to make a responsive websites building Course Academy.`,
    tags: ["HTML", "CSS", "JavaScript", "FormSpreeAPI"],
    imageUrl: CA2,
    projectUrl:"https://github.com/ctrlKshav/CourseAcademy",
    
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
