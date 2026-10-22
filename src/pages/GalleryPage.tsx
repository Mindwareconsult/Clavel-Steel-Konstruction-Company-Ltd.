import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Tag, 
  Layers, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/common/SEO';
import { GalleryItem } from '../types';

interface GalleryPageProps {
  onOpenQuoteModal: () => void;
}

export default function GalleryPage({ onOpenQuoteModal }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Structural', 'Canopies', 'Industrial', 'Security', 'Roofing', 'Welding & Workshop'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const activeItem: GalleryItem | null = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  const breadcrumbs = [
    { name: 'Gallery', path: '/gallery' }
  ];

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title="Visual Gallery & Field Photography | Steel & Welding In Action"
        description="High-resolution visual showcase of steel construction, structural roof trusses, forecourt canopies, ornamental gates, and practical welding training in Awka."
        canonicalPath="/gallery"
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
              <span>Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold uppercase text-white leading-tight">
              Visual Gallery: <br />
              <span className="text-[#2DA447]">Steel Fabrication</span> & Field Work
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              Explore authentic photography documenting our steel assemblies, forecourt canopies, architectural railings, tanks, and practical welding academy training in Awka, Anambra State.
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
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveImageIndex(null);
                }}
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
            {filteredItems.length} Gallery Photographs
          </span>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative bg-[#000C00] border border-white/10 hover:border-[#2DA447] rounded-sm overflow-hidden cursor-pointer transition-all duration-300 shadow-xl"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 border border-[#2DA447] text-[10px] font-tech text-[#D5DD27] uppercase font-bold">
                    {item.category}
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-[#D5DD27]" />
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <h3 className="font-heading text-lg font-bold uppercase text-white group-hover:text-[#D5DD27] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-300 line-clamp-1 mt-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && activeImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 cursor-pointer"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#228940] text-white border border-white/20 transition-colors z-50 cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#228940] text-white border border-white/20 transition-colors z-50 cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-[#000C00] border border-[#2DA447]/50 rounded-sm overflow-hidden shadow-2xl">
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] max-h-[60vh] overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-full max-w-full object-contain p-2"
              />
            </div>

            {/* Lightbox Details Bar */}
            <div className="p-5 bg-[#032C16] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-tech uppercase px-2 py-0.5 bg-black/60 border border-[#D5DD27] text-[#D5DD27] font-bold">
                    {activeItem.category}
                  </span>
                  <span className="text-xs text-gray-400 font-tech">
                    Image {activeImageIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h4 className="font-heading text-xl uppercase font-bold text-white">
                  {activeItem.title}
                </h4>
                <p className="text-xs text-gray-300 max-w-xl">
                  {activeItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveImageIndex(null);
                    onOpenQuoteModal();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#D5DD27] text-black font-tech font-bold uppercase tracking-wider text-xs hover:bg-[#e0e932] transition-colors rounded-sm cursor-pointer whitespace-nowrap"
                >
                  Request Similar Work
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Bottom Strip */}
      <section className="py-16 bg-[#000C00] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white">
            See Work That Fits Your Project Requirements?
          </h2>
          <p className="text-sm text-gray-300">
            Contact our Awka fabrication facility to schedule a structural briefing or on-site engineering survey.
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
