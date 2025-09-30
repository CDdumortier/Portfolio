export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  context?: {
    duration: string;
    laboratory: string;
    supervisor: string;
    objective: string;
  };
  technicalDetails?: {
    architecture: string;
    deployment: string;
    containerization: string;
    dataProcessing: string;
    coreTools: string[];
  };
  methodology?: string;
  keyResults?: string[];
  keyFindings?: string[];
  technicalAchievements?: string[];
  publications?: {
    current: string;
    upcoming: string;
  };
  clinicalRelevance?: string;
  activities?: string[];
  keyContributions?: string[];
  skills?: string[];
  datasets?: {
    human?: string;
    mouse?: string;
    rat?: string;
  };
  speciesAnalyzed?: string[];
  systemRequirements?: {
    os: string;
    minRAM: string;
    minCPU: string;
    storage: string;
  };
  repository?: {
    platform: string;
    status: string;
    url?: string;
  };
  impact: string;
  technologies: string[];
  category: 'bioinformatics' | 'analysis' | 'development' | 'comparative-genomics' | 'single-cell-analysis' | 'education-collaboration' | 'education';
  featured: boolean;
  images?: string[];
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  status: 'published' | 'in-press' | 'submitted' | 'in-preparation';
  authors: string;
  doi?: string;
  pmid?: string;
  contribution: string;
  impact: string;
  relatedProject?: string;
}