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
  Droplets,
  Factory,
  FileText,
  FlaskConical,
  Leaf,
  Mountain,
  PlugZap,
  Recycle,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import TrackLink from "@/components/TrackLink";

const whatsappUrl =
  "https://wa.me/5491144478802?text=Hola%20SOCIS%2C%20quiero%20consultar%20por%20ISO%2014001";

const steps = [
  [
    "Diagnóstico inicial",
    "Analizamos su situación ambiental actual y definimos el alcance del sistema.",
    Search,
  ],
  [
    "Diseño del sistema",
    "Definimos procesos, aspectos e impactos ambientales y la documentación necesaria.",
    Factory,
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
    "Reduce el impacto ambiental",
    "Disminuye la contaminación y optimiza el uso de recursos naturales.",
    TrendingUp,
  ],
  [
    "Ahorra costos y mejora la eficiencia",
    "Menos consumo de recursos, menor generación de residuos y reducción de costos.",
    CheckCircle2,
  ],
  [
    "Cumple con la legislación ambiental",
    "Asegura el cumplimiento de requisitos legales y evita sanciones.",
    ShieldCheck,
  ],
  [
    "Mejora la imagen y ventaja competitiva",
    "Demuestra su compromiso ambiental ante clientes, proveedores y la sociedad.",
    Leaf,
  ],
];

const sectors = [
  ["Industria química y petroquímica", Factory],
  ["Metalmecánica y siderúrgica", FlaskConical],
  ["Minería y extracción", Mountain],
  ["Energía y utilities", PlugZap],
  ["Papel y celulosa", Recycle],
  ["Alimenticia y bebidas", Factory],
  ["Tratamiento de aguas y residuos", Droplets],
];

export default function Home() {
  return (
    <>
      <GoogleAdsTag />
      <main className="relative min-h-screen bg-white text-socisBlueDark">
        <section className="relative w-full overflow-hidden">
          <div className="relative md:absolute max-w-40  md:right-6 lg:right-12 md:top-8 rounded-xl bg-socisGreen px-5 py-3 text-xl font-bold text-white opacity-70 mx-6 my-8 md:mx-0 md:my-0">
            ISO 14001
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
                Certificación ISO 14001
                <span className="block text-socisGreen ">
                  Gestión ambiental que impulsa el futuro de su empresa
                </span>
              </h1>

              <p className="mt-6  text-xl leading-relaxed">
                Ayudamos a su organización a implementar un sistema de gestión
                ambiental eficaz que reduce el impacto ambiental, asegura el
                cumplimiento legal y mejora su desempeño ambiental de manera
                sostenible.
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
                    location: "iso14001",
                    button: "landing",
                  }}
                >
                  <FaWhatsapp size={24} /> Consultar por WhatsApp
                </TrackLink>
                <TrackLink
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-socisGreen bg-white px-7 py-4 text-lg font-bold text-socisGreen transition hover:bg-blue-50"
                  eventName="click_cta_proposal"
                  eventParams={{
                    location: "iso14001",
                    button: "landing",
                  }}
                >
                  <FileText className="h-6 w-6" /> Solicitar propuesta
                </TrackLink>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium">
                <ShieldCheck className="h-5 w-5 text-socisGreen" /> Sin cargo y
                sin compromiso
              </p>
            </div>

            <div className=" m-auto my-8 rounded-2xl bg-socisGreen p-6 text-white shadow-soft md:w-[70%]">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-isoGreen">
                  <Leaf className="h-8 w-8 text-socisGreenLogo" />
                </div>

                <div className="">
                  <h3 className="text-lg font-bold">
                    La ISO 14001 es la norma internacional que ayuda a su
                    organización a:
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-green-50">
                    {[
                      "Proteger el medio ambiente",
                      "Cumplir con la legislación aplicable",
                      "Mejorar su desempeño ambiental y reputación",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-300" />
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
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-socisGreenLight text-socisGreen">
                    <StepIcon className="h-10 w-10" />
                  </div>
                  <div className="-mt-24 ml-auto mr-auto flex h-8 w-8 items-center justify-center rounded-full bg-socisGreen text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="mt-20">
                    <h3 className="text-lg font-extrabold text-socisGreen">
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
                  <BenefitIcon className="mx-auto h-12 w-12 text-socisGreen" />
                  <h3 className="mt-4 text-lg font-extrabold text-socisGreen">
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
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-7 container">
            {sectors.map(([sector, Icon]) => {
              const SectorIcon = Icon as typeof Factory;
              return (
                <div key={sector as string} className="text-center">
                  <SectorIcon className="mx-auto h-11 w-11 text-socisGreen" />
                  <p className="mt-3 text-sm font-extrabold text-socisGreen">
                    {sector as string}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        <div className="mt-40 mb-40" id="contacto">
          <Contact siteUrl="iso14001" />
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
