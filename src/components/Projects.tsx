import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with cart management, payment integration, and admin dashboard. Built with React, Redux, and Stripe API.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["React", "Redux", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
      tags: ["React", "Firebase", "TypeScript", "DnD Kit"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard with geolocation, 7-day forecasts, and beautiful data visualizations using Chart.js and OpenWeather API.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      tags: ["React", "Chart.js", "API Integration", "CSS3"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for portfolio websites with drag-and-drop page builder, theme customization, and analytics.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      tags: ["Next.js", "MongoDB", "Node.js", "Express"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization, scheduled posts, and multi-platform integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "D3.js", "REST API", "Material-UI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "Mobile-responsive fitness tracking app with workout plans, progress tracking, and nutrition logging features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
      tags: ["React Native", "Redux", "Firebase", "Expo"],
      github: "#",
      demo: "#",
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
