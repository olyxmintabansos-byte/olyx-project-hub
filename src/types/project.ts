export type CategoryType = 
  | 'All'
  | 'Industrial & SCADA OS'
  | 'Enterprise & Governance'
  | 'Fintech & Commerce'
  | 'AI & Synthetic Intelligence'
  | 'Healthcare & Medical'
  | 'Growtopia & Gaming'
  | 'Utilities & Media';

export interface Project {
  id: string;
  name: string;
  category: CategoryType;
  description: string;
  longDescription?: string;
  topics: string[];
  repoUrl: string;
  demoUrl: string;
  hasDemo: boolean;
  featured: boolean;
  status: 'Production Ready' | 'Live Tool' | 'Source Available' | 'Under Development';
  icon: string;
  stars?: number;
  highlightStats?: string;
  badge?: string;
  colorScheme?: 'yellow' | 'cyan' | 'lime' | 'pink' | 'purple' | 'orange' | 'blue';
}

export interface FilterState {
  searchQuery: string;
  category: CategoryType;
  filterDemoOnly: boolean;
}
