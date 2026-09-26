import React from 'react';
import { Github, Search, Terminal, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b-[3px] border-black bg-[#0e1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Profile & Branding */}
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer">
            <img
              src="https://avatars.githubusercontent.com/u/258238197?v=4"
              alt="olyx avatar"
              className="w-10 h-10 rounded-none border-2 border-black bg-[#FFE600] shadow-[2px_2px_0px_#000] object-cover"
            />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#4ADE80] border-2 border-black"></span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-[#FFE600] text-black font-black px-2 py-0.5 text-xs sm:text-sm uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000]">
              OLYX
            </span>
            <span className="bg-[#00F0FF] text-black font-mono font-bold px-1.5 py-0.5 text-[11px] uppercase border-2 border-black shadow-[2px_2px_0px_#000] hidden sm:inline-flex items-center gap-1">
              <Zap className="w-3 h-3 fill-black" />
              HUB // 42 OS
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search trigger button */}
          <button
            onClick={onOpenCommandPalette}
            className="neo-btn flex items-center gap-2 px-3 py-1.5 bg-[#181a24] text-zinc-200 text-xs font-mono font-bold hover:bg-[#222533]"
            title="Buka Command Palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#FFE600]" />
            <span className="hidden md:inline">SEARCH MATRIX...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-black text-[#FFE600] border border-zinc-700">
              Ctrl+K
            </kbd>
          </button>

          {/* GitHub Direct Link */}
          <a
            href="https://github.com/olyxmintabansos-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFE600] text-black text-xs font-black uppercase tracking-wider"
          >
            <Github className="w-4 h-4 fill-black" />
            <span className="hidden sm:inline">GITHUB</span>
          </a>
        </div>

      </div>
    </header>
  );
};
