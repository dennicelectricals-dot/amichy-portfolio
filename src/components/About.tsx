const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-gradient">
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Frontend Developer with 4 years of experience delivering web applications used by teams of up to 200+ staff and 1000+ end-users. 
              Skilled in React, Next.js, TypeScript, and Tailwind CSS, with a track record of reducing page load times by several seconds, 
              improving SEO rankings through SSR/SSG, and streamlining development by building reusable component libraries.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Experienced in API integrations and state management, collaborating in agile teams to ship projects with high user adoption. 
              I specialize in creating modular, component-driven UI systems that standardize interfaces, improve maintainability, and reduce 
              development time across complex workflows.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm passionate about building accessible, responsive, and performant web applications that solve real-world problems. 
              Whether working on healthcare systems, educational platforms, or open-source AI projects, I focus on delivering exceptional 
              user experiences and collaborating with cross-functional teams to create impactful solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">10+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-muted-foreground">Staff Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">End Users Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
