import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MarqueeTicker } from './components/MarqueeTicker';
import { HeroSection } from './components/HeroSection';
import { FilterBar } from './components/FilterBar';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/projects';
import { useFilter } from './hooks/useFilter';
import { Project } from './types/project';
import { SearchX, RotateCcw } from 'lucide-react';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const {
    filter,
    filteredProjects,
    stats,
    setSearchQuery,
    setCategory,
    toggleDemoOnly,
    resetFilter,
  } = useFilter(PROJECTS);

  return (
    <div className="min-h-screen flex flex-col bg-[#08090d] text-zinc-100 selection:bg-[#FFE600] selection:text-black font-sans">
      {/* Top Navbar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Neobrutalist Marquee Ticker Tape */}
      <MarqueeTicker />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with stats */}
        <HeroSection
          totalProjects={stats.total}
          liveDemos={stats.liveDemos}
        />

        {/* Filter Controls (Search, Categories, Demo Toggle) */}
        <FilterBar
          filter={filter}
          onSearchChange={setSearchQuery}
          onCategoryChange={setCategory}
          onToggleDemoOnly={toggleDemoOnly}
          onReset={resetFilter}
          resultCount={filteredProjects.length}
        />

        {/* Projects Grid Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          ) : (
            /* Neobrutalist Empty State */
            <div className="text-center py-16 px-6 bg-[#12141d] border-[3px] border-black shadow-[6px_6px_0px_#000] max-w-lg mx-auto">
              <div className="w-14 h-14 bg-[#FFE600] border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center mx-auto mb-4 text-black">
                <SearchX className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black uppercase text-white mb-2 tracking-tight">
                SISTEM TIDAK DITEMUKAN
              </h3>
              <p className="text-xs text-zinc-400 font-medium mb-6 leading-relaxed max-w-sm mx-auto">
                Tidak ada repositori atau SCADA OS yang cocok dengan kata kunci &quot;{filter.searchQuery}&quot; pada filter saat ini.
              </p>
              <button
                onClick={resetFilter}
                className="neo-btn inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFE600] text-black text-xs font-black uppercase tracking-wider"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET SEMUA FILTER</span>
              </button>
            </div>
          )}
        </section>
      </main>

      {/* THE DUAL-ACTION PROJECT SHOWCASE MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Spotlight Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        projects={PROJECTS}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* Neobrutalist Footer */}
      <Footer />
    </div>
  );
}

export default App;
