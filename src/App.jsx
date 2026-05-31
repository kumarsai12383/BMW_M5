import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Layout & Navigation Components
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';

// Sections
import HeroSection from './sections/HeroSection';
import PerformanceOverview from './sections/PerformanceOverview';
import DesignPhilosophy from './sections/DesignPhilosophy';
import EngineExperience from './sections/EngineExperience';
import ExteriorShowcase from './sections/ExteriorShowcase';
import InteriorLuxury from './sections/InteriorLuxury';
import DrivingModes from './sections/DrivingModes';
import Technology from './sections/Technology';
import EvolutionTimeline from './sections/EvolutionTimeline';
import StatisticsSection from './sections/StatisticsSection';
import Testimonials from './sections/Testimonials';
import FinalCTA from './sections/FinalCTA';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential ease
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // 2. Synchronize Lenis scrolling updates with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // convert GSAP ticker time to milliseconds
    });

    gsap.ticker.lagSmoothing(0);

    // 3. Clean up on unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen antialiased selection:bg-m-red selection:text-white overflow-x-hidden font-inter">
      {/* Scroll Progress Tracker Bar */}
      <ScrollProgress />

      {/* Global Dynamic Blur Navbar */}
      <Navbar />

      {/* Landing Page Content Sections */}
      <main className="w-full">
        <HeroSection />
        <PerformanceOverview />
        <DesignPhilosophy />
        <EngineExperience />
        <ExteriorShowcase />
        <InteriorLuxury />
        <DrivingModes />
        <Technology />
        <EvolutionTimeline />
        <StatisticsSection />
        <Testimonials />
        <FinalCTA />
      </main>

      {/* Global Performance HUD footer decorator */}
      <footer className="bg-zinc-950 py-10 px-6 border-t border-white/5 relative z-10 select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-4 items-stretch overflow-hidden font-orbitron font-black text-[9px] skew-x-[-15deg] border border-white/10">
              <div className="bg-m-blue w-1.5"></div>
              <div className="bg-m-dark-blue w-1.5"></div>
              <div className="bg-m-red w-1.5"></div>
              <div className="bg-black text-white px-2 flex items-center tracking-widest leading-none">M</div>
            </div>
            <span className="font-syncopate tracking-widest text-xs font-bold text-zinc-400">M5 COMPETITION</span>
          </div>

          <p className="text-[10px] font-orbitron text-zinc-500 tracking-wider text-center md:text-right">
            © 2026 BMW AG. This page is a high-fidelity creative concept. Sourced with royalty-free assets. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
