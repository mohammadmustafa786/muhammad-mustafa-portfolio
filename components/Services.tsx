"use client";

import { motion } from "framer-motion";
import { Megaphone, Rocket, Sparkles, Briefcase, Search, BarChart } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "PPC Campaign Management",
      icon: Megaphone,
      bullets: [
        "Full management of SP, SB & SD campaigns",
        "Daily bid optimization & budget pacing",
        "Weekly performance reporting & strategy calls"
      ]
    },
    {
      title: "Product Launch Strategy",
      icon: Rocket,
      bullets: [
        "Aggressive ranking campaigns for new products",
        "Targeted exact-match and competitor targeting",
        "Review generation velocity strategies"
      ]
    },
    {
      title: "Account Audit & Restructure",
      icon: BarChart,
      bullets: [
        "Deep-dive analysis of existing campaigns",
        "Identification of wasted spend & keyword gaps",
        "Complete structural overhaul for scalability"
      ]
    },
    {
      title: "Listing Optimization",
      icon: Sparkles,
      bullets: [
        "SEO-focused titles & bullet points",
        "Backend search term optimization",
        "A/B testing for improved conversion rates"
      ]
    },
    {
      title: "Competitor Analysis",
      icon: Search,
      bullets: [
        "Reverse ASIN lookups via Helium 10",
        "Share of voice & category dominance tracking",
        "Pricing & promotion strategy benchmarking"
      ]
    },
    {
      title: "Amazon Account Management",
      icon: Briefcase,
      bullets: [
        "End-to-end Seller Central management",
        "Inventory planning & FBA shipment tracking",
        "Account health monitoring & case resolution"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col p-8 bg-card rounded-3xl shadow-sm border border-transparent hover:border-primary/20 hover:shadow-lg transition-all group h-full"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/70 text-sm">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-auto group/btn flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Get a Free Audit
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

