import React from 'react';
import { Search, X, Filter, RotateCcw } from 'lucide-react';
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
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
          <input
            type="text"
            value={filter.searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="CARI SISTEM (CONTOH: SCADA, WTP, ERP, ATS, LLM)..."
            className="w-full pl-10 pr-10 py-2.5 bg-white border-2 border-black text-black text-xs sm:text-sm font-mono font-bold placeholder-black/50 focus:outline-none focus:bg-[#FFE600] shadow-[3px_3px_0px_#000] transition-colors"
          />
          {filter.searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black hover:text-red-600 font-bold"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Live Demo Only Toggle */}
        <button
          onClick={onToggleDemoOnly}
          className={`neo-btn flex items-center justify-center gap-2 px-4 py-2.5 font-mono text-xs font-black uppercase tracking-wider ${
            filter.filterDemoOnly
              ? 'bg-[#4ADE80] text-black shadow-[3px_3px_0px_#000]'
              : 'bg-[#181a24] text-zinc-300 border-2 border-black shadow-[3px_3px_0px_#000] hover:text-white'
          }`}
        >
          <span
            className={`w-2.5 h-2.5 border border-black ${
              filter.filterDemoOnly ? 'bg-black animate-pulse' : 'bg-zinc-600'
            }`}
          />
          <span>HANYA LIVE DEMO</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span className="text-xs font-mono font-black uppercase text-[#FFE600] flex items-center gap-1 shrink-0 pr-1">
          <Filter className="w-3.5 h-3.5" />
          CLUSTER:
        </span>
        {CATEGORIES.map((cat) => {
          const isActive = filter.category === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`whitespace-nowrap px-3 py-1.5 font-mono text-xs font-black uppercase border-2 border-black transition-all ${
                isActive
                  ? 'bg-[#FFE600] text-black shadow-[3px_3px_0px_#000] translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-[#181a24] text-zinc-300 shadow-[2px_2px_0px_#000] hover:bg-[#232635] hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Result Indicator */}
      <div className="flex items-center justify-between text-xs font-mono pt-2 border-t-2 border-black">
        <p className="bg-[#181a24] text-zinc-300 px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] font-bold">
          TOTAL MATCH: <span className="font-black text-[#FFE600]">{resultCount}</span> SISTEM
        </p>

        {(filter.searchQuery || filter.category !== 'All' || filter.filterDemoOnly) && (
          <button
            onClick={onReset}
            className="neo-btn flex items-center gap-1.5 px-3 py-1 bg-[#FB7185] text-black text-xs font-black uppercase"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESET FILTER</span>
          </button>
        )}
      </div>
    </div>
  );
};
