"use client";

import { motion } from "framer-motion";
import { 
  Box, 
  Compass, 
  LineChart, 
  Megaphone, 
  Store, 
  BarChart3, 
  FileSearch, 
  Table, 
  FileSpreadsheet, 
  Rocket 
} from "lucide-react";

export function Tools() {
  const tools = [
    { name: "Helium 10", icon: Box, color: "text-blue-500", bg: "bg-blue-500/10", hoverBg: "group-hover:bg-blue-500" },
    { name: "Jungle Scout", icon: Compass, color: "text-orange-500", bg: "bg-orange-500/10", hoverBg: "group-hover:bg-orange-500" },
    { name: "Keepa", icon: LineChart, color: "text-teal-500", bg: "bg-teal-500/10", hoverBg: "group-hover:bg-teal-500" },
    { name: "Amazon Ads Console", icon: Megaphone, color: "text-amber-500", bg: "bg-amber-500/10", hoverBg: "group-hover:bg-amber-500" },
    { name: "Seller Central", icon: Store, color: "text-slate-700 dark:text-slate-300", bg: "bg-slate-500/10", hoverBg: "group-hover:bg-slate-700 dark:group-hover:bg-slate-300" },
    { name: "Brand Analytics", icon: BarChart3, color: "text-indigo-500", bg: "bg-indigo-500/10", hoverBg: "group-hover:bg-indigo-500" },
    { name: "Search Query Reports", icon: FileSearch, color: "text-purple-500", bg: "bg-purple-500/10", hoverBg: "group-hover:bg-purple-500" },
    { name: "Google Sheets", icon: Table, color: "text-green-500", bg: "bg-green-500/10", hoverBg: "group-hover:bg-green-500" },
    { name: "Microsoft Excel", icon: FileSpreadsheet, color: "text-emerald-600", bg: "bg-emerald-600/10", hoverBg: "group-hover:bg-emerald-600" },
    { name: "Perpetua / Pacvue", icon: Rocket, color: "text-cyan-500", bg: "bg-cyan-500/10", hoverBg: "group-hover:bg-cyan-500" }
  ];

  return (
    <section id="tools" className="py-24 bg-background relative border-y border-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tools I Work With</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl shadow-sm border border-transparent hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className={`w-12 h-12 mb-4 rounded-full ${tool.bg} flex items-center justify-center ${tool.color} ${tool.hoverBg} group-hover:text-white dark:group-hover:text-slate-900 transition-colors`}>
                  <Icon size={24} />
                </div>
                <span className="font-semibold text-center text-sm text-foreground/80 group-hover:text-foreground transition-colors">{tool.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


