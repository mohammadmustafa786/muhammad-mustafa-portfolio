"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Tools", href: "#tools" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section tracking
      const sections = links.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-card py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer flex flex-col" onClick={() => scrollTo("#home")}>
            <span className="font-bold text-xl md:text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Muhammad Mustafa
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-foreground/60 uppercase tracking-widest mt-0.5">
              Amazon PPC Manager
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm font-semibold transition-all ${
                    isActive 
                      ? "text-primary border-b-2 border-primary pb-1" 
                      : "text-foreground/70 hover:text-primary pb-1 border-b-2 border-transparent"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="flex items-center gap-4 pl-4 border-l border-card">
              <ThemeToggle />
              <button 
                onClick={() => scrollTo("#contact")}
                className="px-5 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-md"
              >
                Hire Me
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-card overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              {links.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-card hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="pt-4 mt-2 border-t border-card">
                <button 
                  onClick={() => scrollTo("#contact")}
                  className="w-full px-4 py-3 text-base font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

