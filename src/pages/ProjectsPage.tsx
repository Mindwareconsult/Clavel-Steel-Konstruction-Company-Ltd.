import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  Layers, 
  ShieldCheck, 
  Phone
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/common/SEO';
import TrustMetricsBanner from '../components/common/TrustMetricsBanner';

interface ProjectsPageProps {
  onOpenQuoteModal: () => void;
}

export default function ProjectsPage({ onOpenQuoteModal }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Structural', 'Canopies', 'Industrial', 'Roofing', 'Tanks', 'Security', 'Fabrication'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const breadcrumbs = [
    { name: 'Projects', path: '/projects' }
  ];

  const primaryPhone = COMPANY_INFO.phones[0];

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title="Project Portfolio | Verified Steel Construction & Fabrication"
        description="Explore verified steel construction and fabrication projects delivered by Clavel Steel in Awka and Anambra State: roof trusses, fuel canopies, staircases, and tanks."
        canonicalPath="/projects"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Header */}
      <section className="relative bg-[#000C00] py-16 md:py-24 border-b border-[#2DA447]/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-industrial opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              <span>/</span>
              <span>Projects</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold uppercase text-white leading-tight">
              Our Work: <br />
              <span className="text-[#2DA447]">Verified Steel</span> Project Portfolio
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              Every photograph and project showcase represents actual fabrication, structural steelwork, roofing assemblies, canopies, and tanks delivered across Awka and Anambra State.
            </p>
          </div>
        </div>
      </section>

      {/* Key Performance Metrics Summary */}
      <TrustMetricsBanner 
        title="Key Performance Metrics & Track Record"
        subtitle="Tangible milestones backing our structural fabrication, active site installations, and engineering leadership in Anambra State."
      />

      {/* Category Filter Bar */}
      <section className="bg-[#000C00] border-b border-white/10 sticky top-[73px] z-20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-tech uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-[#228940] text-white font-bold' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-tech text-gray-400 hidden sm:block">
            {filteredProjects.length} Verified Entries
          </span>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-[#000C00] border border-white/10 hover:border-[#2DA447] rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-black">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 border border-[#2DA447] text-[10px] font-tech text-[#D5DD27] uppercase font-bold">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 text-[10px] font-tech text-gray-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#2DA447]" /> {project.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-tech text-gray-400 uppercase tracking-wider block">
                      Client Sector: {project.clientType}
                    </span>
                    <h3 className="font-heading text-2xl uppercase font-bold text-white group-hover:text-[#D5DD27] transition-colors mt-1.5 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2.5 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Scope Preview */}
                    <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-[11px] text-gray-400">
                      {project.scope.slice(0, 2).map((s, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2DA447]"></span>
                          <span className="line-clamp-1">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-xs font-tech text-[#D5DD27] hover:underline font-bold uppercase flex items-center gap-1"
                    >
                      Project Specifications <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={onOpenQuoteModal}
                      className="text-[11px] font-tech text-gray-400 hover:text-white uppercase cursor-pointer"
                    >
                      Similar Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy & Integrity Notice */}
      <section className="py-12 bg-[#000C00] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-[#032C16] border border-white/10 rounded-sm text-xs text-gray-400 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#2DA447] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-tech uppercase text-xs mb-1">
                Portfolio Documentation Standards
              </strong>
              <p className="leading-relaxed">
                In strict accordance with professional engineering ethics, Clavel Steel Konstruction Company Ltd displays genuine imagery derived from company operations. We do not invent fictional client identities, unverified contract sums, or fabricated case study results. Specific structural calculation sheets are accessible during contractual tender consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#032C16] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white">
            Have a Similar Steel Construction Project?
          </h2>
          <p className="text-sm text-gray-300">
            Submit your site drawings or layout dimensions to receive a tailored structural estimate from our Awka engineering office.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 bg-[#D5DD27] text-black font-tech font-bold uppercase tracking-wider text-sm hover:bg-[#e0e932] transition-colors cursor-pointer shadow-lg"
            >
              Request a Project Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
