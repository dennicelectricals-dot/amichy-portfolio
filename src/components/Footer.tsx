import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/miracleezeh", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/miracleezeh", label: "LinkedIn" },
    { icon: Mail, href: "mailto:miracle@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Miracle A. Ezeh. Built with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive animate-pulse" />
            <span>and React</span>
          </div>

          {/* Credit */}
          <p className="text-xs text-muted-foreground">
            Designed & Developed with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
