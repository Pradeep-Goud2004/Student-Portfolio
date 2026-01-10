import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a sample resume download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Student_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
      
      <div className="container-narrow mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in-up">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Open to Opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="text-gradient">Your Name</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Computer Science Student & Aspiring Developer
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Passionate about creating innovative solutions and learning new technologies. 
            Currently pursuing my degree while building projects that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-card hover:shadow-elevated transition-all duration-300"
              onClick={handleDownloadResume}
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-semibold transition-all duration-300"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <SocialLinks />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
