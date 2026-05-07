"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Amazon PPC Manager",
      company: "Forward Thinker IT Services",
      date: "January 2023 – Present",
      bullets: [
        "Manage and scale Sponsored Products, Brands, and Display campaigns for high-volume accounts.",
        "Analyze Search Query Performance and Brand Analytics to uncover keyword gaps and market share opportunities.",
        "Implement complex bid optimization strategies to reduce ACoS while driving top-line revenue growth.",
        "Collaborate with brand owners to define ACoS targets, budget allocations, and long-term scaling strategies."
      ],
      current: true
    },
    {
      role: "Amazon Advertising Specialist",
      company: "DecaByte IT Solutions",
      date: "December 2021 – January 2023",
      bullets: [
        "Executed comprehensive keyword research and competitor analysis to structure precise campaign architectures.",
        "Optimized product listings (SEO) including titles, bullet points, and backend search terms to improve organic rank.",
        "Managed day-to-day bid adjustments, negative keyword targeting, and placement modifiers to eliminate wasted spend.",
        "Delivered detailed weekly performance reports highlighting key metrics (ACoS, TACoS, ROAS)."
      ],
      current: false
    },
    {
      role: "Freelance Amazon PPC Consultant",
      company: "Independent",
      date: "2020 – December 2021",
      bullets: [
        "Partnered with diverse e-commerce sellers to audit existing ad accounts and restructure failing campaigns.",
        "Successfully launched multiple new products using aggressive exact-match and targeted Sponsored Brands strategies.",
        "Improved overall account health and profitability for clients struggling with high TACoS.",
        "Provided flat-file listing creation and bulk campaign management via Amazon Advertising console."
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary shadow-sm group-hover:scale-125 transition-transform" />

              {/* Content Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-card shadow-sm border border-transparent hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div>
                    <h3 className="font-bold text-xl text-foreground flex items-center gap-3">
                      {exp.role}
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                          Present
                        </span>
                      )}
                    </h3>
                    <div className="text-secondary font-semibold text-lg mt-1">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60 text-sm font-medium bg-background px-4 py-2 rounded-full w-fit">
                    <Calendar size={16} />
                    {exp.date}
                  </div>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

