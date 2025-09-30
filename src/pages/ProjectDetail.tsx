import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-emerald-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-emerald-400 hover:text-emerald-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Project Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-blue-200 mb-8">{project.shortDescription}</p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-emerald-600/30 text-emerald-200 px-4 py-2 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {/* Context Section */}
              {project.context && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Context</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-300"><strong>Duration:</strong> {project.context.duration}</p>
                      <p className="text-gray-300"><strong>Laboratory:</strong> {project.context.laboratory}</p>
                    </div>
                    <div>
                      <p className="text-gray-300"><strong>Supervisor:</strong> {project.context.supervisor}</p>
                      <p className="text-gray-300"><strong>Objective:</strong> {project.context.objective}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Details */}
              {project.technicalDetails && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Technical Implementation</h3>
                  <p className="text-gray-300 mb-4"><strong>Architecture:</strong> {project.technicalDetails.architecture}</p>
                  <p className="text-gray-300 mb-4"><strong>Deployment:</strong> {project.technicalDetails.deployment}</p>
                  <p className="text-gray-300 mb-4"><strong>Containerization:</strong> {project.technicalDetails.containerization}</p>
                  
                  {project.technicalDetails.coreTools && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Core Tools:</h4>
                      <ul className="text-gray-300 space-y-1">
                        {project.technicalDetails.coreTools.map((tool, index) => (
                          <li key={index}>• {tool}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Methodology */}
              {project.methodology && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Methodology</h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.methodology}
                  </p>

                  {/* Pipeline organization chart (only for EvoFish project) */}
                  {project.id === 'evofish-nextflow-pipeline' && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Pipeline organization chart
                      </h4>
                      <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                        <img
                          src="/organigramme.png"
                          alt="EvoFish pipeline organization chart"
                          className="w-full h-auto rounded"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Key Results */}
              {project.keyResults && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Results</h3>
                  <ul className="space-y-3">
                    {project.keyResults.map((result, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-emerald-400 mr-3">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Selected Results (only for EvoFish) */}
              {project.id === 'evofish-nextflow-pipeline' && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Selected Results</h3>

                  {/* SCORPiOs correction result */}
                  <div className="bg-white/10 rounded-lg p-4 border border-white/10 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      SCORPiOs synteny-guided gene tree correction
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      SCORPiOs uses conserved synteny to correct gene tree topologies after whole‑genome
                      duplications. Here, duplication nodes and orthology/paralogy assignments are adjusted
                      to be consistent with neighboring genomic context, reducing sequence‑only artifacts.
                    </p>
                    <img
                      src="/scorpios_correction_tree.png"
                      alt="SCORPiOs synteny-guided correction of a gene tree"
                      className="w-full h-auto rounded"
                      loading="lazy"
                    />
                    <p className="text-gray-400 text-xs mt-2">
                      Example before/after correction: duplication nodes realigned with expected ohnolog
                      relationships based on conserved blocks.
                    </p>
                  </div>

                  {/* Synteny result */}
                  <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Synteny analysis and ancestral reconstruction
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Synteny analysis reveals conserved gene order and duplicated segments across
                      vertebrates. In EvoFish, these blocks support detection of post‑WGD ohnolog
                      regions and guide ancestral reconstruction of chromosomes.
                    </p>
                    <img
                      src="/Syntenie.png"
                      alt="Synteny map illustrating conserved blocks and duplicated segments"
                      className="w-full h-auto rounded"
                      loading="lazy"
                    />
                    <p className="text-gray-400 text-xs mt-2">
                      Representative synteny map highlighting conserved blocks and duplicated segments
                      used to infer ancestral chromosome architecture.
                    </p>
                  </div>
                </div>
              )}

              {/* Results (only for Single-cell project) */}
              {project.id === 'single-cell-steroidogenesis' && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Results</h3>

                  {/* Human UMAP */}
                  <div className="bg-white/10 rounded-lg p-4 border border-white/10 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Identification and characterization of fetal testicular cells in humans.
                    </h4>
                    <img
                      src="/Panel_Figures_Human.jpg"
                      alt="Human UMAP of fetal testis cell types"
                      className="w-full h-auto rounded"
                      loading="lazy"
                    />
                  </div>

                  {/* Mouse UMAP */}
                  <div className="bg-white/10 rounded-lg p-4 border border-white/10 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Identification and characterization of fetal testicular cells in mice.
                    </h4>
                    <img
                      src="/Panel_Figures_Mouse.jpg"
                      alt="Mouse UMAP of fetal testis cell types"
                      className="w-full h-auto rounded"
                      loading="lazy"
                    />
                  </div>

                  {/* Rat UMAP */}
                  <div className="bg-white/10 rounded-lg p-4 border border-white/10 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Identification and characterization of fetal testicular cells in rats.
                    </h4>
                    <img
                      src="/Panel_Figures_Rat.jpg"
                      alt="Rat UMAP of fetal testis cell types"
                      className="w-full h-auto rounded"
                      loading="lazy"
                    />
                  </div>

                  {/* Inter-species steroidogenesis comparison */}
                  <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Inter-species comparison of steroidogenesis in fetal testicles.
                    </h4>
                    <img
                      src="/Panel_Figures_Steroidogenesis_all_species.jpg"
                      alt="Inter-species comparison of steroidogenesis in fetal testes"
                      className="w-full h-auto rounded"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {/* Discussion point (only for Single-cell project) */}
              {project.id === 'single-cell-steroidogenesis' && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Discussion point</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We identified 16 cell types and lineages in both human and mouse fetal testes, and 8 in rat.
                      Across all three species, we consistently observed erythrocytes, immune cells, germ cells,
                      mesonephros-derived mesenchymal cells, pre‑Sertoli and Sertoli cells, interstitial cells,
                      coelomic epithelium of the gonad, and pre‑Leydig and fetal Leydig cells. Several additional
                      populations were found in human and/or mouse but not rat (e.g., non‑gonadal coelomic epithelium,
                      neuroendocrine cells, genital ducts, adrenal cortex precursors, perivascular and endothelial cells,
                      somatic progenitors, peritubular cells, undifferentiated supporting cells, rete testis cells).
                    </p>

                    <p>
                      Differences in detected populations likely arise from sampling design and developmental stage coverage.
                      Human data included 17 testes and mouse 10, but rat only 2 samples, resulting in substantially fewer cells
                      captured for rat. In addition, the age ranges differed: human (5–12 PCW), mouse (E10.5–E16.5), rat (E14.5, E16.5),
                      with rat missing the earliest stages. Younger human and mouse samples also included mesonephros, which can explain
                      the presence of some lineages absent in rat. Despite these constraints, the key steroidogenic cell types (Sertoli
                      and Leydig) were recovered in all species.
                    </p>

                    <p>
                      Expression profiles support conservation of the classical androgen biosynthesis pathway across species.
                      Importantly, our data indicate that the final step of steroidogenesis occurs in fetal Sertoli cells not only
                      in mouse but also in human and rat, an observation, to our knowledge, not previously reported for these two species.
                    </p>
                  </div>
                </div>
              )}

              {/* Impact */}
              {project.impact && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Impact & Significance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              )}

              {/* Repository Info */}
              {project.repository && (
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Repository Information</h3>
                  <p className="text-gray-300 mb-2"><strong>Platform:</strong> {project.repository.platform}</p>
                  <p className="text-gray-300 mb-2"><strong>Status:</strong> {project.repository.status}</p>
                  {project.repository.url && (
                    <a 
                      href={project.repository.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300"
                    >
                      View Repository →
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;