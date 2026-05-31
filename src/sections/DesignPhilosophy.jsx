import  { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PHILOSOPHY_DATA } from '../data/m5Data';

gsap.registerPlugin(ScrollTrigger);

export default function DesignPhilosophy() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Reveal text block on scroll
    gsap.fromTo(textRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Reveal image block on scroll
    gsap.fromTo(imageContainerRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
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
      id="design" 
      ref={containerRef}
      className="relative min-h-screen bg-zinc-950 flex items-center justify-center py-24 px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="absolute inset-0 carbon-texture opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-m-blue/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl w-full relative z-10">
        
        {/* Header Block */}
        <div className="mb-16 text-center">
          <span className="font-orbitron text-xs tracking-[0.3em] font-bold text-m-red uppercase">// DESIGN PHILOSOPHY</span>
          <h2 className="font-syncopate font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white mt-2">
            {PHILOSOPHY_DATA.title}
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-zinc-400 font-inter leading-relaxed mt-6">
            {PHILOSOPHY_DATA.description}
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Nav / Specs */}
          <div ref={textRef} className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Tabs Selector */}
            <div className="flex flex-col gap-4">
              {PHILOSOPHY_DATA.categories.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-6 border-l-2 rounded-r-xs transition-all duration-300 ${
                    activeTab === idx 
                      ? 'border-m-red bg-white/5 shadow-md shadow-black/40' 
                      : 'border-zinc-800 bg-transparent hover:bg-white/2 hover:border-zinc-500'
                  }`}
                >
                  <span className={`font-orbitron text-[10px] tracking-widest block uppercase mb-1 ${
                    activeTab === idx ? 'text-m-red' : 'text-zinc-500'
                  }`}>
                    {cat.subtitle}
                  </span>
                  
                  <span className={`font-syncopate font-bold text-base tracking-wider uppercase block ${
                    activeTab === idx ? 'text-white' : 'text-zinc-400'
                  }`}>
                    {cat.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Content description */}
            <div className="p-6 bg-black/30 border border-white/5 rounded-xs mt-4">
              <p className="text-sm text-zinc-400 leading-relaxed font-inter">
                {PHILOSOPHY_DATA.categories[activeTab].description}
              </p>
            </div>

          </div>

          {/* Right Column: High-fidelity Visual Gallery Frame */}
          <div ref={imageContainerRef} className="lg:col-span-7 h-[350px] sm:h-[450px] md:h-[500px] w-full relative overflow-hidden group border border-white/10 rounded-sm">
            
            {/* Overlay Grid lines for futuristic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10 pointer-events-none" />
            <div className="absolute inset-0 hud-grid opacity-10 z-10 pointer-events-none" />

            {/* Corner Bracket Decorators */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/30 z-20 group-hover:border-m-blue transition-colors duration-500" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/30 z-20 group-hover:border-m-blue transition-colors duration-500" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/30 z-20 group-hover:border-m-blue transition-colors duration-500" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/30 z-20 group-hover:border-m-blue transition-colors duration-500" />

            {/* Image container transition */}
            {PHILOSOPHY_DATA.categories.map((cat, idx) => (
              <div
                key={cat.id}
                className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 ease-out origin-center ${
                  activeTab === idx 
                    ? 'opacity-100 scale-100 pointer-events-auto' 
                    : 'opacity-0 scale-105 pointer-events-none'
                }`}
                style={{ backgroundImage: `url(${cat.image})` }}
              >
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="font-orbitron font-bold text-[9px] bg-m-red text-white py-1 px-3 skew-x-[-10deg] tracking-widest uppercase">
                    LIVE_VIEW: 00{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
