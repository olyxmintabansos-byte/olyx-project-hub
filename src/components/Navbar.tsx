import React from 'react';
import { Github, Search, Terminal, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Profile & Branding */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
            <img
              src="https://avatars.githubusercontent.com/u/258238197?v=4"
              alt="olyx avatar"
              className="relative w-9 h-9 rounded-full object-cover border border-slate-700 bg-slate-800"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full animate-pulse"></span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100 tracking-tight text-sm sm:text-base">
                olyx
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                <Terminal className="w-3 h-3 mr-1" />
                hub
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              @olyxmintabansos-byte
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search trigger button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 text-xs transition-all shadow-inner"
            title="Buka Command Palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">Cari Proyek...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 border border-slate-700 rounded text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* GitHub Direct Link */}
          <a
            href="https://github.com/olyxmintabansos-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs font-medium transition-all group"
          >
            <Github className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            <span className="hidden sm:inline">GitHub Profile</span>
            <Sparkles className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

      </div>
    </header>
  );
};
