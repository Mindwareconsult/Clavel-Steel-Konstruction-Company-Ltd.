import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Phone, 
  MessageSquare,
  Building2
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/common/SEO';

interface ProjectDetailPageProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export default function ProjectDetailPage({ onOpenQuoteModal }: ProjectDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();

  const project = PROJECTS.find(p => p.slug === slug || p.id === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const primaryPhone = COMPANY_INFO.phones[0];
  const relatedProjects = PROJECTS.filter(p => p.id !== project.id && p.category === project.category).slice(0, 3);

  const breadcrumbs = [
    { name: 'Projects', path: '/projects' },
    { name: project.title, path: `/projects/${project.slug}` }
  ];

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title={project.title}
        description={project.summary}
        canonicalPath={`/projects/${project.slug}`}
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="relative bg-[#000C00] py-16 md:py-24 border-b border-[#2DA447]/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-industrial opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link>
              <span>/</span>
              <span className="text-white">{project.title}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
                Category: {project.category}
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-tech text-gray-300 uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#2DA447]" /> {project.location}
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-tech text-gray-300 uppercase tracking-wider">
                Sector: {project.clientType}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 8 Cols: Images, Scope, Specs */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Primary Image Showcase */}
              <div className="rounded-sm overflow-hidden border-2 border-[#2DA447]/60 shadow-2xl bg-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover max-h-[550px]"
                />
                <div className="p-4 bg-[#000C00] border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Authentic Clavel Project Artwork & Structural Execution</span>
                  <span className="text-[#D5DD27] font-tech uppercase">{project.category} Division</span>
                </div>
              </div>

              {/* Scope of Work */}
              <div className="p-6 bg-[#000C00] border border-white/10 rounded-sm space-y-4">
                <h2 className="font-heading text-2xl uppercase font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2DA447]" /> Detailed Scope of Fabrication & Erection
                </h2>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                  {project.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 bg-white/5 rounded">
                      <span className="w-2 h-2 rounded-full bg-[#D5DD27] flex-shrink-0 mt-1.5"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Specifications */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl uppercase font-bold text-white">
                  Technical Specifications Table
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(project.specifications).map(([key, val], idx) => (
                    <div key={idx} className="p-4 bg-[#000C00] border-l-2 border-[#D5DD27] rounded-r">
                      <span className="text-xs font-tech text-[#D5DD27] uppercase block font-semibold">
                        {key}
                      </span>
                      <span className="text-sm text-white font-medium mt-1 block">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 4 Cols: Sidebar & Actions */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quote CTA */}
              <div className="p-6 bg-[#000C00] border-2 border-[#2DA447] rounded-sm space-y-4 shadow-xl">
                <span className="text-[10px] uppercase font-tech text-[#D5DD27] font-semibold tracking-wider block">
                  Project Inquiry
                </span>
                <h3 className="font-heading text-2xl uppercase font-bold text-white">
                  Planning a Similar Project?
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Request an itemized engineering quote based on the specifications of this project.
                </p>
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full py-3 bg-[#D5DD27] hover:bg-[#e0e932] text-black font-tech font-bold uppercase tracking-wider text-xs transition-colors shadow cursor-pointer text-center"
                >
                  Request a Project Quote
                </button>
                <a
                  href={`tel:${primaryPhone.raw}`}
                  className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-tech font-semibold uppercase tracking-wider text-xs transition-colors rounded-sm flex items-center justify-center gap-2 border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2DA447]" /> Call: {primaryPhone.number}
                </a>
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="p-6 bg-[#000C00] border border-white/10 rounded-sm space-y-3">
                  <h4 className="font-heading text-lg uppercase font-bold text-white border-l-2 border-[#2DA447] pl-2">
                    Related {project.category} Work
                  </h4>
                  <div className="space-y-3">
                    {relatedProjects.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/projects/${rel.slug}`}
                        className="block p-3 rounded bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-[10px] font-tech text-[#D5DD27] uppercase block">{rel.location}</span>
                        <span className="text-xs font-bold text-white group-hover:text-[#D5DD27] line-clamp-1 block mt-0.5">
                          {rel.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quality & Safety Seal */}
              <div className="p-4 bg-[#000C00] border border-white/10 rounded-sm text-center">
                <ShieldCheck className="w-10 h-10 text-[#2DA447] mx-auto mb-2" />
                <p className="text-xs font-semibold text-white uppercase font-tech">
                  SMAW & GTAW Fabrication Quality
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  All welds inspected for structural compliance and environmental durability.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
