"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While completing my bachelors degree in{" "}
        <span className="font-medium">Artificial Intelligence</span>, I decided
        to pursue my passion for programming. I immersed myself into learning{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        delivery of high-quality products. I{" "}
        <span className="underline">love</span> the feeling of being able to
        provide value to others. My core stack is{" "}
        <span className="font-medium">React with Next.js 14</span>. I also use
        TypeScript, Tailwind, Prisma, Supabase, and Shadcn-ui. I also do brand
        design & strategy, and I am always looking to learn new skills. I am
        always looking for <span className="font-medium">new projects</span> to
        create.
      </p>

      <p>
        <span className="italic">When I'm not coding or designing</span>, I
        enjoy weightlifting, business education, and playing chess. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          business, entrepreneurship, video editing, and social media marketing.
        </span>
      </p>
    </motion.section>
  );
}
