"use client";

import { motion } from "framer-motion";
import { Megaphone, Rocket, Sparkles, Briefcase } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Amazon PPC Management",
      description: "Strategic Amazon advertising campaigns designed to increase visibility, sales, and profitability.",
      icon: Megaphone,
    },
    {
      title: "Product Launch Strategy",
      description: "Comprehensive go-to-market strategies ensuring explosive sales velocity from day one.",
      icon: Rocket,
    },
    {
      title: "Listing Optimization",
      description: "Data-driven SEO improvements to maximize organic ranking and conversion rates.",
      icon: Sparkles,
    },
    {
      title: "Account Management",
      description: "End-to-end management of your Seller Central account for sustained, long-term growth.",
      icon: Briefcase,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 bg-card rounded-3xl shadow-sm border border-transparent hover:border-primary/20 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
