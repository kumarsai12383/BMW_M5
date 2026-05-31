import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SPECS_DATA } from '../data/m5Data';

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceOverview() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [counts, setCounts] = useState({
    hp: 0,
    torque: 0,
    sprint: 0,
    speed: 0
  });

  useEffect(() => {
    // 1. Grid Cards Entrance Animation
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

    // 2. Dynamic ScrollTrigger-based Counter Animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 70%',
      onEnter: () => {
        animateCounters();
      }
    });
  }, []);

  const animateCounters = () => {
    const duration = 2.0; // seconds
    const fps = 60;
    const totalFrames = duration * fps;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Easing out quad
      const easedProgress = progress * (2 - progress);

      setCounts({
        hp: Math.floor(easedProgress * 617),
        torque: Math.floor(easedProgress * 750),
        sprint: parseFloat((easedProgress * 3.3).toFixed(1)),
        speed: Math.floor(easedProgress * 305)
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
        // Ensure exact target values
        setCounts({
          hp: 617,
          torque: 750,
          sprint: 3.3,
          speed: 305
        });
      }
    }, 1000 / fps);
  };

  const getTargetValue = (id) => {
    if (id === 'hp') return counts.hp;
    if (id === 'torque') return counts.torque;
    if (id === 'sprint') return counts.sprint;
    if (id === 'speed') return counts.speed;
    return 0;
  };

  return (
    <section 
      id="performance" 
      ref={containerRef}
      className="relative min-h-screen bg-black flex flex-col justify-center items-center py-24 px-6 md:px-12 z-10"
    >
      {/* Dynamic carbon-texture border and HUD lines */}
      <div className="absolute inset-0 carbon-texture opacity-15 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl w-full relative z-10">
        
        {/* Editorial Subheader */}
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-block text-xs uppercase tracking-[0.3em] font-orbitron font-bold text-m-blue mb-4">
            // LIVE PERFORMANCE TELEMETRY
          </div>
          <h2 className="font-syncopate font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white">
            COMPETITION SPECIFICATIONS
          </h2>
          <div className="w-20 h-[3px] bg-m-red mt-4 mx-auto lg:mx-0" />
        </div>

        {/* Dashboard-style Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {SPECS_DATA.map((spec, i) => (
            <div
              key={spec.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="group relative glass-panel p-8 rounded-sm hover:border-zinc-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Corner tech marks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-700 group-hover:border-m-blue transition-colors duration-300" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-700 group-hover:border-m-blue transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-700 group-hover:border-m-blue transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-700 group-hover:border-m-blue transition-colors duration-300" />

              {/* Glowing color block on active spec */}
              <div className={`absolute -right-16 -bottom-16 w-32 h-32 rounded-full blur-[64px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none ${
                spec.id === 'hp' ? 'bg-m-blue' :
                spec.id === 'torque' ? 'bg-m-dark-blue' :
                spec.id === 'sprint' ? 'bg-m-red' : 'bg-zinc-100'
              }`} />

              <span className="font-orbitron text-xs tracking-widest text-zinc-500 block mb-6">
                {"[ " + spec.label.toUpperCase() + " ]"}
              </span>

              {/* Value and unit counter */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-orbitron font-black text-5xl md:text-6xl text-white tracking-tighter tabular-nums transition-colors duration-300 group-hover:text-m-gradient">
                  {getTargetValue(spec.id)}
                </span>
                <span className="font-syncopate font-bold text-lg text-m-red tracking-wider">
                  {spec.unit}
                </span>
              </div>

              <div className="h-[2px] w-full bg-zinc-800/40 relative mb-4">
                <div className={`absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-1000 ease-out ${
                  spec.id === 'hp' ? 'bg-m-blue' :
                  spec.id === 'torque' ? 'bg-m-dark-blue' :
                  spec.id === 'sprint' ? 'bg-m-red' : 'bg-zinc-400'
                }`} />
              </div>

              <p className="text-xs text-zinc-400 font-inter leading-relaxed">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Rev-counter indicator bar */}
        <div className="mt-16 w-full glass-panel p-6 rounded-sm flex items-center gap-6 overflow-hidden">
          <span className="font-orbitron text-[10px] text-zinc-500 tracking-widest min-w-[70px] uppercase">M-REV LIMIT</span>
          <div className="flex-1 flex gap-1 h-5 overflow-hidden">
            {Array.from({ length: 40 }).map((_, i) => {
              let color = 'bg-zinc-800';
              if (i < 25) color = 'bg-m-blue/30 group-hover:bg-m-blue';
              else if (i < 34) color = 'bg-m-dark-blue/40';
              else color = 'bg-m-red/40 animate-pulse';
              
              return (
                <div 
                  key={i} 
                  className={`flex-1 ${color} rounded-sm transition-all duration-300 hover:scale-y-125`}
                  style={{ transitionDelay: `${i * 15}ms` }}
                />
              );
            })}
          </div>
          <span className="font-orbitron text-xs font-bold text-m-red tracking-widest">7,200 RPM</span>
        </div>

      </div>
    </section>
  );
}
