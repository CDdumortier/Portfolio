import type { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: 'european-urology-oncology-2024',
    title: 'UncoVer: A Web-based Resource for Single-cell and Spatially Resolved Omics Data in Uro-oncology',
    journal: 'European Urology Oncology',
    year: 2024,
    status: 'published',
    authors: 'Gwendoline C V Lecuyer, Aurélie Lardenois, Frédéric Chalmel, and Uro-oncogenics Viewer Group (including Corentin D. Dumortier)',
    doi: 'https://doi.org/10.1016/j.euo.2024.04.008',
    contribution: 'Member of Uro-oncogenics Viewer Group - contributed to single-cell data analysis',
    impact: 'First comprehensive single-cell atlas of human fetal gonad development with clinical implications for reproductive health',
    relatedProject: 'single-cell-steroidogenesis'
  },
  {
    id: 'upcoming-publication-2025',
    title: 'Comparative steroidogenesis analysis across mammalian species during fetal testicular development',
    journal: 'TBD (Target: Nature Communications or Cell Reports)',
    year: 2025,
    status: 'in-preparation',
    authors: 'Lardenois A, [...], Dumortier CD, [...], Chalmel F, Rolland AD',
    contribution: 'Contributor - led comparative analysis of steroidogenesis pathways across human, mouse, and rat using single-cell RNA-seq',
    impact: 'First demonstration of Sertoli cell role in final steroidogenesis step across multiple mammalian species',
    relatedProject: 'single-cell-steroidogenesis'
  }
];