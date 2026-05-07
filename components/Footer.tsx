"use client";

import { Link as LinkIcon, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12 border-b border-card pb-12">

          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Muhammad Mustafa
            </h3>
            <p className="text-sm font-medium text-foreground/70 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Amazon PPC Manager — Helping brands scale profitably on Amazon.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <h4 className="font-semibold text-lg text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['About', 'Services', 'Case Studies', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase().replace(' ', '-')}`)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
            <h4 className="font-semibold text-lg text-foreground">Let&apos;s Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/muhammadmustafa-ppc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full text-foreground/70 hover:text-white hover:bg-blue-600 transition-all shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:mohammad.mustafa260@gmail.com"
                className="p-3 bg-card rounded-full text-foreground/70 hover:text-white hover:bg-red-500 transition-all shadow-sm"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/923239666658"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full text-foreground/70 hover:text-white hover:bg-green-500 transition-all shadow-sm"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-sm text-foreground/50 text-center font-medium">
          &copy; 2025 Muhammad Mustafa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

