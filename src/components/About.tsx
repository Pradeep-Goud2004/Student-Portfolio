import { BookOpen, Code, GraduationCap } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const highlights = [
  { icon: GraduationCap, label: 'Year', value: 'Graduate', color: 'text-primary' },
  { icon: BookOpen, label: 'Major', value: 'Computer Science', color: 'text-accent' },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Background orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Get to Know Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
              
              {/* Glass container */}
              <div className="relative glass rounded-3xl overflow-hidden p-2">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-strong rounded-2xl p-4 animate-float" style={{ animationDelay: '-2s' }}>
                <Code className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl p-4 animate-float" style={{ animationDelay: '-4s' }}>
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Hello! I'm a passionate <span className="text-gradient">student developer</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm currently pursuing my Bachelor's degree in Computer Science, where I've discovered 
                my love for building things that live on the internet. My journey in tech started 
                when I built my first website in high school, and I've been hooked ever since.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good book with a cup of coffee.
              </p>
              <p>
                My goal is to become a full-stack developer who creates meaningful applications 
                that solve real-world problems.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass-light rounded-2xl p-4 text-center card-hover"
                >
                  <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                  <div className="font-bold text-foreground text-lg">{item.value}</div>
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
