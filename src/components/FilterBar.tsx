import React from 'react';
import { Search, X, Sparkles, Filter } from 'lucide-react';
import { CategoryType, FilterState } from '../types/project';
import { CATEGORIES } from '../data/projects';

interface FilterBarProps {
  filter: FilterState;
  onSearchChange: (query: string) => void;
  onCategoryChange: (cat: CategoryType) => void;
  onToggleDemoOnly: () => void;
  onReset: () => void;
  resultCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  onSearchChange,
  onCategoryChange,
  onToggleDemoOnly,
  onReset,
  resultCount,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-4">
      {/* Top row: Search input & Demo Toggle */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={filter.searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari proyek (contoh: ERP, Timer, Vanilla, Next.js)..."
            className="w-full pl-10 pr-10 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner"
          />
          {filter.searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Live Demo Only Toggle */}
        <button
          onClick={onToggleDemoOnly}
          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
            filter.filterDemoOnly
              ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              filter.filterDemoOnly ? 'bg-emerald-400' : 'bg-slate-600'
            }`}
          />
          <span>Hanya Live Demo</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono pr-1">
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          Filter:
        </span>
        {CATEGORIES.map((cat) => {
          const isActive = filter.category === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Result Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/50">
        <p>
          Menampilkan <span className="font-semibold text-cyan-400">{resultCount}</span> proyek
        </p>

        {(filter.searchQuery || filter.category !== 'All' || filter.filterDemoOnly) && (
          <button
            onClick={onReset}
            className="text-cyan-400 hover:underline flex items-center gap-1 text-[11px]"
          >
            Reset Filter
          </button>
        )}
      </div>
    </div>
  );
};
