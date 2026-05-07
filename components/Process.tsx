"use client";

import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Account Audit",
      desc: "Analyze existing campaigns, identify waste, map keyword gaps"
    },
    {
      num: "02",
      title: "Strategy Build",
      desc: "Restructure campaign architecture, set ACoS targets, define budget allocation"
    },
    {
      num: "03",
      title: "Launch & Optimize",
      desc: "Execute campaigns, monitor daily, refine bids and match types weekly"
    },
    {
      num: "04",
      title: "Scale & Report",
      desc: "Identify scaling opportunities, deliver weekly performance reports with clear next steps"
    }
  ];

  return (
    <section id="process" className="py-24 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Process</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-8 bg-background rounded-3xl shadow-sm border border-transparent hover:border-primary/20 transition-all group overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-8xl font-black text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                {step.num}
              </div>
              <div className="text-xl font-bold mb-4 text-foreground relative z-10 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm shrink-0">
                  {parseInt(step.num)}
                </span>
                {step.title}
              </div>
              <p className="text-foreground/70 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

