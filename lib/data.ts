import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pesImg from "@/public/Project_5.jpg";
import homelyImg from "@/public/Project_4.jpg";
import amphionImg from "@/public/Project_2.jpg";
import carhubImg from "@/public/Project_1.jpg";
import alphasweepsImg from "@/public/Project_6.jpg";

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
    date: "2019-2023",
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
    title: "Brand & Web Designer, Full-Stack Developer",
    location: "Johannesburg, SA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, I'm open to full-time opportunities.",
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
    title: "Dalia Farah Scenography",
    description:
      "Portfolio website to display the work of Scenographer & Fine Arts Professor, Dr Dalia Farah",
    tags: ["React", "Next.js", "TypeScript", "Shadcn-UI", "MDX Blog", "Figma"],
    imageUrl: "/Project_7.png",
    projectUrl: "https://www.dalia-farah.com/",
  },
  {
    title: "Levare Studio (Work in progress)",
    description:
      "My Business Website where I do Brand Strategy & Design for my clients - Work in progress",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Figma", "Resend"],
    imageUrl: amphionImg,
    projectUrl: "https://levarestudio.com/",
  },
  {
    title: "AlphaSweeps.com (Discontinued)",
    description:
      "An Options Data Streaming Service. Complete with Authentication and Payments using Stripe.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Prisma",
      "Shadcn-UI",
      "Stripe",
      "Framer-Motion",
    ],
    imageUrl: alphasweepsImg,
    projectUrl: "#",
  },
] as const;

export const skillsData = [
  "Brand Strategy",
  "Brand Design",
  "Copywriting",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Github",
  "Prisma",
  "Tailwind",
  "AI Tools",
  "SQL",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
  "UI/UX",
] as const;
