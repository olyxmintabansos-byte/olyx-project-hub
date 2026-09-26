import React from 'react';
import { Github, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t-[3px] border-black bg-[#0e1017] py-8 px-4 sm:px-6 lg:px-8 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Stamp */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-[#FFE600] text-black font-black px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000]">
            OLYX SYSTEM ARCHIVE
          </span>
          <span className="text-zinc-400">
            &bull; 42 Local-First Client-Side Web OS
          </span>
        </div>

        {/* Center / Right Links */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[#4ADE80] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span>ALL SYSTEMS 200 OK</span>
          </div>
          <span className="text-zinc-700">|</span>
          <a
            href="https://github.com/olyxmintabansos-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn inline-flex items-center gap-1.5 px-3 py-1 bg-white text-black font-bold uppercase"
          >
            <Github className="w-3.5 h-3.5" />
            <span>@olyxmintabansos-byte</span>
          </a>
        </div>

      </div>
    </footer>
  );
};
