import { Code2, Palette, Rocket, Database, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript (ES6+)", "Next.js", "Redux"],
      color: "text-primary",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: ["Tailwind CSS", "CSS3", "SASS", "Figma", "Responsive Design"],
      color: "text-secondary",
    },
    {
      icon: Rocket,
      title: "Performance",
      skills: ["Web Vitals", "Code Splitting", "Lazy Loading", "SEO", "Optimization"],
      color: "text-accent",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      skills: ["REST APIs", "GraphQL", "Node.js", "Express", "PostgreSQL"],
      color: "text-primary",
    },
    {
      icon: Globe,
      title: "DevOps & Tools",
      skills: ["Git", "GitHub Actions", "Docker", "Vercel", "AWS"],
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Agile/Scrum", "Communication", "Leadership"],
      color: "text-accent",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-gradient">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group hover-lift hover-glow border-border bg-card transition-all duration-300 hover:border-primary/50"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
