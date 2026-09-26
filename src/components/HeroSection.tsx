import React from 'react';
import { Globe, FolderGit2, Cpu, Layers } from 'lucide-react';

interface HeroSectionProps {
  totalProjects: number;
  liveDemos: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  totalProjects,
  liveDemos,
}) => {
  return (
    <section className="relative pt-10 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto space-y-6">
        
        {/* Neobrutalist Sticker Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <span className="inline-block bg-[#FFE600] text-black font-mono text-xs font-black uppercase px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#000] rotate-[-1deg]">
            ★ {totalProjects} PRODUCTION DEPLOYMENTS
          </span>
          <span className="inline-block bg-[#4ADE80] text-black font-mono text-xs font-black uppercase px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#000] rotate-[1deg]">
            ● 100% CLIENT-SIDE & LOCAL-FIRST
          </span>
          <span className="inline-block bg-[#00F0FF] text-black font-mono text-xs font-black uppercase px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#000] hidden sm:inline-block">
            ◆ ZERO SERVER OVERHEAD
          </span>
        </div>

        {/* Main Brutalist Headline */}
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
            OLYX SYSTEM <br className="hidden sm:inline" />
            <span className="bg-[#FFE600] text-black px-3 py-0.5 inline-block border-[3px] border-black shadow-[5px_5px_0px_#00F0FF] mt-2">
              ARCHIVE // 42 OS
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed max-w-3xl mx-auto bg-[#13151f] p-4 border-2 border-black shadow-[4px_4px_0px_#000]">
          Katalog rekayasa sistem terdistribusi: SCADA WTP & transmisi 500 kV, pelabuhan kargo TEU, bandara apron turnaround, konsensus multi-agen LLM, tender LPSE pemerintah, hingga utilitas gaming karya <strong className="text-[#FFE600] font-bold">@olyxmintabansos-byte</strong>.
        </p>

        {/* 4 Chunky Neobrutalist Stat Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
          
          {/* Stat 1: Deployed */}
          <div className="bg-[#FFE600] text-black p-3.5 border-2 border-black shadow-[4px_4px_0px_#000] text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-black uppercase">LIVE READY</span>
              <Globe className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black font-mono">{liveDemos}</div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/70">
              Active HTTP 200
            </p>
          </div>

          {/* Stat 2: Total Projects */}
          <div className="bg-[#4ADE80] text-black p-3.5 border-2 border-black shadow-[4px_4px_0px_#000] text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-black uppercase">REPOSITORIES</span>
              <FolderGit2 className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black font-mono">{totalProjects}</div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/70">
              GitHub Repos
            </p>
          </div>

          {/* Stat 3: Clusters */}
          <div className="bg-[#00F0FF] text-black p-3.5 border-2 border-black shadow-[4px_4px_0px_#000] text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-black uppercase">DOMAINS</span>
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black font-mono">7</div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/70">
              Specialized Hubs
            </p>
          </div>

          {/* Stat 4: Open Source */}
          <div className="bg-[#FB7185] text-black p-3.5 border-2 border-black shadow-[4px_4px_0px_#000] text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-black uppercase">LICENSE</span>
              <Cpu className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black font-mono">100%</div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/70">
              Open Source MIT
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
