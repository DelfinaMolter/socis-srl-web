import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  HelpCircle,
  Shield,
  CheckCircle2,
  Layers,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { FAQ_ITEMS } from "../constants";

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([1, 2]); // Open first two by default for immediate discoverability
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const expandAll = () => {
    setOpenItems(FAQ_ITEMS.map((item) => item.id));
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  const filteredItems = FAQ_ITEMS.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      (item.tag && item.tag.toLowerCase().includes(query)) ||
      (item.isoStandards &&
        item.isoStandards.some(
          (s) =>
            s.code.toLowerCase().includes(query) ||
            s.title.toLowerCase().includes(query),
        ))
    );
  });

  return (
    <div
      ref={sectionRef}
      id="faq-container"
      className="container  mx-auto px-6"
    >
      <div
        className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4">
          <HelpCircle className="w-4 h-4 text-blue-600" />
          <span>Preguntas Frecuentes</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Preguntas Frecuentes sobre Normas ISO
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Claridad y respuestas directas sobre tiempos, alcance, modalidad de
          trabajo y el valor real de certificar para su empresa.
        </p>

        {/* Quick actions bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={expandAll}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50/60 hover:bg-blue-100/70 px-3.5 py-1.5 rounded-lg transition-colors"
          >
            Expandir todas
          </button>
          <button
            onClick={collapseAll}
            className="text-xs font-semibold text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-3.5 py-1.5 rounded-lg transition-colors"
          >
            Contraer todas
          </button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredItems.map((item, idx) => {
          const isOpen = openItems.includes(item.id);

          return (
            <div
              key={item.id}
              id={`faq-item-${item.id}`}
              className={`rounded-2xl border transition-all duration-300 bg-white overflow-hidden ${
                isOpen
                  ? "border-blue-200 shadow-md ring-1 ring-blue-500/10"
                  : "border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow"
              }`}
            >
              {/* Question Header Button */}
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 select-none group"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-xl text-xs font-black shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                    }`}
                  >
                    0{item.id}
                  </span>
                  <div>
                    {item.tag && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                        {item.tag}
                      </span>
                    )}
                    <h3
                      className={`text-base md:text-lg font-bold transition-colors duration-200 ${
                        isOpen
                          ? "text-blue-900"
                          : "text-slate-900 group-hover:text-blue-600"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>
                </div>

                <div
                  className={`p-2 rounded-xl shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-blue-50 text-blue-600 rotate-180"
                      : "bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-[1200px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-50">
                  <p className="font-normal text-slate-700">{item.answer}</p>

                  {/* Specialized Standards Display for Q2 */}
                  {item.isoStandards && (
                    <div className="mt-4 grid sm:grid-cols-2 gap-3 pt-2">
                      {item.isoStandards.map((std, sIdx) => {
                        const colorStyles: Record<
                          string,
                          {
                            bg: string;
                            border: string;
                            badge: string;
                            text: string;
                          }
                        > = {
                          blue: {
                            bg: "bg-blue-50/40",
                            border: "border-blue-100",
                            badge: "bg-blue-100 text-blue-800",
                            text: "text-blue-700",
                          },
                          indigo: {
                            bg: "bg-indigo-50/40",
                            border: "border-indigo-100",
                            badge: "bg-indigo-100 text-indigo-800",
                            text: "text-indigo-700",
                          },
                          emerald: {
                            bg: "bg-emerald-50/40",
                            border: "border-emerald-100",
                            badge: "bg-emerald-100 text-emerald-800",
                            text: "text-emerald-700",
                          },
                          orange: {
                            bg: "bg-orange-50/40",
                            border: "border-orange-100",
                            badge: "bg-orange-100 text-orange-900",
                            text: "text-orange-700",
                          },
                        };
                        const c =
                          colorStyles[std.badgeColor] || colorStyles.blue;

                        return (
                          <div
                            key={sIdx}
                            className={`p-3.5 rounded-xl border ${c.border} ${c.bg} flex flex-col justify-between`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-1.5">
                                <span
                                  className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${c.badge}`}
                                >
                                  {std.code}
                                </span>
                              </div>
                              <h4 className="font-bold text-slate-900 text-xs mb-1">
                                {std.title}
                              </h4>
                              <p className="text-slate-600 text-xs leading-relaxed">
                                {std.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Note block if exists */}
                  {item.note && (
                    <div className="mt-4 p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 text-xs md:text-sm font-medium flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item.note}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Assistance Callout */}
      <div
        className={`mt-16 max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold">
            ¿Tiene una duda específica sobre su empresa?
          </h3>
          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            Coordinamos un diagnóstico inicial sin costo para evaluar la norma
            adecuada y definir los tiempos de implementación.
          </p>
        </div>
        <a
          href="#contact"
          className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 group"
        >
          <span>Consultar con un especialista</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default FAQ;
