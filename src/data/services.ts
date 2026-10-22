import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'steel-construction',
    slug: 'steel-construction-structural-fabrication',
    title: 'Steel Construction & Structural Fabrication',
    shortDescription: 'General steel construction, structural steel frameworks, mezzanine decks, fabricated columns, and heavy-duty industrial assemblies.',
    fullDescription: 'Clavel Steel Konstruction Company Ltd provides end-to-end structural steel fabrication and erection services across Awka and Anambra State. We fabricate structural steel components built to engineered load specifications, including universal beams, structural hollow sections, portal frames, trusses, and custom steelwork for commercial and industrial developments.',
    category: 'Structural',
    iconName: 'Building2',
    heroImage: '/assets/projects/CS79.jpg',
    additionalImages: [
      '/assets/projects/CS13.jpg',
      '/assets/projects/CS9.webp',
      '/assets/projects/CS1.webp'
    ],
    capabilities: [
      'Heavy structural steel column and rafter fabrication',
      'Engineered portal frame manufacturing and on-site erection',
      'Structural steel trusses, purlins, and girts',
      'Mezzanine floors, steel stairwells, and access catwalks',
      'On-site welding, alignment, bolting, and torque inspection'
    ],
    typicalApplications: [
      'Commercial multi-storey steel framework',
      'Industrial workshops and manufacturing plants',
      'Churches, auditoriums, and large-span event centres',
      'Agricultural processing facilities and sheds'
    ],
    technicalSpecs: [
      { label: 'Welding Standards', value: 'SMAW/MMA & GTAW/TIG structural welds' },
      { label: 'Material Grades', value: 'Structural carbon steel, hollow sections, mild steel plate' },
      { label: 'Surface Protection', value: 'Zinc chromate primer, anti-corrosive industrial enamel' },
      { label: 'Connection Types', value: 'High-strength bolted joints & continuous full-penetration fillet welds' }
    ],
    considerations: [
      'Geotechnical soil conditions and concrete foundation anchor bolt placement must be verified prior to erection.',
      'Statutory building approvals and independent structural engineer certification stamps depend on project scope and client arrangement.'
    ],
    relatedServiceIds: ['industrial-structures', 'roofing-metalwork', 'welding-fabrication'],
    faqs: [
      {
        question: 'Do you fabricate on-site or in your Awka workshop?',
        answer: 'We prepare, cut, bevel, and pre-weld key sub-assemblies in our workshop facility in Awka to maintain strict quality control, then transport and erect the components on-site with certified field welders and riggers.'
      },
      {
        question: 'Can you work from architectural and structural drawings provided by our engineers?',
        answer: 'Yes. We work closely with consulting structural engineers, architects, and main contractors, fabricating strictly according to your approved shop drawings and specifications.'
      }
    ]
  },
  {
    id: 'industrial-structures',
    slug: 'industrial-structures-warehouses',
    title: 'Industrial Structures & Warehouse Construction',
    shortDescription: 'Turnkey steel warehouses, clear-span industrial sheds, factory workshops, and equipment support structures.',
    fullDescription: 'We design and construct clear-span steel warehouse facilities and industrial sheds tailored to logistics, distribution, manufacturing, and storage needs in Anambra State. Our industrial steel construction ensures maximum usable floor space, efficient material handling layouts, and long-term structural resilience against weather and high operational loads.',
    category: 'Industrial',
    iconName: 'Warehouse',
    heroImage: '/assets/projects/double-warehouse-aba.jpg',
    additionalImages: [
      '/assets/projects/CS32.jpg',
      '/assets/projects/CS7.webp',
      '/assets/projects/CS8.webp'
    ],
    capabilities: [
      'Clear-span warehouse framing up to custom wide-span configurations',
      'Industrial crane beam fabrication and gantry runway girders',
      'Factory partition steel framing and ventilation louvre mounts',
      'High-bay lighting bracketry and heavy overhead equipment supports',
      'Perimeter cladding framing and industrial sliding door systems'
    ],
    typicalApplications: [
      'Commercial goods distribution warehouses',
      'Agro-processing mills and raw material storage',
      'Vehicle maintenance depots and logistics parks',
      'Heavy equipment shelter facilities'
    ],
    technicalSpecs: [
      { label: 'Span Configuration', value: 'Clear-span or multi-bay with central valley columns' },
      { label: 'Roof Slope', value: 'Optimized for high-volume tropical stormwater runoff' },
      { label: 'Door Openings', value: 'Custom structural headers for wide heavy-duty rolling/sliding gates' },
      { label: 'Foundation Interface', value: 'Pre-set anchor cage alignment verified on concrete plinths' }
    ],
    considerations: [
      'Overhead crane capacities require specific structural beam sizing and foundation load assessments.',
      'Zoning, environmental permits, and local physical planning agency approvals must be secured by the property owner.'
    ],
    relatedServiceIds: ['steel-construction', 'roofing-metalwork', 'filling-station-canopies'],
    faqs: [
      {
        question: 'What is the advantage of steel warehouses over conventional blockwork?',
        answer: 'Structural steel offers superior speed of erection, vast column-free clear spans, modular expandability, and higher seismic and load resistance, drastically reducing construction timelines.'
      },
      {
        question: 'Do you provide warehouse roofing and cladding alongside the steel frame?',
        answer: 'Yes. We provide complete structural integration, including purlins, long-span aluminium or stone-coated roofing sheets, and perimeter side cladding.'
      }
    ]
  },
  {
    id: 'filling-station-canopies',
    slug: 'filling-station-canopies',
    title: 'Filling-Station Canopies & Commercial Canopies',
    shortDescription: 'Precision-built fuel retail canopies, cantilevered forecourt roofs, drive-through shelters, and commercial entrance structures.',
    fullDescription: 'Clavel Steel Konstruction Company Ltd is a recognized specialist in the fabrication and installation of robust filling station canopies across southeastern Nigeria. We construct forecourt canopy frameworks designed to withstand tropical wind loads, support integrated lighting, guttering, and brand fascia systems, while ensuring driver safety and pump protection.',
    category: 'Commercial',
    iconName: 'Fuel',
    heroImage: '/assets/projects/uga-canopy-anambra.jpg',
    additionalImages: [
      '/assets/projects/CS4.webp',
      '/assets/projects/CS3.webp',
      '/assets/projects/CS6.webp'
    ],
    capabilities: [
      'Heavy structural steel stanchions and tubular column support pillars',
      'Space-frame and structural steel canopy beam fabrication',
      'Integrated internal water drainage and perimeter box gutter fabrication',
      'Fascia support steelwork for corporate petroleum branding and LED signage',
      'Collision protection bollards and pump island guard rails'
    ],
    typicalApplications: [
      'Petroleum filling stations and forecourt retail plazas',
      'LPG refilling plants and autogas dispensing bays',
      'Commercial car wash and automotive service shelters',
      'Toll gates and logistical loading bay canopies'
    ],
    technicalSpecs: [
      { label: 'Clearance Height', value: 'Standard 4.5m to 5.5m high clearance for heavy fuel tankers' },
      { label: 'Drainage', value: 'Internal concealed downpipes within columns or perimeter scuppers' },
      { label: 'Wind Resistance', value: 'Engineered for regional tropical gust parameters' },
      { label: 'Coating', value: 'Corrosion-resistant epoxy barrier and polyurethane finish' }
    ],
    considerations: [
      'Safety clearance zones for flammable vapour discharge must comply with regulatory requirements (NMDPRA guidelines).',
      'Underground tank venting and dispenser positions must be coordinated with canopy column foundations.'
    ],
    relatedServiceIds: ['tanks-storage', 'steel-construction', 'roofing-metalwork'],
    faqs: [
      {
        question: 'Can you erect canopies while an existing station remains operational?',
        answer: 'Where safety permits and with coordinated exclusion zones, we can phase erection; however, strict hot-work permits and fuel dispensing shutdowns during crane lifting are mandatory.'
      },
      {
        question: 'Do you fabricate canopies for independent petroleum marketers as well as major brands?',
        answer: 'Yes. We fabricate canopies to custom dimensional specifications or conform to major corporate brand architectural guidelines.'
      }
    ]
  },
  {
    id: 'roofing-metalwork',
    slug: 'roofing-architectural-metalwork',
    title: 'Roofing & Architectural Metalwork',
    shortDescription: 'Long-span steel trusses, aluminium roofing systems, structural fascia, architectural balustrades, and stainless/mild steel rails.',
    fullDescription: 'Our roofing and architectural metalwork division combines structural reliability with refined aesthetics. We fabricate lightweight, high-strength tubular and angle steel roof trusses for residential villas, institutional auditoriums, and commercial complexes, alongside custom fabricated stainless steel and mild steel staircase railings and architectural features.',
    category: 'Structural',
    iconName: 'Home',
    heroImage: '/assets/projects/CS50.jpg',
    additionalImages: [
      '/assets/projects/ansu-igbariam-auditorium.png',
      '/assets/projects/shell-club-warri.jpg',
      '/assets/projects/CS48.jpg',
      '/assets/projects/CS2.webp'
    ],
    capabilities: [
      'Engineered tubular steel trusses and king-post roof trusses',
      'Aluminium long-span, step-tile, and stone-coated roofing installation',
      'High-grade stainless steel (Grade 304) and mild steel staircase railings',
      'Architectural balcony balustrades and decorative handrails',
      'Heavy-duty industrial roof gutters, flashings, and ridge capping'
    ],
    typicalApplications: [
      'Modern residential homes and estates',
      'Churches, cathedrals, and high-volume community halls',
      'Shopping plazas and commercial retail complexes',
      'Hospitality facilities and luxury staircases'
    ],
    technicalSpecs: [
      { label: 'Truss Materials', value: 'High-tensile tubular pipe, angle iron, square hollow sections' },
      { label: 'Railing Finishes', value: 'Mirror/satin stainless steel or electrostatically powder-coated mild steel' },
      { label: 'Roof Pitch', value: 'Custom pitched from 15° to 45° steep architectural styles' },
      { label: 'Fasteners', value: 'Corrosion-resistant galvanized self-drilling neoprene washer screws' }
    ],
    considerations: [
      'Roof truss weight and span ratios require accurate load-bearing ring beam verification.',
      'Coastal or high-humidity applications require marine-grade stainless or specialized protective coatings.'
    ],
    relatedServiceIds: ['security-steelwork', 'steel-construction', 'welding-fabrication'],
    faqs: [
      {
        question: 'Why choose steel trusses over timber roof framing?',
        answer: 'Steel trusses do not warp, rot, crack, or suffer from termite infestation. They allow for much wider clear spans and offer superior fire safety and structural consistency.'
      },
      {
        question: 'Do you provide on-site measurement for staircase railings?',
        answer: 'Yes. Every architectural staircase railing is custom measured on-site after concrete screeding is complete to ensure millimeter-accurate fit and pitch.'
      }
    ]
  },
  {
    id: 'tanks-storage',
    slug: 'tanks-storage-solutions',
    title: 'Tanks & Storage Solutions',
    shortDescription: 'Overhead water tank towers, industrial stanchions, surface storage vessels, and certified underground fuel storage tanks.',
    fullDescription: 'We build durable, pressure-tested liquid storage infrastructure. From elevated water stanchions for municipal and industrial estates to heavy-duty underground hydrocarbon storage tanks for petroleum filling stations, our tank fabrication adheres strictly to leak-free welding procedures and structural stability standards.',
    category: 'Industrial',
    iconName: 'Layers',
    heroImage: '/assets/projects/CS23.jpg',
    additionalImages: [
      '/assets/projects/CS57.jpg',
      '/assets/projects/boromeo-obosi.jpg'
    ],
    capabilities: [
      'Structural steel overhead stanchions and multi-tank elevated towers',
      'Underground double-welded fuel storage tanks (PMS, AGO, DPK)',
      'Industrial surface storage vessels for water, chemicals, and industrial fluids',
      'Heavy-duty tank cradles, saddles, and safety access ladders with cages',
      'Hydrostatic pressure testing and certified weld seam inspection'
    ],
    typicalApplications: [
      'Petroleum filling stations and commercial bulk fuel depots',
      'Industrial manufacturing plants and beverage facilities',
      'Residential housing estates and commercial office developments',
      'Hospitals, universities, and agricultural irrigation reservoirs'
    ],
    technicalSpecs: [
      { label: 'Steel Plate Thickness', value: '4mm to 10mm high-grade carbon steel plate (per volume & fluid)' },
      { label: 'Welding Method', value: 'Internal and external full continuous SMAW/TIG seal welds' },
      { label: 'Corrosion Barrier', value: 'Heavy bitumen/coal-tar epoxy external wrap for underground vessels' },
      { label: 'Testing Protocol', value: 'Hydrostatic pressure testing prior to dispatch/burial' }
    ],
    considerations: [
      'Underground tank installations require verified ground water table assessment and anchoring straps.',
      'Elevated stanchions require engineer-verified concrete footings calibrated for wind load and liquid weight.'
    ],
    relatedServiceIds: ['filling-station-canopies', 'steel-construction', 'welding-fabrication'],
    faqs: [
      {
        question: 'Do you pressure test underground fuel tanks before installation?',
        answer: 'Yes. All fuel storage tanks undergo rigorous pressure testing to verify zero weld porosity and airtight integrity before coating and burying.'
      },
      {
        question: 'What height capacities do your overhead stanchions support?',
        answer: 'We fabricate stanchions ranging from single-tier 3-meter domestic towers up to 15-meter multi-leg industrial towers supporting thousands of liters.'
      }
    ]
  },
  {
    id: 'security-steelwork',
    slug: 'security-steelwork',
    title: 'Security & Protective Steelwork',
    shortDescription: 'High-security automated steel gates, decorative wrought-iron entrance portals, burglary-proof window grilles, and protective perimeter barriers.',
    fullDescription: 'Security metalwork from Clavel Steel Konstruction Company Ltd combines formidable protection with refined architectural elegance. We fabricate custom security gates, motorized sliding systems, heavy-duty burglary-proof grilles, steel doors, and perimeter anti-climb fencing for homes, estates, banks, and commercial premises.',
    category: 'Specialized',
    iconName: 'ShieldCheck',
    heroImage: '/assets/projects/CS5.webp',
    additionalImages: [
      '/assets/projects/CS6.webp',
      '/assets/projects/CS17.jpg'
    ],
    capabilities: [
      'Heavy automated sliding and bi-parting swing entrance gates',
      'Ornamental wrought iron and laser-cut motif security gates',
      'Internal and external burglary-proof window grilles and door cages',
      'Anti-ram security bollards and perimeter steel barrier fencing',
      'Reinforced security steel plate doors with multi-point locking systems'
    ],
    typicalApplications: [
      'Residential private compounds and gated communities',
      'Commercial banking institutions and corporate headquarters',
      'Warehouse perimeter boundaries and goods delivery checkpoints',
      'Public institutions, schools, and religious facilities'
    ],
    technicalSpecs: [
      { label: 'Frame Materials', value: 'Heavy gauge square/rectangular hollow sections & forged solid iron' },
      { label: 'Hinges & Rollers', value: 'Precision grease-packed ball-bearing heavy-duty steel hinges' },
      { label: 'Automation Ready', value: 'Reinforced gear-rack mounting channels for electric gate motors' },
      { label: 'Finish Options', value: 'Anti-rust primer, automotive polyurethane enamel, gold/bronze patina accents' }
    ],
    considerations: [
      'Heavy gates require reinforced reinforced concrete gate pillars to avoid sagging over time.',
      'Automation motors require dedicated surge-protected electrical conduit points.'
    ],
    relatedServiceIds: ['roofing-metalwork', 'welding-fabrication', 'steel-materials'],
    faqs: [
      {
        question: 'Can your gates be motorized with automatic remote controls?',
        answer: 'Yes. We build all our sliding and swing gates with reinforced mounting channels and track geometry specifically calibrated for automatic gate operators.'
      },
      {
        question: 'Do you offer custom artistic designs for compound entrance gates?',
        answer: 'Yes. We fabricate bespoke designs ranging from minimalist modern geometric profiles to ornate wrought-iron classical patterns.'
      }
    ]
  },
  {
    id: 'welding-fabrication',
    slug: 'welding-metal-fabrication',
    title: 'Welding & Custom Metal Fabrication',
    shortDescription: 'Precision SMAW/MMA and GTAW/TIG welding, plate shearing, beveling, pipe spooling, and custom industrial metal fabrication.',
    fullDescription: 'At the heart of Clavel Steel Konstruction is our mastery of advanced welding and metal fabrication. Our certified fabricators possess deep technical expertise in Shielded Metal Arc Welding (SMAW/MMA) and Gas Tungsten Arc Welding (GTAW/TIG), enabling us to execute high-integrity welds on structural steel, pipework, pressure vessels, and architectural alloys.',
    category: 'Specialized',
    iconName: 'Wrench',
    heroImage: '/assets/projects/CS20.jpg',
    additionalImages: [
      '/assets/projects/CS10.jpg',
      '/assets/projects/CS1.webp'
    ],
    capabilities: [
      'SMAW / MMA structural arc welding for heavy plate and structural members',
      'GTAW / TIG precision welding for thin gauges, stainless steel, and pipe root runs',
      'Heavy plate cutting, shearing, roll bending, and CNC plasma preparation',
      'Structural pipe spooling, flange fitting, and manifold fabrication',
      'Custom machine frames, engine mounting beds, and industrial brackets'
    ],
    typicalApplications: [
      'Heavy equipment repair and chassis reinforcement',
      'Industrial piping systems and fluid transfer manifolds',
      'Custom architectural metal features and bespoke artistic fabrications',
      'Plant maintenance shutdowns and on-site emergency welding'
    ],
    technicalSpecs: [
      { label: 'Processes', value: 'SMAW (Shielded Metal Arc), GTAW/TIG (Gas Tungsten Arc)' },
      { label: 'Positions', value: 'All positions: 1G, 2G, 3G, 4G, 5G, 6G pipe certifications' },
      { label: 'Quality Control', value: 'Visual inspection (VT), dye penetrant testing (PT), ultrasonic testing (UT)' },
      { label: 'Electrode Standards', value: 'AWS E6013, E7018 low-hydrogen, ER70S-6, ER308L stainless' }
    ],
    considerations: [
      'Critical weld certifications and non-destructive testing (NDT) logs are arranged based on project contract standards.',
      'Field welding in adverse weather requires protective wind/rain enclosures to prevent weld porosity.'
    ],
    relatedServiceIds: ['steel-construction', 'welding-training', 'transportation-steelwork'],
    faqs: [
      {
        question: 'What is the difference between SMAW and GTAW welding in your operations?',
        answer: 'SMAW (Stick welding) is ideal for heavy structural steel and outdoor on-site erection due to its high deposition and tolerance of field conditions. GTAW (TIG) provides surgical precision, clean slag-free welds, and superior root passes on stainless steel and pressure piping.'
      },
      {
        question: 'Do your welders perform on-site emergency repairs?',
        answer: 'Yes. We deploy mobile welding rigs equipped with generator power and certified welding teams across Anambra State for critical structural or plant repairs.'
      }
    ]
  },
  {
    id: 'transportation-steelwork',
    slug: 'transportation-steelwork',
    title: 'Transportation-Related Steelwork',
    shortDescription: 'Trailer truck body fabrication, tanker sub-frame repairs, flatbed side rails, chassis reinforcement, and heavy vehicular metalwork.',
    fullDescription: 'Clavel Steel Konstruction Company Ltd delivers heavy-duty fabrication solutions for logistics and commercial transport fleets. We fabricate, reinforce, and repair heavy trailer beds, cargo bodies, tanker saddles, landing gear assemblies, and chassis components subjected to extreme road vibrations and payloads.',
    category: 'Industrial',
    iconName: 'Truck',
    heroImage: '/assets/projects/boromeo-obosi.jpg',
    additionalImages: [
      '/assets/projects/CS10.jpg',
      '/assets/projects/CS14.jpg'
    ],
    capabilities: [
      'Heavy trailer flatbed frame fabrication and cross-member replacement',
      'Chassis rail strengthening, fishplate reinforcement, and crack repairs',
      'Tanker body saddle fabrication, bolsters, and strap anchor points',
      'Drop-side trailer gates, headboards, and twist-lock container pedestals',
      'Heavy-duty bumper guards, underrun protection, and tow hitches'
    ],
    typicalApplications: [
      'Long-haul articulated trucks and haulage fleets',
      'Petroleum and water tanker semi-trailers',
      'Agricultural tipping trailers and tipper truck bodies',
      'Construction flatbed equipment transporters'
    ],
    technicalSpecs: [
      { label: 'Steel Sections', value: 'High-yield structural channel (UNP), I-beams, and checker floor plate' },
      { label: 'Weld Strength', value: 'Full penetration bevel welds with gusset reinforcement' },
      { label: 'Chassis Alignment', value: 'Laser-checked squareness and camber truing' },
      { label: 'Wear Protection', value: 'Abrasion-resistant steel wear plates on high-stress contact points' }
    ],
    considerations: [
      'Road transport regulatory safety dimensions (FRSC guidelines) must be adhered to during body building.',
      'Suspension and axle alignment must be validated after heavy structural frame straightening.'
    ],
    relatedServiceIds: ['welding-fabrication', 'tanks-storage', 'steel-materials'],
    faqs: [
      {
        question: 'Can you reinforce an older trailer chassis to carry heavier loads?',
        answer: 'Yes. We inspect the frame for stress fractures, relieve structural tension, and weld continuous high-yield fishplates and diagonal stiffeners to restore and enhance load rating.'
      },
      {
        question: 'Do you fabricate new trailer bodies or only repair existing ones?',
        answer: 'We provide both custom new fabrication (flatbeds, tipper beds, side-rail bodies) and comprehensive refurbishment of damaged commercial fleet bodies.'
      }
    ]
  },
  {
    id: 'steel-materials',
    slug: 'steel-aluminium-materials-supply',
    title: 'Steel & Aluminium Materials Supply',
    shortDescription: 'Sales and distribution of structural steel beams, hollow sections, angles, plates, and aluminium profiles direct to contractors and builders.',
    fullDescription: 'Combining fabrication with direct materials supply, Clavel Steel Konstruction Company Ltd provides verified steel and aluminium materials to construction firms, fabricators, and property developers across Anambra State. Sourcing directly simplifies procurement, ensures material traceability, and guarantees appropriate gauge thicknesses.',
    category: 'Materials & Training',
    iconName: 'Boxes',
    heroImage: '/assets/projects/CS14.jpg',
    additionalImages: [
      '/assets/projects/CS36.jpg',
      '/assets/projects/CS10.jpg'
    ],
    capabilities: [
      'Universal beams (UB), universal columns (UC), and I-sections',
      'Square (SHS), rectangular (RHS), and circular (CHS) hollow sections',
      'Equal and unequal angle iron, channel bars, and flat bars',
      'Mild steel plates, checker plates, and galvanized sheets in varied gauges',
      'Aluminium profiles, corrugated sheets, and roofing accessories'
    ],
    typicalApplications: [
      'Building contractors requiring verified-gauge structural members',
      'Independent welding workshops sourcing raw fabrication materials',
      'Property owners procuring materials directly for their construction teams',
      'Government and institutional infrastructure projects'
    ],
    technicalSpecs: [
      { label: 'Traceability', value: 'Standard dimensional checks and mill specification verification' },
      { label: 'Cutting Service', value: 'Pre-cut lengths to order to minimize on-site transport waste' },
      { label: 'Delivery', value: 'Direct dispatch to project sites in Awka, Onitsha, Nnewi, and environs' },
      { label: 'Pricing Model', value: 'Competitive wholesale and retail pricing based on prevailing market rates' }
    ],
    considerations: [
      'Prevailing steel market rates fluctuate; quotations are provided with standard validity windows.',
      'Specific specialized alloy grades (e.g. marine 316 stainless) require advance ordering.'
    ],
    relatedServiceIds: ['steel-construction', 'welding-fabrication', 'roofing-metalwork'],
    faqs: [
      {
        question: 'Can you cut steel members to our required project lengths before delivery?',
        answer: 'Yes. Our workshop is equipped with industrial band saws and shearing cutters to prepare members to your exact cut-list specifications.'
      },
      {
        question: 'Do you deliver steel materials directly to construction sites in Anambra State?',
        answer: 'Yes. We coordinate haulage and crane-unloading directly to job sites across Awka, Onitsha, Nnewi, and neighboring regions.'
      }
    ]
  }
];
