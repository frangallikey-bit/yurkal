import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
    <section ref={sectionRef} className="relative py-48 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="space-y-40">
          <header className="text-center space-y-8 reveal">
            <h2 className="text-8xl md:text-[12rem] font-display font-light leading-none tracking-tighter text-white opacity-90">
              Nuestra <br />
              <span className="font-signature italic text-7xl md:text-[10rem] block -mt-4 md:-mt-8 text-zinc-400">Historia</span>
            </h2>
            <div className="w-16 h-[1px] bg-zinc-800 mx-auto mt-12"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
            <div className="md:col-span-5 sticky top-32 reveal">
              <h3 className="text-4xl md:text-6xl font-display font-light leading-[1.1] text-zinc-100">
                Nace de un <br />
                <span className="font-signature text-5xl md:text-7xl block mt-4 italic text-zinc-500">soñador</span>
              </h3>
              <div className="mt-12 space-y-1">
                <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-sans font-medium">Rodolfo García Susini</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-700">Abuelo Pato • 1934 - 2021</p>
              </div>
            </div>
            
            <div className="md:col-span-7 space-y-24 reveal">
              <div className="space-y-10 text-zinc-400 font-serif text-xl md:text-2xl italic leading-relaxed tracking-wide opacity-80">
                <p>
                  A finales de los años 99, en el corazón indómito de Bariloche, un hombre decidió dedicar su tiempo a lo que realmente importaba: <span className="text-zinc-200">la permanencia</span>. Construyó un barco no para huir, sino para anclar momentos.
                </p>

                {/* Fotografía Original del Barco - Tratamiento Noir */}
                <div className="relative group my-20">
                  <div className="absolute -inset-4 bg-zinc-900/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="relative overflow-hidden border border-white/5 bg-zinc-900/10">
                    <img 
                      src="https://i.imgur.com/Wc81C9R.jpeg" 
                      alt="Barco Yurkal Original" 
                      className="w-full h-auto grayscale contrast-125 brightness-75 opacity-60 hover:opacity-90 hover:scale-[1.02] transition-all duration-[2s] ease-out"
                    />
                    {/* Overlay de grano y viñeta */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="mt-6 flex justify-between items-baseline border-t border-zinc-900 pt-4">
                    <p className="text-[8px] uppercase tracking-[0.4em] text-zinc-700 font-sans">Archivo Familiar / Registro 01</p>
                    <p className="text-[9px] italic font-serif text-zinc-600">"El Yurkal en aguas patagónicas"</p>
                  </div>
                </div>
                
                <div className="relative py-16 pl-12 border-l border-zinc-900/50">
                   <p className="text-4xl md:text-5xl text-zinc-100 font-display font-light italic leading-tight tracking-tight">
                    "Aquel interior de madera que crujía como si él también estuviera vivo."
                   </p>
                   <span className="absolute top-0 left-0 text-7xl font-display italic text-zinc-900 leading-none">“</span>
                </div>

                <p>
                  Ese barco, <span className="text-white font-display not-italic tracking-widest uppercase text-lg">Yurkal</span>, se convirtió en el templo de nuestra infancia. Aprendimos que las manos que tallan madera con paciencia son las mismas que saben construir legados.
                </p>
                
                <p>
                  Hoy, desde nuestro taller en Rosario, trasladamos esa misma filosofía a cada textil. Yurkal no es ropa; es un manifiesto de <span className="text-zinc-200 border-b border-zinc-800 pb-1">diseño artesanal y resistencia</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto space-y-24 pt-32 reveal">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-900 to-transparent"></div>
            
            <p className="text-zinc-500 font-serif text-3xl md:text-4xl italic leading-snug">
              Combinamos miradas distintas, dejando atrás el individualismo para abrazar la construcción colectiva, desde la Patagonia hasta el Paraná.
            </p>
            
            <div className="space-y-8 flex flex-col items-center">
               <span className="font-signature text-6xl md:text-9xl text-white tracking-tighter italic">Bienvenidos a Yurkal</span>
               <div className="flex items-center gap-6 w-full max-w-xs">
                 <div className="flex-1 h-[1px] bg-zinc-900"></div>
                 <p className="text-[10px] uppercase tracking-[0.8em] text-zinc-600 font-sans font-light whitespace-nowrap">EL VIAJE CONTINÚA</p>
                 <div className="flex-1 h-[1px] bg-zinc-900"></div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marca de agua tipográfica formal */}
      <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 text-[35rem] font-display italic text-white/[0.02] pointer-events-none select-none font-light leading-none">
        Yurkal
      </div>
    </section>
  );
};

export default About;