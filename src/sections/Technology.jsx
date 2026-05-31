import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TECH_FEATURES } from '../data/m5Data';
import { FiMonitor, FiNavigation, FiShield, FiCpu } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Technology() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Stagger fade-in of technology cards
    gsap.fromTo(cardRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  const getIcon = (idx) => {
    if (idx === 0) return <FiMonitor className="text-3xl text-m-blue" />;
    if (idx === 1) return <FiNavigation className="text-3xl text-m-dark-blue" />;
    if (idx === 2) return <FiShield className="text-3xl text-m-red" />;
    return <FiCpu className="text-3xl text-zinc-100" />;
  };

  return (
    <section 
      id="tech" 
      ref={containerRef}
      className="relative min-h-screen bg-zinc-950 py-24 px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="absolute inset-0 carbon-texture opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-m-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-m-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-orbitron text-xs tracking-[0.3em] font-bold text-m-blue uppercase">// INTEGRATED COCKPIT TECHNOLOGY</span>
          <h2 className="font-syncopate font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white mt-2">
            INTELLIGENT CONNECTIVITY
          </h2>
          <div className="w-16 h-[3px] bg-m-blue mt-4 mx-auto" />
        </div>

        {/* Futuristic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_FEATURES.map((tech, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="group relative glass-panel p-8 rounded-sm hover:border-zinc-500/20 transition-all duration-500 overflow-hidden"
            >
              {/* Corner decor highlights */}
              <div className="absolute top-0 left-0 w-3 h-[1px] bg-zinc-700 group-hover:bg-m-blue transition-colors duration-300" />
              <div className="absolute top-0 left-0 w-[1px] h-3 bg-zinc-700 group-hover:bg-m-blue transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-zinc-700 group-hover:bg-m-blue transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-zinc-700 group-hover:bg-m-blue transition-colors duration-300" />

              {/* Glowing gradient backdrops */}
              <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-zinc-800/10 blur-[80px] group-hover:bg-m-blue/10 transition-colors duration-700 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start gap-6">
                
                {/* Tech Icon wrapper */}
                <div className="p-4 bg-black/50 border border-white/5 rounded-xs flex items-center justify-center select-none shadow-inner shadow-black/80">
                  {getIcon(idx)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-syncopate font-bold text-base sm:text-lg text-white uppercase tracking-wider">
                      {tech.title}
                    </h3>
                    <span className="font-orbitron text-[9px] text-zinc-600 font-semibold select-none uppercase tracking-widest">
                      SYS_CONN: M5_0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 font-inter leading-relaxed">
                    {tech.detail}
                  </p>
                </div>

              </div>

              {/* Tech details coordinates footer inside card */}
              <div className="mt-8 border-t border-zinc-900/60 pt-4 flex items-center justify-between text-[10px] font-orbitron text-zinc-600 select-none">
                <span>INTEL_M5_BOARD_ACTIVE</span>
                <span className="group-hover:text-m-red transition-colors duration-300">0x889F_CALIBRATED</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
