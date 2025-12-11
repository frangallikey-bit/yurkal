import React, { useEffect, useRef } from 'react';

const Concept: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-48 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera del Concepto */}
        <div className="mb-32 reveal">
          <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 block mb-6">Filosofía de Taller</span>
          <h2 className="text-6xl md:text-8xl font-display font-light leading-none italic text-white/90 mb-12">
            Lo casero es <br />
            <span className="text-zinc-500">nuestro lujo.</span>
          </h2>
          <div className="max-w-2xl">
            <p className="text-zinc-400 font-serif text-xl md:text-2xl italic leading-relaxed">
              En Yurkal no existen las líneas de producción. Cada prenda nace de una mesa de madera, de manos que conocen el material y de un proceso que respeta el tiempo. Somos una marca de detalles mínimos, donde lo orgánico manda sobre lo perfecto.
            </p>
          </div>
        </div>

        {/* Galería de Proceso / Fotos Reales Integradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Foto Real 1: Proceso / Manos */}
          <div className="reveal">
            <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl">
              <img 
                src="https://i.imgur.com/D3ykl3N.jpeg" 
                alt="Proceso Yurkal 01" 
                className="w-full h-full object-cover grayscale contrast-110 opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[2.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-[9px] uppercase tracking-[0.5em] text-white/40 mb-2">Registro / 01</p>
                <p className="text-xs italic font-serif text-zinc-400">"La paciencia en la puntada."</p>
              </div>
            </div>
          </div>

          {/* Foto Real 2: Detalle / Taller */}
          <div className="md:mt-32 reveal">
            <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl">
              <img 
                src="https://i.imgur.com/y1lK5l7.jpeg" 
                alt="Proceso Yurkal 02" 
                className="w-full h-full object-cover grayscale contrast-110 opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[2.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-[9px] uppercase tracking-[0.5em] text-white/40 mb-2">Registro / 02</p>
                <p className="text-xs italic font-serif text-zinc-400">"El valor de lo no industrial."</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Cierre de sección con declaración de marca */}
        <div className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-20 items-end reveal">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-5xl font-display italic text-zinc-200 leading-tight">
              Dejamos nuestra huella <br />en cada fibra.
            </h3>
            <div className="w-12 h-[1px] bg-zinc-800"></div>
          </div>
          <div className="text-zinc-600 text-sm font-serif italic max-w-sm">
            Nuestros procesos son lentos porque la calidad no sabe de urgencias. Desde el corte inicial hasta el último detalle, todo pasa por nuestras manos en nuestro refugio.
          </div>
        </div>
      </div>

      {/* Marca de agua decorativa */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-[20rem] font-display italic text-white/[0.01] pointer-events-none select-none font-light">
        Artesano
      </div>
    </section>
  );
};

export default Concept;