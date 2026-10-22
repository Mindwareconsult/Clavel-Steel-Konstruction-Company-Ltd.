import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Building2, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  ArrowUpRight, 
  Phone, 
  MessageSquare, 
  ChevronDown, 
  AlertCircle,
  FileText,
  Boxes
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/common/SEO';

interface ServiceDetailPageProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export default function ServiceDetailPage({ onOpenQuoteModal }: ServiceDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = SERVICES.find(s => s.slug === slug || s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = SERVICES.filter(s => service.relatedServiceIds.includes(s.id));
  const primaryPhone = COMPANY_INFO.phones[0];

  const breadcrumbs = [
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/services/${service.slug}` }
  ];

  // Specific Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': service.title,
    'name': service.title,
    'description': service.fullDescription,
    'provider': {
      '@type': 'HomeAndConstructionBusiness',
      'name': COMPANY_INFO.name,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': COMPANY_INFO.address.city,
        'addressRegion': COMPANY_INFO.address.state,
        'addressCountry': 'NG'
      }
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Anambra State'
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Clavel Steel Konstruction Company Ltd. I am enquiring about your "${service.title}" services in Anambra State. Please let me know how we can discuss project requirements.`
  );

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title={service.title}
        description={service.shortDescription}
        canonicalPath={`/services/${service.slug}`}
        schema={serviceSchema}
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
              <Link to="/services" className="text-gray-400 hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </div>

            <div className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
              Category: {service.category}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal(service.id)}
                className="px-6 py-3 bg-[#D5DD27] text-black font-tech font-bold uppercase tracking-wider text-sm hover:bg-[#e0e932] transition-colors cursor-pointer shadow-lg"
              >
                Request a Quote for this Service
              </button>
              <a
                href={`https://wa.me/${primaryPhone.raw.replace('+', '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#228940] hover:bg-[#2DA447] text-white font-tech font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Direct Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 8 Cols: Detailed Description, Capabilities, Applications, Specs */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Overview & Scope */}
              <div className="space-y-4">
                <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                  Service Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase text-white">
                  Technical Scope & Engineered Delivery
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Capabilities Breakdown */}
              <div className="p-6 bg-[#000C00] border border-white/10 rounded-sm space-y-4">
                <h3 className="font-heading text-xl uppercase font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2DA447]" /> Key Engineering Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300">
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded bg-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D5DD27] flex-shrink-0 mt-2"></span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              {service.technicalSpecs && service.technicalSpecs.length > 0 && (
                <div className="space-y-4">
                  <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                    Specification Parameters
                  </span>
                  <h3 className="text-xl font-heading font-bold uppercase text-white">
                    Standard Materials & Fabrication Standards
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.technicalSpecs.map((spec, idx) => (
                      <div key={idx} className="p-4 bg-[#000C00] border-l-2 border-[#2DA447] rounded-r">
                        <span className="text-[11px] font-tech text-[#D5DD27] uppercase block font-semibold">
                          {spec.label}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-200 font-medium mt-1 block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Typical Applications */}
              <div className="space-y-4">
                <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                  Target Deployments
                </span>
                <h3 className="text-xl font-heading font-bold uppercase text-white">
                  Typical Project Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300">
                  {service.typicalApplications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-[#000C00] border border-white/5 rounded">
                      <Boxes className="w-4 h-4 text-[#2DA447] flex-shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope Considerations & Disclaimers */}
              <div className="p-5 bg-black/60 border border-white/10 rounded-sm text-xs text-gray-400 space-y-2">
                <div className="flex items-center gap-2 text-[#D5DD27] font-tech uppercase font-bold text-xs">
                  <AlertCircle className="w-4 h-4" />
                  <span>Important Project Scope Dependencies</span>
                </div>
                {service.considerations.map((con, idx) => (
                  <p key={idx} className="leading-relaxed">
                    • {con}
                  </p>
                ))}
              </div>

              {/* Service FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h3 className="font-heading text-2xl uppercase font-bold text-white">
                    Frequently Asked Questions About This Service
                  </h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-[#000C00] border border-white/10 rounded-sm">
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full text-left p-4 flex items-center justify-between gap-4 text-white hover:text-[#D5DD27] text-sm font-semibold transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 text-[#2DA447] transition-transform ${openFaq === idx ? 'rotate-180 text-[#D5DD27]' : ''}`} />
                        </button>
                        {openFaq === idx && (
                          <div className="p-4 pt-0 text-xs text-gray-300 leading-relaxed border-t border-white/5">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 Cols: Sticky Service Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quote CTA Widget */}
              <div className="p-6 bg-[#000C00] border-2 border-[#2DA447] rounded-sm space-y-4 shadow-xl">
                <span className="text-[10px] uppercase font-tech text-[#D5DD27] font-semibold tracking-wider block">
                  Get Started
                </span>
                <h4 className="font-heading text-xl uppercase font-bold text-white">
                  Need a Quote for {service.title}?
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Provide your dimensions or drawings for an itemized structural quote from our Awka engineering desk.
                </p>
                <button
                  onClick={() => onOpenQuoteModal(service.id)}
                  className="w-full py-3 bg-[#D5DD27] hover:bg-[#e0e932] text-black font-tech font-bold uppercase tracking-wider text-xs transition-colors shadow cursor-pointer text-center"
                >
                  Request a Project Quote
                </button>
                <div className="pt-2 border-t border-white/10 text-center">
                  <span className="text-[11px] text-gray-400">Direct Awka Line:</span>
                  <a href={`tel:${primaryPhone.raw}`} className="block text-xs font-mono font-bold text-[#2DA447] hover:underline mt-0.5">
                    {primaryPhone.number}
                  </a>
                </div>
              </div>

              {/* Related Services Links */}
              {relatedServices.length > 0 && (
                <div className="p-6 bg-[#000C00] border border-white/10 rounded-sm space-y-3">
                  <h4 className="font-heading text-lg uppercase font-bold text-white border-l-2 border-[#2DA447] pl-2">
                    Related Capabilities
                  </h4>
                  <div className="space-y-2">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/services/${rel.slug}`}
                        className="p-2.5 rounded bg-white/5 hover:bg-white/10 flex items-center justify-between text-xs text-gray-300 hover:text-white transition-colors group"
                      >
                        <span className="line-clamp-1">{rel.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#2DA447] group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Material Flyer Preview */}
              <div className="p-4 bg-[#000C00] border border-white/10 rounded-sm">
                <span className="text-[10px] uppercase font-tech text-gray-400 block mb-2">
                  CSK Quality Assurance
                </span>
                <img 
                  src="/assets/aistudio/LOGO_62a2f7fc.jpg" 
                  alt="Clavel Quality Seal" 
                  className="w-20 h-20 mx-auto rounded-full border border-[#D5DD27] object-cover bg-black mb-2"
                />
                <p className="text-center text-xs font-semibold text-white">
                  "Your Trusted Partner in Steel Excellence"
                </p>
                <p className="text-center text-[11px] text-gray-400 mt-1">
                  SMAW & GTAW/TIG Certified Fabrication
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
