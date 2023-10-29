import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import amphionImg from "@/public/Project_2.jpg";
import carhubImg from "@/public/Project_1.jpg";

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
    location: "KSU - Egypt",
    description:
      "I immersed myself in Web Development throughout my university education.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Front-End Instructor",
    location: "Alexandria, Egypt",
    description:
      "I shared my experience with students of Programmer's Elite School. I developed curricula and taught sessions to children and university students.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Alexandria, Egypt",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CarHub",
    description:
      "A project that showcases multiple cars to rent, using data & images pulled from an external API. The project also includes filtering functions.",
    tags: ["React", "Next.js", "Tailwind", "APIs", "TypeScript"],
    imageUrl: amphionImg,
    projectUrl: "https://car-hub-gilt-gamma.vercel.app/",
  },
  {
    title: "Amphion",
    description:
      "An original project where users can browse & filter through a selection of headphones, filter & add to cart, with paypal checkout",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Paypal"],
    imageUrl: carhubImg,
    projectUrl: "https://amphion-x8zv.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Github",
  "Prisma",
  "Figma",
  "Tailwind",
  "PostgreSQL",
  "Framer Motion",
] as const;
