import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
  },
  {
    name: 'Email',
    href: 'mailto:student@example.com',
    icon: Mail,
  },
];

interface SocialLinksProps {
  variant?: 'default' | 'footer';
}

const SocialLinks = ({ variant = 'default' }: SocialLinksProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full transition-all duration-300 ${
            variant === 'footer'
              ? 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
              : 'bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent hover:shadow-card'
          }`}
          aria-label={social.name}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
