
import React, { useEffect, useRef, useState } from 'react';

const Stats: React.FC = () => {
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

  const stats = [
    { label: 'Años de Trayectoria', value: '15+' },
    { label: 'Proyectos Exitosos', value: '1000+' },
  ];

  return (
    <div ref={sectionRef} className="bg-blue-600 py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-2 gap-8 max-w-3xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-5xl md:text-7xl font-black text-white mb-3 tracking-tighter transition-transform group-hover:scale-110 duration-300">
                {stat.value}
              </div>
              <div className="text-blue-100 text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
