import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { SERVICES } from '../../data/services';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const primaryPhone = COMPANY_INFO.phones[0];

  return (
    <footer className="bg-[#000C00] text-gray-300 border-t border-[#2DA447]/30 relative overflow-hidden">
      {/* Pre-footer Callout Banner */}
      <div className="bg-gradient-to-r from-[#032C16] via-[#054423] to-[#032C16] border-b border-white/10 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs uppercase tracking-widest font-tech text-[#D5DD27] font-semibold">
              Ready to Build in Steel?
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mt-1">
              Have a Project in Mind? Let's Talk Engineering & Fabrication.
            </h3>
            <p className="text-sm text-gray-300 mt-1 max-w-xl">
              From structural warehouses to forecourt canopies and storage tanks in Awka & Anambra State, our team is ready to review your project specifications.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 bg-[#D5DD27] text-black font-tech font-bold uppercase tracking-wider text-sm hover:bg-[#e0e932] transition-colors shadow-lg cursor-pointer"
            >
              Request a Project Quote
            </button>
            <a
              href={`https://wa.me/${primaryPhone.raw.replace('+', '')}?text=${encodeURIComponent(
                'Hello Clavel Steel Konstruction Company Ltd. I would like to enquire about your steel construction and fabrication services in Anambra State.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#228940] hover:bg-[#2DA447] text-white font-tech font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Company Profile & Emblem */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/aistudio/LOGO_62a2f7fc.jpg" 
                alt="Clavel Steel Konstruction Logo" 
                className="w-14 h-14 rounded-full border-2 border-[#2DA447] object-cover bg-black"
                loading="lazy"
              />
              <div>
                <span className="font-heading text-2xl font-bold uppercase text-white tracking-wider block">
                  CLAVEL <span className="text-[#2DA447]">STEEL</span>
                </span>
                <span className="text-xs text-[#D5DD27] font-tech font-semibold tracking-wider block">
                  Konstruction Company Ltd
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Specialist steel construction, structural fabrication, industrial warehouses, commercial canopies, storage solutions, and professional welding training headquartered in Awka, Anambra State, Nigeria.
            </p>

            <div className="pt-2">
              <p className="text-xs font-tech text-gray-400 italic">
                "{COMPANY_INFO.brandTagline}" — {COMPANY_INFO.brandPromise}
              </p>
            </div>

            {/* Social Channels */}
            <div className="pt-3">
              <span className="text-xs uppercase font-tech tracking-wider text-gray-400 block mb-2">
                Connect With Our Team
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={COMPANY_INFO.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-white/5 hover:bg-[#228940] text-gray-300 hover:text-white transition-colors"
                  aria-label="Clavel Steel on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-white/5 hover:bg-[#228940] text-gray-300 hover:text-white transition-colors"
                  aria-label="Clavel Steel on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-white/5 hover:bg-[#228940] text-gray-300 hover:text-white transition-colors"
                  aria-label="Clavel Steel on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Key Services */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white border-l-2 border-[#2DA447] pl-2.5">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-[#D5DD27] transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#2DA447]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-xs text-[#2DA447] hover:underline font-semibold flex items-center gap-1 pt-1"
                >
                  View All 9 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white border-l-2 border-[#D5DD27] pl-2.5">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services Overview</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Project Portfolio</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Image Gallery</Link>
              </li>
              <li>
                <Link to="/welding-training" className="hover:text-white transition-colors">Welding Training (SMAW/GTAW)</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Technical Blog & Insights</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Location</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Notice</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop Hours */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white border-l-2 border-[#808482] pl-2.5">
              Awka Office & Workshop
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2DA447] flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.street}, Awka, {COMPANY_INFO.address.state}, 420110, Nigeria
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#2DA447] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href={`tel:${primaryPhone.raw}`} className="block font-semibold text-white hover:text-[#D5DD27]">
                    {primaryPhone.number} (Main)
                  </a>
                  <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="block text-gray-400 hover:text-white">
                    {COMPANY_INFO.phones[1].number}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phones[2].raw}`} className="block text-gray-400 hover:text-white">
                    {COMPANY_INFO.phones[2].number}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#2DA447] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-white break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#D5DD27] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-300 font-medium">Standard Hours:</span>
                  <p className="text-gray-400 text-[11px]">Mon–Sat: 08:00 – 17:30</p>
                  <p className="text-gray-400 text-[11px]">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verification & Compliance Note */}
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-gray-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-left">
            <ShieldCheck className="w-4 h-4 text-[#2DA447] flex-shrink-0" />
            <p className="line-clamp-2">
              Verified business location in Awka, Anambra State. Structural calculations, fabrication drawings, and on-site certifications provided per individual contract scope.
            </p>
          </div>
          <div className="text-center md:text-right flex-shrink-0">
            <p>&copy; {currentYear} {COMPANY_INFO.name}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
