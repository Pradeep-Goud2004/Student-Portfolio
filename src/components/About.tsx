import { BookOpen, Code, Coffee, GraduationCap } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'Year', value: '3rd Year' },
  { icon: BookOpen, label: 'Major', value: 'Computer Science' },
  { icon: Code, label: 'Projects', value: '15+' },
  { icon: Coffee, label: 'Coffee Cups', value: '∞' },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Get to Know Me</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl -rotate-3" />
              <div className="relative bg-muted rounded-3xl overflow-hidden shadow-elevated">
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <span className="text-8xl">👨‍🎓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Hello! I'm a passionate student developer
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm currently pursuing my Bachelor's degree in Computer Science, where I've discovered 
                my love for building things that live on the internet. My journey in tech started 
                when I built my first website in high school, and I've been hooked ever since.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good book with a cup of coffee. I believe in 
                continuous learning and love taking on new challenges.
              </p>
              <p>
                My goal is to become a full-stack developer who creates meaningful applications 
                that solve real-world problems. I'm always eager to collaborate on exciting 
                projects and learn from fellow developers.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 bg-background rounded-xl border border-border"
                >
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <div className="font-bold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
