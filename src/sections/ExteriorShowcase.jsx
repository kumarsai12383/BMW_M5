import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXTERIOR_GALLERY } from '../data/m5Data';

gsap.registerPlugin(ScrollTrigger);

export default function ExteriorShowcase() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Reveal gallery items using a sleek GSAP slide-up and fade
    gsap.fromTo(itemsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
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

  return (
    <section 
      id="exterior" 
      ref={containerRef}
      className="relative min-h-screen bg-black py-24 px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="absolute inset-0 carbon-texture opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-m-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-16 text-center">
          <span className="font-orbitron text-xs tracking-[0.3em] font-bold text-m-blue uppercase">// EXTERIOR DETAIL ANALYSIS</span>
          <h2 className="font-syncopate font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white mt-2">
            DESIGN DETAIL SHOWCASE
          </h2>
          <div className="w-16 h-[3px] bg-m-blue mt-4 mx-auto" />
        </div>

        {/* Dynamic Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXTERIOR_GALLERY.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (itemsRef.current[idx] = el)}
              className="relative h-[300px] sm:h-[380px] group overflow-hidden border border-white/5 bg-zinc-900 rounded-sm hover:border-zinc-700/50 transition-all duration-500"
            >
              {/* Image Frame */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out scale-100 group-hover:scale-110 filter brightness-75 group-hover:brightness-90"
                style={{ backgroundImage: `url(${item.url})` }}
              />

              {/* Grid HUD Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 hud-grid opacity-10 pointer-events-none z-10" />

              {/* Technical indicators inside image corners */}
              <div className="absolute top-4 left-4 z-20 font-orbitron text-[9px] text-zinc-400 select-none">
                SYS_LOC: M_EXT_0{idx + 1}
              </div>
              <div className="absolute top-4 right-4 z-20 font-orbitron text-[9px] text-m-blue font-bold select-none tracking-widest">
                ACTIVE
              </div>

              {/* Floating Bottom Card Text */}
              <div className="absolute bottom-6 left-6 right-6 z-20 transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="font-orbitron font-extrabold text-[9px] bg-m-red text-white py-1 px-3 skew-x-[-12deg] tracking-widest uppercase block w-max mb-3">
                  COMPETITION PKG
                </span>
                
                <h3 className="font-syncopate font-black text-lg sm:text-xl text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                
                <p className="text-xs text-zinc-400 font-inter leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Glowing Color Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-m-blue via-m-dark-blue to-m-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
