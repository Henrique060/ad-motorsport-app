export const CAR_BRANDS = [
  {
    name: 'Porsche',
    models: ['911 (992/991/997)', '718 Cayman', '718 Boxster', 'GT3 / GT3 RS', 'GT4 RS', 'Macan', 'Cayenne', 'Panamera', 'Taycan']
  },
  {
    name: 'BMW',
    models: ['M2 (G87/F87)', 'M3 (G80/F80/E92)', 'M4 (G82/F82)', 'M5 (F90/E60)', '1 Series / 1M', '3 Series', '4 Series', '5 Series', 'Z4 M', 'X3 M / X5 M']
  },
  {
    name: 'Audi',
    models: ['RS3 Sportback', 'RS4 Avant', 'RS6 Avant', 'R8 V10', 'S3 / S4 / S5', 'TT RS', 'A3 / A4 / A5', 'Q5 / SQ5']
  },
  {
    name: 'Mercedes-Benz',
    models: ['A45 S AMG', 'C63 S AMG', 'E63 S AMG', 'AMG GT / GTR', 'SL AMG', 'CLA 45 AMG', 'C-Class', 'E-Class']
  },
  {
    name: 'Volkswagen',
    models: ['Golf R (Mk8/Mk7)', 'Golf GTI', 'Scirocco R', 'Polo GTI', 'Arteon', 'Tiguan R']
  },
  {
    name: 'Toyota',
    models: ['GR Yaris', 'GR Supra', 'GR86', 'GT86', 'Corolla GR-Sport', 'Land Cruiser', 'Yaris']
  },
  {
    name: 'Honda',
    models: ['Civic Type R (FL5/FK8)', 'S2000 (AP1/AP2)', 'NSX', 'Civic VTEC', 'Integra Type R']
  },
  {
    name: 'Subaru',
    models: ['WRX STI', 'BRZ', 'Impreza Turbo', 'Levorg']
  },
  {
    name: 'Lotus',
    models: ['Emira V6/I4', 'Exige V6', 'Elise Cup', 'Evora GT']
  },
  {
    name: 'Ford',
    models: ['Focus RS (Mk3/Mk2)', 'Mustang GT / Mach 1', 'Focus ST', 'Fiesta ST']
  },
  {
    name: 'Ferrari / Supercar',
    models: ['458 / 488 / F8', 'SF90', 'Portofino / Roma', 'Huracan / Gallardo', 'McLaren 570S / 720S']
  },
  {
    name: 'Other / Custom Build',
    models: ['Custom Track Spec', 'Historic / Classic', 'Sedan / Hatchback', 'SUV / 4x4']
  }
];

export const YEARS = Array.from({ length: 32 }, (_, i) => String(2026 - i)).concat(['Classic (Pre-1995)']);

export const WORKSHOP_SERVICES = [
  {
    id: 'oil-service',
    title: 'Synthetic Oil & Full Filter Service',
    category: 'maintenance',
    estimatedHours: '1.0h',
    badge: 'Same-Day Service',
    warranty: '12 Months / 15,000 km',
    shortDesc: 'Liqui-Moly / Motul high-grade synthetic oil replacement with OEM Mann/Mahle filter set.',
    details: [
      'Engine flush & fresh high-temp synthetic oil (5W-30 / 5W-40 / 10W-60)',
      'OEM oil, engine air, and active-carbon cabin filter replacement',
      '35-point safety inspection & torque spec check',
      'ECU service interval reset & digital record entry'
    ]
  },
  {
    id: 'brake-system',
    title: 'High-Performance Brake Overhaul',
    category: 'mechanical',
    estimatedHours: '2.0h',
    badge: 'Popular',
    warranty: '24 Months Warranty',
    shortDesc: 'Brembo / Ferodo Racing pad replacement, slotted/drilled rotor check, and racing fluid flush.',
    details: [
      'Pad & disc wear laser micrometer measurement',
      'Castrol React SRF or Motul RBF 660 high boiling-point brake fluid flush',
      'Caliper slide pins lubrication and anti-rattle clip replacement',
      'Bedding-in protocol & dynamic braking deceleration test'
    ]
  },
  {
    id: 'ecu-diagnostics',
    title: 'Advanced Computer Diagnostic & Sensor Scan',
    category: 'diagnostics',
    estimatedHours: '0.5h',
    badge: 'Instant Results',
    warranty: 'Accurate Report Guaranteed',
    shortDesc: 'Dealer-level OBD2 deep scan with oscilloscope sensor validation and live parameter logging.',
    details: [
      'Comprehensive fault code read across all vehicle control units',
      'Live air/fuel ratio, boost pressure, and fuel rail pressure logging',
      'Sensor calibration (O2 sensors, MAF, camshaft position sensors)',
      'Comprehensive printable diagnostic health audit with recommended fixes'
    ]
  },
  {
    id: 'suspension-alignment',
    title: 'Laser 3D Geometry Alignment & Suspension',
    category: 'motorsport',
    estimatedHours: '1.5h',
    badge: 'Precision Spec',
    warranty: '6 Months Guarantee',
    shortDesc: 'Corner balancing, camber/caster/toe optimization on our Hunter 3D Hawkeye system.',
    details: [
      'Laser 4-wheel alignment tailored to street or track geometry',
      'Bushing, ball joint, and anti-roll bar linkage play inspection',
      'Coilovers ride-height leveling and corner weight calculation',
      'Before & After steering angle report printout'
    ]
  },
  {
    id: 'dyno-tuning',
    title: 'Dyno Performance Calibration & Stage 1/2',
    category: 'motorsport',
    estimatedHours: '3.5h',
    badge: 'Motorsport Spec',
    warranty: 'Engine Safety Guarantee',
    shortDesc: 'Custom software mapping on 4WD rolling road dynamometer with real-time lambda telemetry.',
    details: [
      'Baseline power & torque dyno pulls with graph overlay',
      'Custom ECU map refinement (timing, boost, AFR safety thresholds)',
      'Transmission gearbox flash (faster shifts, torque limiter raise)',
      'Certified horsepower & torque printout certificate'
    ]
  },
  {
    id: 'clutch-transmission',
    title: 'Clutch & Dual-Clutch (DSG/PDK) Service',
    category: 'mechanical',
    estimatedHours: '3.0h',
    badge: 'Specialist Work',
    warranty: '24 Months / 40,000 km',
    shortDesc: 'Dual-mass flywheel inspection, clutch pack replacement, and mechatronic fluid flushing.',
    details: [
      'OEM dual-mass flywheel tolerance check',
      'High-friction clutch plate & pressure plate installation',
      'Hydraulic slave cylinder & release bearing replacement',
      'Mechatronic adaptation and clutch kiss-point relearning'
    ]
  },
  {
    id: 'cooling-system',
    title: 'Cooling System & Thermostat Overhaul',
    category: 'maintenance',
    estimatedHours: '2.0h',
    badge: 'Preventive Essential',
    warranty: '12 Months Warranty',
    shortDesc: 'Water pump, aluminum radiator pressure testing, and vacuum-purged coolant refill.',
    details: [
      'Pressure testing up to 2.0 bar to detect micro-leaks',
      'Thermostat & high-flow water pump replacement',
      'Vacuum purging to eliminate all airlocks in engine block',
      'Organic long-life anti-freeze replenishment'
    ]
  },
  {
    id: 'track-inspection',
    title: 'Pre-Track Day & Pre-Purchase Inspection',
    category: 'diagnostics',
    estimatedHours: '1.5h',
    badge: '110-Point Checklist',
    warranty: 'Official AD Certification',
    shortDesc: 'Comprehensive 110-point mechanical, structural, and electronics stress audit.',
    details: [
      'Cylinder compression test & bore-scope inspection',
      'Wheel bearing, hub runout, and tire compound integrity check',
      'Paint depth meter analysis for prior body repairs',
      'Detailed signed technical evaluation certificate'
    ]
  }
];

export const REVIEWS = [
  {
    author: 'Gonçalo Ferreira',
    car: 'Porsche Cayman GT4',
    rating: 5,
    date: '2 days ago',
    text: 'AD Motorsport completely changed my perception of car workshops. Top-tier Hunter alignment, clean bays, and the lead technician walked me through every detail. Simply outstanding.'
  },
  {
    author: 'Beatriz Neves',
    car: 'Volkswagen Golf R (Mk8)',
    rating: 5,
    date: '1 week ago',
    text: 'Booked an oil and DSG service online. Exact turnaround time, zero hassle, and my car was ready ahead of schedule. Very modern and reliable.'
  },
  {
    author: 'Miguel Andrade',
    car: 'BMW M3 (G80)',
    rating: 5,
    date: '2 weeks ago',
    text: 'The expertise on performance German platforms is second to none. Brake flush and corner balancing dialed in to track perfection.'
  }
];

export const WORKSHOP_METRICS = [
  { value: '15+', label: 'Years Track & Street' },
  { value: '12,400+', label: 'Vehicles Serviced' },
  { value: '30 min', label: 'Express Diagnostics' },
  { value: '100%', label: 'OEM & High-Grade Parts' },
];
