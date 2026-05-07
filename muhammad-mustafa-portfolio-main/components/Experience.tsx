"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Amazon PPC Manager",
      company: "Forward Thinker IT Services",
      description: "Managing large-scale Amazon PPC campaigns, analyzing performance metrics, and directing overarching advertising strategy for top-tier brands.",
      current: true
    },
    {
      role: "Amazon Advertising Specialist",
      company: "Decabyte IT Solutions",
      description: "Executed keyword research, optimized listings, and launched highly successful Sponsored Products and Brands campaigns.",
      current: false
    },
    {
      role: "Freelance Amazon PPC Expert",
      company: "Independent Consultant",
      description: "Partnered with various e-commerce sellers to boost their organic ranking, decrease ACOS, and scale revenues through data-centric ad management.",
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

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-card before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase size={16} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card shadow-sm border border-transparent hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                  {exp.current && (
                    <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full w-fit">
                      Present
                    </span>
                  )}
                </div>
                <div className="text-secondary font-medium mb-4">{exp.company}</div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
