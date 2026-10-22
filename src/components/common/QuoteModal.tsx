import React, { useState } from 'react';
import { X, Send, MessageSquare, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { SERVICES } from '../../data/services';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || 'steel-construction',
    location: 'Awka, Anambra State',
    projectScope: '',
    estimatedBudget: 'Competitive / Flexible',
    preferredTimeline: 'Within 1-2 months',
    preferredContact: 'WhatsApp'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and valid phone number.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  const selectedServiceObj = SERVICES.find(s => s.id === formData.service || s.slug === formData.service);
  const serviceTitle = selectedServiceObj ? selectedServiceObj.title : 'Steel Construction';

  const generateWhatsAppMessage = () => {
    const text = `Hello Clavel Steel Konstruction Co. Ltd.
*New Project Quote Request:*
• *Client:* ${formData.fullName}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email || 'N/A'}
• *Service:* ${serviceTitle}
• *Project Location:* ${formData.location}
• *Scope/Description:* ${formData.projectScope || 'Requesting quotation and technical review.'}
• *Estimated Budget:* ${formData.estimatedBudget}
• *Target Timeline:* ${formData.preferredTimeline}
• *Preferred Contact:* ${formData.preferredContact}

Please let me know how we can proceed with a structural quote.`;

    const primaryNumber = COMPANY_INFO.phones[0].raw.replace('+', '');
    return `https://wa.me/${primaryNumber}?text=${encodeURIComponent(text)}`;
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`Project Quote Request: ${formData.fullName} - ${serviceTitle}`);
    const body = encodeURIComponent(`Full Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Service Required: ${serviceTitle}
Project Location: ${formData.location}
Scope Description: ${formData.projectScope}
Estimated Budget: ${formData.estimatedBudget}
Timeline: ${formData.preferredTimeline}
Preferred Contact: ${formData.preferredContact}`);
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'steel-construction',
      location: 'Awka, Anambra State',
      projectScope: '',
      estimatedBudget: 'Competitive / Flexible',
      preferredTimeline: 'Within 1-2 months',
      preferredContact: 'WhatsApp'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#000C00] border border-[#2DA447]/50 shadow-2xl rounded-sm max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-[#032C16] border-b border-white/10">
          <div>
            <span className="text-[10px] uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
              Direct Engineering Consultation
            </span>
            <h2 id="quote-modal-title" className="text-xl md:text-2xl font-heading font-bold text-white uppercase">
              Request a Project Quote
            </h2>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-[#228940]/20 border-2 border-[#228940] rounded-full flex items-center justify-center mx-auto text-[#2DA447]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase">
                  Quote Details Prepared!
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry for <strong className="text-[#D5DD27]">{serviceTitle}</strong> in <strong className="text-white">{formData.location}</strong> is ready for direct review by our engineering team.
                </p>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#228940] hover:bg-[#2DA447] text-white font-tech font-bold uppercase tracking-wider text-sm transition-colors flex items-center justify-center gap-2 rounded-sm shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send Instant WhatsApp Message
                </a>
                <a
                  href={generateMailto()}
                  className="w-full sm:w-auto px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-tech font-semibold uppercase tracking-wider text-sm transition-colors flex items-center justify-center gap-2 rounded-sm border border-white/20"
                >
                  <Send className="w-4 h-4 text-[#D5DD27]" />
                  Send via Email
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400">
                <p>You can also reach our Awka technical desk directly at:</p>
                <div className="flex justify-center gap-4 mt-2 font-mono text-sm text-[#D5DD27]">
                  <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:underline">
                    {COMPANY_INFO.phones[0].number}
                  </a>
                  <span>•</span>
                  <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hover:underline">
                    {COMPANY_INFO.phones[1].number}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs text-gray-400 hover:text-white underline cursor-pointer"
                >
                  Close & Return to Website
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
                    placeholder="e.g. Engr. Emeka Okafor"
                    className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] focus:ring-1 focus:ring-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none transition-colors"
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
                    placeholder="e.g. 0803 123 4567"
                    className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] focus:ring-1 focus:ring-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none transition-colors"
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
                    className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] focus:ring-1 focus:ring-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                    Service Required <span className="text-[#D5DD27]">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] focus:ring-1 focus:ring-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none transition-colors"
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
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Awka, Onitsha, Nnewi, Anambra"
                    className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] focus:ring-1 focus:ring-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                    Preferred Timeline
                  </label>
                  <select
                    value={formData.preferredTimeline}
                    onChange={(e) => setFormData({ ...formData, preferredTimeline: e.target.value })}
                    className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] focus:ring-1 focus:ring-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none transition-colors"
                  >
                    <option value="Urgent (Immediate mobilization)">Urgent (Immediate mobilization)</option>
                    <option value="Within 1-2 months">Within 1-2 months</option>
                    <option value="Planning & Tender stage (3+ months)">Planning & Tender stage (3+ months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                  Project Scope & Dimensional Details
                </label>
                <textarea
                  rows={3}
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  placeholder="Outline structure dimensions (e.g., 30m x 20m warehouse, 4-pump canopy, 10,000L tank, staircase railing length), specific site requirements, or questions..."
                  className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] focus:ring-1 focus:ring-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none transition-colors"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                    Preferred Follow-Up Method
                  </label>
                  <div className="flex gap-4 text-xs text-gray-300">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="WhatsApp"
                        checked={formData.preferredContact === 'WhatsApp'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="text-[#228940]"
                      />
                      WhatsApp
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="Phone Call"
                        checked={formData.preferredContact === 'Phone Call'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="text-[#228940]"
                      />
                      Phone Call
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="Email"
                        checked={formData.preferredContact === 'Email'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="text-[#228940]"
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
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                    className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-xs px-2.5 py-1.5 rounded-sm outline-none"
                  >
                    <option value="Competitive / Flexible">Competitive / Flexible</option>
                    <option value="Under ₦5,000,000">Under ₦5,000,000</option>
                    <option value="₦5,000,000 - ₦25,000,000">₦5,000,000 - ₦25,000,000</option>
                    <option value="₦25,000,000 - ₦100,000,000+">₦25,000,000 - ₦100,000,000+</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-gray-400">
                By submitting, your details will be processed solely to prepare a technical consultation and cost estimate. No unsolicited promotional spam.
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2.5 text-xs font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#D5DD27] hover:bg-[#e0e932] text-black font-tech font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer flex items-center gap-2 rounded-sm shadow-md"
                >
                  Submit Quote Request
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
