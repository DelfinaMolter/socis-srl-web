"use client";

import React from "react";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { NAV_ITEMS } from "../constants";

interface FooterProp {
  nav?: boolean;
}
const Footer: React.FC<FooterProp> = ({ nav }) => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-2xl font-black tracking-tighter">
                SOCIS <span className="text-blue-600">CONSULTORES</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed">
              Implementamos normas ISO y gestionamos la Ley de Economía del
              Conocimiento para empresas de tecnología.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>info@socis.com.ar</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>(54 911) 4447-8802</span>
              </div>
            </div>
          </div>
          {nav && (
            <div>
              <h4 className="text-lg font-bold mb-6">Navegación</h4>
              <ul className="space-y-4 text-slate-400">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={`${!nav && "ml-10"} `}>
            <h4 className="text-lg font-bold mb-6">Seguinos:</h4>
            <a
              href="https://www.linkedin.com/company/socis-srl/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all group"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.041-1.854-3.041-1.853 0-2.136 1.445-2.136 2.939v5.671H9.349V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.372-1.85 3.604 0 4.267 2.371 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <p className="mt-6 text-sm text-slate-500">
              Síganos para estar al tanto de novedades en normativas y procesos.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SOCIS Consultores. Especialistas en
            Normas ISO.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors md:mr-20"
          >
            Volver arriba <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
