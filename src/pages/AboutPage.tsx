import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Eye, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Wrench, 
  AlertCircle,
  HardHat,
  ShieldCheck,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/common/SEO';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export default function AboutPage({ onOpenQuoteModal }: AboutPageProps) {
  const primaryPhone = COMPANY_INFO.phones[0];

  const breadcrumbs = [
    { name: 'About Us', path: '/about' }
  ];

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title="About Us | Specialist Steel Construction & Metal Fabrication"
        description="Learn about Clavel Steel Konstruction Company Ltd, an Awka-based engineering solutions provider specializing in structural steel, warehouses, canopies, tanks, and certified welding in Anambra State."
        canonicalPath="/about"
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
              <span>About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold uppercase text-white leading-tight">
              Engineering Strength. <br />
              <span className="text-[#2DA447]">Your Trusted Partner</span> in Steel Excellence.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              Clavel Steel Konstruction Company Ltd is an Awka-based steel construction and fabrication company delivering durable, professionally engineered structural, industrial, and architectural steel solutions across Anambra State, Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Overview & Positioning */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
                Our Corporate Identity
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white leading-tight">
                Beyond Conventional Fabrication: A Specialist Steel Contractor
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                Clavel Steel Konstruction Company Ltd specializes in the design, fabrication, construction, installation, and supply of steel-based solutions for residential, commercial, industrial, and infrastructure applications.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed">
                Our published service material demonstrates robust capabilities covering general steel construction, industrial structures, warehouses, filling-station canopies, underground tanks, overhead and storage tanks, stanchions, trailer/tank-related fabrication, steel and aluminium roofing, burglary-proof systems, rails, and gates, as well as professional technical welding training.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed">
                By combining direct steel and aluminium materials supply with advanced fabrication capabilities (SMAW/MMA and GTAW/TIG), we streamline the entire procurement and erection lifecycle, providing clients with verified material thicknesses, tight structural tolerances, and dependable handover schedules.
              </p>

              {/* Verified Facts Table */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs uppercase font-tech text-[#D5DD27] font-semibold mb-3">
                  Verified Company Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#000C00] border border-white/10 rounded">
                    <span className="text-gray-400 block font-tech">Corporate Entity:</span>
                    <span className="text-white font-semibold">{COMPANY_INFO.name}</span>
                  </div>
                  <div className="p-3 bg-[#000C00] border border-white/10 rounded">
                    <span className="text-gray-400 block font-tech">Operational Base:</span>
                    <span className="text-white font-semibold">Awka, Anambra State, Nigeria</span>
                  </div>
                  <div className="p-3 bg-[#000C00] border border-white/10 rounded">
                    <span className="text-gray-400 block font-tech">Primary Contact Person:</span>
                    <span className="text-white font-semibold">{COMPANY_INFO.primaryContactPerson}</span>
                  </div>
                  <div className="p-3 bg-[#000C00] border border-white/10 rounded">
                    <span className="text-gray-400 block font-tech">Public Contact:</span>
                    <span className="text-white font-semibold">{primaryPhone.number}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-sm overflow-hidden border-2 border-[#2DA447]/60 shadow-2xl">
                <img 
                  src="/assets/aistudio/LOGO_62a2f7fc.jpg" 
                  alt="Clavel Steel Insignia Emblem" 
                  className="w-full h-auto object-cover bg-black p-8"
                />
                <div className="p-5 bg-[#000C00] border-t border-white/10 text-center">
                  <span className="font-heading text-xl uppercase font-bold text-white block">
                    "{COMPANY_INFO.brandTagline}"
                  </span>
                  <span className="text-xs font-tech text-[#D5DD27]">
                    {COMPANY_INFO.brandPromise}
                  </span>
                </div>
              </div>

              {/* Operational Advisory */}
              <div className="p-4 bg-black/60 border border-white/10 rounded text-xs text-gray-400 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#D5DD27] flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Transparency Note:</strong> Clavel Steel positions verified facts distinctly from recommended corporate positioning. Site consultations, foundation engineering approvals, and contract drawings are established per individual project scope in Anambra State.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Statements */}
      <section className="py-20 bg-[#000C00] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="p-8 bg-[#032C16] border-t-4 border-[#2DA447] rounded-sm space-y-4">
              <div className="w-12 h-12 rounded bg-[#000C00] border border-[#2DA447] flex items-center justify-center text-[#2DA447]">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-tech uppercase text-[#D5DD27] font-semibold tracking-wider">
                Our Strategic Purpose
              </span>
              <h3 className="text-2xl font-heading font-bold uppercase text-white">
                Mission Statement
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                To deliver reliable, durable, and professionally fabricated steel solutions that meet the structural, industrial, commercial, and security needs of our clients, while promoting technical excellence, quality workmanship, and practical innovation in steel construction across Nigeria.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-[#032C16] border-t-4 border-[#D5DD27] rounded-sm space-y-4">
              <div className="w-12 h-12 rounded bg-[#000C00] border border-[#D5DD27] flex items-center justify-center text-[#D5DD27]">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-tech uppercase text-[#D5DD27] font-semibold tracking-wider">
                Future Trajectory
              </span>
              <h3 className="text-2xl font-heading font-bold uppercase text-white">
                Vision Statement
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                To become a trusted and respected steel construction and fabrication company recognized for technical excellence, dependable workmanship, innovative steel solutions, and professional service across Nigeria.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white mt-1">
              Our Core Company Values
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              The ethical and technical standards that govern every weld, cutting order, and structural project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div key={idx} className="p-6 bg-[#000C00] border border-white/10 hover:border-[#2DA447] transition-colors rounded-sm">
                <div className="w-8 h-8 rounded bg-[#032C16] border border-[#D5DD27]/40 flex items-center justify-center text-[#D5DD27] mb-3 text-xs font-tech font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-heading text-xl uppercase font-bold text-white">{val.title}</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technical Capabilities Matrix */}
      <section className="py-20 bg-[#000C00] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
              Workmanship & Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white mt-1">
              Practical Engineering Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
            <div className="p-6 bg-[#032C16] border border-white/10 space-y-3">
              <Building2 className="w-6 h-6 text-[#2DA447]" />
              <h3 className="font-heading text-lg font-bold uppercase text-white">Workshop Pre-Fabrication</h3>
              <p>Cutting, beveling, punching, and sub-assembly welding conducted in controlled workshop jigs to guarantee accuracy before site transport.</p>
            </div>

            <div className="p-6 bg-[#032C16] border border-white/10 space-y-3">
              <Wrench className="w-6 h-6 text-[#D5DD27]" />
              <h3 className="font-heading text-lg font-bold uppercase text-white">Advanced Welding Disciplines</h3>
              <p>Dual proficiency in high-deposition SMAW (Stick) for heavy structural beams and surgical GTAW (TIG) for stainless steels and leak-tested vessels.</p>
            </div>

            <div className="p-6 bg-[#032C16] border border-white/10 space-y-3">
              <Layers className="w-6 h-6 text-[#2DA447]" />
              <h3 className="font-heading text-lg font-bold uppercase text-white">Integrated Material Sourcing</h3>
              <p>Direct supply of verified steel and aluminium stock, eliminating third-party gauge substitutions and keeping structural projects on budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR TEAM / THE PEOPLE BEHIND OUR WORK
          ========================================================================= */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
              Leadership & Field Operations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white mt-1">
              The People Behind Our Work
            </h2>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Behind every structural portal frame, high-span roof truss, and pressure-tight tank is a dedicated team of fabrication specialists, structural supervisors, and certified welders committed to safety and precision in Awka.
            </p>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Managing Director / Founder */}
            <div className="bg-[#000C00] border-2 border-[#2DA447]/60 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl group hover:border-[#D5DD27] transition-all duration-300">
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-black">
                  <img 
                    src="/assets/team/CSCEO.jpg" 
                    alt="Nwude Eugene, Managing Director of Clavel Steel Konstruction" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 border border-[#2DA447] text-[10px] font-tech text-[#D5DD27] uppercase font-bold tracking-wider">
                    Executive Leadership
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-heading text-2xl font-bold uppercase text-white group-hover:text-[#D5DD27] transition-colors">
                      Nwude Eugene
                    </h3>
                    <p className="text-xs font-tech text-[#2DA447] uppercase font-semibold mt-0.5">
                      Managing Director & Founder
                    </p>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    Provides overall strategic leadership, technical project oversight, and engineering governance across Clavel Steel Konstruction's structural steel, warehouse, canopy, and metal fabrication projects.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="border-t border-white/10 pt-4 space-y-1.5 text-[11px] text-gray-400 font-tech">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D5DD27] flex-shrink-0" />
                    <span>Strategic Project Delivery & Oversight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D5DD27] flex-shrink-0" />
                    <span>Client Consultations & Engineering Specs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Site Supervision Engineer */}
            <div className="bg-[#000C00] border border-white/15 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl group hover:border-[#2DA447] transition-all duration-300">
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-black">
                  <img 
                    src="/assets/team/CS81.jpg" 
                    alt="Clavel Steel Site Supervision & Structural Erection Engineer" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 border border-[#2DA447] text-[10px] font-tech text-[#D5DD27] uppercase font-bold tracking-wider">
                    Site Supervision
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-heading text-2xl font-bold uppercase text-white group-hover:text-[#D5DD27] transition-colors">
                      Site Supervision Engineer
                    </h3>
                    <p className="text-xs font-tech text-[#2DA447] uppercase font-semibold mt-0.5">
                      Structural Erection & Quality Assurance
                    </p>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    Oversees crane rigging, rafter placement, column verticality, and weld integrity directly on active construction sites, ensuring strict alignment with architectural and structural blueprints.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="border-t border-white/10 pt-4 space-y-1.5 text-[11px] text-gray-400 font-tech">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D5DD27] flex-shrink-0" />
                    <span>High-Elevation Truss Inspection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D5DD27] flex-shrink-0" />
                    <span>Crane Lift & Rigging Coordination</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Certified Field Erection Crew */}
            <div className="bg-[#000C00] border border-white/15 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl group hover:border-[#2DA447] transition-all duration-300">
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-black">
                  <img 
                    src="/assets/team/CS69.jpg" 
                    alt="Clavel Steel Certified Field Erection and Welding Crew" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 border border-[#2DA447] text-[10px] font-tech text-[#D5DD27] uppercase font-bold tracking-wider">
                    Technical Operations
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-heading text-2xl font-bold uppercase text-white group-hover:text-[#D5DD27] transition-colors">
                      Field Erection & Welding Crew
                    </h3>
                    <p className="text-xs font-tech text-[#2DA447] uppercase font-semibold mt-0.5">
                      SMAW / GTAW Certified Technicians
                    </p>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    Trained structural welders and riggers deploying certified SMAW and GTAW processes with full personal protective equipment (PPE), ensuring solid joints and dependable steel assemblies.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="border-t border-white/10 pt-4 space-y-1.5 text-[11px] text-gray-400 font-tech">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D5DD27] flex-shrink-0" />
                    <span>Rigorous Personal Protective Equipment (PPE)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D5DD27] flex-shrink-0" />
                    <span>Certified Structural Welding Procedures</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Collective Safety & Experience Banner */}
          <div className="mt-12 p-6 bg-[#000C00] border border-white/10 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#032C16] border border-[#2DA447]/40 text-[#2DA447] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm uppercase font-bold text-white">Zero-Accident Safety Commitment</h4>
                  <p className="text-gray-400 mt-1">Daily safety toolbox talks, mandatory safety harnesses on elevated steelwork, and rigid adherence to Nigerian construction safety guidelines.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#032C16] border border-[#D5DD27]/40 text-[#D5DD27] flex-shrink-0">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm uppercase font-bold text-white">Hands-On Technical Leadership</h4>
                  <p className="text-gray-400 mt-1">Our leadership actively inspects on-site fits, joint welding penetration, and portal frame alignment rather than managing from afar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#032C16] border border-[#2DA447]/40 text-[#2DA447] flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm uppercase font-bold text-white">Local Awka Base & Rapid Deployment</h4>
                  <p className="text-gray-400 mt-1">Strategically positioned in Awka, enabling fast mobilization of equipment, materials, and skilled manpower across Anambra State.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-[#032C16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white">
            Discuss Your Upcoming Project with Our Technical Team
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Whether you require a structural warehouse quotation or need to consult on an architectural metalwork brief in Awka, we are here to assist.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 bg-[#D5DD27] text-black font-tech font-bold uppercase tracking-wider text-sm hover:bg-[#e0e932] transition-colors cursor-pointer shadow-lg"
            >
              Request a Project Quote
            </button>
            <Link
              to="/contact"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-tech font-semibold uppercase tracking-wider text-sm transition-colors border border-white/20"
            >
              Contact Our Awka Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
