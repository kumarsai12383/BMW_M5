import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ENGINE_DATA } from '../data/m5Data';

gsap.registerPlugin(ScrollTrigger);

export default function EngineExperience() {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  
  
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    
    // Create section pinning on desktop viewports
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftPanel,
        pinSpacing: false,
        scrub: true,
      });

      // Track active scrolling indices to update telemetry graphic on left panel
      const children = rightPanel.children;
      Array.from(children).forEach((child, index) => {
        ScrollTrigger.create({
          trigger: child,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveFeature(index),
          onEnterBack: () => setActiveFeature(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="engine" 
      ref={containerRef}
      className="relative min-h-[200vh] bg-black z-10 flex flex-col lg:flex-row"
    >
      {/* Left Column: Pinned Tech Visual Panel */}
      <div 
        ref={leftPanelRef}
        className="w-full lg:w-1/2 h-96 lg:h-screen sticky lg:relative top-0 flex flex-col items-center justify-center bg-zinc-950 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5"
      >
        {/* Background image V8 engine */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen scale-105"
          style={{ backgroundImage: `url(${ENGINE_DATA.engineImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />

        {/* Live HUD telemetry graphics */}
        <div className="relative z-10 p-8 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-orbitron text-[9px] tracking-widest text-zinc-500 uppercase">
              // M_POWER_ENGINEERING
            </span>
            <span className="font-orbitron text-[9px] tracking-widest text-m-red uppercase animate-pulse">
              SYS_DIAGNOSTICS: RUNNING
            </span>
          </div>

          {/* Interactive telemetry details changes based on right column index */}
          <div className="max-w-md mx-auto w-full glass-panel p-6 rounded-sm border-m-blue/20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-orbitron font-bold text-xs text-m-blue tracking-widest uppercase">
                {activeFeature === 0 ? "V8 TWIN-TURBO" : activeFeature === 1 ? "M xDRIVE AWD" : "ADAPTIVE SUSPENSION"}
              </span>
              <span className="font-orbitron text-[9px] text-zinc-500">SYS_V8_M5_2026</span>
            </div>

            {/* Simulated Live Gauges */}
            <div className="grid grid-cols-3 gap-4 text-center mt-2">
              <div>
                <span className="font-orbitron text-[9px] text-zinc-500 block uppercase">BOOST PRESSURE</span>
                <span className="font-orbitron text-sm font-bold text-white block mt-1">
                  {activeFeature === 0 ? "1.8 BAR" : activeFeature === 1 ? "1.2 BAR" : "0.5 BAR"}
                </span>
              </div>
              <div>
                <span className="font-orbitron text-[9px] text-zinc-500 block uppercase">OIL TEMP</span>
                <span className="font-orbitron text-sm font-bold text-white block mt-1">
                  {activeFeature === 0 ? "105 °C" : activeFeature === 1 ? "98 °C" : "96 °C"}
                </span>
              </div>
              <div>
                <span className="font-orbitron text-[9px] text-zinc-500 block uppercase">DIFF LOCK</span>
                <span className="font-orbitron text-sm font-bold text-white block mt-1">
                  {activeFeature === 0 ? "35%" : activeFeature === 1 ? "95%" : "15%"}
                </span>
              </div>
            </div>
            
            {/* Visualizer bar graph */}
            <div className="mt-4 h-1.5 w-full bg-zinc-800/80 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-m-blue to-m-red transition-all duration-700 ease-out"
                style={{ width: activeFeature === 0 ? "90%" : activeFeature === 1 ? "75%" : "45%" }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-orbitron text-[9px] text-zinc-600">LATENCY: &lt;1.2MS</span>
            <span className="font-orbitron text-[9px] text-zinc-600">BAYERISCHE MOTOREN WERKE AG</span>
          </div>
        </div>
      </div>

      {/* Right Column: Scrollable Engineering Explanations */}
      <div 
        ref={rightPanelRef}
        className="w-full lg:w-1/2 flex flex-col relative z-10"
      >
        {ENGINE_DATA.features.map((feature, idx) => (
          <div 
            key={idx}
            className="min-h-screen flex flex-col justify-center px-8 md:px-20 py-24 border-b border-zinc-900 bg-gradient-to-b from-transparent to-black/30"
          >
            <div className="mb-4">
              <span className="font-orbitron text-xs text-m-red font-bold tracking-widest uppercase">
                SYSTEM_MODULE_0{idx + 1}
              </span>
            </div>
            
            <h3 className="font-syncopate font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-6">
              {feature.title}
            </h3>
            
            <div className="w-12 h-1 bg-m-blue mb-8" />
            
            <p className="text-zinc-400 font-inter text-base leading-relaxed max-w-xl">
              {feature.description}
            </p>

            {/* Visual HUD coordinate grids */}
            <div className="mt-12 border border-zinc-800/40 p-4 rounded-sm max-w-lg bg-zinc-950/20 backdrop-blur-sm">
              <div className="flex items-center justify-between text-[10px] font-orbitron text-zinc-600 mb-2">
                <span>MODULE_SPEC: F90_ACTIVE</span>
                <span>STATUS: STABLE</span>
              </div>
              <div className="h-[1px] w-full bg-zinc-900 mb-2" />
              <div className="text-[11px] text-zinc-500 font-inter leading-relaxed">
                Integrated engine management and dynamic stability control sync. Calibrated strictly for the M5 Competition chassis package.
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
