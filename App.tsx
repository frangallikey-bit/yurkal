import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Concept from './components/Concept';
import Footer from './components/Footer';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const conceptRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToConcept = () => {
    conceptRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white overflow-x-hidden">
      <Header 
        onScrollToAbout={scrollToAbout} 
        onScrollToConcept={scrollToConcept}
      />
      
      <main className="flex-grow">
        <Hero onAboutClick={scrollToAbout} />
        
        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={conceptRef}>
          <Concept />
        </div>

        <section className="py-48 bg-black flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
          </div>
          
          <div className="relative z-10 text-center space-y-12">
            <h2 className="text-7xl md:text-9xl font-display font-light tracking-tighter italic text-white/90">
              Estamos llegando
            </h2>
            <div className="flex items-center justify-center gap-8">
              <div className="w-24 h-[1px] bg-zinc-800/50"></div>
              <p className="text-[11px] uppercase tracking-[0.8em] text-zinc-600">Próximamente</p>
              <div className="w-24 h-[1px] bg-zinc-800/50"></div>
            </div>
            <p className="text-zinc-600 font-serif italic text-xl max-w-xl mx-auto">
              El barco está en el agua. La travesía ha comenzado.
            </p>
          </div>
        </section>
      </main>

      <Footer 
        onScrollToAbout={scrollToAbout} 
        onScrollToConcept={scrollToConcept}
      />
    </div>
  );
};

export default App;