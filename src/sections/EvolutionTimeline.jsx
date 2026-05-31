import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EVOLUTION_TIMELINE } from '../data/m5Data';

gsap.registerPlugin(ScrollTrigger);

export default function EvolutionTimeline() {
  const containerRef = useRef(null);
  const scrollTrackRef = useRef(null);

  useEffect(() => {
    const scrollTrack = scrollTrackRef.current;
    
    // Total translation amount is width of track minus width of viewport
    let ctx = gsap.context(() => {
      const getScrollAmount = () => {
        let trackWidth = scrollTrack.offsetWidth;
        return -(trackWidth - window.innerWidth);
      };

      gsap.to(scrollTrack, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollTrack.offsetWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="timeline" 
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden z-10"
    >
      {/* HUD scanning grid overlay */}
      <div className="absolute inset-0 carbon-texture opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-20" />

      {/* Static header floating at the top of the pinned section */}
      <div className="absolute top-16 left-6 md:left-16 z-20">
        <span className="font-orbitron text-xs tracking-[0.3em] font-bold text-m-red uppercase">// HERITAGE CHRONOLOGY</span>
        <h2 className="font-syncopate font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-white mt-2">
          THE EVOLUTION OF SPEED
        </h2>
        <div className="w-16 h-[3px] bg-m-red mt-4" />
      </div>

      {/* Horizontal Scroll Track */}
      <div 
        ref={scrollTrackRef}
        className="flex items-center gap-12 px-6 md:px-20 min-h-screen w-max pt-20"
      >
        {EVOLUTION_TIMELINE.map((item, idx) => (
          <div 
            key={idx}
            className="w-[300px] sm:w-[450px] md:w-[500px] flex-shrink-0 flex flex-col justify-center relative mt-12"
          >
            {/* Background glowing index number */}
            <div className="absolute -top-16 left-0 font-syncopate font-black text-8xl md:text-[11rem] text-zinc-900/40 select-none tracking-tighter pointer-events-none">
              0{idx + 1}
            </div>

            {/* Vintage style image frame */}
            <div className="h-[200px] sm:h-[280px] w-full bg-zinc-900 border border-white/10 rounded-sm overflow-hidden relative group">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              
              {/* Year indicator overlay */}
              <div className="absolute bottom-4 left-4 z-10 font-orbitron font-black text-3xl text-white tracking-widest">
                {item.year}
              </div>
            </div>

            {/* Content box details */}
            <div className="mt-6 pl-4 border-l-2 border-m-red">
              <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                <h3 className="font-syncopate font-black text-xl text-white uppercase tracking-wider">
                  {item.model}
                </h3>
                <span className="font-orbitron text-[10px] text-m-blue font-bold tracking-widest uppercase">
                  {item.engine}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-orbitron text-zinc-500 uppercase tracking-widest mb-4">
                <div>POWER: <span className="text-white font-bold">{item.power}</span></div>
                <div>0-100: <span className="text-m-red font-bold">{item.sprint}</span></div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 font-inter leading-relaxed max-w-lg">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Ending slide visual buffer */}
        <div className="w-[100px] sm:w-[250px] flex-shrink-0" />

      </div>

      {/* Horizontal Scroll visual guide line */}
      <div className="absolute bottom-12 left-6 right-6 h-[1px] bg-zinc-800/40 z-20 flex justify-between items-center text-[10px] font-orbitron text-zinc-500 select-none">
        <span>EST_1985 // BMW M GMBH</span>
        <span className="animate-pulse">SCROLL_DOWN_TO_DRAG &gt;&gt;</span>
        <span>NEXT_ERA // G90 M5</span>
      </div>
    </section>
  );
}
