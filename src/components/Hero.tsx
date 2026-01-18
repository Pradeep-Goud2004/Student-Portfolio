import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Student_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-orb" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
      
      <div className="container-narrow mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-light mb-8 animate-fade-in-up">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground/80">Open to Opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="text-gradient text-glow">Pradeep Kumar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary font-medium mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Graduate in the 3rd year & Aspiring Developer
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Passionate about creating innovative solutions and learning new technologies. 
            Currently pursuing my degree while building projects that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-full glow-primary transition-all duration-300 hover:scale-105"
              onClick={handleDownloadResume}
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass border-white/20 text-foreground hover:bg-white/10 px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105"
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
