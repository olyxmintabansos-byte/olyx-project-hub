import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Copy,
  Check,
  ShieldCheck,
  Terminal,
  Layers,
  Box,
} from 'lucide-react';
import { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const cloneCommand = `git clone ${project.repoUrl}.git`;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card (Neobrutalism Window) */}
      <div className="relative w-full max-w-2xl bg-[#0e1017] border-[3px] border-black shadow-[10px_10px_0px_#000] z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Retro Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#FFE600] text-black border-b-[3px] border-black font-mono font-black text-xs uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-black inline-block"></span>
            <span>OS INSPECTOR // {project.id}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="hidden sm:inline-block text-[10px] text-black/70 mr-2">ESC TO CLOSE</span>
            <button
              onClick={onClose}
              className="w-6 h-6 bg-black text-[#FFE600] border border-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-[#00F0FF] text-black border-2 border-black shadow-[2px_2px_0px_#000]">
                {project.category}
              </span>
              <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-[#4ADE80] text-black border-2 border-black shadow-[2px_2px_0px_#000]">
                {project.status}
              </span>
              {project.badge && (
                <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-[#FB7185] text-black border-2 border-black shadow-[2px_2px_0px_#000]">
                  {project.badge}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
              {project.name}
            </h2>
            {project.highlightStats && (
              <p className="text-xs font-mono text-[#FFE600] font-bold mt-1">
                // SPECIFICATION: {project.highlightStats}
              </p>
            )}
          </div>

          {/* Detailed Architecture Description */}
          <div className="bg-[#181a24] p-4 border-2 border-black shadow-[3px_3px_0px_#000] space-y-2">
            <h4 className="text-[11px] font-mono font-black uppercase tracking-wider text-[#00F0FF]">
              RINGKASAN ARSITEKTUR &amp; FITUR:
            </h4>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Topics & Components */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono font-black uppercase tracking-wider text-zinc-400">
              MODUL &amp; TECH STACK:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-2.5 py-1 text-xs font-mono font-bold bg-black text-[#FFE600] border-2 border-black shadow-[2px_2px_0px_#000]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Terminal Quick Clone */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 font-black uppercase text-zinc-300">
                <Terminal className="w-3.5 h-3.5 text-[#4ADE80]" />
                QUICK CLONE REPOSITORY:
              </span>
              <button
                onClick={handleCopyClone}
                className="neo-btn flex items-center gap-1 px-2.5 py-0.5 bg-[#4ADE80] text-black text-[11px] font-black uppercase"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>TERSALIN!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>SALIN SCRIPT</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-3 bg-black border-2 border-black font-mono text-xs text-[#4ADE80] overflow-x-auto shadow-[3px_3px_0px_#000]">
              <span className="text-zinc-600 select-none">$ </span>
              {cloneCommand}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t-2 border-black flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
            {project.hasDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FFE600] text-black font-black text-xs uppercase tracking-wider"
              >
                <span>BUKA LIVE DEMO</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-black text-xs uppercase tracking-wider"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE CODE</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
