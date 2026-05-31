import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TESTIMONIALS } from '../data/m5Data';
import { FiMessageSquare } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Fade and slide reveal testimonials
    gsap.fromTo(cardRefs.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={containerRef}
      className="relative min-h-screen bg-black py-24 px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="absolute inset-0 carbon-texture opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-m-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="font-orbitron text-xs tracking-[0.3em] font-bold text-m-red uppercase">// CRITICAL ACCLAIM</span>
          <h2 className="font-syncopate font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white mt-2">
            THE JOURNALISTS VERDICT
          </h2>
          <div className="w-16 h-[3px] bg-m-red mt-4 mx-auto" />
        </div>

        {/* Premium Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="group relative glass-panel p-8 rounded-sm hover:border-zinc-500/20 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Corner decor bracket */}
              <div className="absolute top-4 left-4 font-orbitron text-[9px] text-zinc-600 select-none">
                {"VERDICT_FILE_0" + (idx + 1)}
              </div>
              <div className="absolute top-4 right-4 text-zinc-600 group-hover:text-m-red transition-colors duration-300">
                <FiMessageSquare className="text-base" />
              </div>

              {/* Quote Body */}
              <div className="mt-8 mb-12">
                <span className="font-serif text-5xl text-zinc-700/60 block leading-none select-none">“</span>
                <p className="text-sm sm:text-base text-zinc-300 font-inter leading-relaxed italic pr-4 mt-2">
                  {item.quote}
                </p>
              </div>

              {/* Critic Meta */}
              <div className="border-t border-zinc-900 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-syncopate font-black text-sm text-white tracking-widest uppercase">
                    {item.author}
                  </h4>
                  <span className="font-orbitron text-[9px] text-zinc-500 tracking-wider block mt-1 uppercase">
                    {item.role}
                  </span>
                </div>
                
                {/* Visual rating metric */}
                <div className="flex flex-col items-end">
                  <span className="font-orbitron text-[10px] text-m-blue font-bold tracking-widest uppercase">RATING</span>
                  <span className="font-orbitron text-xs font-black text-white mt-1">10 / 10</span>
                </div>
              </div>

              {/* Glowing left edge on active group hover */}
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-m-blue to-m-red scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
