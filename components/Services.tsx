import React, { useEffect, useRef, useState } from "react";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "../constants";

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-6">
      <div
        className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
          Portafolio
        </h2>
        <h3 className="text-4xl font-extrabold text-slate-900 mb-6">
          Especialización Senior
        </h3>
        <p className="text-slate-600 text-lg">
          Nuestra consultoría está diseñada para empresas que buscan la
          excelencia operativa y el cumplimiento normativo riguroso.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, idx) => {
          const IconComponent = (LucideIcons as any)[service.icon];
          return (
            <div
              key={service.id}
              className={`bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group duration-700 transform`}
              style={{
                transitionDelay: `${idx * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
              >
                Consultar <LucideIcons.ArrowRight className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
