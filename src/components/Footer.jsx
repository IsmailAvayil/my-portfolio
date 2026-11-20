import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-xl font-bold font-heading text-foreground tracking-tighter mb-2">
            Mohammed Ismail <span className="text-primary">Avayil</span>
          </a>
          <p className="text-sm text-foreground/60">
            React JS Developer | Frontend Developer • Dubai, UAE
          </p>
          <p className="text-xs text-foreground/40 mt-1">
            © {new Date().getFullYear()} Mohammed Ismail Avayil. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/IsmailAvayil" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-white transition-colors" title="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/mohammed-ismail-a-201526173" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-white transition-colors" title="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
