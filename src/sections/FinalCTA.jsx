import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Reveal text block on scroll
    gsap.fromTo(headlineRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
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

    // Reveal CTA button on scroll
    gsap.fromTo(buttonRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  const handleCtaClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="cta" 
      ref={containerRef}
      className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center py-24 px-6 md:px-12 z-10 overflow-hidden"
    >
      {/* Background Cinematic Zoom-Out Frame */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 scale-100"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1714434087918-4b9abedef3c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black pointer-events-none" />
      <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
        
        {/* skew badge */}
        <div className="mb-8 flex h-6 items-stretch overflow-hidden font-orbitron font-extrabold text-[10px] uppercase tracking-[0.25em] skew-x-[-15deg] border border-white/20 select-none shadow-md shadow-m-blue/10">
          <div className="bg-m-blue w-[6px]"></div>
          <div className="bg-m-dark-blue w-[6px]"></div>
          <div className="bg-m-red w-[6px]"></div>
          <div className="bg-black/80 text-white px-4 flex items-center tracking-widest leading-none">
            BMW M PERFORMANCE
          </div>
        </div>

        {/* Large Cinematic Tagline */}
        <h2 
          ref={headlineRef}
          className="font-syncopate font-black text-3xl sm:text-5xl md:text-7xl uppercase tracking-tighter text-white leading-none mb-12"
        >
          THE ULTIMATE <br />
          <span className="text-m-gradient">DRIVING MACHINE.</span>
        </h2>

        {/* Interactive CTA buttons */}
        <div ref={buttonRef} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <button 
            onClick={handleCtaClick}
            className="w-full sm:w-auto px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] bg-m-red hover:bg-red-700 text-white rounded-xs transition-all duration-300 shadow-lg shadow-m-red/20 active:scale-95 border border-m-red"
          >
            Explore M5
          </button>
          
          <button 
            onClick={handleCtaClick}
            className="w-full sm:w-auto px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] border border-white/10 hover:border-white/30 text-white bg-white/5 backdrop-blur-md rounded-xs transition-all duration-300 active:scale-95"
          >
            Return to Top
          </button>
        </div>

      </div>

      {/* Decorative Technical Coordinates Footer */}
      <div className="absolute bottom-10 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-orbitron text-[9px] text-zinc-500 tracking-widest select-none">
        <div>CHASSIS: F90_COMP_V8</div>
        <div>CALIBRATION: ACTIVE_M_TRACTION</div>
        <div>MUNICH, DE // EST. 1972</div>
      </div>

    </section>
  );
}
