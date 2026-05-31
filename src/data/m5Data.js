// High-fidelity data for BMW M5 Competition Landing Page

export const HERO_DATA = {
  title: "Power Without Compromise",
  subtitle: "617 Horsepower. Pure M Performance.",
  badge: "M5 COMPETITION",
  bgimg: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ctaText: "Configure Yours",
  secondaryCtaText: "Experience V8 Sound",
};

export const SPECS_DATA = [
  { id: "hp", label: "Horsepower", value: 617, unit: "HP", desc: "4.4-Liter Twin-Turbo V8 Engine" },
  { id: "torque", label: "Torque", value: 750, unit: "Nm", desc: "1,800 - 5,860 RPM Range" },
  { id: "sprint", label: "0-100 km/h", value: 3.3, unit: "sec", desc: "Propelled by M xDrive AWD System", isFloat: true },
  { id: "speed", label: "Top Speed", value: 305, unit: "km/h", desc: "With M Driver's Package enabled" },
];

export const PHILOSOPHY_DATA = {
  title: "AESTHETICS OF EXTREMES",
  description: "The BMW M5 Competition merges executive luxury with blistering track performance. Every line is optimized for aerodynamics, cooling, and visual dominance.",
  categories: [
    {
      id: "exterior",
      title: "Aggressive Exterior",
      subtitle: "Sculpted for Dominance",
      image: "https://images.unsplash.com/photo-1616455165195-239de2592faa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "From the redesigned M double-bar kidney grille to the carbon-fiber roof, the exterior conveys pure performance. The quad exhaust tailpipes hint at the immense power beneath."
    },
    {
      id: "interior",
      title: "Bespoke Interior",
      subtitle: "Driver-Centric Cockpit",
      image: "https://images.unsplash.com/photo-1642909780777-0709da237c1f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Step inside a sanctuary of speed. Featuring M Merino leather sports seats with illuminated M5 badges, M steering wheel with customizable red M1/M2 memory buttons, and carbon fiber trim."
    },
    {
      id: "aerodynamics",
      title: "Advanced Aerodynamics",
      subtitle: "Engineered by Airflow",
      image: "https://plus.unsplash.com/premium_photo-1736175469608-70e99883e1c3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Optimized air intake channels guide wind to the active cooling vents and massive M brakes, while the carbon rear spoiler and rear diffuser maximize downforce at high velocities."
    }
  ]
};

export const ENGINE_DATA = {
  title: "HEART OF THE MONSTER",
  subtitle: "Pure M Engineering",
  engineImage: "https://images.unsplash.com/photo-1744223736435-be69cb546250?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    {
      title: "4.4L TwinPower Turbo V8",
      description: "Two twin-scroll turbochargers positioned in the 'V' between cylinder banks. Cross-bank exhaust manifold optimizes engine response and power delivery."
    },
    {
      title: "Intelligent M xDrive",
      description: "Rear-biased all-wheel-drive system that distributes power smoothly. Select 4WD for ultimate grip, 4WD Sport for track dynamics, or 2WD for pure rear-wheel action."
    },
    {
      title: "Adaptive M Suspension",
      description: "Electronically controlled dampers continuously adapt to road conditions and driver inputs. Dynamic Damper Control delivers racetrack precision."
    }
  ]
};

export const EXTERIOR_GALLERY = [
  {
    title: "M Kidney Grille",
    desc: "Aggressive glossy black double-bar design.",
    url: "https://images.unsplash.com/photo-1652890058094-a3fe8ead30fa?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Carbon Fiber Roof",
    desc: "Reduces vehicle weight and lowers center of gravity.",
    url: "https://images.unsplash.com/photo-1675574697371-93409a25257c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Laserlight Headlights",
    desc: "Piercing blue accents with up to 650m visibility range.",
    url: "https://images.unsplash.com/photo-1714434087918-4b9abedef3c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "M Performance Wheels",
    desc: "20\" Bi-color light alloy wheels with high-performance tires.",
    url: "https://images.unsplash.com/photo-1610392993153-969fb100f721?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const INTERIOR_GALLERY = [
  {
    title: "Ambient Cockpit Lighting",
    desc: "Dynamic LED colors customizable across M-sport tones.",
    url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "M Multifunction Sports Seats",
    desc: "Deep bolsters with illuminated M5 badges and full pneumatic support.",
    url: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Live Cockpit Professional",
    desc: "12.3\" Digital Instrument Panel paired with M Head-Up Display.",
    url: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=800"
  }
];

export const DRIVING_MODES = [
  {
    id: "comfort",
    name: "Comfort Mode",
    accColor: "#0066b2",
    desc: "Optimized for daily luxury. Suspension dampers soften, exhaust notes quieten, and M xDrive balances power for absolute composure.",
    telemetry: { throttle: "40%", damping: "Soft", exhaust: "Closed", split: "40:60" }
  },
  {
    id: "sport",
    name: "Sport Mode",
    accColor: "#1357a6",
    desc: "Tightens the reins. Dynamic dampers stiffen, engine throttle response sharpens, and the steering weights up for precision cornering.",
    telemetry: { throttle: "75%", damping: "Firm", exhaust: "Vibrant", split: "30:70" }
  },
  {
    id: "sportPlus",
    name: "Sport Plus",
    accColor: "#8b5cf6",
    desc: "Pure aggression. Engine operates with zero-lag boost. Suspension reaches circuit-ready stiff configurations and exhaust flaps open fully.",
    telemetry: { throttle: "95%", damping: "Race-Stiff", exhaust: "Unrestricted", split: "20:80" }
  },
  {
    id: "track",
    name: "Track Mode",
    accColor: "#e3001b",
    desc: "Unlocked track dominance. Turns off all driver aids. Centers cockpit displays on timing and tyre temperatures. M xDrive changes to pure 2WD.",
    telemetry: { throttle: "100%", damping: "Track-Tune", exhaust: "Deafening", split: "0:100 (RWD)" }
  }
];

export const TECH_FEATURES = [
  {
    title: "BMW Curved Display",
    detail: "A magnificent single piece of anti-reflective glass housing a 12.3\" display and 14.9\" control display. Optimized for M telemetry.",
    iconName: "BiCameraMovie"
  },
  {
    title: "M Head-Up Display",
    detail: "Projects racing tachometer, gear shift indicators, and navigation instructions directly onto the windshield in full vibrant colors.",
    iconName: "BiNavigation"
  },
  {
    title: "Driver Assistance Pro",
    detail: "Equipped with steering and lane control assist, automatic speed limit assist, and active cruise control up to racing speeds.",
    iconName: "BiShieldQuarter"
  },
  {
    title: "Intelligent M Telemetry",
    detail: "Built-in drift analyzer and lap timer tracks lateral acceleration, slip angles, and lap records, exporting data directly to your smartphone.",
    iconName: "BiLineChart"
  }
];

export const EVOLUTION_TIMELINE = [
  {
    year: "1985",
    model: "E28 M5",
    engine: "3.5L Inline-6 (M88)",
    power: "282 HP",
    sprint: "6.5s",
    desc: "The legend is born. Hand-built on the 5-Series chassis, it was the fastest production sedan in the world.",
    image: "https://th.bing.com/th/id/OIP.0yCwTn3Oqza1bcYMXYySjAHaE7?w=252&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" // Classic BMW profile
  },
  {
    year: "1998",
    model: "E39 M5",
    engine: "4.9L Naturally Aspirated V8",
    power: "394 HP",
    sprint: "5.3s",
    desc: "Widely regarded as the ultimate luxury supersedan. Introduced double VANOS timing and classic muscular contours.",
    image: "https://th.bing.com/th/id/OIP.xw8Mxq8q4wzaYdPepRRkFAHaFg?w=214&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    year: "2005",
    model: "E60 M5",
    engine: "5.0L Formula-1 Inspired V10",
    power: "500 HP",
    sprint: "4.7s",
    desc: "An engineering masterpiece. High-revving atmospheric V10 paired with a sequential 7-speed SMG gearbox.",
    image: "https://th.bing.com/th/id/OIP.o4nC15vNK5W1ZVlbM8qiiAHaE8?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    year: "2018",
    model: "F90 M5",
    engine: "4.4L Twin-Turbo V8",
    power: "600 HP (617 in Comp)",
    sprint: "3.3s",
    desc: "Redefined speed with the introduction of customizable M xDrive AWD system and twin-scroll hot-V turbochargers.",
    image: "https://th.bing.com/th/id/OIP.5FOAPWu8n2J26uKlXGjx1AHaD4?w=330&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    year: "2025",
    model: "G90 M5",
    engine: "4.4L V8 Plug-in Hybrid M Hybrid",
    power: "717 HP (System output)",
    sprint: "3.5s",
    desc: "The next era. Merges twin-turbo V8 internal combustion with an electric powertrain to produce colossal torque.",
    image: "https://th.bing.com/th/id/OIP.mQXMuzEq-9O2UFFYAZeVJQHaE8?w=276&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  }
];

export const HERITAGE_STATS = [
  { label: "Years of M Heritage", value: 54, suffix: "+", desc: "Pioneering high performance since 1972" },
  { label: "Racing Victories", value: 1200, suffix: "+", desc: "Podiums, endurance tests, touring championships" },
  { label: "M5 Global Deliveries", value: 150, suffix: "k+", desc: "Supplying speed to enthusiasts globally" },
  { label: "Engineering Awards", value: 85, suffix: "+", desc: "Engine of the year, design, chassis innovation" }
];

export const TESTIMONIALS = [
  {
    quote: "The BMW M5 Competition remains the ultimate benchmark. It's a luxury limousine with the black soul of a supercar.",
    author: "Top Gear",
    role: "Editorial Board"
  },
  {
    quote: "617 horsepower has never felt so usable. The transition from comfortable executive cruiser to tail-happy monster is magical.",
    author: "MotorTrend",
    role: "Senior Road Test Editor"
  },
  {
    quote: "Its V8 bellows like a Norse god of thunder. M xDrive AWD traction means you can deploy all of it, anytime, anywhere.",
    author: "Car and Driver",
    role: "Executive Editor"
  }
];
