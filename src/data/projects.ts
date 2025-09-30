import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'evofish-nextflow-pipeline',
    title: 'EvoFish: Nextflow Pipeline for Comparative Genomics',
    shortDescription: 'Automated pipeline for comparative analysis of vertebrate genomes using Nextflow, deployed on HPC clusters with Singularity.',
    
    fullDescription: `
      The EvoFish pipeline represents a comprehensive solution for comparative genomics analysis, 
      specifically designed to study evolutionary trajectories across vertebrate species with 
      different levels of whole-genome duplications (2R, 3R, 4R). This project was developed 
      during my 6-month internship at LPGP-INRAe under the supervision of Dr. Florent Murat.
    `,
    
    context: {
      duration: 'February 2025 - July 2025 (6 months)',
      laboratory: 'LPGP-INRAe, University of Rennes',
      supervisor: 'Dr. Florent Murat, Jérôme Montfort',
      objective: 'Reconstruct comparative atlases of fish genomes to understand evolutionary trajectories across species'
    },
    
    technicalDetails: {
      architecture: '22-module unified workflow implemented in Nextflow v24.10.0',
      deployment: 'HPC clusters with SLURM job scheduling',
      containerization: 'Singularity containers and Conda environments for reproducibility',
      dataProcessing: 'Automatic retrieval from Ensembl (release 95) and NCBI GenBank databases',
      coreTools: [
        'EMBOSS transeq v5.0.0 for sequence translation',
        'Diamond for high-performance sequence alignment', 
        'hcluster_sg v0.5.1 for gene clustering',
        'T-Coffee v11.0.8 for multiple sequence alignment',
        'TreeBeST v1.9.2 for phylogenetic reconstruction',
        'SCORPiOs for synteny-guided tree correction',
        'Agora for ancestral genome reconstruction'
      ]
    },
    
    methodology: `The pipeline processes genomic data through a systematic 22-module workflow:
1. Species-specific genome data download and validation (modules 00-03)
2. Protein translation and homology detection (modules 04-08) 
3. Gene clustering and phylogenetic analysis (modules 09-18)
4. Optional synteny-guided tree correction using SCORPiOs (module 20)
5. Ancestral genome reconstruction using Agora (module 21)`,
    
    keyResults: [
      '9,090 gene trees successfully generated across 9 vertebrate species',
      '18.5% of gene trees corrected by SCORPiOs, demonstrating the importance of synteny-guided approaches',
      'Successful reconstruction of ancestral chromosome regions (CARs) revealing differential patterns of chromosomal reorganization',
      'Pipeline democratizes access to comparative genomics while respecting FAIR data principles'
    ],
    
    speciesAnalyzed: [
      'H. sapiens', 'M. musculus', 'L. oculatus', 'D. rerio', 
      'O. mykiss', 'S. trutta', 'S. typhle', 'G. aculeatus', 'O. latipes'
    ],
    
    systemRequirements: {
      os: 'Linux-based operating systems',
      minRAM: '600GB RAM',
      minCPU: '50 CPUs for large-scale analyses',
      storage: 'Multi-core processors for parallel execution'
    },
    
    repository: {
      platform: 'GitLab',
      status: 'Private during development, will be made public with comprehensive documentation',
      url: 'https://gitlab.com/CorentinDumortier22/Evofish_Stage'
    },
    
    impact: `This pipeline addresses critical scalability and reproducibility challenges in comparative genomics. Unlike existing Galaxy-based workflows, the containerized approach ensures consistent execution across diverse computational environments while maintaining full reproducibility. The modular architecture enables researchers to incorporate newly sequenced genomes without extensive reconfiguration.`,
    
    technologies: ['Nextflow', 'Singularity', 'HPC', 'SLURM', 'Python', 'BioPython', 'Conda', 'GitLab'],
    category: 'comparative-genomics',
    featured: true,
    images: [
      'phylogenetic-tree.png',
      'pipeline-workflow-diagram.png', 
      'ancestral-chromosomes-reconstruction.png'
    ]
  },
  
  {
    id: 'single-cell-steroidogenesis',
    title: 'Comparative Single-cell Analysis of Testicular Steroidogenesis',
    shortDescription: 'Single-cell data analysis workflow for studying fetal testicular development using Seurat.',
    
    fullDescription: `This project involved the comparative analysis of steroidogenesis during fetal testicular development across three species (human, mouse, rat) using single-cell RNA sequencing approaches. The work was conducted during two successive internships at Irset-Inserm U1085 in the URGENT team, focusing on characterizing cell types and understanding androgen synthesis pathways.`,
    
    context: {
      duration: 'Two 3-month internships (M1 program)',
      laboratory: 'Irset-Inserm U1085, Team 8 URGENT',
      supervisor: 'Dr. Aurélie Lardenois, Dr. Antoine Rolland, Dr. Frédéric Chalmel',
      objective: 'Characterize fetal gonad cell types and compare androgen synthesis pathways across species'
    },
    
    datasets: {
      human: 'Published data from Lardenois et al., 2023 (17 samples)',
      mouse: 'Published data from Ademi et al., 2022 (10 samples)', 
      rat: 'Unpublished team data (2 samples)'
    },
    
    methodology: `Applied single-cell RNA sequencing analysis to characterize different cell types and lineages in fetal gonads. Used dimensional reduction (UMAP), clustering, and differential expression analysis to identify cell populations and study androgen biosynthesis marker gene expression across species. The analysis pipeline included:

1. Quality control and filtering of single-cell data
2. Normalization and dimensionality reduction using UMAP
3. Cell type identification and annotation
4. Comparative analysis of steroidogenesis pathways
5. Species-specific expression pattern analysis`,
    
    keyFindings: [
      'Identified 16 cell types in human and mouse datasets vs 8 in rat (limited by sample size)',
      'Demonstrated that fetal Sertoli cells are responsible for the final step of steroidogenesis across all three species',
      'First demonstration of this mechanism in human and rat - previously only shown in mouse',
      'Age diversity limitation in rat samples explained absence of important cell lineages'
    ],
    
    technicalAchievements: [
      'Re-analysis of published human and mouse single-cell datasets',
      'Development of comparative analysis workflow across species',
      'Integration of steroidogenesis pathway analysis with cell type identification',
      'UMAP visualization and clustering of fetal gonad cell populations'
    ],
    
    publications: {
      current: 'European Urology Oncology (2024) - cited as Uro-oncogenics Viewer Group member',
      upcoming: 'Scientific publication expected 2025 with co-authorship'
    },
    
    clinicalRelevance: `This work provides crucial insights into normal fetal testicular development, which is essential for understanding disorders of sex development and male fertility issues. The comparative approach across species strengthens translational potential.`,
    
    impact: `This research advances our understanding of testicular development across species and provides critical insights for reproductive health research. The comparative approach strengthens translational potential for understanding human developmental disorders.`,
    
    technologies: ['R', 'Seurat', 'Bioconductor', 'Single-cell RNA-seq', 'UMAP', 'Differential Expression Analysis'],
    category: 'single-cell-analysis',
    featured: true,
    images: [
      'umap-cell-types.png',
      'steroidogenesis-pathway.png',
      'species-comparison.png'
    ]
  },
  
  {
    id: 'academic-background',
    title: 'Academic Background',
    shortDescription: 'Bachelor’s and Master’s studies with focus on bioinformatics, genomics, and computational biology.',
    fullDescription: `This page summarizes my academic background, including my Bachelor’s and Master’s programs, and the courses that shaped my bioinformatics skill set.`,
    // Use "keyResults" as a bullet list of highlights (reuses ProjectDetail renderer)
    keyResults: [
      // Replace these bullets with details from your CV
      'Bachelor’s degree: [name, institution, key topics]',
      'Master’s degree: Bioinformatics & Genomics — core modules (e.g., single-cell analysis, comparative genomics, scripting in R/Python, Nextflow pipelines)',
      'Methodological foundations: statistics, algorithmics, reproducible research, Linux & shell',
      'Projects: analysis pipelines, single-cell analyses, collaborative coding and documentation'
    ],

    impact: ` `,
    
    // Optional: use "context" for structured metadata if you like
    context: {
      duration: 'Bachelor: [years] • Master: [years]',
      laboratory: 'University of Rennes (Master) • [Other institutions]',
      supervisor: '—',
      objective: 'Build strong bioinformatics foundations across omics analysis, pipelines, and computational methods'
    },
    // This field is used to render chips at the top of detail page
    technologies: ['Academic', 'Bioinformatics', 'Genomics', 'R', 'Python'],
    category: 'education',
    featured: true,
    images: []
  },
];