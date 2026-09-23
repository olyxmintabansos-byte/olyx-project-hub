import React, { useState, useEffect } from 'react';
import { Search, X, ExternalLink, Github, ArrowRight } from 'lucide-react';
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

  // Listen for Ctrl+K / Cmd+K global shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open palette
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800">
          <Search className="w-5 h-5 text-cyan-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik untuk mencari proyek atau teknologi..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500">
              Tidak ada proyek yang sesuai dengan pencarian "{query}"
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProject(item);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/90 cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  <div>
                    <h5 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {item.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {item.hasDemo && (
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-800/60 font-mono">
                      Demo
                    </span>
                  )}
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer hints */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between font-mono">
          <span>Tekan ESC untuk menutup</span>
          <span>olyx project launcher</span>
        </div>
      </div>
    </div>
  );
};
