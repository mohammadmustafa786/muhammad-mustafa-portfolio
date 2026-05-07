"use client";

import { motion } from "framer-motion";
import { Mail, Link as LinkIcon, Phone } from "lucide-react";

export function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "mustafa@email.com",
      href: "mailto:mustafa@email.com",
      icon: Mail,
      color: "text-blue-500",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/muhammadmustafa",
      href: "https://linkedin.com/in/muhammadmustafa",
      icon: LinkIcon,
      color: "text-blue-600",
    },
    {
      label: "Phone",
      value: "+92 3XX XXXXXXX",
      href: "tel:+923000000000",
      icon: Phone,
      color: "text-green-500",
    }
  ];

  return (
    <section id="contact" className="py-24 bg-card/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Ready to scale your Amazon brand? Reach out for a consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center justify-center p-8 bg-background rounded-3xl border border-card shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group"
              >
                <div className="p-4 rounded-full bg-card group-hover:bg-primary/10 transition-colors mb-4">
                  <Icon size={32} className={contact.color} />
                </div>
                <h3 className="text-lg font-bold mb-2">{contact.label}</h3>
                <p className="text-foreground/70 font-medium text-center text-sm">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
