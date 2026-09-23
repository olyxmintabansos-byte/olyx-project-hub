import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Copy,
  Check,
  Tag,
  ShieldCheck,
  Terminal,
  Layers,
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
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const cloneCommand = `git clone ${project.repoUrl}.git`;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md transition-all">
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-t-3xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                {project.category}
              </span>
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            title="Tutup (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-6">
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Tentang Proyek
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-cyan-400" />
              Teknologi & Topik
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 border border-slate-700 text-cyan-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* THE DUAL-ACTION BUTTONS: LIVE DEMO & REPOSITORY */}
          <div className="pt-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Pilih Aksi / Tujuan:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* BUTTON 1: LIVE DEMO */}
              {project.hasDemo ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buka Live Demo</span>
                </a>
              ) : (
                <div
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 text-sm font-medium cursor-not-allowed text-center"
                  title="Live Demo belum tersedia untuk proyek ini"
                >
                  <span>Live Demo Segera Hadir</span>
                </div>
              )}

              {/* BUTTON 2: GITHUB REPOSITORY */}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                <span>Buka Source Code / Repo</span>
              </a>
            </div>
          </div>

          {/* QUICK CLONE TERMINAL BOX */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Quick Clone via Git CLI:
              </span>
              {copied && (
                <span className="text-emerald-400 font-sans flex items-center gap-1">
                  <Check className="w-3 h-3" /> Berhasil disalin!
                </span>
              )}
            </div>

            <div className="flex items-center justify-between gap-2 bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800">
              <code className="text-xs font-mono text-cyan-300 truncate">
                {cloneCommand}
              </code>
              <button
                onClick={handleCopyClone}
                className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                title="Salin git clone command"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
