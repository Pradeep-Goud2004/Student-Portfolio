import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce website with user authentication, product management, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application using OpenWeather API with location-based forecasts and beautiful UI.',
    tech: ['JavaScript', 'API', 'CSS3'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with drag-and-drop functionality, real-time updates, and team features.',
    tech: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Algorithm Visualizer',
    description: 'Interactive tool to visualize sorting and pathfinding algorithms with step-by-step animation.',
    tech: ['TypeScript', 'Canvas', 'React'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging app with WebSocket integration, group chats, and file sharing.',
    tech: ['Socket.io', 'Express', 'React'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Portfolio Generator',
    description: 'CLI tool that generates beautiful portfolio websites from a simple JSON configuration.',
    tech: ['Node.js', 'EJS', 'CLI'],
    github: 'https://github.com',
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">My Work</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Featured Projects
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-background rounded-2xl border border-border overflow-hidden shadow-soft card-hover"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary/30" />
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-foreground rounded-full text-primary hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary-foreground rounded-full text-primary hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="font-display text-xl font-semibold text-foreground">Other Notable Projects</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="p-5 bg-background rounded-xl border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <Folder className="w-8 h-8 text-accent" />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
              <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
