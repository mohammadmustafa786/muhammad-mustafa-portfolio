"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Skills() {
  const skills = [
    "Amazon PPC (SP/SB/SD)",
    "ACoS & TACoS Optimization",
    "Keyword Research",
    "Bid Management",
    "Campaign Architecture",
    "Product Launch Strategy",
    "Listing SEO & Optimization",
    "Search Query Report Analysis",
    "Brand Analytics",
    "FBA Operations",
    "Competitor Analysis",
    "Account Health Management",
    "Flat-File & Bulk Listings",
    "A/B Testing"
  ];

  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Skills</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-2 px-6 py-4 bg-background rounded-2xl shadow-sm border border-transparent hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <CheckCircle2 size={18} className="text-primary/70 group-hover:text-primary transition-colors" />
              <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

