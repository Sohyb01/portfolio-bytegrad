"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TextEffect } from "./text-effect";

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-10 md:py-16 lg:py-32 overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-0 py-20 pb-10"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          03 — ABOUT
        </p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">
          Who am I?
        </h2>
      </motion.div>

      <div className="px-8 lg:px-12 text-pretty text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-white/90">
        <TextEffect per="char" as="p" className="">
          I specialize in building effective websites & web apps using the most
          modern tools. I&apos;m currently open to full time & project-based
          opportunities.
        </TextEffect>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-16 mx-8 md:mx-12 h-px bg-linear-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  );
}
