import React from 'react';
import {
  ExternalLink,
  Github,
  Activity,
  UserCheck,
  Wallet,
  CreditCard,
  Clock,
  Gamepad2,
  Cpu,
  Calculator,
  Crosshair,
  FileText,
  TrendingUp,
  Video,
  Box,
  Brain,
  GraduationCap,
  Users,
  Briefcase,
  Building2,
  ShoppingBag,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Project } from '../types/project';

// Dynamic icon mapper
const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 text-cyan-400" />,
  UserCheck: <UserCheck className="w-5 h-5 text-emerald-400" />,
  Wallet: <Wallet className="w-5 h-5 text-amber-400" />,
  CreditCard: <CreditCard className="w-5 h-5 text-blue-400" />,
  Clock: <Clock className="w-5 h-5 text-lime-400" />,
  Gamepad2: <Gamepad2 className="w-5 h-5 text-pink-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  Calculator: <Calculator className="w-5 h-5 text-teal-400" />,
  Crosshair: <Crosshair className="w-5 h-5 text-red-400" />,
  FileText: <FileText className="w-5 h-5 text-indigo-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
  Video: <Video className="w-5 h-5 text-rose-400" />,
  Box: <Box className="w-5 h-5 text-sky-400" />,
  Brain: <Brain className="w-5 h-5 text-violet-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-cyan-400" />,
  Users: <Users className="w-5 h-5 text-amber-400" />,
  Briefcase: <Briefcase className="w-5 h-5 text-emerald-400" />,
  Building2: <Building2 className="w-5 h-5 text-blue-400" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-pink-400" />,
};

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group glass-card glass-card-hover rounded-2xl p-5 cursor-pointer flex flex-col justify-between relative overflow-hidden transition-all duration-300"
    >
      {/* Glow highlight on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />

      {/* Top row: Category & Status */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
            {project.category}
          </span>

          {project.hasDemo ? (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 border border-emerald-800/80 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Demo
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800/80 border border-slate-700 text-slate-400">
              <Github className="w-2.5 h-2.5" />
              Source Only
            </span>
          )}
        </div>

        {/* Title & Icon */}
        <div className="flex items-start gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors shrink-0">
            {iconMap[project.icon] || <Sparkles className="w-5 h-5 text-cyan-400" />}
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
              {project.name}
            </h3>
            {project.highlightStats && (
              <span className="text-[11px] text-cyan-400/90 font-mono">
                {project.highlightStats}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Bottom area: Tech topics & CTA */}
      <div className="pt-3 border-t border-slate-800/60">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
            >
              {topic}
            </span>
          ))}
          {project.topics.length > 3 && (
            <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-900/50 text-slate-400">
              +{project.topics.length - 3}
            </span>
          )}
        </div>

        {/* Visual action preview */}
        <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
          <span className="flex items-center gap-1">
            Lihat Opsi Proyek
          </span>
          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
