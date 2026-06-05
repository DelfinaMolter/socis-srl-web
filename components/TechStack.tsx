
import React from 'react';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            Tecnologías de Vanguardia <br />
            para el Mundo Real.
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Utilizamos las herramientas más potentes del mercado para garantizar que tu inversión tecnológica sea duradera, segura y performante.
          </p>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
             {/* Mock visual element */}
             <div className="w-32 h-32 bg-blue-500/20 rounded-2xl animate-pulse"></div>
             <div className="w-32 h-32 bg-indigo-500/20 rounded-2xl animate-pulse delay-150"></div>
             <div className="w-32 h-32 bg-emerald-500/20 rounded-2xl animate-pulse delay-300"></div>
             <div className="w-32 h-32 bg-purple-500/20 rounded-2xl animate-pulse delay-450"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="p-8 glass-dark rounded-full border border-white/20">
               <span className="text-4xl font-black">100%</span>
               <p className="text-xs text-center uppercase tracking-tighter">Stack Moderno</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
