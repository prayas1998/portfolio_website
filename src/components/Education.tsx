
import { GraduationCap, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  details?: string;
  icon: "university" | "school";
};

export default function Education() {
  const educationItems: EducationItem[] = [
    {
      institution: "Gautam Buddha University",
      degree: "Integrated B.Tech and M.Tech in Computer Science Engineering (Artificial Intelligence and Robotics)",
      duration: "2017-2022",
      grade: "7.9 CGPA",
      icon: "university",
    },
    {
      institution: "Blue Bells Model School",
      degree: "Class XII",
      duration: "2015-2016",
      grade: "85%",
      icon: "school",
    },
    {
      institution: "Blue Bells Model School",
      degree: "Class X",
      duration: "2013-2014",
      grade: "9.0 CGPA",
      icon: "school",
    },
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Education</h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-border pl-8 pb-6 ml-4 md:ml-8 mt-12">
            {educationItems.map((item, index) => (
              <div 
                key={item.institution + item.degree}
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
                  {item.icon === "university" ? (
                    <GraduationCap size={18} />
                  ) : (
                    <Building2 size={18} />
                  )}
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm border border-border/40">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-bold text-lg">{item.institution}</h3>
                    <span className="text-sm text-foreground/60 mt-1 md:mt-0">{item.duration}</span>
                  </div>
                  
                  <p className="text-foreground/80">{item.degree}</p>
                  <p className="text-sm text-foreground/70 mt-2">Grade: <span className="font-medium">{item.grade}</span></p>
                  
                  {item.details && (
                    <p className="text-sm text-foreground/70 mt-3">{item.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
