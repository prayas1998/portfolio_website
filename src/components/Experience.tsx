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
        "Utilized Jira for structured bug tracking and Agile workflow management",
        "Documented bugs with clear reproduction steps, screenshots, and severity classification",
        "Participated in daily stand-ups, sprint planning, and retrospective meetings",
        "Maintained detailed metrics on bug lifecycles from identification through verification",
        "Executed regression tests to ensure new code didn't break existing functionality",
        "Performed smoke testing on new builds to quickly validate core functionality",
        "Supported unit testing efforts in collaboration with development team",
        "Conducted user acceptance testing sessions with stakeholders",
        "Evaluated bug reports from team members for accuracy and completeness",
        "Led defect triage meetings to assess severity and prioritize resolution",
        "Mentored junior testers on effective bug reporting techniques",
        "Performed root cause analysis to identify recurring issues",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12">
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
