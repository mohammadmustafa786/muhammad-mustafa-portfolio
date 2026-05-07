"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingDown, TrendingUp, Clock, Globe, ArrowRight } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      client: "Home & Bedding Brand",
      marketplace: "US Marketplace",
      timeframe: "Results achieved in 60 days",
      strategy: "Keyword expansion + campaign restructure",
      metrics: [
        { label: "ACoS Reduced", value: "38% → 22%", icon: TrendingDown, color: "text-green-500" },
        { label: "Revenue Increased", value: "+65%", icon: TrendingUp, color: "text-blue-500" },
        { label: "Organic Rank", value: "Page 3 → Page 1", icon: ArrowUpRight, color: "text-purple-500" },
      ]
    },
    {
      client: "Kitchen Product Brand",
      marketplace: "UK Marketplace",
      timeframe: "Results achieved in 45 days",
      strategy: "Product launch PPC strategy",
      metrics: [
        { label: "Keywords Ranked", value: "0 → 50+", icon: ArrowUpRight, color: "text-purple-500" },
        { label: "ROAS Increased", value: "1.5x → 3.2x", icon: TrendingUp, color: "text-green-500" },
      ]
    },
    {
      client: "Home Decor Brand",
      marketplace: "UAE Marketplace",
      timeframe: "Results achieved in 90 days",
      strategy: "Sponsored Ads optimization",
      metrics: [
        { label: "ACoS Reduced", value: "45% → 30%", icon: TrendingDown, color: "text-green-500" },
        { label: "Revenue Increased", value: "+48%", icon: TrendingUp, color: "text-blue-500" },
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-card/30 relative border-y border-card">
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
              className="flex flex-col bg-background rounded-3xl p-8 border border-card shadow-sm hover:shadow-xl hover:border-primary/20 transition-all relative overflow-hidden group h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full flex items-center gap-1">
                  {cs.client}
                </span>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full flex items-center gap-1">
                  <Globe size={12} /> {cs.marketplace}
                </span>
              </div>
              
              <div className="mb-6 flex-grow">
                <div className="flex items-center gap-2 text-foreground/60 text-xs font-medium mb-4">
                  <Clock size={14} />
                  {cs.timeframe}
                </div>
                <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-2">Strategy</h4>
                <p className="font-medium text-foreground">{cs.strategy}</p>
              </div>

              <div className="space-y-3 mb-8">
                <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-2">Results</h4>
                {cs.metrics.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-card border border-card group-hover:border-primary/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={metric.color} />
                        <span className="text-sm font-medium text-foreground/80">{metric.label}</span>
                      </div>
                      <span className="font-bold text-sm">{metric.value}</span>
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-auto w-full group/btn flex items-center justify-center gap-2 px-6 py-3 bg-card border border-card text-foreground font-semibold rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                Request Similar Results
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

