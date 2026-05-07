import { Link as LinkIcon, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Muhammad Mustafa
          </h3>
          <p className="text-sm font-medium text-foreground/60">
            Amazon PPC Manager
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/muhammadmustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all shadow-sm"
          >
            <LinkIcon size={20} />
          </a>
          <a
            href="mailto:mustafa@email.com"
            className="p-3 bg-card rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all shadow-sm"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-foreground/50 text-center md:text-right font-medium">
          &copy; {new Date().getFullYear()} Muhammad Mustafa. <br className="md:hidden" />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
