"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLenis } from "lenis/react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button, buttonVariants } from "./ui/button";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TextEffect } from "./text-effect";

type projectType = {
  id: string;
  title: string;
  tags: string[];
  image: string;
  gif: string;
  year: string;
  projectUrl: string;
  description: string;
};

export const projects: projectType[] = [
  {
    id: "evexa",
    title: "Evexa",
    tags: ["Next.js", "Shadcn", "Figma", "Resend"],
    image: "/projects/evexa.png",
    gif: "/projects/evexa.mp4",
    year: "2026",
    projectUrl: "https://evexa.tech/",
    description:
      "Landing page design & development for EVEXA — a global AI and smart solutions company delivering intelligent platforms, enterprise-grade systems, and scalable digital transformation solutions.",
  },
  {
    id: "sugarforms",
    title: "Sugarforms",
    tags: ["Next.js", "Shadcn", "Resend", "Drizzle", "Lemonsqueezy"],
    image: "/projects/sugarforms.png",
    gif: "/projects/sugarforms.mp4",
    year: "2026",
    projectUrl: "http://sugarforms.com/",
    description:
      "Solo-built SaaS which allows users to design forms visually and export unlimited nextjs-ready code. Premium users can save & manage forms and submissions, create shared workspaces, and more.",
  },
  {
    id: "brainbots",
    title: "BrainBots",
    tags: ["Next.js", "Next-intl", "Shadcn", "Drizzle"],
    image: "/projects/brainbots.png",
    gif: "/projects/brainbots.mp4",
    year: "2025",
    projectUrl: "https://brainbots-yxl8.vercel.app/en",
    description:
      "Full website remake for BrainBots (previously Programmer's Elite School) — an educational company launching in Saudi Arabia focused on teaching AI, programming, and robotics to students in schools and universities.",
  },
];

export function Works() {
  const [projectDialogOpen, setProjectDialogOpen] =
    useState<null | projectType>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dialogTagsVisible, setDialogTagsVisible] = useState(false);
  const dialogPreviewSrc = projectDialogOpen?.gif ?? "";
  const isDialogPreviewVideo = /\.(mp4|m4v|webm|ogg)$/i.test(dialogPreviewSrc);
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const openDialog = (project: projectType) => {
    setDialogTagsVisible(false);
    setProjectDialogOpen(project);
  };

  useEffect(() => {
    setDialogTagsVisible(false);
  }, [projectDialogOpen?.id]);

  const dialogTagContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const dialogTagVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  useEffect(() => {
    if (!projectDialogOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    lenis?.stop();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      lenis?.start();
    };
  }, [lenis, projectDialogOpen]);

  return (
    <section
      id="works"
      className="relative  py-10 md:py-16 lg:py-32 px-8 md:px-12"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-10"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          04 — SELECTED WORKS
        </p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">
          Recent Creations
        </h2>
      </motion.div>

      {/* Projects List */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-white/10 py-8 md:py-12"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openDialog(project)}
          >
            <div
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Year */}
              <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 md:order-0">
                {project.year}
              </span>

              {/* Title */}
              <motion.h3
                className="font-sans text-4xl md:text-6xl lg:text-7xl leading-[1em] font-light tracking-tight group-hover:text-white/70 transition-colors duration-300 flex-1 pointer-events-none "
                animate={{
                  x: hoveredIndex === index ? 20 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {project.title}
              </motion.h3>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap order-2 md:order-0">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Floating Image */}
        <motion.div
          className="absolute pointer-events-none z-50 w-64 h-40 md:w-80 md:h-48 overflow-hidden rounded-lg"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-320%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {hoveredIndex !== null && (
            <motion.img
              src={projects[hoveredIndex].image}
              alt={projects[hoveredIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                filter: "grayscale(50%) contrast(1.1)",
              }}
            />
          )}
          {/* Glitch overlay */}
          <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay" />
        </motion.div>
      </div>

      {projectDialogOpen ? (
        <Dialog
          open={!!projectDialogOpen}
          onOpenChange={(open) => !open && setProjectDialogOpen(null)}
        >
          <DialogContent
            showCloseButton={false}
            data-lenis-prevent
            data-lenis-prevent-wheel
            className="!left-0 !top-0 !flex !h-screen !w-screen !max-w-none !translate-x-0 !translate-y-0 !flex-col overflow-hidden rounded-none border-none bg-background p-0 lg:!left-1/2 lg:!top-1/2 lg:!h-[90vh] lg:!w-[90vw] lg:!max-w-[90vw] lg:!-translate-x-1/2 lg:!-translate-y-1/2"
          >
            <DialogTitle className="sr-only">Project Details</DialogTitle>
            {/* Top row controls */}
            <div className="flex h-fit w-full shrink-0 justify-between border-b border-b-border/50 bg-background">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setProjectDialogOpen(null)}
              >
                <ArrowLeft className="size-4" />
                Back
              </Button>
              <Link
                href={projectDialogOpen.projectUrl}
                target="_blank"
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                Visit
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div
              data-lenis-prevent
              data-lenis-prevent-wheel
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
            >
              {/* Project content */}
              <div className="flex flex-col items-start justify-start gap-4 pt-4 px-8 pb-10 text-start text-3xl text-pretty md:text-4xl lg:px-12 lg:text-5xl">
                <div className="w-full mx-auto max-w-75 md:max-w-lg lg:max-w-xl border-border border-2 border-solid aspect-video">
                  {isDialogPreviewVideo ? (
                    <video
                      src={dialogPreviewSrc}
                      className="h-auto w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={dialogPreviewSrc}
                      alt={`${projectDialogOpen.title} project preview`}
                      className="h-auto w-full object-cover"
                    />
                  )}
                </div>
                <p className="text-muted-foreground italic text-2xl md:text-3xl lg:text-4xl pt-2">
                  About this project
                </p>
                <TextEffect
                  key={projectDialogOpen.id}
                  per="char"
                  as="p"
                  speedReveal={2.4}
                  speedSegment={1.8}
                  onAnimationComplete={() => setDialogTagsVisible(true)}
                >
                  {projectDialogOpen.description}
                </TextEffect>
                <motion.div
                  variants={dialogTagContainerVariants}
                  initial="hidden"
                  animate={dialogTagsVisible ? "visible" : "hidden"}
                  className="flex flex-wrap gap-2 pt-8"
                >
                  {projectDialogOpen.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={dialogTagVariants}
                      className="font-mono text-sm md:text-[16px] lg:text-lg tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </section>
  );
}
