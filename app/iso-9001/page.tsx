import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { FaWhatsapp } from "react-icons/fa";

import {
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Factory,
  FileText,
  HeartPulse,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smile,
  Truck,
  Users,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/5491144478802?text=Hola%20SOCIS%2C%20quiero%20consultar%20por%20ISO%209001";

const steps = [
  [
    "Diagnóstico inicial",
    "Analizamos su situación actual y definimos el alcance del proyecto.",
    Search,
  ],
  [
    "Diseño del sistema",
    "Definimos procesos, indicadores, riesgos y la documentación necesaria.",
    Building2,
  ],
  [
    "Implementación y capacitación",
    "Capacitamos a su equipo y acompañamos la puesta en marcha.",
    Users,
  ],
  [
    "Auditoría interna",
    "Verificamos el cumplimiento de la norma y detectamos oportunidades de mejora.",
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
    "Mejora la eficiencia y la organización",
    "Optimice procesos y reduzca errores.",
    Award,
  ],
  [
    "Aumenta la satisfacción de sus clientes",
    "Brinde un servicio de mayor calidad y genere confianza.",
    Smile,
  ],
  [
    "Reduce costos y retrabajos",
    "Menos fallas, menos desperdicio, más resultados.",
    CheckCircle2,
  ],
  [
    "Facilita licitaciones y requisitos de clientes",
    "Cumpla estándares y acceda a más oportunidades.",
    ShieldCheck,
  ],
];

const sectors = [
  ["Software y SaaS", Code2],
  ["Consultoría", Users],
  ["Ingeniería", BriefcaseBusiness],
  ["Manufactura e industrias", Factory],
  ["Logística y transporte", Truck],
  ["Servicios profesionales", Users],
  ["Comercio y distribución", ShoppingCart],
  ["Salud y educación", HeartPulse],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-socisDark">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(0,58,140,0.10),transparent_32%),linear-gradient(90deg,#ffffff_0%,#ffffff_48%,#f4f8ff_100%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-8  lg:px-8 lg:py-12 ">
          <div>
            <div className="mb-8 inline-flex flex-col">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#448AFF] rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                  <img src="/socis-logo.png" alt="Socis" className="w-9 h-9" />
                </div>
                <div className="text-5xl font-serif tracking-wide text-[#448AFF]">
                  SOCIS
                </div>
              </div>
              <div className="mt-1 bg-[#448AFF] px-4 py-1 text-center text-sm font-semibold tracking-[0.45em] text-white">
                CONSULTORES
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-10 shadow-soft">
              <h1 className=" text-5xl font-extrabold leading-tight tracking-tight text-socisDark md:text-6xl">
                Certificación ISO 9001
                <span className="block text-socisBlue ">
                  para servicios e industrias
                </span>
              </h1>

              <p className="mt-6  text-xl leading-relaxed">
                Ayudamos a implementar sistemas de gestión de calidad que
                mejoran procesos, aumentan la satisfacción de los clientes y
                generan una ventaja competitiva sostenible.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-socisGreen px-7 py-4 text-lg font-bold text-white shadow-soft transition hover:scale-[1.02]"
                >
                  <FaWhatsapp size={24} /> Consultar por WhatsApp
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-socisBlue bg-white px-7 py-4 text-lg font-bold text-socisBlue transition hover:bg-blue-50"
                >
                  <FileText className="h-6 w-6" /> Solicitar propuesta
                </a>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium">
                <ShieldCheck className="h-5 w-5 text-socisBlue" /> Sin cargo y
                sin compromiso
              </p>
            </div>
          </div>
          <div className="absolute right-6 lg:right-12 top-8 rounded-xl bg-[#448AFF] px-5 py-3 text-xl font-bold text-white opacity-70">
            ISO 9001
          </div>
          <div className=" m-auto my-8 rounded-2xl bg-socisBlue p-6 text-white shadow-soft md:w-[70%]">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <Users className="h-8 w-8" />
                  <h3 className="text-lg font-bold">
                    Para empresas de servicios
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-blue-50">
                  Consultoras, estudios, agencias, empresas de tecnología,
                  salud, educación, logística, turismo y más.
                </p>
              </div>
              <div className="border-t border-white/30 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <div className="mb-2 flex items-center gap-3">
                  <Factory className="h-8 w-8" />
                  <h3 className="text-lg font-bold">Para industrias</h3>
                </div>
                <p className="text-sm leading-relaxed text-blue-50">
                  Alimenticias, metalúrgicas, automotrices, químicas, plásticas,
                  textiles y más.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Etapas de implementación">
        <div className="mt-10 grid gap-8 md:grid-cols-5">
          {steps.map(([title, text, Icon], index) => {
            const StepIcon = Icon as typeof Search;
            return (
              <div key={title as string} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-socisBlue">
                  <StepIcon className="h-10 w-10" />
                </div>
                <div className="-mt-24 ml-auto mr-auto flex h-8 w-8 items-center justify-center rounded-full bg-socisBlue text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div className="mt-20">
                  <h3 className="text-lg font-extrabold text-socisBlue">
                    {title as string}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">
                    {text as string}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Beneficios para su empresa">
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {benefits.map(([title, text, Icon]) => {
            const BenefitIcon = Icon as typeof Award;
            return (
              <div key={title as string} className="text-center">
                <BenefitIcon className="mx-auto h-12 w-12 text-socisBlue" />
                <h3 className="mt-4 text-lg font-extrabold text-socisBlue">
                  {title as string}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{text as string}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Implementación pensada para todo tipo de organizaciones">
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {sectors.map(([sector, Icon]) => {
            const SectorIcon = Icon as typeof Code2;
            return (
              <div key={sector as string} className="text-center">
                <SectorIcon className="mx-auto h-11 w-11 text-socisBlue" />
                <p className="mt-3 text-sm font-extrabold text-socisBlue">
                  {sector as string}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <div className="mt-40 mb-40">
        <Contact />
      </div>
      <Footer nav={false} />
      <WhatsAppFloat />
    </main>
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
        <h2 className="text-center text-3xl font-extrabold text-socisBlue">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
