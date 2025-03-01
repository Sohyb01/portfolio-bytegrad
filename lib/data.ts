import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pesImg from "@/public/Project_5.jpg";
import travelnileImg from "@/public/Project_8.png";
import amphionImg from "@/public/Project_2.jpg";
import dfscenographyImg from "@/public/Project_7.png";

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
    title: "University Degree",
    location: "KSU",
    description:
      "I immersed myself in Web Design & Development throughout my university education.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
  {
    title: "Front-End Instructor",
    location: "Alexandria, EG",
    description:
      "I shared my knowledge with students of Programmer's Elite School. I developed curricula and taught sessions to children and university students.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Full-Stack Developer, Brand Designer",
    location: "Johannesburg, SA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Drizzle, I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Programmer's Elite School",
    description:
      "An educational company in Alexandria, EG. They teach programming, robotics, and AI to kids and university students",
    tags: ["React", "Next.js", "TypeScript", "Prisma", "Tailwind", "Figma"],
    imageUrl: pesImg,
    projectUrl: "https://pes-edu.com/",
  },
  {
    title: "Levare Studio (Work in progress)",
    description:
      "My Business Website where I do Brand Strategy & Design for my clients - Work in progress",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Figma", "Resend"],
    imageUrl: amphionImg,
    projectUrl: "https://levare-studio.vercel.app/",
  },
  {
    title: "Dalia Farah Scenography",
    description:
      "Portfolio website to display the work of Scenographer & Fine Arts Professor, Dr Dalia Farah",
    tags: ["React", "Next.js", "TypeScript", "Shadcn-UI", "MDX Blog", "Figma"],
    imageUrl: dfscenographyImg,
    projectUrl: "https://www.dalia-farah.com/",
  },
  {
    title: "TravelNile (Work in progress)",
    description:
      "Branding & Development Project for a TravelNile - a Tourism Company that specializes in Authentic Egyptian Trips & Tours",
    tags: ["Figma", "TypeScript", "Next.js", "Tailwind", "Figma", "Drizzle"],
    imageUrl: travelnileImg,
    projectUrl:
      "https://www.figma.com/proto/Ec3IjB4zSCUsGT4f4DkGj1/TravelNile-Web-Design---shadcn?node-id=309-67&t=0RKpDwEI4kJ83CEU-1",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "TypeScript",
  "Copywriting",
  "React",
  "Next.js",
  "Git",
  "Drizzle",
  "Prisma",
  "Tailwind",
  "Shadcn-UI",
  "SQL",
  "Framer Motion",
  "Figma",
  "UI/UX",
] as const;
