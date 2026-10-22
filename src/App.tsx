import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import QuoteModal from './components/common/QuoteModal';
import WhatsAppWidget from './components/common/WhatsAppWidget';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import GalleryPage from './pages/GalleryPage';
import WeldingTrainingPage from './pages/WeldingTrainingPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

// Scroll to top automatically when navigating between pages
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#032C16] text-[#20201E] selection:bg-[#228940] selection:text-white font-sans">
        <ScrollToTop />
        
        {/* Persistent Global Header */}
        <Header onOpenQuoteModal={() => handleOpenQuote()} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuoteModal={() => handleOpenQuote()} />} />
            <Route path="/about" element={<AboutPage onOpenQuoteModal={() => handleOpenQuote()} />} />
            <Route path="/services" element={<ServicesPage onOpenQuoteModal={() => handleOpenQuote()} />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenQuoteModal={handleOpenQuote} />} />
            <Route path="/projects" element={<ProjectsPage onOpenQuoteModal={() => handleOpenQuote()} />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage onOpenQuoteModal={handleOpenQuote} />} />
            <Route path="/gallery" element={<GalleryPage onOpenQuoteModal={() => handleOpenQuote()} />} />
            <Route path="/welding-training" element={<WeldingTrainingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage onOpenQuoteModal={() => handleOpenQuote()} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage onOpenQuoteModal={() => handleOpenQuote()} />} />
          </Routes>
        </main>

        {/* Persistent Global Footer */}
        <Footer onOpenQuoteModal={() => handleOpenQuote()} />

        {/* Global Floating Interactive Features */}
        <WhatsAppWidget />
        <QuoteModal 
          isOpen={isQuoteOpen} 
          onClose={handleCloseQuote}
          preselectedService={preselectedService}
        />
      </div>
    </BrowserRouter>
  );
}
