import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Prayas Gautam</h3>
            <p className="text-sm text-foreground/70 mt-1">Software Developer</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="mailto:prayas98@gmail.com"
              aria-label="Email"
              className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
            
            <a
              href="https://github.com/prayas1998"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/prayas1998/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-foreground/70 hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Prayas Gautam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
