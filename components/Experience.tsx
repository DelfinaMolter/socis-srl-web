
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    "+1000 proyectos de certificación y mejora de procesos.",
    "Experiencia en pymes, empresas medianas y organizaciones en crecimiento de diferentes rubros como sector tecnológico, industrial, servicios, etc.",
    "Implementaciones ISO adaptadas a cada realidad organizacional.",
    "Acompañamiento integral hasta la certificación."
  ];

  return (
    <div ref={sectionRef} className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Clientes satisfechos</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Experiencia Calificada</h3>
          </div>

          <div className={`bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-5 group"
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-slate-500 font-medium italic">
              Nuestra trayectoria avala la calidad de cada implementación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
