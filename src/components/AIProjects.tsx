import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Cpu, Gamepad, Code } from "lucide-react";
import { cn } from "@/lib/utils";

type AIProject = {
  title: string;
  description: string;
  techStack: string[];
  projectType: "game" | "tool" | "web-app";
  link?: string;
  github?: string;
};

export default function AIProjects() {
  const [projects] = useState<AIProject[]>([
    {
      title: "Flappy Bird Clone",
      description: "A modern recreation of the classic Flappy Bird game built using AI pair programming techniques",
      techStack: ["JavaScript", "HTML Canvas", "AI-assisted Coding", "Game Physics"],
      projectType: "game",
      link: "https://github.com/prayas1998/flappy-bird-clone",
      github: "https://github.com/prayas1998/flappy-bird-clone"
    },
    {
      title: "Stock Market Tools and Brokerage Calculator (In progress)",
      description: "A brokerage calculator application for stock market investments with real-time data visualization",
      techStack: ["React", "TypeScript", "AI Code Generation", "Financial APIs"],
      projectType: "tool",
      link: "#",
      github: "https://github.com/prayas1998/StockCalC-DjangoReact"
    },
    // Placeholder for future projects
    // {
    //   title: "AI Web Assistant",
    //   description: "An interactive web assistant built using large language models to help with common tasks",
    //   techStack: ["Next.js", "LLM Integration", "Prompt Engineering", "Semantic Search"],
    //   projectType: "web-app",
    //   link: "#"
    // }
  ]);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "game":
        return <Gamepad className="h-5 w-5" />;
      case "tool":
        return <Cpu className="h-5 w-5" />;
      case "web-app":
        return <Code className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <section id="ai-projects" className="py-12 bg-background/50">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="section-heading">Fun AI Projects</h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Showcasing my experience using AI tools to build fun and functional web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border/40 bg-background/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  {getProjectIcon(project.projectType)}
                  <span className="text-xs font-medium text-foreground/60 uppercase tracking-wide">
                    {project.projectType.replace('-', ' ')}
                  </span>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/70 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-start gap-4 pt-2 border-t border-border/20">
                {project.link && (
                  <Button variant="ghost" size="sm" className="gap-1 text-foreground/70 hover:text-primary" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                )}
                
                {project.github && (
                  <Button variant="ghost" size="sm" className="gap-1 text-foreground/70 hover:text-primary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
