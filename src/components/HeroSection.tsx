import React from 'react';
import { Rocket, Sparkles, FolderGit2, Globe, Cpu } from 'lucide-react';

interface HeroSectionProps {
  totalProjects: number;
  liveDemos: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  totalProjects,
  liveDemos,
}) => {
  return (
    <section className="relative pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="text-center max-w-3xl mx-auto">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Open Source Developer & Tool Creator</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Command Center &{' '}
          <span className="cyber-gradient-text">Project Launcher</span>
        </h1>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          Gerbang terpadu untuk mengakses aplikasi web siap pakai, simulasi tools Growtopia, 
          dan repository open source karya <strong className="text-slate-200">olyxmintabansos-byte</strong>. 
          Pilih proyek untuk membuka <span className="text-cyan-400 font-medium">Live Demo</span> atau <span className="text-emerald-400 font-medium">Source Code</span>.
        </p>

        {/* Quick Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
          <div className="glass-card rounded-xl p-3 text-center border-slate-800">
            <div className="flex items-center justify-center gap-1.5 text-cyan-400 mb-1">
              <Globe className="w-4 h-4" />
              <span className="text-xl font-bold font-mono">{liveDemos}</span>
            </div>
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
              Live Demos
            </p>
          </div>

          <div className="glass-card rounded-xl p-3 text-center border-slate-800">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
              <FolderGit2 className="w-4 h-4" />
              <span className="text-xl font-bold font-mono">{totalProjects}</span>
            </div>
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
              Total Projects
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 glass-card rounded-xl p-3 text-center border-slate-800">
            <div className="flex items-center justify-center gap-1.5 text-purple-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xl font-bold font-mono">100%</span>
            </div>
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
              Open Source
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
