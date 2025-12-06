'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AgencyFooter = () => {
  return (
    <footer className="relative py-16 bg-background border-t border-card-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex flex-col">
               <h3 className="text-2xl font-bold text-foreground tracking-tight">Darshan K</h3>
               <span className="text-sm text-muted-foreground">AI & Data Science Student</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Exploring the frontiers of AI and Data Science. 
              Passionate about learning and building innovative solutions.
            </p>
          </div>

          <div className="flex flex-col md:items-end space-y-6">
            <span className="text-sm text-muted-foreground">Connect</span>
            <div className="flex gap-4">
              <a href="https://github.com/1511Darshan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-card-border bg-muted/20 hover:bg-muted/40 hover:border-foreground/20 text-muted-foreground hover:text-foreground transition-all">
                <FaGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/in/rush-darshan-k" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-card-border bg-muted/20 hover:bg-muted/40 hover:border-foreground/20 text-muted-foreground hover:text-foreground transition-all">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
           <span>© {new Date().getFullYear()} Darshan K. All rights reserved.</span>
           <span>Built with Next.js & Tailwind</span>
        </div>
      </div>
      
      {/* Decorative huge text */}
      <div className="absolute -bottom-8 -right-8 text-[150px] font-bold text-foreground/[0.01] pointer-events-none select-none leading-none tracking-tighter">
         RESEARCH
      </div>
    </footer>
  );
};

export default AgencyFooter;
