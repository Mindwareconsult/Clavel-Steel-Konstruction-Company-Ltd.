import { 
  Building2, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2,
  HardHat,
  Award
} from 'lucide-react';

interface TrustMetricsBannerProps {
  title?: string;
  subtitle?: string;
  className?: string;
  compact?: boolean;
}

export default function TrustMetricsBanner({ 
  title = "Proven Engineering Track Record", 
  subtitle = "Demonstrated structural fabrication performance across Anambra State and southeastern Nigeria.",
  className = "",
  compact = false
}: TrustMetricsBannerProps) {
  const metrics = [
    {
      id: 'projects',
      value: '120+',
      label: 'Projects Completed',
      detail: 'Industrial warehouses, forecourt canopies, roof trusses & storage vessels delivered',
      icon: Building2,
      badge: 'Verified Works'
    },
    {
      id: 'years',
      value: '10+',
      label: 'Years in Business',
      detail: 'Continuous metal fabrication expertise and engineering leadership in Awka',
      icon: Calendar,
      badge: 'Established Track Record'
    },
    {
      id: 'locations',
      value: '6+',
      label: 'Active Site Locations',
      detail: 'Mobilizing across Awka, Onitsha, Nnewi, Aba, Warri & regional industrial corridors',
      icon: MapPin,
      badge: 'Regional Reach'
    },
    {
      id: 'safety',
      value: '100%',
      label: 'Safety & Weld Compliance',
      detail: 'Zero-harm site protocol, mandatory PPE enforcement & certified SMAW/TIG joints',
      icon: ShieldCheck,
      badge: 'Safety First'
    }
  ];

  return (
    <section className={`bg-[#000C00] border-b border-white/10 relative overflow-hidden ${className}`}>
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-industrial opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Header (optional based on props) */}
        {!compact && (
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-tech text-[#D5DD27] uppercase tracking-wider font-semibold rounded-sm mb-3">
              <Award className="w-3.5 h-3.5 text-[#2DA447]" />
              <span>Key Performance Milestones</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold uppercase text-white tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-gray-300 mt-2 font-sans leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* 4 Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div 
                key={metric.id}
                className="bg-[#032C16] border border-white/10 hover:border-[#2DA447] transition-all duration-300 rounded-sm p-6 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#228940] to-[#D5DD27] opacity-60 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded bg-[#000C00] border border-[#2DA447]/40 flex items-center justify-center text-[#D5DD27] group-hover:text-white group-hover:border-[#2DA447] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-tech uppercase tracking-wider px-2 py-0.5 bg-black/60 border border-white/10 text-gray-400 group-hover:text-[#D5DD27] group-hover:border-[#2DA447]/40 rounded-sm font-semibold transition-colors">
                      {metric.badge}
                    </span>
                  </div>

                  {/* Big Number Counter */}
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl sm:text-5xl font-bold text-white group-hover:text-[#D5DD27] transition-colors tracking-tight">
                      {metric.value}
                    </span>
                  </div>

                  {/* Metric Label */}
                  <h3 className="font-heading text-lg font-bold uppercase text-white mt-2 leading-tight">
                    {metric.label}
                  </h3>

                  {/* Detail Description */}
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed font-sans">
                    {metric.detail}
                  </p>
                </div>

                {/* Bottom Verification Indicator */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-tech text-[#2DA447]">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-gray-400 group-hover:text-gray-200 transition-colors">Verified Capability</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Trust Strip */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-tech text-gray-400">
          <div className="flex items-center gap-2">
            <HardHat className="w-4 h-4 text-[#D5DD27]" />
            <span>Direct Workshop Pre-Fabrication in Awka</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#2DA447]" />
            <span>Heavy Mobile Crane Erection & Rafter Rigging</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D5DD27]" />
            <span>Engineered Connections & Anti-Corrosion Protection</span>
          </div>
        </div>

      </div>
    </section>
  );
}
