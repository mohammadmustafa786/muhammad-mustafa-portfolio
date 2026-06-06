"use client";

import { motion } from "framer-motion";
import { Download, MessageCircle, MapPin, DollarSign, Clock } from "lucide-react";

export function About() {
  const quickStats = [
    { label: "4+ Years Experience", icon: Clock },
    { label: "$1M+ Ad Spend Managed", icon: DollarSign },
    { label: "US · UK · UAE", icon: MapPin },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors duration-700" />

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-10">
            <p>
              I&apos;m <strong className="text-foreground">Muhammad Mustafa</strong>, an Amazon PPC Manager with 5+ years of hands-on experience running and scaling Sponsored Products (SP), Sponsored Brands (SB), and Sponsored Display (SD) campaigns across the US, UK, and UAE marketplaces.
            </p>
            <p>
              I don&apos;t just set up campaigns — I analyze Search Query Reports, dissect placement data, and make bid decisions based on what the numbers actually say. My focus is always the same: eliminate wasted spend, improve organic ranking, and grow revenue without letting ACoS spiral.
            </p>
            <p>
              I&apos;ve worked with brands in Home & Kitchen, Bedding, and Consumer Electronics — managing everything from cold product launches to full account turnarounds. Whether you&apos;re bleeding budget on broad match or stuck on page 3, I&apos;ll find the lever and pull it.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            {quickStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  <Icon size={16} />
                  <span>{stat.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Muhammad Mustafa.pdf"
              download
              className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
            >
              <Download size={20} />
              Download CV
            </a>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-secondary/10 text-secondary rounded-xl font-semibold hover:bg-secondary/20 transition-all hover:scale-105"
            >
              <MessageCircle size={20} />
              Let&apos;s Talk
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

