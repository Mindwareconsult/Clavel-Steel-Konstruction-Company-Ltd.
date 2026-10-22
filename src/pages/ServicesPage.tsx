import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Warehouse, 
  Fuel, 
  Home, 
  Layers, 
  ShieldCheck, 
  Wrench, 
  Truck, 
  Boxes, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Phone
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/common/SEO';

interface ServicesPageProps {
  onOpenQuoteModal: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'steel-construction': <Building2 className="w-6 h-6 text-[#2DA447]" />,
  'industrial-structures': <Warehouse className="w-6 h-6 text-[#2DA447]" />,
  'filling-station-canopies': <Fuel className="w-6 h-6 text-[#D5DD27]" />,
  'roofing-metalwork': <Home className="w-6 h-6 text-[#2DA447]" />,
  'tanks-storage': <Layers className="w-6 h-6 text-[#D5DD27]" />,
  'security-steelwork': <ShieldCheck className="w-6 h-6 text-[#2DA447]" />,
  'welding-fabrication': <Wrench className="w-6 h-6 text-[#D5DD27]" />,
  'transportation-steelwork': <Truck className="w-6 h-6 text-[#2DA447]" />,
  'steel-materials': <Boxes className="w-6 h-6 text-[#2DA447]" />
};

export default function ServicesPage({ onOpenQuoteModal }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Structural', 'Industrial', 'Commercial', 'Specialized', 'Materials & Training'];

  const filteredServices = selectedCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  const breadcrumbs = [
    { name: 'Services', path: '/services' }
  ];

  const primaryPhone = COMPANY_INFO.phones[0];

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title="Steel Construction & Metal Fabrication Services | Awka, Anambra"
        description="Explore Clavel Steel's full spectrum of 9 engineering services: structural steel, clear-span warehouses, fuel station canopies, storage tanks, and materials supply in Anambra State."
        canonicalPath="/services"
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
              <span>Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold uppercase text-white leading-tight">
              Specialized Engineering & <br />
              <span className="text-[#2DA447]">Steel Fabrication</span> Services
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              We deliver engineered steel solutions tailored to commercial, industrial, residential, and agricultural needs across Awka and Anambra State. Explore our nine specialized service divisions below.
            </p>
          </div>
        </div>
      </section>

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
            Showing {filteredServices.length} Services
          </span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#000C00] border border-white/10 hover:border-[#2DA447] rounded-sm p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded bg-[#032C16] border border-[#2DA447]/40 group-hover:border-[#D5DD27] transition-colors">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="text-[10px] font-tech uppercase tracking-wider px-2.5 py-1 bg-white/5 text-[#D5DD27] border border-white/10">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl uppercase font-bold text-white group-hover:text-[#D5DD27] transition-colors leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-gray-400">
                    <span className="text-[10px] uppercase font-tech text-gray-400 block font-semibold">
                      Key Capabilities:
                    </span>
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2DA447] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-tech text-[#D5DD27] hover:underline font-bold uppercase flex items-center gap-1"
                  >
                    Dedicated Service Page <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={onOpenQuoteModal}
                    className="text-xs font-tech text-gray-400 hover:text-white uppercase cursor-pointer"
                  >
                    Quick Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Dependencies & Engineering Advisory */}
      <section className="py-16 bg-[#000C00] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-[#032C16] border border-white/10 rounded-sm">
            <span className="text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold block mb-2">
              Scope of Works & Compliance Notice
            </span>
            <h3 className="font-heading text-2xl uppercase font-bold text-white">
              Transparent Engineering Standards & Project Prerequisites
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed max-w-3xl">
              At Clavel Steel Konstruction Company Ltd, we emphasize precision and structural integrity. Engineering calculations, certified structural stamps, statutory planning permits, soil bearing capacity reports, and customized foundation anchor designs are coordinated per project agreement. We verify all shop drawings and cut-lists with your consulting engineers prior to fabrication.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#032C16] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white">
            Need a Custom Steel Fabrication Solution?
          </h2>
          <p className="text-sm text-gray-300">
            Send us your architectural plans or site specifications for an accurate, professional bill of quantities.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 bg-[#D5DD27] text-black font-tech font-bold uppercase tracking-wider text-sm hover:bg-[#e0e932] transition-colors cursor-pointer shadow-lg"
            >
              Request a Project Quote
            </button>
            <a
              href={`tel:${primaryPhone.raw}`}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-tech font-semibold uppercase tracking-wider text-sm transition-colors border border-white/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#2DA447]" /> Speak With an Engineer
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
