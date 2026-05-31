import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Home', id: 'hero' },
  { label: 'Performance', id: 'performance' },
  { label: 'Design', id: 'design' },
  { label: 'Engine', id: 'engine' },
  { label: 'Modes', id: 'modes' },
  { label: 'Timeline', id: 'timeline' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Blur and darken navbar on scroll
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const scrollPosition = window.scrollY + 200; // Offset for trigger point
      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-inter ${
      isScrolled ? 'glass-panel py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* M-Power Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => handleNavClick('hero')}
        >
          {/* M Logo Badge */}
          <div className="flex h-5 items-stretch overflow-hidden font-orbitron font-black text-xs skew-x-[-15deg] border border-white/10">
            <div className="bg-m-blue w-2"></div>
            <div className="bg-m-dark-blue w-2"></div>
            <div className="bg-m-red w-2"></div>
            <div className="bg-black text-white px-2 flex items-center tracking-widest font-black leading-none">M</div>
          </div>
          <span className="font-syncopate tracking-widest text-sm font-bold text-white">M5 COMPETITION</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 relative py-1 hover:text-white ${
                activeSection === item.id 
                  ? 'text-white font-bold' 
                  : 'text-zinc-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-m-red rounded-full animate-pulse" />
              )}
            </button>
          ))}
          
          {/* Main CTA */}
          <button 
            onClick={() => handleNavClick('cta')}
            className="px-5 py-2 text-xs uppercase tracking-widest font-bold border border-m-red hover:bg-m-red text-white transition-all duration-300 rounded-sm bg-black/40 backdrop-blur-md"
          >
            Explore M5
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white text-2xl transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed inset-0 top-[60px] z-30 glass-panel-heavy md:hidden transition-all duration-500 flex flex-col justify-center px-8 gap-8 ${
        mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`text-xl uppercase tracking-widest font-orbitron text-left transition-colors py-2 border-b border-white/5 ${
              activeSection === item.id ? 'text-white text-m-gradient' : 'text-zinc-400'
            }`}
          >
            {item.label}
          </button>
        ))}
        
        <button
          onClick={() => handleNavClick('cta')}
          className="w-full py-4 text-center text-sm uppercase tracking-widest font-bold bg-m-red hover:bg-red-700 text-white transition-colors rounded-sm"
        >
          Explore M5
        </button>
      </div>
    </nav>
  );
}
