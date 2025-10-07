import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description:
        "Leading frontend development for enterprise applications. Architected and implemented scalable React solutions, mentored junior developers, and improved application performance by 40%.",
      achievements: [
        "Led migration from legacy codebase to React/TypeScript",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications for various clients across different industries. Collaborated with designers and backend developers to deliver high-quality products.",
      achievements: [
        "Built 15+ client projects using React and Vue.js",
        "Improved website performance and SEO scores",
        "Integrated third-party APIs and payment gateways",
      ],
    },
    {
      title: "Junior Frontend Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description:
        "Started career building and maintaining web applications. Gained experience in modern frontend technologies and agile development practices.",
      achievements: [
        "Contributed to 10+ web development projects",
        "Learned React, TypeScript, and modern CSS frameworks",
        "Participated in code reviews and pair programming",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-gradient">
          Work Experience
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My professional journey in web development
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative pl-20 ${
                    index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />

                  {/* Timeline Icon */}
                  <div className="absolute left-3.5 top-12 p-2 rounded-full bg-primary/10">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>

                  {/* Content Card */}
                  <div className="bg-card border border-border rounded-lg p-6 hover-glow transition-all duration-300 hover:border-primary/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-heading font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-secondary font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">
                        Key Achievements:
                      </p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2">▹</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
