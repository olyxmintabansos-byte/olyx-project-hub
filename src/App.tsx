import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FilterBar } from './components/FilterBar';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/projects';
import { useFilter } from './hooks/useFilter';
import { Project } from './types/project';
import { SearchX } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

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
            /* Empty State */
            <div className="text-center py-20 px-4 glass-card rounded-2xl max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-500">
                <SearchX className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-200 mb-1">
                Proyek Tidak Ditemukan
              </h3>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Tidak ada repositori atau tools yang cocok dengan kriteria pencarian saat ini.
              </p>
              <button
                onClick={resetFilter}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold rounded-lg border border-slate-700 transition-colors"
              >
                Reset Semua Filter
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
