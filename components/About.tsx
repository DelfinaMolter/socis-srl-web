"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { TEAM } from "../constants";
import { trackEvent } from "@/app/lib/analytics";

const About: React.FC = () => {
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
        className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
          Nuestros equipo
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Transformando problemas en oportunidades
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          Nuestros socios participan activamente en los procesos de diagnóstico,
          implementación y seguimiento.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {TEAM.map((member, idx) => (
          <div
            key={idx}
            className="group text-center transition-all duration-1000 transform"
            style={{
              transitionDelay: `${idx * 200}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="relative mb-8 inline-block">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform -z-10 opacity-20"></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-64 h-80 object-cover rounded-3xl shadow-lg group-hover:-translate-y-2 transition-transform duration-300"
              />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">{member.name}</h4>
            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">
              {member.desc1}
            </p>
            <p className="text-slate-500 text-sm max-w-[250px] mx-auto leading-relaxed mb-4">
              {member.desc2}
            </p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => {
                trackEvent("click_linkedin", {
                  member: member.name,
                });
              }}
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        ))}
      </div>

      <div
        className={`mt-24 p-12 bg-blue-600 rounded-[40px] text-center text-white relative overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <blockquote className="text-2xl md:text-4xl font-medium italic relative z-10 leading-snug">
          "Le proponemos implementar las mejoras ágilmente, agregando valor y
          acompañando la velocidad de su negocio."
        </blockquote>
      </div>
    </div>
  );
};

export default About;
