
import React, { useEffect, useRef, useState } from 'react';
import { Search, ClipboardCheck, FileText, Award } from 'lucide-react';

const Process: React.FC = () => {
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

  const steps = [
    {
      icon: Search,
      title: "Diagnóstico Inicial",
      desc: "Relevamos el estado actual de sus procesos frente a los requisitos de la norma objetivo."
    },
    {
      icon: FileText,
      title: "Diseño Documental",
      desc: "Elaboramos la documentación necesaria: manuales, procedimientos e instructivos a medida."
    },
    {
      icon: ClipboardCheck,
      title: "Implementación",
      desc: "Puesta en marcha del sistema y realización de auditorías internas para asegurar el cumplimiento."
    },
    {
      icon: Award,
      title: "Certificación",
      desc: "Acompañamiento técnico durante la auditoría externa realizada por el ente certificador."
    }
  ];

  return (
    <div ref={sectionRef} className="container mx-auto px-6">
      <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Metodología</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Camino a la Excelencia</h3>
        <p className="text-slate-600 text-lg">
          Un proceso estructurado y ágil para asegurar que su empresa certifique con éxito y mejore su productividad.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
        
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col items-center text-center transition-all duration-700 transform`}
            style={{ transitionDelay: `${idx * 200}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <div className="w-16 h-16 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center mb-6 z-10 shadow-lg shadow-blue-500/10 hover:scale-110 transition-transform cursor-default">
              <step.icon className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
