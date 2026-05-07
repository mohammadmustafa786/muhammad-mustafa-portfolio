"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AuditCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Not Sure Where Your Ad Spend Is Going?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free 30-minute Amazon PPC audit — I&apos;ll identify exactly where you&apos;re losing money and what to fix first.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-bold text-lg hover:bg-background/90 transition-all hover:scale-105 shadow-xl"
          >
            Claim Your Free Audit
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

