import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';
import SEO from '../components/common/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'steel-construction',
    projectLocation: 'Awka, Anambra State',
    budgetRange: 'Competitive / Flexible',
    timeline: 'Within 1-2 months',
    description: '',
    preferredMethod: 'WhatsApp',
    privacyConsent: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const primaryPhone = COMPANY_INFO.phones[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your full name and a valid contact phone number.');
      return;
    }
    if (!formData.privacyConsent) {
      setErrorMsg('Please acknowledge the privacy note to proceed.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  const selectedServiceObj = SERVICES.find(s => s.id === formData.service);
  const serviceTitle = selectedServiceObj ? selectedServiceObj.title : 'General Steel Fabrication';

  const generateWhatsAppUrl = () => {
    const text = `Hello Clavel Steel Konstruction Co. Ltd.
*New Project Consultation Request:*
• *Client Name:* ${formData.fullName}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email || 'N/A'}
• *Service Required:* ${serviceTitle}
• *Site Location:* ${formData.projectLocation}
• *Budget Range:* ${formData.budgetRange}
• *Target Timeline:* ${formData.timeline}
• *Project Details:* ${formData.description || 'Requesting engineering consultation and site estimate.'}
• *Preferred Contact Method:* ${formData.preferredMethod}`;

    const num = primaryPhone.raw.replace('+', '');
    return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Engineering Enquiry: ${formData.fullName} - ${serviceTitle}`);
    const body = encodeURIComponent(`Full Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${serviceTitle}
Location: ${formData.projectLocation}
Budget: ${formData.budgetRange}
Timeline: ${formData.timeline}
Project Scope: ${formData.description}
Preferred Contact: ${formData.preferredMethod}`);
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const breadcrumbs = [
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title="Contact Us & Request a Quote | Awka, Anambra State"
        description="Contact Clavel Steel Konstruction Company Ltd in Awka, Anambra State. Reach our technical desk directly via phone (0803 672 9660), WhatsApp, or submit your project drawings."
        canonicalPath="/contact"
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
              <span>Contact Us</span>
            </div>

            <div className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
              Direct Engineering Consultation
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold uppercase text-white leading-tight">
              Have a Project in Mind? <br />
              <span className="text-[#2DA447]">Let's Talk Steel.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              Share your project details with our Awka engineering desk. We review structural specifications, cut-lists, and site requirements to provide clear, dependable quotations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 Cols: Verified Contacts & Hours */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-3">
                <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                  Operational Headquarters
                </span>
                <h2 className="font-heading text-3xl uppercase font-bold text-white">
                  Awka Workshop & Office
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our central fabrication facilities and technical management team operate directly out of Awka, serving clients across Anambra State and neighboring regions.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                <div className="p-4 bg-[#000C00] border-l-2 border-[#2DA447] rounded-r flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2DA447] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-tech uppercase text-xs">Physical Address:</strong>
                    <span>{COMPANY_INFO.address.street}, Awka, {COMPANY_INFO.address.state}, 420110, Nigeria</span>
                  </div>
                </div>

                <div className="p-4 bg-[#000C00] border-l-2 border-[#D5DD27] rounded-r flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D5DD27] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-tech uppercase text-xs">Telephone Contacts:</strong>
                    <div className="space-y-1 mt-1">
                      <a href={`tel:${primaryPhone.raw}`} className="block text-white font-bold hover:underline">
                        {primaryPhone.number} (Primary & WhatsApp)
                      </a>
                      <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="block text-gray-400 hover:text-white">
                        {COMPANY_INFO.phones[1].number} (Operations)
                      </a>
                      <a href={`tel:${COMPANY_INFO.phones[2].raw}`} className="block text-gray-400 hover:text-white">
                        {COMPANY_INFO.phones[2].number} (Technical Sales)
                      </a>
                      <a href={`tel:${COMPANY_INFO.phones[3].raw}`} className="block text-gray-400 hover:text-white">
                        {COMPANY_INFO.phones[3].number} (Project Support)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#000C00] border-l-2 border-[#2DA447] rounded-r flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#2DA447] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-tech uppercase text-xs">Official Email:</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:underline break-all mt-0.5 block">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Directory Operating Hours */}
                <div className="p-4 bg-[#000C00] border-l-2 border-[#808482] rounded-r flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#808482] flex-shrink-0 mt-0.5" />
                  <div className="w-full">
                    <strong className="text-white block font-tech uppercase text-xs mb-2">
                      Public Directory Hours:
                    </strong>
                    <div className="space-y-1 text-xs text-gray-300">
                      {COMPANY_INFO.hours.map((h, idx) => (
                        <div key={idx} className="flex justify-between border-b border-white/5 pb-1">
                          <span className="text-gray-400">{h.days}:</span>
                          <span className="text-white font-mono">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Callout */}
              <div className="p-5 bg-gradient-to-br from-[#054423] to-[#000C00] border border-[#2DA447] rounded-sm text-center space-y-3">
                <span className="text-xs font-tech text-[#D5DD27] uppercase font-bold tracking-wider block">
                  Need an Immediate Response?
                </span>
                <p className="text-xs text-gray-200">
                  Connect with our on-duty fabricator in Awka on WhatsApp for urgent tenders or site visit requests.
                </p>
                <a
                  href={`https://wa.me/${primaryPhone.raw.replace('+', '')}?text=${encodeURIComponent(
                    'Hello Clavel Steel Konstruction Co. Ltd. I need immediate technical consultation regarding a steel project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#228940] hover:bg-[#2DA447] text-white font-tech font-bold uppercase tracking-wider text-xs rounded-sm transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" /> Open WhatsApp Desk
                </a>
              </div>

            </div>

            {/* Right 7 Cols: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#000C00] border-2 border-[#2DA447]/60 rounded-sm p-8 shadow-2xl relative">
                
                <div className="border-b border-white/10 pb-4 mb-6">
                  <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                    Project Consultation Form
                  </span>
                  <h3 className="text-2xl font-heading font-bold uppercase text-white mt-1">
                    Request an Engineered Steel Quotation
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    Fill out your project parameters below. You will receive an instant option to send your formatted request via WhatsApp or Email.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-10 space-y-5 animate-fadeIn">
                    <div className="w-16 h-16 bg-[#228940]/20 border-2 border-[#228940] rounded-full flex items-center justify-center mx-auto text-[#2DA447]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h4 className="text-2xl font-heading font-bold uppercase text-white">
                      Enquiry Form Processed!
                    </h4>

                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry for <strong className="text-[#D5DD27]">{serviceTitle}</strong> in <strong className="text-white">{formData.projectLocation}</strong> has been structured.
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 bg-[#228940] hover:bg-[#2DA447] text-white font-tech font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 rounded-sm shadow-lg"
                      >
                        <MessageSquare className="w-4 h-4" /> Send Instant WhatsApp Message
                      </a>
                      <a
                        href={generateMailtoUrl()}
                        className="w-full sm:w-auto px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-tech font-semibold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 rounded-sm border border-white/20"
                      >
                        <Send className="w-4 h-4 text-[#D5DD27]" /> Send via Email
                      </a>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs text-gray-400 hover:text-white underline cursor-pointer"
                      >
                        Edit or Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 bg-red-950/70 border border-red-500/50 rounded flex items-center gap-2 text-xs text-red-200">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                          Full Name <span className="text-[#D5DD27]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Arc. Kenechukwu Obi"
                          className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                          Phone / WhatsApp <span className="text-[#D5DD27]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 0803 672 9660"
                          className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. client@company.com"
                          className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                          Service Category <span className="text-[#D5DD27]">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.id} className="bg-[#000C00] text-white">
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                          Project Location in Nigeria
                        </label>
                        <input
                          type="text"
                          value={formData.projectLocation}
                          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                          placeholder="e.g. Awka, Onitsha, Nnewi, Anambra"
                          className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                          Target Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                        >
                          <option value="Urgent (Immediate mobilization)">Urgent (Immediate mobilization)</option>
                          <option value="Within 1-2 months">Within 1-2 months</option>
                          <option value="Planning / Tender Stage">Planning / Tender Stage</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                        Project Scope, Dimensions & Specific Requests
                      </label>
                      <textarea
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Detail the scope of steelwork required (e.g. warehouse span, filling station canopy dimensions, tank volume in litres, railing linear metres, or material cut-list)..."
                        className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                      <div>
                        <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                          Preferred Contact Channel
                        </label>
                        <div className="flex gap-4 text-xs text-gray-300">
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="WhatsApp"
                              checked={formData.preferredMethod === 'WhatsApp'}
                              onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                            />
                            WhatsApp
                          </label>
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="Phone Call"
                              checked={formData.preferredMethod === 'Phone Call'}
                              onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                            />
                            Phone Call
                          </label>
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="Email"
                              checked={formData.preferredMethod === 'Email'}
                              onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                            />
                            Email
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                          Estimated Budget Tier
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-xs px-2.5 py-1.5 rounded-sm outline-none"
                        >
                          <option value="Competitive / Flexible">Competitive / Flexible</option>
                          <option value="Under ₦5,000,000">Under ₦5,000,000</option>
                          <option value="₦5,000,000 - ₦25,000,000">₦5,000,000 - ₦25,000,000</option>
                          <option value="₦25,000,000 - ₦100,000,000+">₦25,000,000 - ₦100,000,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Privacy consent checkbox */}
                    <div className="pt-2 flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                        className="mt-1 rounded text-[#228940]"
                      />
                      <label htmlFor="privacyConsent" className="text-[11px] text-gray-400 leading-tight">
                        I agree to Clavel Steel Konstruction reviewing these specifications for the purpose of preparing a quotation. Read our <Link to="/privacy" className="text-[#D5DD27] hover:underline">Privacy Notice</Link>.
                      </label>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="px-8 py-3.5 bg-[#D5DD27] hover:bg-[#e0e932] text-black font-tech font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer flex items-center gap-2 rounded-sm shadow-lg"
                      >
                        Submit Consultation Request
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Awka Location & Map Strip */}
      <section className="py-16 bg-[#000C00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-[#032C16] border border-white/10 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                Regional Service Footprint
              </span>
              <h3 className="text-2xl font-heading font-bold uppercase text-white">
                Serving Awka & The Greater Anambra Industrial Corridor
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We frequently deploy fabrication teams and materials across Awka, Onitsha commercial district, Nnewi industrial clusters, and neighboring communities. Our central location enables rapid mobilization for site surveys, crane erection, and on-site welding.
              </p>
            </div>

            <div className="p-4 bg-[#000C00] border border-white/10 rounded text-center space-y-2">
              <MapPin className="w-8 h-8 text-[#2DA447] mx-auto" />
              <p className="font-heading text-lg font-bold text-white uppercase">Nwude Eugene, Awka</p>
              <p className="text-xs text-gray-400 font-mono">GPS: 6.2209° N, 7.0678° E</p>
              <a
                href="https://maps.google.com/?q=Awka+Anambra+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-tech text-[#D5DD27] hover:underline font-bold uppercase pt-1"
              >
                View on Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
