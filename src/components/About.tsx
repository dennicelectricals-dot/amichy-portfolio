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
              I'm a passionate Frontend Developer with over 4 years of experience building
              modern, user-centric web applications. I specialize in creating responsive,
              accessible, and performant interfaces that deliver exceptional user experiences.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              My journey in web development started with a curiosity about how things work
              on the web, and has evolved into a career dedicated to crafting elegant
              solutions to complex problems. I'm constantly learning and staying up-to-date
              with the latest technologies and best practices.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects,
              writing technical articles, or exploring new technologies. I'm always excited
              to collaborate on innovative projects and connect with fellow developers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
