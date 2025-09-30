import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AcademicBackground = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-emerald-900">
      {/* Header Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Corentin Dumortier
          </Link>
          <Link to="/" className="text-emerald-400 hover:text-emerald-300">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-white mb-4">Academic Background</h1>
            <p className="text-blue-200 text-lg">
              Overview of my Bachelor’s and Master’s training with a focus on bioinformatics, genomics, and computational biology.
            </p>
          </div>

          {/* Degrees */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Degrees</h2>

            <div className="space-y-6">

              <div className="bg-gray-800/50 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-white">Bachelor’s Degree</h3>
                <p className="text-gray-300">
                  Biologie des Organismes, Populations - Environnement [BOP-E] — Université de Bretagne Occidentale • [2018-2021]
                </p>
                <p className="text-gray-400 text-sm mt-2">
                Key focus: Biology, ecology and bio-statistics.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-white">Master’s Degree</h3>
                <p className="text-gray-300">
                  Bio-Informatique et Génomique [BIG] — Université de Rennes 1 • [2022-2025]
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Key focus: R/Python/Java/Bash scripting, bioinformatics for health, sequencing data analysis and database management.
                </p>
              </div>
              
            </div>
          </div>

          {/* Bachelor’s Courses */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Bachelor’s courses</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {/* Replace these with your actual bachelor’s courses */}
              <li>Ecology</li>
              <li>Microbiology</li>
              <li>Biochemistry</li>
              <li>Genetics</li>
              <li>Evolutionary Biology</li>
              <li>Statistics</li>
              <li>Biostatistics</li>
            </ul>
          </div>

          {/* Master’s Courses */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Master’s courses</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {/* Replace these with your actual master’s courses */}
              <li>Python - Imperative and Object-Oriented Programming</li>
              <li>R - Statistics, data analysis, advanced with tydiverse</li>
              <li>Java - Object-Oriented Programming</li>
              <li>Bioinformatics and genomics - RNA-seq, ChIP-Seq and ATAC-seq pipelines, DNA microarray, Single-cell</li>
              <li>Structural bioinformatics - AlphaFold, Uniprot, PDB</li>
              <li>System - Linus, bash, awk, HPC</li>
              <li>Database management - SQL, Sparkle</li>
            </ul>
          </div>

          {/* Master’s Optional Courses */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Master’s optional courses</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {/* Replace these with your actual master’s optional courses */}
              <li>Genome Assembly and Annotation - FAIR Contexts - Nextflow, Singularity, Snakemake</li>
              <li>Sequence algorithms - Python, burrows-wheeler, alignment algorithm</li>
              <li>Biological networks - Python, Neo4J, graph network</li>
              <li>Dynamical system - Python</li>
            </ul>
          </div>
          {/* Highlights */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Highlights</h2>
            <ul className="space-y-3 text-gray-300">
              {/* Replace with your real highlights */}
              <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span>Project‑based learning for omics analysis</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span>Strong practice with Linux, R, Python, Java and HPC schedulers</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span>Documentation, collaboration, and academic communication</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicBackground;