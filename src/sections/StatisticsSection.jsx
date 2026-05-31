import  { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERITAGE_STATS } from '../data/m5Data';

gsap.registerPlugin(ScrollTrigger);

export default function StatisticsSection() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [counts, setCounts] = useState({
    "Years of M Heritage": 0,
    "Racing Victories": 0,
    "M5 Global Deliveries": 0,
    "Engineering Awards": 0
  });

  useEffect(() => {
    // 1. Grid Cards Entrance Animation
    gsap.fromTo(cardRefs.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

   

  const animateStats = () => {
    const duration = 2.2; // seconds
    const fps = 60;
    const totalFrames = duration * fps;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easedProgress = progress * (2 - progress); // Ease out quad

      setCounts({
        "Years of M Heritage": Math.floor(easedProgress * 54),
        "Racing Victories": Math.floor(easedProgress * 1200),
        "M5 Global Deliveries": Math.floor(easedProgress * 150),
        "Engineering Awards": Math.floor(easedProgress * 85)
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts({
          "Years of M Heritage": 54,
          "Racing Victories": 1200,
          "M5 Global Deliveries": 150,
          "Engineering Awards": 85
        });
      }
    }, 1000 / fps);
  };
 // 2. Count Trigger
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 75%',
      onEnter: () => {
        animateStats();
      }
    });
  }, []);
  return (
    <section 
      id="stats" 
      ref={containerRef}
      className="relative min-h-screen bg-zinc-950 flex flex-col justify-center items-center py-24 px-6 md:px-12 z-10"
    >
      <div className="absolute inset-0 carbon-texture opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="font-orbitron text-xs tracking-[0.3em] font-bold text-m-blue uppercase">// HISTORIC MILESTONES</span>
          <h2 className="font-syncopate font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white mt-2">
            M DEPARTMENTS LEGACY
          </h2>
          <div className="w-16 h-[3px] bg-m-blue mt-4 mx-auto" />
        </div>

        {/* Modular Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HERITAGE_STATS.map((stat, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="group relative glass-panel p-8 text-center rounded-sm hover:border-zinc-500/20 transition-all duration-500 overflow-hidden"
            >
              {/* Futuristic design grid coordinates inside cards */}
              <span className="font-orbitron text-[9px] text-zinc-600 block text-left mb-6 select-none">
                {"[ STAT_BLOCK_0" + (idx + 1) + " ]"}
              </span>

              {/* Counting stat */}
              <div className="flex items-baseline justify-center gap-1 mb-3">
                <span className="font-orbitron font-black text-5xl sm:text-6xl text-white tracking-tighter tabular-nums transition-colors duration-300 group-hover:text-m-gradient">
                  {counts[stat.label]}
                </span>
                <span className="font-syncopate font-bold text-xl text-m-red">
                  {stat.suffix}
                </span>
              </div>

              <h3 className="font-syncopate font-bold text-xs tracking-widest text-zinc-300 uppercase mb-4">
                {stat.label}
              </h3>

              <div className="h-[1px] w-12 bg-zinc-800 mx-auto my-4 group-hover:w-20 transition-all duration-500" />

              <p className="text-xs text-zinc-400 font-inter leading-relaxed max-w-[200px] mx-auto">
                {stat.desc}
              </p>

              {/* Top border glowing highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-m-blue via-m-dark-blue to-m-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-20" />
            </div>
          ))}
        </div>

        {/* Legacy statement banner */}
        <div className="mt-20 glass-panel p-8 rounded-sm text-center max-w-4xl mx-auto border-m-red/10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-m-red" />
          <p className="font-syncopate font-black text-sm sm:text-lg tracking-widest text-white uppercase mb-2">
            "WE DO NOT RENT SPEED. WE COMPOSE ART."
          </p>
          <p className="font-orbitron text-[10px] text-zinc-500 tracking-wider">
            BMW M DIVISION - EST. 1972 GARCHING, DE
          </p>
        </div>

      </div>
    </section>
  );
}
