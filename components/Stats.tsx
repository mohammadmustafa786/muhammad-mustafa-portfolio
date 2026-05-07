"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
      {prefix}{count}{suffix}
    </div>
  );
}

export function Stats() {
  const stats = [
    { value: 4, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "+", label: "Campaigns Managed" },
    { value: 1, prefix: "$", suffix: "M+", label: "Ad Spend Managed" },
    { value: 3, label: "Marketplaces (US · UK · UAE)" },
  ];

  return (
    <section id="stats" className="py-20 bg-card/30 relative border-y border-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-background shadow-sm border border-card hover:border-primary/20 transition-colors"
            >
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="text-sm md:text-base font-medium text-foreground/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

