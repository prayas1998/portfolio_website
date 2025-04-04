
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="opacity-0 animate-on-scroll space-y-6">
      <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-full bg-secondary text-primary flex-shrink-0">
            <Mail size={20} />
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <a 
              href="mailto:prayas98@gmail.com" 
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              prayas98@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-full bg-secondary text-primary flex-shrink-0">
            <Phone size={20} />
          </div>
          <div>
            <h4 className="font-medium">Phone</h4>
            <a 
              href="tel:+919891813715" 
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              +91 9891813715
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-full bg-secondary text-primary flex-shrink-0">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="font-medium">Location</h4>
            <p className="text-foreground/70">Gurgaon, Haryana, India</p>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-border mt-8">
        <p className="text-foreground/70 mb-4">
          I'm currently available for freelance work and full-time positions. 
          If you're looking for a developer who is passionate about creating great user experiences, 
          let's talk about how I can help with your project.
        </p>
      </div>
    </div>
  );
}
