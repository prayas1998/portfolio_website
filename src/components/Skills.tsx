
import { LucideIcon, Code, Database, Server, Terminal, CheckCircle2, Book, Cpu, Layers, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

type Skill = {
  name: string;
  category: string;
  icon: LucideIcon;
};

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills: Skill[] = [
    // Programming Languages
    { name: "Python", category: "Programming Languages", icon: Terminal },
    { name: "Java", category: "Programming Languages", icon: Terminal },
    
    // Frameworks & Tools
    { name: "Django", category: "Tools & Frameworks", icon: Layers },
    { name: "Flask", category: "Tools & Frameworks", icon: Layers },
    { name: "ORM", category: "Tools & Frameworks", icon: Database },
    { name: "REST APIs", category: "Tools & Frameworks", icon: Server },
    { name: "Docker", category: "Tools & Frameworks", icon: Cpu },
    { name: "LLMs", category: "Tools & Frameworks", icon: Book },
    { name: "Pandas", category: "Tools & Frameworks", icon: Layers },
    { name: "Bootstrap", category: "Tools & Frameworks", icon: Layers },
    
    // General
    { name: "HTML", category: "General", icon: Code },
    { name: "CSS", category: "General", icon: Code },
    { name: "OOPs", category: "General", icon: CheckCircle2 },
    { name: "Git", category: "General", icon: Code },
    { name: "Machine Learning", category: "General", icon: Rocket },
    { name: "Manual Testing", category: "General", icon: CheckCircle2 },
    
    // Soft Skills
    { name: "Problem Solving", category: "Soft Skills", icon: CheckCircle2 },
    { name: "Communication Skills", category: "Soft Skills", icon: CheckCircle2 },
    { name: "Analytical Skills", category: "Soft Skills", icon: CheckCircle2 },
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Define the order of categories to match the image
  const orderedCategories = ["Programming Languages", "Tools & Frameworks", "General", "Soft Skills"];

  return (
    <section id="skills" className="py-6 relative bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-heading">Skills</h2>
          <p className="text-foreground/70 mt-3 max-w-2xl mx-auto">
            A curated collection of my technical and professional competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {orderedCategories.map((category) => (
            <div key={category} className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border/40">
              <div className="flex items-center mb-4 gap-2">
                {category === "Programming Languages" && <Terminal className="h-5 w-5" />}
                {category === "Tools & Frameworks" && <Layers className="h-5 w-5" />}
                {category === "General" && <Code className="h-5 w-5" />}
                {category === "Soft Skills" && <CheckCircle2 className="h-5 w-5" />}
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>
              <ul className="space-y-2 list-disc pl-5">
                {groupedSkills[category]?.map((skill) => (
                  <li key={skill.name} className="text-foreground/80">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
