"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { FaWhatsapp } from "react-icons/fa";
import GoogleAdsTag from "@/components/GoogleAdsTag";

import {
  Award,
  CheckCircle2,
  ClipboardCheck,
  Construction,
  Factory,
  FileText,
  HardHat,
  Info,
  ListChecks,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import TrackLink from "@/components/TrackLink";

const whatsappUrl =
  "https://wa.me/5491144478802?text=Hola%20SOCIS%2C%20quiero%20consultar%20por%20ISO%2027001";

const steps = [
  [
    "Diagnóstico inicial",
    "Analizamos su situación actual, identificamos riesgos y definimos el alcance del sistema.",
    Search,
  ],
  [
    "Diseño del sistema",
    "Definimos procesos, políticas, procedimientos y controles de seguridad necesarios.",
    Wrench,
  ],
  [
    "Implementación y capacitación",
    "Capacitamos a su equipo y acompañamos la puesta en marcha del sistema.",
    Users,
  ],
  [
    "Auditoría interna",
    "Verificamos el cumplimiento del sistema y detectamos oportunidades de mejora.",
    ClipboardCheck,
  ],
  [
    "Certificación",
    "Acompañamos a la empresa durante la auditoría del organismo certificador.",
    Award,
  ],
];

const benefits = [
  [
    "Reduce accidentes y enfermedades",
    "Previene incidentes y crea entornos de trabajo más seguros.",
    TrendingUp,
  ],
  [
    "Aumenta la productividad y eficiencia",
    "Equipos más motivados y procesos más seguros y eficientes.",
    CheckCircle2,
  ],
  [
    "Cumple con la legislación y evita sanciones",
    "Asegura el cumplimiento de requisitos legales aplicables.",
    ShieldCheck,
  ],
  [
    "Mejora la cultura organizacional",
    "Promueve el bienestar, el compromiso y la responsabilidad.",
    Users,
  ],
];

const sectors = [
  ["Empresas de limpieza", Sparkles],
  ["Construcción", Construction],
  ["Industrias manufactureras", Factory],
  ["Minería", Truck],
  ["Petróleo y gas", HardHat],
];

export default function Home() {
  return (
    <>
      <GoogleAdsTag />
      <main className="relative min-h-screen bg-white text-socisBlueDark">
        <section className="relative w-full overflow-hidden">
          <div className="relative md:absolute max-w-40  md:right-6 lg:right-12 md:top-8 rounded-xl bg-isoViolet px-5 py-3 text-xl font-bold text-white opacity-70 mx-6 my-8 md:mx-0 md:my-0">
            ISO 27001
          </div>
          <div id="header" className="  px-6 py-8  lg:px-8 lg:py-12 ">
            <div className="mb-8 inline-flex flex-col">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-socisLogoBlue rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                  <img src="/socis-logo.png" alt="Socis" className="w-9 h-9" />
                </div>
                <div className="text-5xl font-serif tracking-wide text-socisBlueMedium">
                  SOCIS
                </div>
              </div>
              <div className="mt-1 bg-socisBlueMedium px-4 py-1 text-center text-sm font-semibold tracking-[0.45em] text-white">
                CONSULTORES
              </div>
            </div>
            <div className="mt-10 px-8">
              <h1 className=" text-4xl xs:text-5xl font-extrabold leading-tight tracking-tight text-socisBlueDark md:text-6xl">
                Certificación ISO 27001
                <br />
                Seguridad de la Información:
                <span className="block text-isoViolet ">
                  Proteja la confidencialidad, integridad y disponibilidad de
                  sus activos digitales.
                </span>
              </h1>

              <p className="mt-6  text-xl leading-relaxed">
                Es una norma internacional emitida por la ISO que describe cómo
                gestionar la seguridad de la información en una empresa.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <TrackLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-socisGreenWhatsApp px-7 py-4 text-lg font-bold text-white shadow-soft transition hover:scale-[1.02]"
                  eventName="click_whatsapp"
                  eventParams={{
                    location: "iso27001",
                    button: "landing",
                  }}
                >
                  <FaWhatsapp size={24} /> Consultar por WhatsApp
                </TrackLink>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-isoViolet bg-white px-7 py-4 text-lg font-bold text-isoViolet transition hover:bg-blue-50"
                >
                  <FileText className="h-6 w-6" /> Solicitar propuesta
                </a>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium">
                <ShieldCheck className="h-5 w-5 text-isoViolet" /> Sin cargo y
                sin compromiso
              </p>
            </div>
            <div className="pt-8 px-1 mb:px-8  space-y-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-isoViolet mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5" /> ¿Qué es?
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Es una norma internacional emitida por la ISO que describe
                    cómo gestionar la seguridad de la información en una
                    empresa.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-isoViolet mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5" /> ¿Cómo funciona?
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Protege la confidencialidad, integridad y disponibilidad
                    investigando potenciales problemas que podrían afectar la
                    información.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-isoViolet mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Importancia
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Cumple requisitos legales, elimina incidentes de seguridad y
                    genera confianza total en sus clientes y socios.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-isoViolet rounded-xl flex items-center justify-center">
                    <ListChecks className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                    IMPLANTACIÓN DE LA NORMA ISO 27001
                  </h4>
                </div>
                <p className="text-indigo-200 mb-10 text-lg">
                  Al implantar un Sistema de Gestión de la Seguridad de la
                  Información (SGSI), el eje central es la{" "}
                  <strong>Evaluación de Riesgos</strong>.
                </p>

                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                  {[
                    {
                      step: "1",
                      title: "Identificar Activos",
                      desc: "Reconocer todo aquello con valor: soportes físicos, intelectuales, informativos, marca y reputación.",
                    },
                    {
                      step: "2",
                      title: "Identificar Vulnerabilidades",
                      desc: "Debilidades propias del activo que lo hacen susceptible de sufrir ataques o daños.",
                    },
                    {
                      step: "3",
                      title: "Identificar Amenazas",
                      desc: "Sucesos dañinos: desastres naturales, incendios, virus, espionaje, etc.",
                    },
                    {
                      step: "4",
                      title: "Requisitos Legales",
                      desc: "Identificar obligaciones contractuales con clientes, socios y proveedores.",
                    },
                    {
                      step: "5",
                      title: "Identificar Riesgos",
                      desc: "Probabilidad de daño a la disponibilidad, confidencialidad e integridad.",
                    },
                    {
                      step: "6",
                      title: "Cálculo del Riesgo",
                      desc: "Determinar prioridades basándose en Impacto x Probabilidad de la amenaza.",
                    },
                    {
                      step: "7",
                      title: "Plan de Tratamiento",
                      desc: "Selección de controles para asumir, reducir, eliminar o transferir el riesgo.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-8 h-8 bg-isoViolet rounded-lg flex items-center justify-center font-bold shrink-0 group-hover:bg-white group-hover:text-isoViolet transition-colors">
                        {item.step}
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">
                          {item.title}
                        </h5>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-40 mb-40" id="contacto">
          <Contact siteUrl="iso27001" />
        </div>
        <Footer nav={false} />
        <WhatsAppFloat />
      </main>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
      <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-soft">
        <h2 className="text-center text-3xl font-extrabold text-socisBlueMedium">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
