"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    "Sponsored Ads management",
    "Campaign optimization",
    "Keyword research",
    "Listing SEO",
    "Amazon FBA operations",
    "Data-driven PPC strategies"
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card p-8 rounded-3xl shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors duration-500" />
              <h3 className="text-2xl font-semibold mb-4">Amazon PPC Expert</h3>
              <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                With over 4 years of dedicated experience managing Seller Central accounts, 
                I specialize in optimizing advertising campaigns for maximum growth and profitability. 
                My data-driven approach ensures that every ad dollar spent translates into measurable returns.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="text-secondary" size={20} />
                    <span className="text-foreground/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <StatCard value="4" suffix="+" label="Years Experience" />
            <StatCard value="100" suffix="+" label="Campaigns Managed" />
            <StatCard prefix="$" value="1" suffix="M+" label="Ad Spend Managed" />
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-sm flex flex-col items-center justify-center text-center text-white"
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm font-medium opacity-90">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, prefix = "", suffix = "" }: { value: string, label: string, prefix?: string, suffix?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-card rounded-2xl shadow-sm flex flex-col items-center justify-center text-center gap-2"
    >
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        {prefix}{value}{suffix}
      </div>
      <div className="text-sm font-medium text-foreground/70">{label}</div>
    </motion.div>
  );
}
