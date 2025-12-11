import React from 'react';

interface FooterProps {
  onScrollToAbout?: () => void;
  onScrollToConcept?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollToAbout, onScrollToConcept }) => {
  return (
    <footer className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-24">
          <div className="col-span-1">
            <div className="mb-10 flex items-center">
              <img 
                src="https://i.imgur.com/YJEv9U7.jpeg" 
                alt="Yurkal" 
                className="h-10 w-auto opacity-70"
                style={{ 
                  mixBlendMode: 'screen', 
                  filter: 'invert(1) grayscale(1) brightness(1.5)' 
                }}
              />
            </div>
            <p className="text-zinc-600 text-sm font-serif italic leading-relaxed max-w-xs">
              De las aguas frías de Bariloche al río Paraná en Rosario. Una travesía grabada en el textil.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold mb-8">Navegación</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={onScrollToAbout}
                  className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors text-left"
                >
                  Historia
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToConcept}
                  className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors text-left"
                >
                  Concepto
                </button>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/yurkalof?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li><a href="#" className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors">TikTok</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold mb-8">El Desembarco</h4>
            <p className="text-[10px] text-zinc-500 mb-6 leading-relaxed uppercase tracking-wider">
              Recibe un aviso cuando las primeras piezas de archivo estén listas.
            </p>
            <div className="flex border-b border-zinc-900 pb-2">
              <input 
                type="email" 
                placeholder="TU CORREO" 
                className="bg-transparent border-none outline-none text-[10px] uppercase tracking-widest w-full text-white placeholder:text-zinc-800"
              />
              <button className="text-[10px] uppercase tracking-widest text-white hover:opacity-50 transition-all">Unirse</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5">
          <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-800 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} YURKAL. CONSTRUIDO PARA PERMANECER.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-800">Bariloche - Rosario - El Mundo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;