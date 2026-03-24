"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
      const gmtPlus2 = new Date(utcMs + 2 * 60 * 60_000);

      const hours = gmtPlus2.getHours().toString().padStart(2, "0");
      const minutes = gmtPlus2.getMinutes().toString().padStart(2, "0");
      const seconds = gmtPlus2.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="relative">
      {/* Main CTA */}
      <motion.a
        href="https://wa.me/201555390027"
        target="_blank"
        data-cursor-hover
        className="relative block overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Curtain */}
        <motion.div
          className="absolute inset-0 bg-[#2563eb]"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Content */}
        <div className="relative py-16 md:py-24 px-8 md:px-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <motion.h2
                className="font-sans text-4xl md:text-6xl lg:text-8xl font-light tracking-tight text-center md:text-left"
                animate={{
                  color: isHovered ? "#050505" : "#fafafa",
                }}
                transition={{ duration: 0.3 }}
              >
                Let's <span className="italic">Collaborate</span>
              </motion.h2>
              <motion.span
                className="font-sans text-2xl font-light tracking-tight text-center md:text-left w-fit italic"
                animate={{
                  color: isHovered ? "#050505" : "#fafafa",
                }}
                transition={{ duration: 0.3 }}
              >
                sohyb0155@gmail.com
              </motion.span>
            </div>

            <motion.div
              animate={{
                rotate: isHovered ? 45 : 0,
                color: isHovered ? "#050505" : "#fafafa",
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          </div>
        </div>
      </motion.a>

      {/* Footer Info */}
      <div className="px-8 md:px-12 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Local Time */}
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            <span className="mr-2">GMT+2 TIME</span>
            <span className="text-white tabular-nums">{time}</span>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/sohyb-mansour-b237961ba/"
              target="_blank"
              data-cursor-hover
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sohyb01"
              target="_blank"
              data-cursor-hover
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
