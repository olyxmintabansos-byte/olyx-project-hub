export type CategoryType = 
  | 'All'
  | 'Healthcare & Enterprise'
  | 'Fintech & SaaS'
  | 'Growtopia Tools'
  | 'AI & Utilities'
  | 'Gaming & Others';

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
}

export interface FilterState {
  searchQuery: string;
  category: CategoryType;
  filterDemoOnly: boolean;
}
