import React from 'react';
import { Github, Heart, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span>
            Dibuat untuk <strong className="text-slate-200">olyxmintabansos-byte</strong> &bull; Olyx Project Hub & Launcher
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/olyxmintabansos-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
          <span className="text-slate-700">&bull;</span>
          <span className="font-mono text-slate-400 text-[11px]">
            Ready for GitHub Pages
          </span>
        </div>

      </div>
    </footer>
  );
};
