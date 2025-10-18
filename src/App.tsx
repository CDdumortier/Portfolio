import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';
import ProjectDetail from './pages/ProjectDetail';
import AcademicBackground from './pages/AcademicBackground';

const HomePage = () => (
  <>
    {/* Header avec nom et titre */}
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            <Link to="/">Corentin Dumortier</Link>
          </motion.h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
            <a href="#publications" className="text-white/80 hover:text-white transition-colors">Publications</a>
            <a href="#communication" className="text-white/80 hover:text-white transition-colors">Communication</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bioinformatics Research Engineer
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Master's Degree in Bioinformatics and Genomics • Specializing in omics data analysis and pipeline development
          </p>
          <div className="flex justify-center mb-8">
            <img src="/Photo_cv_crope.jpg" alt="Corentin Dumortier" className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover ring-2 ring-white/50 shadow-lg" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              See my projects
            </motion.button>
            <motion.a
              href="/CV_Corentin_Dumortier.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </header>

    {/* Section About */}
    <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-8">About me</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
          With a Master's degree in Bioinformatics and Genomics from the University of Rennes,
          I specialize in single-cell data analysis, Nextflow pipeline development, and
          comparative genomics. My background includes three research internships in cutting-edge
          laboratories, where I developed strong skills in R and Python programming,
          bioinformatics workflow management, and working with HPC schedulers.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Section Projects */}
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-white text-center mb-16">Main</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 - Academic Background */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-emerald-400/50 transition-colors"
          >
            <div className="h-48 bg-white/10 rounded-lg mb-6 flex items-center justify-center">
              <img src="/Univ_logo.png" alt="Univ logo" className="h-16 md:h-20 object-contain drop-shadow" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Academic Background</h4>
            <p className="text-gray-300 mb-4">
              Bachelor’s and Master’s studies focusing on bioinformatics, genomics, and computational biology.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">Academic</span>
              <span className="bg-emerald-600/30 text-emerald-200 px-3 py-1 rounded-full text-sm">Bioinformatics</span>
              <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">Genomics</span>
            </div>
            <Link 
              to="/projects/academic-background"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              See details →
            </Link>
          </motion.div>

          {/* Project 2 - Pipeline Nextflow */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-emerald-400/50 transition-colors"
          >
            <div className="h-48 bg-white/10 rounded-lg mb-6 flex items-center justify-center">
              <img src="/nextflow.png" alt="Nextflow logo" className="h-16 md:h-20 object-contain drop-shadow" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Nextflow Pipeline for Comparative Genomics</h4>
            <p className="text-gray-300 mb-4">
              Automated pipeline for comparative analysis of vertebrate genomes using Nextflow, 
              deployed on HPC clusters with Singularity.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-emerald-600/30 text-emerald-200 px-3 py-1 rounded-full text-sm">Nextflow</span>
              <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">Comparative genomics</span>
              <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">HPC</span>
            </div>
            <Link 
              to="/projects/evofish-nextflow-pipeline"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              See details →
            </Link>
          </motion.div>

          {/* Project 3 - Single-cell */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-emerald-400/50 transition-colors"
          >
            <div className="h-48 bg-white/10 rounded-lg mb-6 flex items-center justify-center">
              <img src="/Seurat.png" alt="Seurat logo" className="h-16 md:h-20 object-contain drop-shadow" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Single-cell R analyses</h4>
            <p className="text-gray-300 mb-4">
              Single-cell data analysis workflow for studying fetal testicular development. 
              Using Seurat and Bioconductor.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">R</span>
              <span className="bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm">Seurat</span>
              <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">Single-cell</span>
            </div>
            <Link 
              to="/projects/single-cell-steroidogenesis"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              See details →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section Skills */}
    <section id="skills" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-white text-center mb-16">Technical Skills</h3>
        
        <div className="flex flex-wrap justify-center gap-20">
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img src="/R.svg" alt="R logo" className="h-8" />
            </div>
            <h4 className="text-white font-semibold mb-2">R & Bioconductor</h4>
            <p className="text-gray-400 text-sm max-w-[220px] mx-auto">
              General statistics, Omics data analysis, Seurat, DESeq2
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img src="/Linux.png" alt="Linux logo" className="h-8" />
            </div>
            <h4 className="text-white font-semibold mb-2">Linux & Shell</h4>
            <p className="text-gray-400 text-sm max-w-[220px] mx-auto">Linux environment, bash, awk</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img src="/python.png" alt="Python logo" className="h-8" />
            </div>
            <h4 className="text-white font-semibold mb-2">Python</h4>
            <p className="text-gray-400 text-sm max-w-[220px] mx-auto">
              Analysis scripts, automation, machine learning
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img src="/nextflow.png" alt="Nextflow logo" className="h-8" />
            </div>
            <h4 className="text-white font-semibold mb-2">Nextflow</h4>
            <p className="text-gray-400 text-sm">Bioinformatics pipelines</p>
          </div>
          
          <div className="text-center min-w-[200px]">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img src="/github.jpg" alt="GitHub logo" className="h-8 rounded" />
            </div>
            <h4 className="text-white font-semibold mb-2">Git & Containers</h4>
            <p className="text-gray-400 text-sm">GitHub & GitLab, Conda, Singularity</p>
          </div>

        </div>
      </div>
    </section>

    {/* Section Publications */}
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-white text-center mb-16">Publications</h3>
        
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Publication 1 - Published */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2">
                UncoVer: A Web-based Resource for Single-cell and Spatially Resolved Omics Data in Uro-oncology
                </h4>
                <p className="text-emerald-400 font-semibold">European Urology Oncology • 2024 • Published • https://doi.org/10.1016/j.euo.2024.04.008 </p>
              </div>
              <span className="bg-emerald-600/30 text-emerald-200 px-3 py-1 rounded-full text-sm">
                Published
              </span>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">
              <strong>Authors:</strong> Gwendoline C V Lecuyer, Aurélie Lardenois, Frédéric Chalmel, and Uro-oncogenics Viewer Group (including <span className="text-white font-semibold">Corentin D. Dumortier</span>)
            </p>
            
            <p className="text-gray-300 mb-4">
              <strong>My contribution:</strong> Member of Uro-oncogenics Viewer Group - contributed to single-cell data analysis
            </p>
            
            <div className="flex items-center gap-4">
              <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">Single-cell RNA-seq</span>
              <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">Reproductive Biology</span>
              <span className="bg-orange-600/30 text-orange-200 px-3 py-1 rounded-full text-sm">Clinical Research</span>
            </div>
          </motion.div>

          {/* Publication 2 - In Preparation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2">
                Single-cell exploration of gonadal somatic cell lineage specification during human sex determination
                </h4>
                <p className="text-blue-400 font-semibold">Developmental Cell • Published on October 9, 2025 • https://doi.org/10.1016/j.devcel.2025.09.011 </p>
              </div>
              <span className="bg-emerald-600/30 text-emerald-200 px-3 py-1 rounded-full text-sm">
                Published
              </span>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">
              <strong>Authors:</strong> Aurélie Lardenois, Antonio Suglia, [...], <span className="text-white font-semibold">Corentin Dumortier</span>, [...], Frédéric Chalmel, Antoine D. Rolland
            </p>
            
            <p className="text-gray-300 mb-4">
              <strong>My contribution:</strong> Contributor - comparative analysis of steroidogenesis pathways across human, mouse, and rat using single-cell RNA-seq
            </p>
            
            <div className="flex items-center gap-4">
              <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">Comparative Genomics</span>
              <span className="bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm">Developmental Biology</span>
              <span className="bg-red-600/30 text-red-200 px-3 py-1 rounded-full text-sm">Multi-species Analysis</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section Communication */}
    <section id="communication" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-white text-center mb-16">Communication</h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* BigDay 2023 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2">
                  BigDay 2023 — EBiGo Rennes
                </h4>
                <p className="text-emerald-400 font-semibold">Leader of the programming team</p>
              </div>
              <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">
                Conference
              </span>
            </div>

            <p className="text-gray-300 mb-6">
              Co-led conference organization and program curation. Coordinated speakers and session planning. Co-host of the conference.
            </p>

            <div className="flex gap-3">
              <a
                href="https://ebigo-rennes.jimdofree.com/big-day/edition-2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                Visit page →
              </a>
            </div>
          </motion.div>

          {/* Meeting Pro'Bio — March 17, 2023 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2">
                  Meeting Pro’Bio — 17 March 2023: “Travailler aux interfaces”
                </h4>
                <p className="text-emerald-400 font-semibold">Leader of the programming team</p>
              </div>
              <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">
                Conference
              </span>
            </div>

            <p className="text-gray-300 mb-6">
              Co-organized and co-hosted the event. Helped define program structure and session sequencing.
            </p>

            <div className="flex gap-3">
              <a
                href="https://assobiomcell.jimdofree.com/evènements/meeting-pro-bio/année-2022-2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                Visit page →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Footer Contact */}
    <footer id="contact" className="py-16 border-t border-white/20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-white mb-8">Contact</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <a href="mailto:corentin.d.dumortier@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            corentin.d.dumortier@gmail.com
          </a>
          <span className="text-gray-500">•</span>
          <span className="text-gray-300">Rennes, France</span>
        </div>
      </div>
    </footer>
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-emerald-900">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/academic-background" element={<AcademicBackground />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </div>

  );
};

export default App;