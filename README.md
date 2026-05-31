# BMW M5 Competition Landing Page

A premium, highly interactive, and cinematic digital launch experience for the legendary **BMW M5 Competition (F90)**. This landing page is inspired by the official BMW M website, Apple Product Pages, and luxury sports car configurators.

---

## 🚀 Experience Highlights

* **Browser-Synthesized V8 Sound (Web Audio API)**:
  An interactive subtractive audio synthesizer. Instead of using massive, slow-to-load audio files, it utilizes the native browser `AudioContext` to construct real V8 engine frequencies, throttle blips, start-ups, and idle rumbles.
* **Lenis Smooth Scroll & GSAP Sync**:
  A butter-smooth scrolling experience synchronized directly with GSAP's `ScrollTrigger` ticker loop.
* **Chassis Telemetry & Driving Dynamics Selector**:
  Select different modes (Comfort, Sport, Sport Plus, Track) to watch real-time dashboard dials adapt, modifying exhaust flutters, steering suspension damping, and M xDrive power ratios.
* **Interactive Cabin Hotspots**:
  Explore the sanctuary of the interior by clicking on panoramic hotspots that highlight premium cockpit details.
* **Horizontal Lineage Timeline**:
  A vertical scroll-pinned chronological track charting the historical generations of the M5 (E28, E39, E60, F90, G90).

---

## 🛠️ Technology Stack

* **Core**: React (Vite) & ES6+ JavaScript
* **Styling**: Tailwind CSS v4 (incorporating high-performance `@theme` setups without external config files)
* **Smooth Scrolling**: Lenis
* **Animation & Reveals**: GSAP (ScrollTrigger) & Framer Motion
* **Iconography**: React Icons (Feather Icons)
* **Sound Generation**: Web Audio API (FM/Subtractive audio synthesizers)

---

## 📂 Project Structure

```text
bmw-m5-landing/
├── src/
│   ├── components/       # Global navigation headers & scroll progress trackers
│   │   ├── Navbar.jsx
│   │   └── ScrollProgress.jsx
│   ├── data/             # Sourced image assets, telemetry values, and timeline data
│   │   └── m5Data.js
│   ├── sections/         # The 12 storyboards of the landing page
│   │   ├── HeroSection.jsx
│   │   ├── PerformanceOverview.jsx
│   │   ├── DesignPhilosophy.jsx
│   │   ├── EngineExperience.jsx
│   │   ├── ExteriorShowcase.jsx
│   │   ├── InteriorLuxury.jsx
│   │   ├── DrivingModes.jsx
│   │   ├── Technology.jsx
│   │   ├── EvolutionTimeline.jsx
│   │   ├── StatisticsSection.jsx
│   │   ├── Testimonials.jsx
│   │   └── FinalCTA.jsx
│   ├── App.jsx           # Main orchestrator initializing Lenis + GSAP synchronization
│   ├── index.css         # Styling layers, carbon fiber patterns, and HUD indicators
│   └── main.jsx          # StrictMode entry
├── vite.config.js        # Vite + React + Tailwind v4 compiler plugins
└── package.json          # Dependencies & scripts
```

---

## ⚙️ Quick Start

To launch the project locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build Production Bundle
```bash
npm run build
```

---

## 🏁 Design Aesthetics & Color Palette

The theme represents **Dark Luxury** with custom-calibrated variables:
* **Carbon Black**: `#0a0a0a` & `#050505` (base background)
* **Carbon Fiber**: Custom CSS check-weave grids
* **BMW M-Series Colors**: 
  * M Blue: `#0066b2`
  * M Dark Blue: `#1357a6`
  * M Red: `#e3001b`
* **Metallic Silver**: `#e2e8f0` (text & HUD highlights)
* **High-Tech Typography**:
  * Headings: *Syncopate* (Cinematic uppercase)
  * Telemetry: *Orbitron* (Aggressive tech display)
  * Body: *Inter* (Sleek sans-serif editorial)
