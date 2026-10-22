import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/common/SEO';

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: 'Privacy Notice', path: '/privacy' }
  ];

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title="Privacy Notice & Data Use Terms"
        description="Privacy policy and data protection terms for Clavel Steel Konstruction Company Ltd website visitors and quotation inquiries."
        canonicalPath="/privacy"
        breadcrumbs={breadcrumbs}
      />

      <section className="relative bg-[#000C00] py-16 md:py-20 border-b border-[#2DA447]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
            <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            <span>/</span>
            <span>Privacy Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase text-white">
            Privacy Notice & Client Confidentiality
          </h1>
          <p className="text-xs sm:text-sm text-gray-300">
            Last Updated: October 2026 • Document Version 1.0 (Subject to formal corporate adoption)
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#032C16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
          
          <div className="p-4 bg-[#000C00] border border-white/10 rounded-sm">
            <h2 className="font-heading text-lg font-bold uppercase text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#2DA447]" /> 1. Commitment to Privacy
            </h2>
            <p className="mt-2 text-gray-400">
              Clavel Steel Konstruction Company Ltd ("Clavel Steel", "we", "our") respects the confidential nature of client construction plans, site coordinates, and project specifications. This notice explains how information submitted through our quotation forms and contact desks is handled.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading text-xl uppercase font-bold text-white border-b border-white/10 pb-2">
              2. Information We Collect
            </h3>
            <p>
              When you submit a project enquiry, quotation request, or welding training application, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>Contact details: Full Name, Telephone / WhatsApp number, Email address.</li>
              <li>Project parameters: Proposed site location in Nigeria, required steel service, dimensional specifications, target budget tier, and estimated project timelines.</li>
              <li>Technical communication logs: Inquiries submitted via WhatsApp click-to-chat or direct electronic mail.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading text-xl uppercase font-bold text-white border-b border-white/10 pb-2">
              3. Purpose of Processing
            </h3>
            <p>
              Your project information is used strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>Perform structural steel cut-list review and generate an itemized bill of quantities or cost estimate.</li>
              <li>Contact you via telephone or WhatsApp regarding site inspection visits and engineering consultations in Awka or Anambra State.</li>
              <li>Process welding academy enrollment inquiries and syllabus orientation.</li>
            </ul>
            <p className="text-[#D5DD27] font-tech text-xs">
              We never sell, rent, or distribute client contact lists or architectural drawings to third-party marketing brokers.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading text-xl uppercase font-bold text-white border-b border-white/10 pb-2">
              4. Proprietary Structural Plans & Confidentiality
            </h3>
            <p>
              Architectural blueprints, CAD drawings, and structural engineer calculation sheets shared with Clavel Steel Konstruction Company Ltd for estimation purposes remain the intellectual property of the client or originating consulting firm.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading text-xl uppercase font-bold text-white border-b border-white/10 pb-2">
              5. Contact Us Regarding Your Data
            </h3>
            <p>
              For questions concerning this notice or to update your contact preferences, contact our Awka desk at:
            </p>
            <div className="p-4 bg-[#000C00] border border-white/10 rounded text-xs space-y-1 font-mono text-gray-300">
              <p>Clavel Steel Konstruction Company Ltd</p>
              <p>Address: Nwude Eugene, Awka, Anambra State, Nigeria</p>
              <p>Email: clavelkonstruction@gmail.com</p>
              <p>Phone: 0803 672 9660</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
