import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onScrollToAbout: () => void;
  onScrollToConcept: () => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollToAbout, onScrollToConcept }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-16">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/YJEv9U7.jpeg" 
              alt="Yurkal Logo" 
              className="h-10 md:h-14 w-auto object-contain brightness-110"
              style={{ mixBlendMode: 'screen', filter: 'invert(1) grayscale(1) brightness(1.8)' }}
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-12">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[9px] uppercase tracking-[0.5em] font-light text-zinc-500 hover:text-white transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={onScrollToAbout}
              className="text-[9px] uppercase tracking-[0.5em] font-light text-zinc-500 hover:text-white transition-colors"
            >
              Historia
            </button>
            <button 
              onClick={onScrollToConcept}
              className="text-[9px] uppercase tracking-[0.5em] font-light text-zinc-500 hover:text-white transition-colors"
            >
              Concepto
            </button>
          </nav>
        </div>

        <div className="flex items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-700 font-light hidden sm:block">
            Travesía en Proceso
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;