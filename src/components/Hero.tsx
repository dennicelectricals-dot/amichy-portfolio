import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name & Title */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 text-gradient">
              Miracle A. Ezeh
            </h1>
            <h2 className="text-2xl md:text-4xl font-heading text-muted-foreground mb-6">
              Frontend Developer
            </h2>
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Crafting beautiful, responsive web experiences with 4+ years of expertise
            in React, TypeScript, and modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="https://github.com/miracleezeh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5 text-foreground hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/miracleezeh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-foreground hover:text-primary" />
            </a>
            <a
              href="mailto:miracle@example.com"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5 text-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
