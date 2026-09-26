import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '../types/project';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  projects,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

  // Global Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = projects.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.topics.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#0e1017] border-[3px] border-black shadow-[10px_10px_0px_#000] overflow-hidden z-10">
        
        {/* Titlebar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#FFE600] text-black border-b-[3px] border-black font-mono font-black text-xs uppercase tracking-wider">
          <span>COMMAND MATRIX SEARCH (CTRL+K)</span>
          <button
            onClick={onClose}
            className="w-5 h-5 bg-black text-[#FFE600] flex items-center justify-center hover:bg-red-600 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Search header */}
        <div className="flex items-center px-4 py-3 bg-[#181a24] border-b-2 border-black">
          <Search className="w-5 h-5 text-[#FFE600] mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik nama OS, topik, atau kata kunci..."
            className="w-full bg-transparent text-sm font-mono font-bold text-white placeholder-zinc-500 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-zinc-400 hover:text-white font-bold font-mono text-xs"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto divide-y-2 divide-black">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  onSelectProject(project);
                  onClose();
                }}
                className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-[#FFE600] hover:text-black group transition-colors"
              >
                <div className="min-w-0 pr-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[9px] font-black uppercase px-1.5 py-0.5 bg-black text-white group-hover:bg-black group-hover:text-[#FFE600]">
                      {project.category}
                    </span>
                    <h4 className="font-black text-sm uppercase truncate text-white group-hover:text-black">
                      {project.name}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 group-hover:text-black/80 font-medium truncate">
                    {project.description}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-black shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-zinc-500 font-mono text-xs">
              TIDAK ADA HASIL UNTUK &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#12141d] border-t-2 border-black flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <span>{filtered.length} HASIL DITEMUKAN</span>
          <div className="flex items-center gap-2">
            <span>[ESC] TUTUP</span>
            <span>&bull;</span>
            <span>[ENTER] PILIH</span>
          </div>
        </div>

      </div>
    </div>
  );
};
