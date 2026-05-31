import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const INTERIOR_HOTSPOTS = [
  {
    id: 1,
    top: "35%",
    left: "50%",
    title: "12.3\" Digital Instrument Panel",
    desc: "M-specific HUD styling displaying telemetry, gears, and dynamic driving stats directly in your direct line of sight."
  },
  {
    id: 2,
    top: "65%",
    left: "30%",
    title: "M Steering Wheel Buttons",
    desc: "Bespoke customizable memory buttons (M1/M2) allowing you to save engine, exhaust, suspension, and steering setups instantly."
  },
  {
    id: 3,
    top: "70%",
    left: "75%",
    title: "Illuminated M Merino Sports Seats",
    desc: "Finished in exclusive high-grade grain leather with 3D contours and illuminated active M5 badges on the headrests."
  },
  {
    id: 4,
    top: "45%",
    left: "20%",
    title: "Carbon Fiber Console Trim",
    desc: "Crafted with lightweight high-strength real carbon fiber weave in matte finishing, framing all luxury control nodes."
  }
];

export default function InteriorLuxury() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const cardRef = useRef(null);
  const [activeHotspot, setActiveHotspot] = useState(INTERIOR_HOTSPOTS[0]);

  useEffect(() => {
    // Fade in entire cabin panel
    gsap.fromTo(bgRef.current,
      { scale: 1.15, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section 
      id="interior" 
      ref={containerRef}
      className="relative min-h-screen bg-zinc-950 py-24 px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="absolute inset-0 carbon-texture opacity-[0.02] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-m-dark-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Editorial Header */}
        <div className="mb-12 text-center lg:text-left">
          <span className="font-orbitron text-xs tracking-[0.3em] font-bold text-m-red uppercase">// COCKPIT SANCTUARY</span>
          <h2 className="font-syncopate font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white mt-2">
            INTERIOR CRAFTSMANSHIP
          </h2>
          <div className="w-20 h-[3px] bg-m-red mt-4 mx-auto lg:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Frame: Panoramic Cabin View with hotspots */}
          <div className="lg:col-span-8 relative h-[300px] sm:h-[400px] md:h-[480px] bg-black border border-white/10 rounded-sm overflow-hidden group">
            
            {/* Main cabin background image */}
            <div 
              ref={bgRef}
              className="absolute inset-0 w-full h-full bg-cover bg-center filter brightness-50"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1635770311293-b09d08a522fc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 hud-grid opacity-15 pointer-events-none" />

            {/* Hotspots layer */}
            {INTERIOR_HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                className="absolute flex items-center justify-center w-8 h-8 rounded-full z-20 cursor-pointer group/spot active:scale-90"
                style={{ top: spot.top, left: spot.left }}
              >
                {/* Glowing ring */}
                <span className="absolute inset-0 rounded-full bg-m-red/20 border border-m-red animate-ping" />
                
                {/* Core button dot */}
                <span className={`absolute w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  activeHotspot.id === spot.id ? 'bg-m-red scale-125' : 'bg-white group-hover/spot:bg-m-red'
                }`} />
              </button>
            ))}

            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xs border border-white/5">
              <span className="w-1.5 h-1.5 bg-m-red rounded-full animate-ping" />
              <span className="font-orbitron text-[9px] text-zinc-400 tracking-widest uppercase">
                Interactive Cockpit Hotspots active
              </span>
            </div>

          </div>

          {/* Right Frame: Live specs detail panel */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Detail Dashboard Card */}
            <div 
              ref={cardRef}
              className="glass-panel p-8 rounded-sm relative border-m-red/20 h-auto sm:h-[280px] lg:h-[350px] flex flex-col justify-between"
            >
              <div>
                <span className="font-orbitron text-xs text-m-red font-bold tracking-widest block mb-4 uppercase">
                  {"// HUD_SPECIFICATION_0" + activeHotspot.id}
                </span>

                <h3 className="font-syncopate font-black text-lg sm:text-xl text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-4">
                  {activeHotspot.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-inter leading-relaxed">
                  {activeHotspot.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-4">
                <span className="font-orbitron text-[9px] text-zinc-500">SYS_INTERIOR: OPTIMIZED</span>
                <span className="font-orbitron text-[9px] text-m-blue font-bold tracking-wider">ACTIVE</span>
              </div>
            </div>

            {/* Small dynamic cockpit telemetry details row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-sm text-center">
                <span className="font-orbitron text-[9px] text-zinc-500 block uppercase">AMBIENT LUMENS</span>
                <span className="font-orbitron text-sm font-bold text-white block mt-1">450 LM</span>
              </div>
              <div className="glass-panel p-4 rounded-sm text-center">
                <span className="font-orbitron text-[9px] text-zinc-500 block uppercase">SEAT MEMORY</span>
                <span className="font-orbitron text-sm font-bold text-white block mt-1">M1 / M2 ACTIVE</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
