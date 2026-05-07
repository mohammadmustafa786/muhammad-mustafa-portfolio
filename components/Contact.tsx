"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "mohammad.mustafa260@gmail.com",
      href: "mailto:mohammad.mustafa260@gmail.com",
      icon: Mail,
      color: "text-blue-500",
    },
    {
      label: "WhatsApp",
      value: "+92 323 966 6658",
      href: "https://wa.me/923239666658",
      icon: MessageCircle,
      color: "text-green-500",
    },
    {
      label: "LinkedIn",
      value: "Muhammad Mustafa",
      href: "https://www.linkedin.com/in/muhammadmustafa-ppc/",
      icon: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      color: "text-blue-600",
    }
  ];

  return (
    <section id="contact" className="py-24 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Ready to scale your Amazon brand? Send a message or reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background p-8 rounded-3xl shadow-sm border border-card"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground/80">Full Name *</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 bg-card border border-card rounded-xl focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground/80">Email *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 bg-card border border-card rounded-xl focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground/80">Phone <span className="text-foreground/40 font-normal">(Optional)</span></label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-card border border-card rounded-xl focus:outline-none focus:border-primary/50 transition-colors" placeholder="+1 234 567 890" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="store" className="text-sm font-semibold text-foreground/80">Amazon Store URL <span className="text-foreground/40 font-normal">(Optional)</span></label>
                  <input type="url" id="store" className="w-full px-4 py-3 bg-card border border-card rounded-xl focus:outline-none focus:border-primary/50 transition-colors" placeholder="https://amazon.com/..." />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-semibold text-foreground/80">Monthly Ad Budget *</label>
                <select id="budget" required defaultValue="" className="w-full px-4 py-3 bg-card border border-card rounded-xl focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>Select an option</option>
                  <option value="under-1k">Under $1K</option>
                  <option value="1k-5k">$1K – $5K</option>
                  <option value="5k-20k">$5K – $20K</option>
                  <option value="20k-plus">$20K+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground/80">Message *</label>
                <textarea id="message" required rows={4} className="w-full px-4 py-3 bg-card border border-card rounded-xl focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell me about your brand and goals..."></textarea>
              </div>

              <button type="submit" className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/25">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <p className="text-center text-sm font-medium text-foreground/50 mt-4">
                Typical response time: within 24 hours
              </p>
            </form>
          </motion.div>

          {/* Direct Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Direct Contact</h3>
              <p className="text-foreground/70">Prefer not to use the form? Reach out directly via email or message me on WhatsApp.</p>
            </div>
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 bg-background rounded-2xl border border-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <div className={`p-4 rounded-full bg-card group-hover:bg-primary/10 transition-colors ${contact.color}`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{contact.label}</h3>
                    <p className="text-foreground/70 font-medium text-sm group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

