import React from 'react';

interface HeroProps {
  onAboutClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAboutClick }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Fondo de montañas (Patagonia) con tratamiento Noir más profundo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&grayscale=true" 
          alt="Paisaje Patagonia Yurkal" 
          className="w-full h-full object-cover opacity-25 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/90"></div>
        {/* Capa de viñeta para dramatismo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">
        <div className="flex flex-col items-center mb-12">
          <span className="block text-[10px] uppercase tracking-[0.8em] text-zinc-600 font-light mb-16 animate-pulse">
            EL SILENCIO ANTES DEL VIAJE
          </span>
          
          <div className="relative w-full max-w-3xl mb-8">
            <h1 className="sr-only">YURKAL</h1>
            <img 
              src="https://i.imgur.com/YJEv9U7.jpeg" 
              alt="Yurkal Logo Principal" 
              className="w-full h-auto drop-shadow-[0_0_80px_rgba(255,255,255,0.03)] opacity-80"
              style={{ 
                mixBlendMode: 'screen', 
                filter: 'invert(1) grayscale(1) brightness(1.8) contrast(1.1)' 
              }}
            />
          </div>
          
          <div className="flex items-center gap-4 mt-4">
             <div className="w-8 h-[1px] bg-zinc-800"></div>
             <p className="text-xl md:text-2xl font-display italic text-zinc-500 tracking-[-0.02em] opacity-60">
                estamos llegando
             </p>
             <div className="w-8 h-[1px] bg-zinc-800"></div>
          </div>
        </div>
        
        <p className="text-zinc-500 text-lg md:text-2xl max-w-3xl mx-auto mb-20 font-serif italic leading-relaxed tracking-wide opacity-80 text-balance">
          "Pieza a pieza desde cero, diseños que nacen en el corazón de un barco y crecen en la inmensidad de nuestras tierras."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-lg">
          <button 
            onClick={onAboutClick}
            className="group relative px-20 py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-1000 w-full sm:w-auto overflow-hidden hover:scale-[1.02]"
          >
            <span className="relative z-10">Nuestra Historia</span>
            <div className="absolute inset-0 bg-zinc-300 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          </button>
        </div>
      </div>

      {/* Indicador de scroll minimalista */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <p className="text-[8px] uppercase tracking-[0.8em] text-zinc-800 mb-2">Deslizar</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-800 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;