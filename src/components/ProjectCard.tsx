import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Copy,
  Check,
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
  HardHat,
  Sun,
  Zap,
  Gauge,
  Truck,
  Droplet,
  Wind,
  Train,
  Plane,
  Anchor,
  Landmark,
  Building,
  Scale,
  Shield,
  Home,
  ShieldAlert,
  HeartPulse,
  Store,
} from 'lucide-react';
import { Project } from '../types/project';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 text-black" />,
  UserCheck: <UserCheck className="w-5 h-5 text-black" />,
  Wallet: <Wallet className="w-5 h-5 text-black" />,
  CreditCard: <CreditCard className="w-5 h-5 text-black" />,
  Clock: <Clock className="w-5 h-5 text-black" />,
  Gamepad2: <Gamepad2 className="w-5 h-5 text-black" />,
  Cpu: <Cpu className="w-5 h-5 text-black" />,
  Calculator: <Calculator className="w-5 h-5 text-black" />,
  Crosshair: <Crosshair className="w-5 h-5 text-black" />,
  FileText: <FileText className="w-5 h-5 text-black" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-black" />,
  Video: <Video className="w-5 h-5 text-black" />,
  Box: <Box className="w-5 h-5 text-black" />,
  Brain: <Brain className="w-5 h-5 text-black" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-black" />,
  Users: <Users className="w-5 h-5 text-black" />,
  Briefcase: <Briefcase className="w-5 h-5 text-black" />,
  Building2: <Building2 className="w-5 h-5 text-black" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-black" />,
  HardHat: <HardHat className="w-5 h-5 text-black" />,
  Sun: <Sun className="w-5 h-5 text-black" />,
  Zap: <Zap className="w-5 h-5 text-black" />,
  Gauge: <Gauge className="w-5 h-5 text-black" />,
  Truck: <Truck className="w-5 h-5 text-black" />,
  Droplet: <Droplet className="w-5 h-5 text-black" />,
  Wind: <Wind className="w-5 h-5 text-black" />,
  Train: <Train className="w-5 h-5 text-black" />,
  Plane: <Plane className="w-5 h-5 text-black" />,
  Anchor: <Anchor className="w-5 h-5 text-black" />,
  Landmark: <Landmark className="w-5 h-5 text-black" />,
  Building: <Building className="w-5 h-5 text-black" />,
  Scale: <Scale className="w-5 h-5 text-black" />,
  Shield: <Shield className="w-5 h-5 text-black" />,
  Home: <Home className="w-5 h-5 text-black" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-black" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-black" />,
  Store: <Store className="w-5 h-5 text-black" />,
};

const colorMap = {
  yellow: 'bg-[#FFE600] text-black',
  cyan: 'bg-[#00F0FF] text-black',
  lime: 'bg-[#4ADE80] text-black',
  pink: 'bg-[#FB7185] text-black',
  purple: 'bg-[#C084FC] text-black',
  orange: 'bg-[#FB923C] text-black',
  blue: 'bg-[#38BDF8] text-black',
};

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [copied, setCopied] = useState(false);
  const colorClass = colorMap[project.colorScheme || 'yellow'];

  const handleCopyClone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`git clone ${project.repoUrl}.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleOpenLink = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onSelect(project)}
      className="neo-card bg-[#12141d] rounded-none p-5 cursor-pointer flex flex-col justify-between relative select-none group"
    >
      <div>
        {/* Top Header: Category Tag & Status Dot */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`inline-block font-mono text-[10px] font-black uppercase px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000] ${colorClass}`}>
            {project.category}
          </span>

          <div className="flex items-center gap-1.5">
            {project.badge && (
              <span className="bg-black text-white font-mono text-[9px] font-bold uppercase px-1.5 py-0.5 border border-zinc-700">
                {project.badge}
              </span>
            )}
            <span className="inline-flex items-center gap-1 font-mono text-[10px] font-black text-[#4ADE80] bg-black px-1.5 py-0.5 border border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              LIVE
            </span>
          </div>
        </div>

        {/* Project Icon & Title */}
        <div className="flex items-start gap-3 mb-2.5">
          <div className={`w-10 h-10 shrink-0 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000] ${colorClass}`}>
            {iconMap[project.icon] || <Box className="w-5 h-5 text-black" />}
          </div>
          <div>
            <h3 className="font-black text-white group-hover:text-[#FFE600] text-base leading-tight tracking-tight uppercase transition-colors">
              {project.name}
            </h3>
            {project.highlightStats && (
              <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider block mt-0.5">
                // {project.highlightStats}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-zinc-300 font-medium leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Topics / Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-[10px] font-mono font-bold px-2 py-0.5 bg-black text-zinc-300 border border-zinc-800"
            >
              {topic}
            </span>
          ))}
          {project.topics.length > 3 && (
            <span className="text-[10px] font-mono text-zinc-500 py-0.5">
              +{project.topics.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t-2 border-black flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {project.hasDemo && (
            <button
              onClick={(e) => handleOpenLink(e, project.demoUrl)}
              className="neo-btn inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFE600] text-black font-black text-xs uppercase"
              title="Buka Live Demo"
            >
              <span>DEMO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={(e) => handleOpenLink(e, project.repoUrl)}
            className="neo-btn inline-flex items-center gap-1 px-2.5 py-1 bg-white text-black font-bold text-xs uppercase"
            title="Buka Repository GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">REPO</span>
          </button>
        </div>

        {/* Quick Clone Button */}
        <button
          onClick={handleCopyClone}
          className="neo-btn p-1.5 bg-[#181a24] text-zinc-300 hover:text-white"
          title="Salin git clone command"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#4ADE80]" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
