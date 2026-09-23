import React from 'react';
import {
  Activity,
  ScanFace,
  Wallet,
  Store,
  Clock,
  Orbit,
  Cpu,
  Calculator,
  ShieldAlert,
  FileCode,
  TrendingUp,
  Video,
  Gamepad2,
  Building2,
  BarChart3,
  ShoppingBag,
  Layers,
  LucideProps,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Activity,
  ScanFace,
  Wallet,
  Store,
  Clock,
  Orbit,
  Cpu,
  Calculator,
  ShieldAlert,
  FileCode,
  TrendingUp,
  Video,
  Gamepad2,
  Building2,
  BarChart3,
  ShoppingBag,
};

interface ProjectIconProps extends LucideProps {
  name: string;
}

export const ProjectIcon: React.FC<ProjectIconProps> = ({ name, ...props }) => {
  const IconComponent = ICON_MAP[name] || Layers;
  return <IconComponent {...props} />;
};
