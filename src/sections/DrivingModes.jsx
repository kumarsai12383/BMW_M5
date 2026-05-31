import { useState } from 'react';
import { DRIVING_MODES } from '../data/m5Data';

export default function DrivingModes() {
  const [activeMode, setActiveMode] = useState(DRIVING_MODES[0]);

  const selectMode = (mode) => {
    setActiveMode(mode);
  };

  return (
    <section 
      id="modes" 
      className="relative min-h-screen bg-black py-24 px-6 md:px-12 z-10 overflow-hidden"
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-10 transition-all duration-1000 ease-out pointer-events-none"
        style={{ backgroundColor: activeMode.accColor }}
      />
      <div className="absolute inset-0 carbon-texture opacity-15 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-orbitron text-xs tracking-[0.3em] font-bold text-m-red uppercase">// DYNAMIC CHASSIS MANAGEMENT</span>
          <h2 className="font-syncopate font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white mt-2">
            SELECT DRIVING DYNAMICS
          </h2>
          <div className="w-16 h-[3px] bg-m-red mt-4 mx-auto" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Mode Cards Deck */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {DRIVING_MODES.map((mode) => {
              const isSelected = activeMode.id === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => selectMode(mode)}
                  className={`text-left p-6 border transition-all duration-500 rounded-sm relative overflow-hidden group ${
                    isSelected 
                      ? 'border-white/20 bg-zinc-950/60 shadow-lg shadow-black/80' 
                      : 'border-white/5 bg-transparent hover:bg-white/2 hover:border-zinc-800'
                  }`}
                >
                  {/* Left thin color bar */}
                  <div 
                    className="absolute top-0 left-0 bottom-0 w-[4px] transition-all duration-500" 
                    style={{ backgroundColor: mode.accColor }}
                  />

                  {/* Skew mode indicator */}
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className="font-orbitron font-extrabold text-[9px] tracking-widest uppercase px-2 py-0.5 skew-x-[-10deg] text-white"
                      style={{ backgroundColor: mode.accColor }}
                    >
                      {mode.id === 'sportPlus' ? 'SPORT +' : mode.id.toUpperCase()}
                    </span>
                    <span className="font-orbitron text-[9px] text-zinc-600">SYS_MODE_0{mode.id === 'comfort' ? '1' : mode.id === 'sport' ? '2' : mode.id === 'sportPlus' ? '3' : '4'}</span>
                  </div>

                  <h3 className="font-syncopate font-bold text-lg tracking-wider text-white mb-2 uppercase">
                    {mode.name}
                  </h3>

                  <p className="text-xs text-zinc-400 font-inter leading-relaxed">
                    {mode.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: High-tech Telemetry HUD Screen */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Visual Telemetry Dashboard Screen */}
            <div className="flex-1 glass-panel-heavy p-8 rounded-sm border-white/10 flex flex-col justify-between relative overflow-hidden">
              
              {/* Decorative HUD scanning grid and status light */}
              <div className="absolute inset-0 hud-grid opacity-10 pointer-events-none" />
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-zinc-900/60 px-3 py-1 border border-zinc-800 text-[10px] font-orbitron text-zinc-400">
                <span 
                  className="w-1.5 h-1.5 rounded-full animate-ping"
                  style={{ backgroundColor: activeMode.accColor }}
                />
                <span>SYS_STATUS: CALIBRATED</span>
              </div>

              {/* Top row: Mode Title and active info */}
              <div>
                <span className="font-orbitron text-xs text-zinc-500 block mb-2 uppercase tracking-wider">
                  // REALTIME CHASSIS DIAGNOSTICS
                </span>
                <h3 className="font-syncopate font-black text-2xl text-white uppercase tracking-wider mb-6">
                  {activeMode.name} Active
                </h3>
              </div>

              {/* Middle row: Live telemetry dials */}
              <div className="grid grid-cols-2 gap-8 my-8">
                
                {/* Gauge 1: Throttle */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[11px] font-orbitron text-zinc-400 uppercase">
                    <span>Engine Response</span>
                    <span style={{ color: activeMode.accColor }} className="font-bold">{activeMode.telemetry.throttle}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{ 
                        width: activeMode.telemetry.throttle,
                        backgroundColor: activeMode.accColor 
                      }}
                    />
                  </div>
                </div>

                {/* Gauge 2: Suspension */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[11px] font-orbitron text-zinc-400 uppercase">
                    <span>Damping Stiffness</span>
                    <span style={{ color: activeMode.accColor }} className="font-bold">{activeMode.telemetry.damping}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{ 
                        width: activeMode.id === 'comfort' ? '30%' : activeMode.id === 'sport' ? '65%' : activeMode.id === 'sportPlus' ? '90%' : '100%',
                        backgroundColor: activeMode.accColor 
                      }}
                    />
                  </div>
                </div>

                {/* Gauge 3: Exhaust Valve */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[11px] font-orbitron text-zinc-400 uppercase">
                    <span>Exhaust Note</span>
                    <span style={{ color: activeMode.accColor }} className="font-bold">{activeMode.telemetry.exhaust}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{ 
                        width: activeMode.id === 'comfort' ? '15%' : activeMode.id === 'sport' ? '60%' : activeMode.id === 'sportPlus' ? '95%' : '100%',
                        backgroundColor: activeMode.accColor 
                      }}
                    />
                  </div>
                </div>

                {/* Gauge 4: M xDrive Power Split */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[11px] font-orbitron text-zinc-400 uppercase">
                    <span>M xDrive Split (F:R)</span>
                    <span style={{ color: activeMode.accColor }} className="font-bold">{activeMode.telemetry.split}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{ 
                        width: activeMode.id === 'comfort' ? '40%' : activeMode.id === 'sport' ? '30%' : activeMode.id === 'sportPlus' ? '20%' : '100%',
                        backgroundColor: activeMode.accColor 
                      }}
                    />
                  </div>
                </div>

              </div>

              {/* Bottom row: Telemetry diagnostics text */}
              <div className="border-t border-zinc-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="font-orbitron text-[9px] text-zinc-500 tracking-wider">
                  DYNAMIC_DSC_SETTING: {activeMode.id === 'track' ? 'DEACTIVATED [2WD]' : 'MDM_ENGAGED [4WD]'}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-orbitron text-[10px] text-zinc-400">EXHAUST FLAPS:</span>
                  <span 
                    className="font-orbitron text-[10px] font-bold uppercase py-0.5 px-2 skew-x-[-8deg] text-white"
                    style={{ backgroundColor: activeMode.accColor }}
                  >
                    {activeMode.id === 'comfort' ? 'Closed' : activeMode.id === 'sport' ? 'Open' : 'Race bypass'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
