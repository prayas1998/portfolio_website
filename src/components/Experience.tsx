
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  description: string[];
};

export default function Experience() {
  const experienceItems: ExperienceItem[] = [
    {
      company: "MagicEdTech",
      position: "Manual Tester",
      duration: "Nov 2022 - May 2024",
      description: [
        "Implemented Agile methodologies using Jira for efficient bug tracking and reporting",
        "Conducted comprehensive manual testing including Regression, Smoke, and Unit Testing on web applications",
        "Developed and executed test cases based on client requirements",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Work Experience</h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            My professional journey and industry experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-border pl-8 pb-6 ml-4 md:ml-8 mt-12">
            {experienceItems.map((item, index) => (
              <div 
                key={item.company + item.position}
                className={cn(
                  "mb-12 relative opacity-0 animate-on-scroll",
                  index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300"
                )}
              >
                <div 
                  className={cn(
                    "absolute -left-12 w-8 h-8 rounded-full flex items-center justify-center",
                    "bg-background border border-border text-primary"
                  )}
                >
                  <Briefcase size={18} />
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm border border-border/40">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="font-bold text-lg">{item.company}</h3>
                    <span className="text-sm text-foreground/60 mt-1 md:mt-0">{item.duration}</span>
                  </div>
                  
                  <p className="font-medium text-foreground/90 mb-4">{item.position}</p>
                  
                  <ul className="space-y-2">
                    {item.description.map((point, i) => (
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
      </div>
    </section>
  );
}
