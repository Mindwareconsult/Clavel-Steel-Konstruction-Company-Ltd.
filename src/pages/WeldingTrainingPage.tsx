import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  GraduationCap, 
  BookOpen, 
  HardHat, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Phone, 
  MessageSquare,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Wrench
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/common/SEO';

export default function WeldingTrainingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    weldingTrack: 'Both SMAW & GTAW/TIG',
    experienceLevel: 'Beginner / No prior experience',
    location: 'Awka, Anambra State',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const primaryPhone = COMPANY_INFO.phones[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const trainingFaqs = [
    {
      q: 'What welding processes are taught at Clavel Steel?',
      a: 'We provide structured technical instruction in two foundational industrial processes: Shielded Metal Arc Welding (SMAW / MMA / Stick) and Gas Tungsten Arc Welding (GTAW / TIG).'
    },
    {
      q: 'Where do the training sessions take place?',
      a: 'Practical welding and classroom theory sessions are conducted at our central workshop facility in Awka, Anambra State, Nigeria, equipped with dedicated welding booths, transformer/inverter machines, and protective safety gear.'
    },
    {
      q: 'What are the admission prerequisites and session schedules?',
      a: 'Candidates should have a passion for technical engineering and metal fabrication. Detailed cohort schedules, session durations, and fee schedules are communicated during direct workshop consultations to ensure alignment with candidate availability.'
    },
    {
      q: 'Is safety gear provided during training?',
      a: 'Yes. Industrial safety is our primary pillar. Students are instructed in mandatory PPE (auto-darkening welding helmets, leather welding jackets, gauntlets, and safety boots) and fume extraction before striking an arc.'
    }
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello Clavel Steel Konstruction Co. Ltd. I would like to enquire about enrollment details for the Professional Welding Training program (SMAW/GTAW) at your Awka facility.`
  );

  const breadcrumbs = [
    { name: 'Welding Training', path: '/welding-training' }
  ];

  return (
    <div className="bg-[#032C16] text-white">
      <SEO 
        title="Professional Welding Training Academy (SMAW & GTAW/TIG) | Awka"
        description="Learn professional industrial welding at Clavel Steel Konstruction in Awka, Anambra State. Hands-on practical instruction in SMAW/MMA and GTAW/TIG processes."
        canonicalPath="/welding-training"
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
              <span>Welding Training</span>
            </div>
            
            <div className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-tech text-[#D5DD27] uppercase tracking-wider font-semibold">
              Technical Skills Development
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold uppercase text-white leading-tight">
              Professional Welding Training: <br />
              <span className="text-[#2DA447]">SMAW/MMA</span> & <span className="text-[#D5DD27]">GTAW/TIG</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              Equipping prospective welders, technicians, and engineering apprentices with rigorous, hands-on fabrication skills, weld metallurgy theory, and occupational safety standards at our Awka facility.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#enrollment-form"
                className="px-6 py-3 bg-[#D5DD27] text-black font-tech font-bold uppercase tracking-wider text-sm hover:bg-[#e0e932] transition-colors shadow-lg cursor-pointer"
              >
                Enrollment Inquiry
              </a>
              <a
                href={`https://wa.me/${primaryPhone.raw.replace('+', '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#228940] hover:bg-[#2DA447] text-white font-tech font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Training Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tracks Overview */}
      <section className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
              Core Technical Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white mt-1">
              Two Primary Industrial Welding Disciplines
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              Our curriculum blends theoretical blueprint reading with intensive physical booth practice under experienced fabricators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Track 1: SMAW / MMA */}
            <div className="bg-[#000C00] border-2 border-[#2DA447]/60 rounded-sm p-8 space-y-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#032C16] border border-[#2DA447] rounded text-[#2DA447]">
                    <Flame className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-tech px-2.5 py-1 bg-white/5 border border-white/10 text-[#D5DD27] uppercase font-semibold">
                    Heavy Structural Track
                  </span>
                </div>

                <h3 className="font-heading text-3xl uppercase font-bold text-white mt-4">
                  SMAW / MMA (Shielded Metal Arc Welding)
                </h3>
                <p className="text-xs font-tech text-gray-400 uppercase tracking-wider">
                  Manual Metal Arc / Stick Welding
                </p>

                <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                  The backbone of structural steel construction and on-site field assembly. Students master striking and maintaining an arc, controlling puddle fluidity, managing heat distortion, and welding with standard structural electrodes.
                </p>

                <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-gray-300">
                  <h4 className="font-tech uppercase text-[#D5DD27] font-bold text-xs mb-2">Curriculum Highlights:</h4>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2DA447] flex-shrink-0" />
                    <span>Electrode classifications (AWS E6013, E7018 low-hydrogen)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2DA447] flex-shrink-0" />
                    <span>Joint configurations: Butt, Lap, Tee, and Corner fillet welds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2DA447] flex-shrink-0" />
                    <span>Multi-pass heavy plate welding & interpass slag removal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2DA447] flex-shrink-0" />
                    <span>Positions: Flat (1F/1G), Horizontal (2F/2G), and Vertical (3F/3G)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Focus: Building Frames & Warehouses</span>
                <span className="text-[#2DA447] font-bold font-tech">Practical Intensive</span>
              </div>
            </div>

            {/* Track 2: GTAW / TIG */}
            <div className="bg-[#000C00] border-2 border-[#D5DD27]/60 rounded-sm p-8 space-y-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#032C16] border border-[#D5DD27] rounded text-[#D5DD27]">
                    <Wrench className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-tech px-2.5 py-1 bg-white/5 border border-white/10 text-[#D5DD27] uppercase font-semibold">
                    Precision & Alloy Track
                  </span>
                </div>

                <h3 className="font-heading text-3xl uppercase font-bold text-white mt-4">
                  GTAW / TIG (Gas Tungsten Arc Welding)
                </h3>
                <p className="text-xs font-tech text-gray-400 uppercase tracking-wider">
                  Tungsten Inert Gas Precision Welding
                </p>

                <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                  Specialized technique for high-integrity, aesthetically immaculate welds. Teaches precise torch manipulation, high-frequency arc initiation, shielding gas regulation (pure Argon), and two-handed filler rod feeding.
                </p>

                <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-gray-300">
                  <h4 className="font-tech uppercase text-[#D5DD27] font-bold text-xs mb-2">Curriculum Highlights:</h4>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D5DD27] flex-shrink-0" />
                    <span>Tungsten electrode preparation, grinding angles, and collet assembly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D5DD27] flex-shrink-0" />
                    <span>Inert shielding gas flow calibration (Argon regulators & purge)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D5DD27] flex-shrink-0" />
                    <span>Stainless steel (Grade 304/316) architectural railings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D5DD27] flex-shrink-0" />
                    <span>100% penetration root passes for fuel tank and pressure vessels</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Focus: Stainless Steel & Vessel Integrity</span>
                <span className="text-[#D5DD27] font-bold font-tech">Precision Craft</span>
              </div>
            </div>

          </div>

          {/* Program Information Transparency Box */}
          <div className="mt-10 p-5 bg-[#000C00] border border-white/10 rounded-sm text-xs text-gray-400 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#D5DD27] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-tech uppercase text-xs mb-1">
                Course Details & Confirmation Notice
              </strong>
              <p className="leading-relaxed">
                Specific course durations, fee structures, registration prerequisites, external certification pathways, and cohort starting dates are finalized directly with applicants during workshop interviews. Clavel Steel Konstruction focuses on practical technical competence and real fabrication floor experience.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Workshop Safety & Equipment Standards */}
      <section className="py-20 bg-[#000C00] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
                Industrial Discipline
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white leading-tight">
                Safety Culture: The Foundation of Every Master Welder
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Welding is a respected industrial trade that involves intense electrical currents, thermal radiation, compressed inert gases, and toxic metal fumes. At Clavel Steel, safety training is not an afterthought—it is the very first module taught.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-gray-300 pt-2">
                <div className="p-3 bg-[#032C16] border-l-2 border-[#2DA447] rounded-r">
                  <h4 className="font-heading text-base font-bold text-white uppercase">Personal Protective Equipment (PPE)</h4>
                  <p className="text-xs text-gray-400 mt-1">Proper shade selection, optical filters, flame-retardant leather jackets, spats, and heavy gauntlets.</p>
                </div>
                <div className="p-3 bg-[#032C16] border-l-2 border-[#D5DD27] rounded-r">
                  <h4 className="font-heading text-base font-bold text-white uppercase">Workshop Hazard Mitigation</h4>
                  <p className="text-xs text-gray-400 mt-1">Safe handling of high-pressure Argon cylinders, grounding protocols, and hot-work ventilation.</p>
                </div>
                <div className="p-3 bg-[#032C16] border-l-2 border-[#808482] rounded-r">
                  <h4 className="font-heading text-base font-bold text-white uppercase">Non-Destructive Testing Awareness</h4>
                  <p className="text-xs text-gray-400 mt-1">Understanding weld defects: lack of fusion, porosity, undercut, slag inclusions, and visual inspection standards.</p>
                </div>
              </div>
            </div>

            {/* Visual Classroom & Workshop Image */}
            <div className="lg:col-span-6">
              <div className="rounded-sm overflow-hidden border-2 border-[#2DA447]/60 shadow-2xl bg-black group">
                <img 
                  src="/assets/projects/CS20.jpg" 
                  alt="Precision isn't a bonus — it's the standard. Clavel Steel Konstruction workshop standard" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 bg-[#032C16] border-t border-white/10 text-xs text-gray-300 flex justify-between items-center font-tech">
                  <span>Awka Workshop Fabrication Standard</span>
                  <span className="text-[#D5DD27]">Precision Isn't A Bonus — It's The Standard</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enrollment Inquiry Form Section */}
      <section id="enrollment-form" className="py-20 bg-[#032C16] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
              Apply or Inquire
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase text-white mt-1">
              Enrollment Enquiry & Consultation
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              Interested in mastering industrial welding in Awka? Complete this brief form and our training coordinator will contact you.
            </p>
          </div>

          <div className="bg-[#000C00] border border-[#2DA447]/50 rounded-sm p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-[#228940]/20 border-2 border-[#228940] rounded-full flex items-center justify-center mx-auto text-[#2DA447]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. We have received your inquiry for the <strong className="text-[#D5DD27]">{formData.weldingTrack}</strong> program. Our training desk in Awka will reach out to you via {formData.phone}.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={`https://wa.me/${primaryPhone.raw.replace('+', '')}?text=${encodeURIComponent(
                      `Hello Clavel Steel, I just submitted an enrollment enquiry for ${formData.weldingTrack}. My name is ${formData.fullName}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#228940] hover:bg-[#2DA447] text-white font-tech font-bold uppercase tracking-wider text-xs transition-colors rounded-sm inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" /> Message Training Desk on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Chukwuebuka Nnamdi"
                      className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0803 123 4567"
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
                      placeholder="e.g. trainee@email.com"
                      className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                      Preferred Welding Track
                    </label>
                    <select
                      value={formData.weldingTrack}
                      onChange={(e) => setFormData({ ...formData, weldingTrack: e.target.value })}
                      className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                    >
                      <option value="Both SMAW & GTAW/TIG">Both SMAW & GTAW/TIG (Comprehensive)</option>
                      <option value="SMAW / Stick Welding Only">SMAW / Stick Welding Only (Structural Focus)</option>
                      <option value="GTAW / TIG Welding Only">GTAW / TIG Welding Only (Precision & Stainless)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                      Prior Experience Level
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                      className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                    >
                      <option value="Beginner / No prior experience">Beginner / No prior experience</option>
                      <option value="Some basic welding exposure">Some basic welding exposure</option>
                      <option value="Experienced welder seeking TIG/structural upskilling">Experienced welder seeking TIG/structural upskilling</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                      Current Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Awka, Onitsha, Nnewi, Anambra"
                      className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                    Questions or Specific Goals
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us what you hope to achieve (e.g. pipe welding, stainless steel gates, overseas trade exam prep)..."
                    className="w-full bg-[#032C16] border border-white/20 focus:border-[#2DA447] text-white text-sm px-3 py-2 rounded-sm outline-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#D5DD27] hover:bg-[#e0e932] text-black font-tech font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer flex items-center gap-2 rounded-sm shadow-md"
                  >
                    Submit Training Enquiry
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#000C00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-tech text-[#D5DD27] font-semibold tracking-wider">
              Answers & Guidance
            </span>
            <h2 className="text-3xl font-heading font-bold uppercase text-white mt-1">
              Welding Training FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {trainingFaqs.map((faq, idx) => (
              <div key={idx} className="bg-[#032C16] border border-white/10 rounded-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between text-white hover:text-[#D5DD27] transition-colors cursor-pointer text-sm font-semibold"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#2DA447] transition-transform ${openFaq === idx ? 'rotate-180 text-[#D5DD27]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-xs text-gray-300 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
