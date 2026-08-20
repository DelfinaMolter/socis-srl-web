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
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import TrackLink from "@/components/TrackLink";

const whatsappUrl =
  "https://wa.me/5491144478802?text=Hola%20SOCIS%2C%20quiero%20consultar%20por%20ISO%2045001";

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
          <div className="relative md:absolute max-w-40  md:right-6 lg:right-12 md:top-8 rounded-xl bg-isoGold px-5 py-3 text-xl font-bold text-white opacity-70 mx-6 my-8 md:mx-0 md:my-0">
            ISO 45001
          </div>
          <div id="header" className="  px-6 py-8  lg:px-8 lg:py-12 ">
            <TrackLink
              href="/"
              aria-label="Ir al inicio de Socis Consultores"
              className="mb-8 inline-flex flex-col"
              eventName="click_logo_home"
              eventParams={{ location: "iso45001" }}
            >
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
            </TrackLink>

            <div className="mt-10 px-8">
              <h1 className=" text-4xl xs:text-5xl font-extrabold leading-tight tracking-tight text-socisBlueDark md:text-6xl">
                Certificación ISO 45001
                <span className="block text-isoGold ">
                  Seguridad y salud ocupacional para proteger lo más importante:
                  las personas.
                </span>
              </h1>

              <p className="mt-6  text-xl leading-relaxed">
                Implementamos un sistema de gestión de Seguridad y Salud en el
                Trabajo que previene riesgos, protege a sus colaboradores,
                cumple con la legislación y mejora el desempeño de su
                organización de manera sostenible.
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
                    location: "iso45001",
                    button: "landing",
                  }}
                >
                  <FaWhatsapp size={24} /> Consultar por WhatsApp
                </TrackLink>
                <TrackLink
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-isoGold bg-white px-7 py-4 text-lg font-bold text-isoGold transition hover:bg-blue-50"
                  eventName="click_cta_proposal"
                  eventParams={{
                    location: "iso45001",
                    button: "landing",
                  }}
                >
                  <FileText className="h-6 w-6" /> Solicitar propuesta
                </TrackLink>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium">
                <ShieldCheck className="h-5 w-5 text-socisBlueDark" /> Sin cargo
                y sin compromiso
              </p>
            </div>

            <div className=" m-auto my-8 rounded-2xl bg-socisBlueDark p-6 text-white shadow-soft md:w-[70%]">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-isoGreen">
                  <ShieldCheck className="h-8 w-8 text-isoGold" />
                </div>

                <div className="">
                  <h3 className="text-lg font-bold">
                    La ISO 45001 es la norma internacional que ayuda a su
                    organización a:
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-blue-50">
                    {[
                      "Prevenir lesiones y enfermedades laborales",
                      "Proteger a los trabajadores y contratistas",
                      "Cumplir con la legislación aplicable",
                      "Mejorar el desempeño en seguridad y salud ocupacional",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-isoGold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section title="Etapas de implementación">
          <div className="mt-10 grid gap-8 md:grid-cols-5 container">
            {steps.map(([title, text, Icon], index) => {
              const StepIcon = Icon as typeof Search;
              return (
                <div key={title as string} className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-isoGoldLight text-isoGoldDark">
                    <StepIcon className="h-10 w-10" />
                  </div>
                  <div className="-mt-24 ml-auto mr-auto flex h-8 w-8 items-center justify-center rounded-full bg-isoGold text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="mt-20">
                    <h3 className="text-lg font-extrabold text-socisBlueMedium">
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
          <div className="mt-10 grid gap-8 md:grid-cols-4 container">
            {benefits.map(([title, text, Icon]) => {
              const BenefitIcon = Icon as typeof Award;
              return (
                <div key={title as string} className="text-center">
                  <BenefitIcon className="mx-auto h-12 w-12 text-isoGoldDark" />
                  <h3 className="mt-4 text-lg font-extrabold text-socisBlueMedium">
                    {title as string}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">
                    {text as string}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section title="Implementación pensada para todo tipo de organizaciones">
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5 container">
            {sectors.map(([sector, Icon]) => {
              const SectorIcon = Icon as typeof Factory;
              return (
                <div key={sector as string} className="text-center">
                  <SectorIcon className="mx-auto h-11 w-11 text-isoGoldDark" />
                  <p className="mt-3 text-sm font-extrabold text-socisBlueMedium">
                    {sector as string}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        <div className="mt-40 mb-40" id="contacto">
          <Contact siteUrl="iso45001" isLanding />
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
