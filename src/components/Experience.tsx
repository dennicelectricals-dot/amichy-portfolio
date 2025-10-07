import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "KUMANI Health System, Ghana",
      period: "Sept - Oct 2025",
      description:
        "Delivered the frontend for a hospital information system serving 12+ departments (OPD, IPD, pharmacy, lab, radiology, billing, HR/payroll, and executive dashboards), enabling seamless coordination of patient care and administration.",
      achievements: [
        "Built modular component library reducing frontend delivery time by 30+ development hours per module",
        "Implemented role-based dashboards for 8+ user groups improving navigation speed and task completion",
        "Developed complex form workflows with validation, cutting input errors on 5,000+ daily transactions",
        "Engineered reusable data tables enabling staff to process 100+ lab/billing requests per shift",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Federal University Lafia",
      period: "July - Sept 2025",
      description:
        "Delivered frontend of Electronic Tracking & Documentation System (ETDS), a platform that centralized document tracking, enabling 200+ staff and faculty members to upload, monitor, and retrieve official records with accuracy and speed.",
      achievements: [
        "Implemented modular, component-driven UI system reducing future development effort by 30+ hours per sprint",
        "Built responsive and accessible layouts optimized for desktop, tablet, and mobile devices",
        "Integrated frontend with backend REST APIs supporting secure document uploads of 1,000+ active documents",
        "Enforced type safety with TypeScript, reducing 20+ recurring runtime errors during testing cycles",
      ],
    },
    {
      title: "Frontend Developer (Open Source)",
      company: "Jafi AI",
      period: "March 2025 - May 2025",
      description:
        "Contributed to the development of intelligent assistant features using Next.js, TypeScript, and TailwindCSS, enhancing the project's ability to deliver AI-powered interactions to a growing open-source community.",
      achievements: [
        "Designed responsive, accessible UIs for conversational AI interfaces for 150+ active contributors",
        "Integrated OpenAI-powered conversational components with frontend workflows",
        "Implemented client-side and server-side rendering techniques to improve performance",
        "Contributed 20+ commits strengthening project maintainability and modern frontend practices",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Osmovic Media",
      period: "April 2024 - Dec 2024",
      description:
        "Designed, developed, and optimized responsive web applications using React, Next.js, and TypeScript, delivering 3 client-facing projects that improved user engagement and cross-device accessibility.",
      achievements: [
        "Implemented SSR and SSG for high-traffic landing pages, improving load times and SEO rankings",
        "Built accessible, visually consistent UIs reducing frontend build time by 20+ hours per sprint",
        "Collaborated with backend developers to integrate RESTful APIs for hundreds of active users",
        "Led weekly code reviews with 6 engineers, reducing production bugs and ensuring best practices",
      ],
    },
    {
      title: "Junior Frontend Developer (Internship)",
      company: "O2 Innovation",
      period: "Sept 2023 - Feb 2024",
      description:
        "Contributed to the development of scalable React applications, building reusable components that reduced repetitive code and improved development speed across multiple features.",
      achievements: [
        "Refactored legacy JavaScript codebases into TypeScript, improving application stability",
        "Integrated Git version control workflows collaborating with team of 4 developers",
        "Assisted in building state management solutions improving data consistency across app modules",
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
