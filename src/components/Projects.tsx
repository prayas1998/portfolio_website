
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  points: string[];
  link?: string;
  github?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Blog Web Application with Content Moderation",
      description: "A full-featured blog platform with AI-powered content moderation",
      techStack: ["Django", "PostgreSQL", "AWS S3", "Supabase", "Hugging Face AI"],
      points: [
        "Implemented a robust user authentication system for secure access and account management",
        "Designed intuitive UI for post creation, updating, and deletion",
        "Created user profile pages with credential management and profile picture customization",
        "Integrated AWS S3 for efficient storage and retrieval of user-uploaded images",
        "Implemented content moderation using Hugging Face AI models to detect profanity in posts and images",
        "Integrated Supabase as a backend-as-a-service for real-time data management",
        "Deployed the application on Render for reliable and scalable hosting"
      ],
      link: "https://django-blog-supabase.onrender.com",
    },
    {
      title: "Full Stack Flask Web Application",
      description: "A comprehensive web application for item purchasing and selling",
      techStack: ["Flask", "SQLAlchemy", "Bootstrap"],
      points: [
        "Designed and developed backend logic for user authentication, item purchasing, and selling",
        "Integration with SQLAlchemy for database management and Bootstrap for frontend styling"
      ],
      github: "https://github.com/prayas1998/FlaskMarket_Full_Stack_Web_Application",
    },
    {
      title: "Stock Market Movement",
      description: "Time series analysis to forecast stock values",
      techStack: ["Python", "Time Series Analysis", "Machine Learning"],
      points: [
        "Developed a comprehensive dissertation project that employed time series analysis to forecast stock values",
        "Processed 5670 data points, enhancing predictive capabilities and enriching the understanding of market trends",
        "Improved accuracy of prediction by 4.3%"
      ],
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Projects</h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            A showcase of my technical work and creative solutions
          </p>
        </div>

        <div className="space-y-16 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "opacity-0 animate-on-scroll",
                "flex flex-col lg:flex-row gap-6 lg:gap-10",
                "p-0.5 rounded-xl"
              )}
            >
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-4 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-secondary/30 p-6 rounded-lg border border-border/40">
                <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-foreground/70">Key Features</h4>
                <ul className="space-y-3">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-foreground/80">
                      <span className="min-w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
