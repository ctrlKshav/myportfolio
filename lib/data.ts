import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact,FaUniversity,FaLaptopCode } from "react-icons/fa";
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

export const experiencesData = [
  {
    title: "Completed HSC Board",
    location: "Rajasthan School",
    description:
      "Successfully completed my higher secondary education, where I first found my interest in coding.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Third-Year Student",
    location: "LJ University",
    description:
      "Currently pursuing my third year of studies at LJ University, focusing on Web Development and Data Science.",
    icon: React.createElement(FaUniversity),
    date: "2022 - present",
  },
  {
    title: "Solved Real Life Problem",
    location: "Ahmedabad",
    description:
      "Developed some macros for my relative to help them manage their local business, improving their workflow efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Hackathon Participant",
    location: "Tic-Tech-Toe Hackathon(DAIICT)",
    description:
      "Created an online polling and surveying system in the hackathon. We didn't win but we got appreciated for our concept of work and presentation",
    icon: React.createElement(FaLaptopCode),
    date: "2023",
  },
] as const;


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
  "Express",
  "MongoDB",
  "Framer Motion",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Django",
  "Git",
] as const;
