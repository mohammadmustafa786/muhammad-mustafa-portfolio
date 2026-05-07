"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Search, BarChart3, ShoppingCart, Crosshair } from "lucide-react";

export function Skills() {
  const skills = [
    { name: "Amazon PPC", icon: Target, level: 95 },
    { name: "Sponsored Ads", icon: TrendingUp, level: 90 },
    { name: "Keyword Research", icon: Search, level: 95 },
    { name: "Listing SEO", icon: BarChart3, level: 85 },
    { name: "Campaign Optimization", icon: Crosshair, level: 92 },
    { name: "Amazon FBA Management", icon: ShoppingCart, level: 88 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
               <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-background p-6 rounded-2xl shadow-sm border border-transparent hover:border-primary/20 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-card rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                  />
                </div>
                <div className="mt-2 text-right text-xs text-foreground/50 font-medium">
                  {skill.level}%
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
