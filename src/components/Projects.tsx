import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import campusCribsImg from "@/assets/campus-cribbs.png";
import weatherAppImg from "@/assets/weather-app.png";
import kumaniImg from "@/assets/kumani.png";
import fetdsImg from "@/assets/fetds.png";
import taskifyImg from "@/assets/taskify.png";
import delposImg from "@/assets/delpos.png";

const Projects = () => {
  const projects = [
    {
      title: "Campus Cribbs",
      description:
        "Student housing platform that helps students discover and book accommodation near their campus. Features property listings, search filters, and direct booking with landlords.",
      image: campusCribsImg,
      tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
      github: "https://github.com/Mimieamichy/campus-cribbs",
      demo: "https://campuscribbs.netlify.app/",
    },
    {
      title: "Weather Update",
      description:
        "Real-time weather application with location search, current conditions, and detailed weather metrics including temperature, humidity, pressure, and wind speed.",
      image: weatherAppImg,
      tags: ["React", "OpenWeather API", "CSS3", "Geolocation"],
      github: "https://github.com/Mimieamichy/weather-update",
      demo: "https://dweatherupdate.netlify.app/",
    },
    {
      title: "KUMANI Health System",
      description:
        "Comprehensive hospital information system serving 12+ departments including OPD, IPD, pharmacy, lab, radiology, billing, and HR. Features role-based dashboards for staff coordination and patient care management.",
      image: kumaniImg,
      tags: ["React", "TypeScript", "Tailwind CSS", "Healthcare"],
      github: "https://github.com/Mimieamichy/kumani",
      demo: null,
    },
    {
      title: "FULafia ETDS",
      description:
        "Electronic Tracking & Documentation System for Federal University Lafia. Centralized platform enabling 200+ staff to upload, monitor, and retrieve official records with workflow tracking and document management.",
      image: fetdsImg,
      tags: ["React", "TypeScript", "REST API", "Document Management"],
      github: "https://github.com/Mimieamichy/FULafia-Electronic-Tracking-and-documentation-system",
      demo: "https://fulafia-electronic-tracking-and-8x35.onrender.com/",
    },
    {
      title: "Taskify",
      description:
        "Task management application with bonus points system for completing tasks on time. Features to-do lists, task timing, completion tracking, and gamification elements.",
      image: taskifyImg,
      tags: ["React", "TypeScript", "Local Storage", "Tailwind CSS"],
      github: "https://github.com/Mimieamichy/taskify",
      demo: "https://taskify-alpha-rust.vercel.app/",
    },
    {
      title: "DEL POS System",
      description:
        "Point of Sale and inventory management system for retail businesses. Features product catalog, stock tracking, purchase/selling price management, and category filtering.",
      image: delposImg,
      tags: ["React", "TypeScript", "Inventory Management", "Dashboard"],
      github: "https://github.com/Mimieamichy/Pos-inventory-app",
      demo: "https://handy-dashboard.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-gradient">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent work showcasing my skills and expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover-lift hover-glow border-border bg-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
