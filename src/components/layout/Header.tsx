import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowUpRight,
  Shield,
  Layers,
  Wrench,
  Building2,
  Warehouse,
  Fuel,
  Home,
  Truck,
  Boxes
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { SERVICES } from '../../data/services';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'steel-construction': <Building2 className="w-4 h-4 text-[#D5DD27]" />,
  'industrial-structures': <Warehouse className="w-4 h-4 text-[#D5DD27]" />,
  'filling-station-canopies': <Fuel className="w-4 h-4 text-[#D5DD27]" />,
  'roofing-metalwork': <Home className="w-4 h-4 text-[#D5DD27]" />,
  'tanks-storage': <Layers className="w-4 h-4 text-[#D5DD27]" />,
  'security-steelwork': <Shield className="w-4 h-4 text-[#D5DD27]" />,
  'welding-fabrication': <Wrench className="w-4 h-4 text-[#D5DD27]" />,
  'transportation-steelwork': <Truck className="w-4 h-4 text-[#D5DD27]" />,
  'steel-materials': <Boxes className="w-4 h-4 text-[#D5DD27]" />
};

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true 
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Welding Training', path: '/welding-training' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const primaryPhone = COMPANY_INFO.phones[0];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Information Bar */}
      <div className="bg-[#000C00] text-gray-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#2DA447]" />
              Nwude Eugene, Awka, Anambra State
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#2DA447]" />
              Mon - Sat: 08:00 – 17:30
            </span>
            <span className="text-[#D5DD27] font-medium hidden lg:inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D5DD27] animate-pulse"></span>
              Engineering Support & Site Visits Active
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a 
              href={`tel:${primaryPhone.raw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-[#2DA447] group-hover:rotate-12 transition-transform" />
              <span className="text-white font-semibold">{primaryPhone.number}</span>
            </a>
            <span className="text-white/20">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-white transition-colors text-gray-400"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav 
        className={`w-full transition-all duration-200 border-b ${
          isScrolled 
            ? 'bg-[#032C16]/95 backdrop-blur-md border-[#2DA447]/30 shadow-2xl py-3' 
            : 'bg-[#032C16] border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo & Brand Identity */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Clavel Steel Konstruction - Return to Homepage"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#2DA447] via-[#D5DD27] to-[#808482] shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/aistudio/LOGO_62a2f7fc.jpg" 
                alt="Clavel Steel Konstruction CSK Emblem" 
                className="w-full h-full object-cover rounded-full bg-black"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl md:text-3xl leading-none font-bold uppercase tracking-wider text-white group-hover:text-[#D5DD27] transition-colors">
                CLAVEL <span className="text-[#2DA447]">STEEL</span>
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-tech text-gray-300 font-semibold">
                Konstruction Co. Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || 
                (link.path === '/services' && location.pathname.startsWith('/services'));

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-sm ${
                        isActive 
                          ? 'text-[#D5DD27] bg-white/5 font-semibold' 
                          : 'text-gray-200 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#D5DD27]' : ''}`} />
                    </Link>

                    {/* Services Mega Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 w-[580px] -ml-20 bg-[#000C00] border border-[#2DA447]/40 shadow-2xl p-4 grid grid-cols-2 gap-2 animate-fadeIn z-50 rounded-sm">
                        <div className="col-span-2 pb-2 mb-1 border-b border-white/10 flex justify-between items-center">
                          <span className="text-xs uppercase tracking-wider font-tech text-[#D5DD27] font-semibold">
                            Core Engineering Capabilities
                          </span>
                          <Link 
                            to="/services" 
                            className="text-xs text-gray-300 hover:text-white flex items-center gap-1 hover:underline"
                          >
                            All Services <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </div>
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.slug}`}
                            className="p-2 rounded hover:bg-white/5 flex items-start gap-2.5 transition-colors group"
                          >
                            <div className="mt-0.5 p-1.5 rounded bg-[#032C16] border border-white/10 group-hover:border-[#2DA447] transition-colors">
                              {serviceIcons[s.id] || <Building2 className="w-4 h-4 text-[#2DA447]" />}
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-white group-hover:text-[#D5DD27] transition-colors leading-tight">
                                {s.title}
                              </p>
                              <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                                {s.shortDescription}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-sm ${
                    isActive 
                      ? 'text-[#D5DD27] bg-white/5 font-semibold' 
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-black bg-[#D5DD27] hover:bg-[#e0e932] transition-all transform hover:-translate-y-0.5 shadow-md active:translate-y-0 cursor-pointer font-tech"
            >
              Request a Quote
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D5DD27] rounded-sm font-tech"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-[#D5DD27] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#000C00] border-t border-[#2DA447]/30 px-4 pt-4 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-base font-medium rounded ${
                    location.pathname === link.path 
                      ? 'text-[#D5DD27] bg-white/10 font-bold' 
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <p className="text-xs uppercase tracking-wider font-tech text-[#D5DD27] px-3">
                Quick Service Directory
              </p>
              <div className="grid grid-cols-1 gap-1 text-xs text-gray-300">
                {SERVICES.slice(0, 5).map((s) => (
                  <Link 
                    key={s.id} 
                    to={`/services/${s.slug}`}
                    className="px-3 py-1.5 hover:text-white flex items-center justify-between"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#2DA447]" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-black bg-[#D5DD27] rounded-sm font-tech"
              >
                Request a Project Quote
              </button>
              <a
                href={`tel:${primaryPhone.raw}`}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#228940] hover:bg-[#2DA447] transition-colors rounded-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Direct: {primaryPhone.number}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
