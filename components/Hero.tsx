import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

import { ISO_STANDARDS } from "../constants";

interface HeroProps {
  expandedSection: "none" | "iso" | "knowledge";
  setExpandedSection: React.Dispatch<
    React.SetStateAction<"none" | "iso" | "knowledge">
  >;
}

const Hero: React.FC<HeroProps> = ({ expandedSection, setExpandedSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (section: "iso" | "knowledge") => {
    setExpandedSection((prev) => {
      const nextSection = prev === section ? "none" : section;

      if (nextSection === "knowledge" && prev !== "knowledge") {
        window.setTimeout(() => {
          document.getElementById("lec")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 500);
      }

      return nextSection;
    });
  };

  /* useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;

      if (hash === "#lec") {
        setExpandedSection("knowledge");

        setTimeout(() => {
          document.getElementById("lec")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }

      if (hash === "#normasiso") {
        setExpandedSection("iso");

        setTimeout(() => {
          document.getElementById("normasiso")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    };

    handleHash();

    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, []); */

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Modern office"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/40 to-white"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-wrap  mb-6 ">
            <h1 className="mr-4 md:mr-10 text-5xl md:text-8xl font-serif text-socisBlueMedium leading-[1] tracking-tight">
              SOCIS{" "}
            </h1>
            <h2 className="text-5xl md:text-8xl text-blue-600 font-semibold tracking-[0.05em]">
              Consultores
            </h2>
          </div>
          <p className="text-2xl md:text-3xl font-medium text-slate-600 mb-10">
            Implementamos normas ISO y gestionamos la Ley de Economía del
            Conocimiento para empresas de tecnología.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contactos"
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-lg"
            >
              Solicitar diagnóstico inicial
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 max-w-6xl mx-auto transition-all duration-300 delay-300 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* ISO Card & Accordion */}
          <div className="mt-[64px] scroll-mt-32" id="normasiso">
            <div
              className={` glass rounded-3xl border border-white bg-white shadow-xl transition-all duration-300 overflow-hidden ${expandedSection === "iso" ? "ring-2 ring-blue-600/20" : ""}`}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        Certificación Normas ISO
                      </h3>
                      <p className="text-slate-600 max-w-xl">
                        Implementación de Sistemas de Gestión basados en Normas
                        ISO
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSection("iso")}
                    className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shrink-0 ${expandedSection === "iso" ? "bg-blue-600 text-white" : "bg-slate-100 text-blue-600 hover:bg-blue-50"}`}
                  >
                    {expandedSection === "iso"
                      ? "Cerrar Detalles"
                      : "Nuestros Servicios"}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${expandedSection === "iso" ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {/* ISO Accordion Content */}
                <div
                  className={` transition-all duration-300 ease-in-out ${expandedSection === "iso" ? "max-h-[2000px] opacity-100 mt-12" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                  {/* Elegant Introduction Section */}
                  <div className="relative pl-6 border-l-4 border-blue-600 max-w-4xl">
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed font-normal">
                      Acompañamos a organizaciones de distintos sectores en la
                      implementación de sistemas de gestión basados en normas
                      ISO, adaptados a su estructura, realidad operativa y
                      objetivos estratégicos.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="space-y-4 mt-8" id="iso27001">
                        <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                          Normas con las que trabajamos
                        </h4>
                      </div>
                      <div className="space-y-8 pt-5 ">
                        {ISO_STANDARDS.map((iso) => (
                          <div
                            key={iso.name}
                            className="flex items-center justify-start gap-4 group"
                          >
                            <h4 className="text- font-extrabold text-slate-900 ">
                              {iso.name}
                            </h4>
                            <span className="text-xs font-black tracking-widest text-blue-500 uppercase text-right">
                              {iso.category}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="space-y-4 mt-8 ">
                        <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                          Nuestro enfoque
                        </h4>
                      </div>
                      <div className="space-y-3 pt-5 gap-3">
                        {[
                          {
                            title: "Sostenibilidad",
                            desc: "Sostenibilidad real, no soluciones superficiales.",
                          },
                          {
                            title: "Alineamiento",
                            desc: "Alineado a la estrategia de la organización.",
                          },
                          {
                            title: "Consistencia",
                            desc: "Estructura clara y documentación consistente.",
                          },
                          {
                            title: "Garantía",
                            desc: "Preparación para auditorías de certificación.",
                          },
                          {
                            title: "Cercanía",
                            desc: "Acompañamiento cercano durante todo el proceso.",
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex gap-2.5 p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-100 transition-all duration-300 shadow-sm"
                          >
                            <div className="w-7 h-7 bg-blue-50 text-blue-600 font-bold text-base rounded-lg flex items-center justify-center shrink-0">
                              0{idx + 1}
                            </div>
                            <div className="self-center">
                              <h5 className="font-bold text-slate-900 text-base leading-none">
                                {item.title}
                              </h5>
                              <p className="text-slate-500 text-base mt-1 leading-normal">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="gap-6 flex flex-col mt-12">
                    {/* Nuestro diferencial */}
                    <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl flex-1 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
                      {/* Decorative subtle ambient light blob */}
                      <div className="absolute top-0 right-0 w-44 h-44 bg-blue-550 opacity-15 blur-[80px] pointer-events-none"></div>

                      <div className="space-y-4 relative z-10">
                        <h4 className="text-xl md:text-2xl font-extrabold text-white leading-snug">
                          Nuestro Diferencial{" "}
                        </h4>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                          Implementamos normas como una herramienta de orden y
                          mejora organizacional que fortalece la estructura de
                          la empresa y la prepara para crecer de forma
                          sostenida.
                        </p>
                      </div>
                    </div>
                    {/* Prominent Quote Block */}
                    <div className="bg-blue-600 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl text-center hover:bg-blue-650 transition-colors duration-300">
                      <div className="absolute -top-10 -left-10 text-[10rem] font-serif text-blue-500 opacity-20 pointer-events-none select-none">
                        “
                      </div>
                      <div className="relative z-10 py-2">
                        <p className="text-xl md:text-2xl font-serif italic font-medium leading-relaxed">
                          "Implementar un sistema de gestión no es un trámite,
                          es una decisión organizacional"
                        </p>
                        <div className="w-12 h-1 bg-white/30 mx-auto mt-6 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Knowledge Economy Card & Accordion */}
          <div className="mt-[64px] scroll-mt-32" id="lec">
            <div
              className={` glass rounded-3xl border border-white bg-white shadow-xl transition-all duration-300 overflow-hidden ${expandedSection === "knowledge" ? "ring-2 ring-emerald-600/20" : ""}`}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                      <TrendingUp className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        Economía del Conocimiento
                      </h3>
                      <p className="text-slate-600 max-w-xl">
                        Acompañamos a empresas tecnológicas en el acceso a los
                        beneficios del Régimen de Promoción de la Economía del
                        Conocimiento, definiendo la estrategia más adecuada
                        según la realidad de cada organización.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSection("knowledge")}
                    className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shrink-0 ${expandedSection === "knowledge" ? "bg-emerald-600 text-white" : "bg-slate-100 text-emerald-600 hover:bg-emerald-50"}`}
                  >
                    {expandedSection === "knowledge"
                      ? "Cerrar Detalles"
                      : "Saber más"}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${expandedSection === "knowledge" ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {/* Knowledge Economy Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${expandedSection === "knowledge" ? "max-h-[2000px] opacity-100 mt-12" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                  <div className="pt-8 border-t border-slate-100">
                    <div className="max-w-4xl mx-auto space-y-12">
                      <div className="text-center">
                        <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                          Acerca del RÉGIMEN DE PROMOCIÓN DE LA{" "}
                          <br className="hidden md:block" /> ECONOMÍA DEL
                          CONOCIMIENTO
                        </h4>
                      </div>

                      <div className="gap-10 items-start">
                        <div className="md:col-span-8 space-y-8">
                          <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                            <p className="text-slate-800 font-bold leading-relaxed">
                              ¿Qué es el Régimen de Promoción?
                            </p>
                            <p className="text-slate-800 font-medium leading-relaxed">
                              Es un régimen nacional que otorga beneficios
                              fiscales a empresas que desarrollan actividades
                              basadas en el conocimiento, siempre que cumplan
                              determinados requisitos técnicos y
                              organizacionales.
                            </p>
                            <p className="text-slate-800 font-medium leading-relaxed">
                              Cientos de empresas ya gozan del beneficio. Lo
                              asesoramos con los requisitos, realizamos la
                              presentación para la incorporación de su empresa a
                              este régimen y le ayudamos a certificar la norma
                              de calidad solicitada de ser necesario.
                            </p>
                          </div>

                          <div className="space-y-4">
                            <h5 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                              Beneficios Principales
                            </h5>
                            <div className=" gap-4">
                              {[
                                "Reducción en el Impuesto a las ganancias (60% micro/pymes, 40% medianas, 20% grandes).",
                                "Bono de crédito fiscal de hasta el 70% de las contribuciones patronales.",
                              ].map((benefit, i) => (
                                <div
                                  key={i}
                                  className="flex gap-3 mt-3 text-sm text-slate-600"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                            <p className="text-sm text-slate-600 ">
                              Estos beneficios impactan directamente en la e
                              structura financiera y competitividad de la
                              empresa.
                            </p>
                          </div>
                          <div className="space-y-4">
                            <h5 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                              Requisitos y alternativas de cumplimiento
                            </h5>

                            <p className="text-sm text-slate-600 ">
                              El régimen establece distintos criterios de
                              acceso, que pueden incluir exportaciones,
                              inversión en investigación y desarrollo,
                              capacitación del personal o implem entación de
                              sistemas formales de gestión.
                            </p>
                            <p className="text-sm text-slate-600 ">
                              Analizamos cada caso en particular para definir la
                              estrategia más adecuada según la realidad de la
                              empresa.
                            </p>
                          </div>
                          <div className="space-y-4">
                            <h5 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                              Nuestro acompañamiento incluye
                            </h5>

                            <ul>
                              <li className="flex gap-3 mt-3 text-sm text-slate-600">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                Evaluación de la situación de la empresa frente
                                a los requisitos del régimen.
                              </li>
                              <li className="flex gap-3 mt-3 text-sm text-slate-600">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                Definición de estrategia de aplicación.
                              </li>
                              <li className="flex gap-3 mt-3 text-sm text-slate-600">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                Preparación y presentación de documentación.
                              </li>
                              <li className="flex gap-3 mt-3 text-sm text-slate-600">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                Seguimiento del proceso hasta su aprobación.
                              </li>
                            </ul>
                            <p className="text-sm text-slate-600 ">
                              Acceder a la LEC no es solo presentar
                              documentación. Es estructurar la organización para
                              sostener el beneficio en e l tiempo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
