"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const titles = ["Amazon PPC Manager", "ACoS Optimizer", "Product Launch Strategist"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 h-8 flex items-center justify-center md:justify-start overflow-hidden text-xl md:text-2xl font-bold text-primary"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {titles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            I Help Amazon Brands <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Cut Wasted Ad Spend
            </span> <br className="hidden md:block" />
            & Scale Profitably
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0"
          >
            Amazon PPC Manager specializing in Sponsored Products, Sponsored Brands & Sponsored Display — across US, UK & UAE marketplaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <button
              onClick={() => document.querySelector("#case-studies")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25 w-full sm:w-auto"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-card text-foreground rounded-full font-semibold border border-card hover:border-primary/50 transition-all hover:scale-105 shadow-sm w-full sm:w-auto"
            >
              Hire Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Content - Headshot Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1 flex justify-center md:justify-end w-full"
        >
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full border-4 border-card bg-card/50 backdrop-blur-sm flex items-center justify-center shadow-2xl overflow-hidden group">
            {/* 
              This Image component is looking for a file named "profile.jpg" in your "public" folder.
              Once you add that file, your photo will automatically appear here!
            */}
            <Image
              src="/profile2.png"
              alt="Muhammad Mustafa Headshot"
              fill
              className="object-cover"
              priority
            />
            {/* Background glow for the image container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

