"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Mustafa restructured our entire campaign setup in the first two weeks. Our ACoS dropped from 38% to 22% and we hit our best revenue month within 60 days.",
      author: "Sarah K.",
      brand: "Home & Bedding Brand (USA)"
    },
    {
      quote: "We launched a new kitchen product with zero reviews and Mustafa got us ranked on 50+ keywords within 45 days. The launch strategy was precise and results were immediate.",
      author: "James R.",
      brand: "Kitchen Niche Seller (UK)"
    },
    {
      quote: "Working with Mustafa feels like having a full-time Amazon strategist on the team. Revenue grew 48% in one quarter with clear weekly reporting throughout.",
      author: "Ahmed N.",
      brand: "Home Decor Brand (UAE)"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-card rounded-3xl shadow-sm border border-transparent hover:border-primary/20 transition-all flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-yellow-500">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-foreground/80 leading-relaxed italic mb-8 flex-grow">
                &quot;{test.quote}&quot;
              </p>
              <div>
                <div className="font-bold text-foreground">{test.author}</div>
                <div className="text-sm text-foreground/60 font-medium">{test.brand}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

