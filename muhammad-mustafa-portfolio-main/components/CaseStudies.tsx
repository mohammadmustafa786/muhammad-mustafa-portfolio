"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      client: "Home & Bedding Brand",
      strategy: "Keyword expansion + campaign restructure",
      metrics: [
        { label: "ACOS Reduced", value: "38% → 22%", icon: TrendingDown, color: "text-green-500" },
        { label: "Sales Increased", value: "65%", icon: TrendingUp, color: "text-blue-500" },
        { label: "Organic Ranking", value: "Improved", icon: ArrowUpRight, color: "text-purple-500" },
      ]
    },
    {
      client: "Kitchen Product Brand",
      strategy: "Product launch PPC strategy",
      metrics: [
        { label: "Keywords Ranked", value: "50+", icon: ArrowUpRight, color: "text-purple-500" },
        { label: "ROAS Increased", value: "3.2x", icon: TrendingUp, color: "text-green-500" },
      ]
    },
    {
      client: "Home Decor Brand",
      strategy: "Sponsored Ads optimization",
      metrics: [
        { label: "ACOS Reduced", value: "30%", icon: TrendingDown, color: "text-green-500" },
        { label: "Revenue Increased", value: "48%", icon: TrendingUp, color: "text-blue-500" },
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Case Studies</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Real results delivered through data-driven Amazon advertising strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((cs, index) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-background rounded-3xl p-8 border border-card shadow-sm hover:shadow-xl hover:border-primary/20 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-6">
                {cs.client}
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-2">Strategy</h4>
                <p className="font-medium text-foreground">{cs.strategy}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-2">Results</h4>
                {cs.metrics.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-card border border-card group-hover:border-primary/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={metric.color} />
                        <span className="text-sm font-medium text-foreground/80">{metric.label}</span>
                      </div>
                      <span className="font-bold">{metric.value}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
