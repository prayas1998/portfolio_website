
import { ArrowDownIcon, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden">
      <div className="section-container">
        <div className="max-w-4xl animate-slideIn">
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            Software Developer
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm Prayas Gautam
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl">
            I'm a passionate developer specializing in Python, Django, and modern web technologies. 
            Focused on building clean, innovative, and user-friendly applications.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a 
              href="#contact" 
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all",
                "bg-primary text-primary-foreground hover:opacity-90"
              )}
            >
              <Mail size={16} />
              Contact Me
            </a>
            
            <a 
              href="#projects" 
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all",
                "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              View Projects
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
              <a 
                href="mailto:prayas98@gmail.com" 
                className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Mail size={16} />
                prayas98@gmail.com
              </a>
              
              <a 
                href="tel:+919891813715" 
                className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Phone size={16} />
                +91 9891813715
              </a>
              
              <span className="flex items-center gap-2 text-foreground/80">
                <MapPin size={16} />
                Gurgaon, HR
              </span>
              
              <a 
                href="https://www.linkedin.com/in/prayas1998/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              
              <a 
                href="https://github.com/prayas1998" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#skills" 
          aria-label="Scroll to Skills section"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-foreground/70 hover:text-foreground transition-colors"
        >
          <ArrowDownIcon size={20} />
        </a>
      </div>
    </section>
  );
}
