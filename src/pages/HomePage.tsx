import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Warehouse, 
  Fuel, 
  Layers, 
  ShieldCheck, 
  Wrench, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  HardHat, 
  Award, 
  Phone, 
  ChevronRight,
  Flame,
  Scale,
  Compass,
  Boxes,
  HelpCircle,
  Clock,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import SEO from '../components/common/SEO';
import TrustMetricsBanner from '../components/common/TrustMetricsBanner';

interface HomePageProps {
  onOpenQuoteModal: () => void;
}

export default function HomePage({ onOpenQuoteModal }: HomePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const primaryPhone = COMPANY_INFO.phones[0];

  const homepageFaqs = [
    {
      q: 'What types of steel construction projects does Clavel undertake in Anambra State?',
      a: 'We specialize in industrial warehouse construction, commercial filling station canopies, clear-span portal frames, residential and commercial tubular roof trusses, overhead water tank stanchions, underground petroleum tanks, security gates, and heavy trailer chassis reinforcement.'
    },
    {
      q: 'Do you operate strictly in Awka or across other parts of Anambra and southeastern Nigeria?',
      a: 'Our central fabrication workshop and corporate base are located in Awka, Anambra State. We mobilize project teams, materials, and on-site welding crews across Awka, Onitsha, Nnewi, and neighboring commercial zones throughout southeastern Nigeria.'
    },
    {
      q: 'What welding processes are utilized in your fabrication workshop?',
      a: 'We deploy Shielded Metal Arc Welding (SMAW/MMA) for heavy structural columns, portal frames, and field erection, as well as Gas Tungsten Arc Welding (GTAW/TIG) for high-precision root passes, stainless steel balustrades, and leak-tested fuel storage vessels.'
    },
    {
      q: 'How does your project quotation process work?',
      a: 'You can submit your structural drawings, architectural plans, or project dimensions via our online quote request or WhatsApp desk. Our technical team reviews the steel tonnage, cut-lists, and site requirements to generate a transparent, detailed cost estimate.'
    },
    {
      q: 'Can we purchase raw steel and aluminium materials directly from Clavel?',
      a: 'Yes. In addition to our fabrication division, we supply universal beams, structural hollow sections, angle iron, steel plate, and aluminium profiles with cut-to-length services for builders and independent contractors.'
    }
  ];

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title="Clavel Steel Konstruction Company Ltd | Steel Excellence in Awka, Anambra"
        description="Specialist steel construction, structural fabrication, industrial warehouses, commercial filling station canopies, storage tanks, and professional welding training in Awka, Nigeria."
        canonicalPath="/"
      />

      {/* =========================================================================
          HERO SECTION (High Priority Cinematic Industrial Centerpiece)
          ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#000C00] overflow-hidden border-b border-[#2DA447]/30">
        {/* Background Image with Layered Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/projects/CS79.jpg" 
            alt="Clavel Steel High-Span Structural Roof Truss Installation" 
            className="w-full h-full object-cover object-center opacity-35 scale-105 filter contrast-125 brightness-95"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000C00] via-[#032C16]/90 to-[#000C00]/80"></div>
          <div className="absolute inset-0 bg-grid-industrial opacity-60"></div>
        </div>

        {/* Ambient Welding Spark Accents */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2DA447]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#D5DD27]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline & Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#2DA447]/60 text-xs text-gray-200">
                <span className="w-2 h-2 rounded-full bg-[#D5DD27] animate-ping"></span>
                <span className="font-tech uppercase tracking-wider font-semibold text-gray-200">
                  Steel Construction & Fabrication | Awka, Anambra State
                </span>
              </div>

              {/* Primary Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading font-bold uppercase tracking-tight text-white leading-none">
                Creating Your <span className="text-[#2DA447]">Structure.</span><br />
                Delivering <span className="text-[#D5DD27] underline decoration-[#228940]/60 decoration-4">Steel Excellence.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed max-w-2xl">
                Specialist steel construction, structural fabrication, industrial warehouses, commercial forecourt canopies, heavy storage tanks, and precision metalwork engineered for residential, commercial, and industrial facilities.
              </p>

              {/* Key Bullet Capability Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-tech text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D5DD27] flex-shrink-0" />
                  <span>Structural Portal Frames</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D5DD27] flex-shrink-0" />
                  <span>Filling Station Canopies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D5DD27] flex-shrink-0" />
                  <span>SMAW & GTAW/TIG Certified</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-8 py-4 bg-[#D5DD27] hover:bg-[#e0e932] text-black font-tech font-bold uppercase tracking-wider text-base transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request a Project Quote
                  <ArrowRight className="w-5 h-5" />
                </button>

                <Link
                  to="/services"
                  className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-tech font-semibold uppercase tracking-wider text-base transition-colors border border-white/20 flex items-center justify-center gap-2"
                >
                  Explore Our Services
                  <ArrowUpRight className="w-4 h-4 text-[#2DA447]" />
                </Link>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-gray-400">
                <div>
                  <span className="text-white font-bold font-tech text-lg block">AWKA BASED</span>
                  <span>Anambra Operational Base</span>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div>
                  <span className="text-[#D5DD27] font-bold font-tech text-lg block">0803 672 9660</span>
                  <span>Direct Engineering Desk</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card (CSK Emblem & Structural Showcase) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-[#000C00] border-2 border-[#2DA447]/60 p-6 rounded-sm shadow-2xl corner-bracket">
                
                {/* Brand Badge */}
                <div className="flex items-center gap-4 mb-5 pb-4 border-b border-white/10">
                  <img 
                    src="/assets/aistudio/LOGO_62a2f7fc.jpg" 
                    alt="Clavel Steel Emblem" 
                    className="w-16 h-16 rounded-full border border-[#D5DD27] object-cover shadow-lg bg-black"
                  />
                  <div>
                    <span className="text-xs font-tech text-[#D5DD27] uppercase tracking-wider block font-semibold">
                      Engineering Guarantee
                    </span>
                    <h3 className="font-heading text-xl uppercase font-bold text-white">
                      Built in Steel. Built to Last.
                    </h3>
                  </div>
                </div>

                {/* Quick Capability List */}
                <div className="space-y-3 text-xs text-gray-300">
                  <div className="flex items-start gap-3 p-2.5 rounded bg-[#032C16]/70 border border-white/5">
                    <Building2 className="w-5 h-5 text-[#2DA447] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white uppercase font-tech">Industrial Warehouse Construction</h4>
                      <p className="text-gray-400 text-[11px]">Clear-span portal steel frame buildings for factories and logistics.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded bg-[#032C16]/70 border border-white/5">
                    <Fuel className="w-5 h-5 text-[#D5DD27] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white uppercase font-tech">Filling-Station Canopies</h4>
                      <p className="text-gray-400 text-[11px]">Heavy structural forecourt canopies, fascia framing, and guttering.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded bg-[#032C16]/70 border border-white/5">
                    <Layers className="w-5 h-5 text-[#2DA447] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white uppercase font-tech">Tanks & Elevated Stanchions</h4>
                      <p className="text-gray-400 text-[11px]">Underground petroleum storage tanks and heavy water tower stanchions.</p>
                    </div>
                  </div>
                </div>

                {/* CTA In Card */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">
                    Prompt On-Site Technical Surveys
                  </span>
                  <a
                    href={`tel:${primaryPhone.raw}`}
                    className="text-xs font-tech text-[#D5DD27] font-bold uppercase hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUST & CAPABILITY STRIP
          ========================================================================= */}
      <section className="bg-[#000C00] border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-[#032C16] border border-[#2DA447]/40 text-[#2DA447]">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-white uppercase leading-tight">Steel Specialization</p>
                <p className="text-xs text-gray-400">Dedicated structural fabrication</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-[#032C16] border border-[#D5DD27]/40 text-[#D5DD27]">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-white uppercase leading-tight">SMAW & GTAW/TIG</p>
                <p className="text-xs text-gray-400">Precision industrial welding</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-[#032C16] border border-[#2DA447]/40 text-[#2DA447]">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-white uppercase leading-tight">Materials Supply</p>
                <p className="text-xs text-gray-400">Direct steel & aluminium sales</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-[#032C16] border border-[#D5DD27]/40 text-[#D5DD27]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-white uppercase leading-tight">Welding Academy</p>
                <p className="text-xs text-gray-400">Practical workforce training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY PERFORMANCE METRICS & TRUST MILESTONES
          ========================================================================= */}
      <TrustMetricsBanner 
        title="Key Performance Metrics & Engineering Milestones"
        subtitle="Tangible structural capacity, active site installations, and dependable steel fabrication across Anambra State and southeastern Nigeria."
      />

      {/* =========================================================================
          SECTION 3: COMPANY INTRODUCTION (Positioning & Values)
          ========================================================================= */}
      <section className="py-20 bg-[#032C16] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
                <span>Who We Are</span>
                <span className="w-8 h-px bg-[#D5DD27]"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white leading-tight">
                Engineering Strength. <br />
                <span className="text-[#2DA447]">Creating Structures</span> That Last.
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {COMPANY_INFO.aboutSummary}
              </p>

              <p className="text-sm text-gray-300 leading-relaxed">
                Rather than operating as a general masonry contractor or an informal roadside welding stall, Clavel Steel Konstruction is positioned as a specialized engineering solutions provider. We combine workshop-controlled pre-fabrication with precision field erection to ensure that every bolt, flange, rafter, and weld seam complies with structural safety requirements.
              </p>

              {/* Core Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#000C00] border-l-2 border-[#2DA447] rounded-r">
                  <h4 className="font-heading text-base font-bold text-white uppercase">Quality & Workmanship</h4>
                  <p className="text-xs text-gray-400 mt-1">Durable steel grades, full penetration welds, and anti-corrosive multi-coat protective finishes.</p>
                </div>
                <div className="p-4 bg-[#000C00] border-l-2 border-[#D5DD27] rounded-r">
                  <h4 className="font-heading text-base font-bold text-white uppercase">Safety & Dependability</h4>
                  <p className="text-xs text-gray-400 mt-1">Zero-harm protocol, compliant wind load design, and verified foundation anchor cages.</p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-[#228940] hover:bg-[#2DA447] text-white font-tech font-bold uppercase tracking-wider text-sm transition-colors rounded-sm inline-flex items-center gap-2"
                >
                  Learn About Our Company
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-tech text-[#D5DD27] hover:underline uppercase font-bold"
                >
                  Visit Our Awka Workshop &rarr;
                </Link>
              </div>
            </div>

            {/* Right Visual Image & Project Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-sm overflow-hidden border-2 border-[#2DA447]/60 shadow-2xl group">
                <img 
                  src="/assets/projects/double-warehouse-aba.jpg" 
                  alt="Twin-Bay Industrial Steel Portal Frame Erection in Aba by Clavel Steel" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 border border-[#2DA447] text-[10px] font-tech text-[#D5DD27] uppercase font-bold tracking-wider">
                  Verified On-Site Construction
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/85 to-transparent p-6 text-white">
                  <span className="text-[10px] font-tech uppercase tracking-widest text-[#D5DD27]">
                    Double-Bay Industrial Warehouse Portal Frame • Aba
                  </span>
                  <p className="text-sm font-semibold mt-1">
                    Heavy structural universal columns, rafters, and cold-rolled purlin installation.
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    "We are your trusted partner in STEEL EXCELLENCE" — Awka, Anambra State.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FEATURED SERVICES (Cards grid with clean white & dark contrast)
          ========================================================================= */}
      <section className="py-20 bg-[#000C00] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white mt-1">
                Engineering Capabilities & Services
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-sm font-tech text-[#2DA447] hover:text-[#D5DD27] font-bold uppercase flex items-center gap-1.5"
            >
              Browse All 9 Specialist Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                className="bg-[#032C16] border border-white/10 hover:border-[#2DA447] transition-all duration-300 rounded-sm p-6 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-tech uppercase tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 text-[#D5DD27] rounded-sm font-semibold">
                      {service.category}
                    </span>
                    <div className="w-8 h-8 rounded bg-[#000C00] border border-[#2DA447]/30 flex items-center justify-center text-[#2DA447] group-hover:text-[#D5DD27] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold uppercase text-white group-hover:text-[#D5DD27] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gray-300 mt-2.5 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-[11px] text-gray-400 border-t border-white/10 pt-3">
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2DA447]"></span>
                        <span className="line-clamp-1">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-tech text-[#2DA447] group-hover:text-white font-bold uppercase flex items-center gap-1"
                  >
                    View Service Details &rarr;
                  </Link>
                  <button
                    onClick={onOpenQuoteModal}
                    className="text-[11px] text-gray-400 hover:text-[#D5DD27] underline cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FEATURED PROJECTS & VERIFIED WORK
          ========================================================================= */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                Our Work
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white mt-1">
                Featured Steel & Fabrication Projects
              </h2>
              <p className="text-sm text-gray-300 mt-2 max-w-xl">
                Verified work delivered across Awka and Anambra State covering structural trusses, canopies, staircases, and protective steelwork.
              </p>
            </div>
            <Link
              to="/projects"
              className="mt-4 md:mt-0 text-sm font-tech text-[#D5DD27] hover:underline font-bold uppercase flex items-center gap-1.5"
            >
              Explore Complete Project Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.slice(0, 4).map((proj) => (
              <div 
                key={proj.id}
                className="bg-[#000C00] border border-white/10 hover:border-[#2DA447] rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-black">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 border border-[#2DA447] text-[10px] font-tech text-[#D5DD27] uppercase font-semibold">
                    {proj.category}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-tech text-gray-400 block uppercase">
                      {proj.location}
                    </span>
                    <h3 className="font-heading text-lg font-bold uppercase text-white group-hover:text-[#D5DD27] transition-colors mt-1 line-clamp-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-3">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-tech">
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="text-[#2DA447] hover:text-white font-bold uppercase flex items-center gap-1"
                    >
                      Specifications <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-gray-300 font-medium">{proj.clientType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHY CHOOSE CLAVEL (Safety & Quality Pillars)
          ========================================================================= */}
      <section className="py-20 bg-[#000C00] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
              Safety & Standards
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white mt-1">
              Safety Isn't Just a Policy. It's Our Promise.
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              Every steel assembly, welding joint, and canopy stanchion is fabricated with unwavering focus on structural stability, zero-harm job sites, and verified engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#032C16] border border-white/10 text-center rounded-sm">
              <div className="w-12 h-12 rounded-full bg-[#D5DD27]/10 border border-[#D5DD27] flex items-center justify-center mx-auto text-[#D5DD27] mb-4">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl uppercase font-bold text-white">Zero Harm Goal</h3>
              <p className="text-xs text-gray-300 mt-2">
                Mandatory personal protective equipment (PPE), secure scaffolding, and strict hot-work permit controls on every job site.
              </p>
            </div>

            <div className="p-6 bg-[#032C16] border border-white/10 text-center rounded-sm">
              <div className="w-12 h-12 rounded-full bg-[#2DA447]/10 border border-[#2DA447] flex items-center justify-center mx-auto text-[#2DA447] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl uppercase font-bold text-white">Weld Integrity</h3>
              <p className="text-xs text-gray-300 mt-2">
                Visual and dye-penetrant weld inspection to eliminate undercut, porosity, and incomplete penetration.
              </p>
            </div>

            <div className="p-6 bg-[#032C16] border border-white/10 text-center rounded-sm">
              <div className="w-12 h-12 rounded-full bg-[#D5DD27]/10 border border-[#D5DD27] flex items-center justify-center mx-auto text-[#D5DD27] mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl uppercase font-bold text-white">Trained Crews</h3>
              <p className="text-xs text-gray-300 mt-2">
                In-house practical training in SMAW and GTAW/TIG, ensuring our welders execute according to technical specifications.
              </p>
            </div>

            <div className="p-6 bg-[#032C16] border border-white/10 text-center rounded-sm">
              <div className="w-12 h-12 rounded-full bg-[#2DA447]/10 border border-[#2DA447] flex items-center justify-center mx-auto text-[#2DA447] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl uppercase font-bold text-white">Quality Assured</h3>
              <p className="text-xs text-gray-300 mt-2">
                Verified steel plate gauges, certified structural bolts, and heavy anti-corrosion barrier coatings.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INDUSTRIES & CLIENTS SERVED
          ========================================================================= */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
              Client Sectors
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white mt-1">
              Who We Serve Across Anambra
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              From commercial developers and petroleum marketers to homeowners and civil engineering contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#000C00] border-t-2 border-[#2DA447]">
              <span className="text-xs font-tech text-[#D5DD27] uppercase font-semibold">Sector 01</span>
              <h3 className="font-heading text-2xl uppercase font-bold text-white mt-1">Commercial & Industrial</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Warehouse operators, logistics hubs, petroleum filling stations, LPG autogas refilling bays, and manufacturing plants requiring heavy structural steelwork.
              </p>
            </div>

            <div className="p-6 bg-[#000C00] border-t-2 border-[#D5DD27]">
              <span className="text-xs font-tech text-[#D5DD27] uppercase font-semibold">Sector 02</span>
              <h3 className="font-heading text-2xl uppercase font-bold text-white mt-1">Building & Civil Contractors</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Architects, structural engineers, quantity surveyors, and general contractors seeking reliable steel sub-contractors and cut-to-order structural members.
              </p>
            </div>

            <div className="p-6 bg-[#000C00] border-t-2 border-[#808482]">
              <span className="text-xs font-tech text-[#D5DD27] uppercase font-semibold">Sector 03</span>
              <h3 className="font-heading text-2xl uppercase font-bold text-white mt-1">Residential & Institutional</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Property owners, churches, cathedrals, schools, and civic organizations needing long-span roof trusses, automated security gates, and staircase balustrades.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: WELDING TRAINING & MATERIALS SUPPLY SPLIT CALLOUT
          ========================================================================= */}
      <section className="py-20 bg-[#000C00] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Box 1: Welding Training Academy */}
            <div className="p-8 bg-[#032C16] border border-[#2DA447]/50 rounded-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                  Technical Workforce Academy
                </span>
                <h3 className="text-3xl font-heading font-bold uppercase text-white mt-1">
                  Professional Welding Training (SMAW & GTAW/TIG)
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                  Develop hands-on technical skills in Manual Metal Arc and precision Tungsten Inert Gas welding at our Awka training workshop. Covers blueprint interpretation, joint preparation, metallurgy, and industrial safety.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs font-tech">
                  <span className="px-2.5 py-1 bg-black/60 border border-white/10 text-gray-200">SMAW / Stick Arc</span>
                  <span className="px-2.5 py-1 bg-black/60 border border-white/10 text-gray-200">GTAW / TIG Root Passes</span>
                  <span className="px-2.5 py-1 bg-black/60 border border-white/10 text-gray-200">Workshop Safety PPE</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  to="/welding-training"
                  className="px-5 py-2.5 bg-[#228940] hover:bg-[#2DA447] text-white font-tech font-bold uppercase tracking-wider text-xs transition-colors rounded-sm inline-flex items-center gap-1.5"
                >
                  Explore Training Program <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-gray-400">Intakes Ongoing</span>
              </div>
            </div>

            {/* Box 2: Steel & Aluminium Materials Supply */}
            <div className="p-8 bg-[#032C16] border border-[#808482]/50 rounded-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                  Direct Material Sourcing
                </span>
                <h3 className="text-3xl font-heading font-bold uppercase text-white mt-1">
                  Steel & Aluminium Materials Supply
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                  Source verified-gauge structural steel beams (UB/UC), hollow sections, angles, plates, and aluminium profiles directly from our distribution stock in Awka. Complete with workshop cut-to-length service.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs font-tech">
                  <span className="px-2.5 py-1 bg-black/60 border border-white/10 text-gray-200">Universal Beams (UB)</span>
                  <span className="px-2.5 py-1 bg-black/60 border border-white/10 text-gray-200">Hollow Sections (SHS/RHS)</span>
                  <span className="px-2.5 py-1 bg-black/60 border border-white/10 text-gray-200">Checker & Mild Plate</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  to="/services/steel-aluminium-materials-supply"
                  className="px-5 py-2.5 bg-[#D5DD27] hover:bg-[#e0e932] text-black font-tech font-bold uppercase tracking-wider text-xs transition-colors rounded-sm inline-flex items-center gap-1.5"
                >
                  View Material Grades <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={onOpenQuoteModal}
                  className="text-[11px] text-gray-300 hover:text-white underline cursor-pointer"
                >
                  Request Price List
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
              Common Enquiries
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Clear answers regarding structural steel fabrication, project mobilization, and consultations in Awka, Anambra State.
            </p>
          </div>

          <div className="space-y-3">
            {homepageFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#000C00] border border-white/10 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-white hover:text-[#D5DD27] transition-colors cursor-pointer"
                >
                  <span className="font-heading text-lg sm:text-xl uppercase font-bold tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#2DA447] transition-transform duration-200 flex-shrink-0 ${openFaq === idx ? 'rotate-180 text-[#D5DD27]' : ''}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: PROMINENT QUOTATION & CONTACT SECTION
          ========================================================================= */}
      <section className="py-20 bg-[#000C00] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#032C16] via-[#054423] to-[#000C00] border-2 border-[#2DA447]/40 p-8 sm:p-12 rounded-sm shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                  Direct Project Consultation
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white leading-tight">
                  Have a Steel Construction or Fabrication Project in Mind?
                </h2>
                <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
                  Contact our Awka engineering team today. We provide upfront technical reviews, steel tonnage estimations, and reliable execution timelines for projects across Anambra State.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-gray-300 font-tech">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#2DA447]" />
                    Nwude Eugene, Awka, Anambra State
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-[#D5DD27]" />
                    {primaryPhone.number}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#2DA447]" />
                    Mon - Sat: 08:00 – 17:30
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-4 bg-[#D5DD27] hover:bg-[#e0e932] text-black font-tech font-bold uppercase tracking-wider text-base transition-colors shadow-lg cursor-pointer text-center"
                >
                  Request a Project Quote
                </button>
                <a
                  href={`tel:${primaryPhone.raw}`}
                  className="w-full py-3.5 bg-[#228940] hover:bg-[#2DA447] text-white font-tech font-bold uppercase tracking-wider text-sm transition-colors text-center flex items-center justify-center gap-2 rounded-sm"
                >
                  <Phone className="w-4 h-4" /> Call Direct: {primaryPhone.number}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
