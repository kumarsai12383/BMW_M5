import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HERO_DATA } from "../data/m5Data";
import { FiVolume2 } from "react-icons/fi";

export default function HeroSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const ctaRef = useRef(null);
  const bgImageRef = useRef(null);

  const [isPlayingSound, setIsPlayingSound] = useState(false);

  useEffect(() => {
    // Parallax & zoom scroll effect on background image
    gsap.to(bgImageRef.current, {
      scale: 1.15,
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Main entrance animations with stagger
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1.5 },
    });

    tl.fromTo(
      bgImageRef.current,
      { scale: 1.3, filter: "brightness(0)" },
      { scale: 1.05, filter: "brightness(0.5)", duration: 2.2 },
    )
      .fromTo(
        badgeRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=1.2",
      )
      .fromTo(
        titleRef.current.children,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1.2 },
        "-=1",
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8",
      )
      .fromTo(
        ctaRef.current.children,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.15, duration: 0.8 },
        "-=0.6",
      );
  }, []);

  // Web Audio API raw V8 Subtractive Synthesizer
  const playV8Sound = () => {
    if (isPlayingSound) return;
    setIsPlayingSound(true);

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();

      // We will create a complex waveform for raw V8 rumble:
      // A mixture of sawtooth and triangle oscillators running at deep frequencies
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const osc3 = ctx.createOscillator();

      const filter = ctx.createBiquadFilter();
      const gainNode = ctx.createGain();

      // Master configuration
      filter.type = "lowpass";
      filter.Q.value = 5;

      osc1.type = "sawtooth";
      osc2.type = "sawtooth";
      osc3.type = "triangle";

      // Deep rumbling frequencies (4 cylinder cycles roughly)
      osc1.frequency.setValueAtTime(32, ctx.currentTime);
      osc2.frequency.setValueAtTime(32.4, ctx.currentTime);
      osc3.frequency.setValueAtTime(64, ctx.currentTime);

      // Low pass filter cuts harsh highs
      filter.frequency.setValueAtTime(100, ctx.currentTime);

      // Gain setup for exhaust notes
      gainNode.gain.setValueAtTime(0.001, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      osc3.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc3.start();

      const now = ctx.currentTime;

      // Start engine sound sequence (The Roar & Revs!)
      // 1. Starter motor click and initial surge
      gainNode.gain.exponentialRampToValueAtTime(0.4, now + 0.1);
      filter.frequency.exponentialRampToValueAtTime(350, now + 0.1);
      osc1.frequency.exponentialRampToValueAtTime(85, now + 0.15);
      osc2.frequency.exponentialRampToValueAtTime(85.5, now + 0.15);

      // 2. Settle into high idle
      gainNode.gain.exponentialRampToValueAtTime(0.2, now + 0.6);
      filter.frequency.exponentialRampToValueAtTime(180, now + 0.6);
      osc1.frequency.exponentialRampToValueAtTime(45, now + 0.6);
      osc2.frequency.exponentialRampToValueAtTime(45.5, now + 0.6);

      // 3. Huge throttle blip/rev
      const revTime = now + 1.2;
      gainNode.gain.exponentialRampToValueAtTime(0.65, revTime);
      filter.frequency.exponentialRampToValueAtTime(600, revTime);
      osc1.frequency.exponentialRampToValueAtTime(160, revTime);
      osc2.frequency.exponentialRampToValueAtTime(161, revTime);

      // 4. Return to a menacing idle rumble
      const idleTime = now + 2.4;
      gainNode.gain.exponentialRampToValueAtTime(0.15, idleTime);
      filter.frequency.exponentialRampToValueAtTime(120, idleTime);
      osc1.frequency.exponentialRampToValueAtTime(35, idleTime);
      osc2.frequency.exponentialRampToValueAtTime(35.3, idleTime);

      // 5. Fade out complete
      const stopTime = now + 3.8;
      gainNode.gain.linearRampToValueAtTime(0.001, stopTime);

      setTimeout(() => {
        osc1.stop();
        osc2.stop();
        osc3.stop();
        ctx.close();
        setIsPlayingSound(false);
      }, 4000);
    } catch (e) {
      console.error("Audio Context failed: ", e);
      setIsPlayingSound(false);
    }
  };

  const handleCtaClick = () => {
    const element = document.getElementById("performance");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-inter"
    >
      {/* Background Cinematic Image */}
      <div>
        <video
          src={HERO_DATA.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Futuristic Grid Overlay & Shadow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 hud-grid opacity-30 pointer-events-none" />

      {/* Main Hero Contents */}
      <div className="relative z-10 text-center px-6 max-w-5xl top-30 flex flex-col items-center">
        {/* skew badge */}
        <div
          ref={badgeRef}
          className="mb-6 flex h-6 items-stretch overflow-hidden font-orbitron font-extrabold text-[10px] uppercase tracking-[0.25em] skew-x-[-15deg] border border-white/20 select-none shadow-md shadow-m-blue/10"
        >
          <div className="bg-m-blue w-[6px]"></div>
          <div className="bg-m-dark-blue w-[6px]"></div>
          <div className="bg-m-red w-[6px]"></div>
          <div className="bg-black/80 text-white px-4 flex items-center tracking-widest leading-none">
            {HERO_DATA.badge}
          </div>
        </div>

        {/* Cinematic Title Reveal */}
        <h1
          ref={titleRef}
          className="font-syncopate font-black text-4xl sm:text-6xl md:text-8xl tracking-tighter text-white leading-none mb-6 uppercase flex flex-wrap justify-center gap-x-4 overflow-hidden"
        >
          {HERO_DATA.title.split(" ").map((word, i) => (
            <span key={i} className="inline-block">
              {word}
            </span>
          ))}
        </h1>

        {/* Sleek Subheading */}
        <p
          ref={subtitleRef}
          className="font-orbitron font-medium text-sm sm:text-lg md:text-xl text-zinc-300 tracking-[0.15em] mb-12"
        >
          {HERO_DATA.subtitle}
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <button
            onClick={handleCtaClick}
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] bg-m-red hover:bg-red-700 text-white rounded-xs transition-all duration-300 shadow-lg shadow-m-red/20 active:scale-95"
          >
            {HERO_DATA.ctaText}
          </button>

          <button
            onClick={playV8Sound}
            disabled={isPlayingSound}
            className={`w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] border border-white/10 hover:border-white/30 text-white rounded-xs transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md active:scale-95 ${
              isPlayingSound
                ? "bg-m-blue/30 border-m-blue/50 text-m-blue animate-pulse"
                : "bg-white/5"
            }`}
          >
            <FiVolume2 className="text-base" />
            {isPlayingSound ? "Synthesizing V8..." : HERO_DATA.secondaryCtaText}
          </button>
        </div>
      </div>

      {/* Floating HUD telemetry coordinates */}
      <div className="absolute bottom-10 left-10 hidden lg:block font-orbitron text-[9px] text-zinc-600 tracking-widest select-none">
        <div className="mb-1">
          LAT: 48.1775° N | LON: 11.5587° E (MUNICH, DE)
        </div>
        <div>SYS_ACTIVE: M_DYNAMIC_DSC [OFF]</div>
      </div>

      {/* Mouse Floating Scroll Down Indicator */}
      <div
        className="absolute bottom-10 flex flex-col items-center select-none cursor-pointer"
        onClick={handleCtaClick}
      >
        <div className="w-[20px] h-[34px] rounded-full border-2 border-zinc-500/50 flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-m-red rounded-full animate-bounce" />
        </div>
        <span className="font-orbitron text-[9px] text-zinc-500 tracking-[0.3em] uppercase mt-2">
          Scroll to discover
        </span>
      </div>
    </section>
  );
}
