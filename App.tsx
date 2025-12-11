import React, { useRef } from 'react';
import Encabezado from './componentes/Encabezado';
import Heroe from './componentes/Héroe';
import Acerca from './componentes/Acerca';
import Concepto from './componentes/Concepto';
import PieDePagina from './componentes/Pie de página';

const App: React.FC = () => {
  const acercaRef = useRef<HTMLDivElement>(null);
  const conceptoRef = useRef<HTMLDivElement>(null);

  const desplazarseAAcerca = () => {
    acercaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const desplazarseAConcepto = () => {
    conceptoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white overflow-x-hidden">
      <Encabezado
        onClickAcerca={desplazarseAAcerca}
        onClickConcepto={desplazarseAConcepto}
      />

      <Heroe />

      <div ref={acercaRef}>
        <Acerca />
      </div>

      <div ref={conceptoRef}>
        <Concepto />
      </div>

      <PieDePagina />
    </div>
  );
};

export default App;
