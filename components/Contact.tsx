"use client";
import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

interface ContactProps {
  siteUrl: string;
}
const Contact: React.FC<ContactProps> = ({ siteUrl }) => {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">(
    "idle",
  );
  const [isVisible, setIsVisible] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!siteKey || !recaptchaToken) {
      return;
    }

    setFormStatus("sending");

    const form = e.currentTarget;

    const formData = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      recaptchaToken,
      siteUrl: siteUrl, // Include the site URL in the form data
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormStatus("success");
      form.reset();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } else {
      const data = await response.json().catch(() => null);
      setFormStatus("idle");
      alert(data?.error || "Hubo un error al enviar el formulario.");
    }
  };

  return (
    <div ref={sectionRef} className="container mx-auto ">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 px-6">
            Contacto
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight px-6">
            Conversemos sobre tu proyecto
          </h3>
          <p className="text-slate-600 text-lg mb-12 px-6">
            Si estás evaluando implementar un sistema de gestión basado en
            normas ISO o aplicar a la Ley de Economía del Conocimiento, podemos
            analizar tu situación y definir el camino más adecuado para tu
            organización.
          </p>
          <p className="text-slate-600 text-lg mb-12 px-6">
            Para poder analizar adecuadamente tu consulta y brindarte una
            orientación inicial, te pedimos completar el formulario.
          </p>

          <div className="space-y-8 px-6">
            <a
              href="mailto:info@socis.com.ar"
              className="flex items-start gap-6 group"
            >
              <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 transition-colors">
                <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Email</h4>
                <p className="text-slate-600 font-medium">info@socis.com.ar</p>
              </div>
            </a>
            <a
              href="tel:+5491144478802"
              className="flex items-start gap-6 group"
            >
              <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 transition-colors">
                <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Teléfono</h4>
                <p className="text-slate-600 font-medium">(54 911) 4447-8802</p>
              </div>
            </a>
          </div>
        </div>

        <div
          className={`bg-white px-6 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          {formStatus === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">
                ¡Mensaje Enviado!
              </h4>
              <p className="text-slate-600">
                Gracias por contactarnos. Un especialista lo asistirá a la
                brevedad.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="mt-8 text-blue-600 font-bold hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 px-0 md:px-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-bold text-slate-700 whitespace-nowrap">
                    Nombre Completo <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-white text-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300 shadow-sm"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-bold text-slate-700 whitespace-nowrap">
                    Email Corporativo{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-white text-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300 shadow-sm"
                    placeholder="nombre@empresa.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-bold text-slate-700 whitespace-nowrap">
                    Nombre de la Empresa{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-white text-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300 shadow-sm"
                    placeholder="Ej: Socis SRL"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">
                    Web de la empresa
                  </label>
                  <input
                    type="url"
                    name="website"
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-white text-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300 shadow-sm"
                    placeholder="https://www.ejemplo.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-bold text-slate-700 whitespace-nowrap">
                  Telefono <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-white text-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300 shadow-sm"
                  placeholder="Ej: 1144445555"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">
                  Asunto de interés
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-white text-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all appearance-none shadow-sm cursor-pointer"
                  >
                    <option>Certificación Normas ISO</option>
                    <option>Certificación ISO 27001</option>
                    <option>Ley de Economía del Conocimiento</option>
                    <option>Otros</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">
                  Mensaje / Consulta
                </label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-white text-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300 shadow-sm resize-none"
                  placeholder="Detállenos brevemente su necesidad..."
                ></textarea>
              </div>
              {siteKey ? (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={siteKey}
                  onChange={(token) => setRecaptchaToken(token)}
                  onExpired={() => setRecaptchaToken(null)}
                />
              ) : (
                <p className="text-sm text-amber-600 font-medium">
                  Falta configurar la clave pública de reCAPTCHA.
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus === "sending" || !recaptchaToken}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-50 group active:scale-[0.98]"
              >
                {formStatus === "sending" ? "Enviando..." : "Enviar Consulta"}
                <Send
                  className={`w-5 h-5 transition-transform ${formStatus === "sending" ? "translate-x-10 opacity-0" : "group-hover:translate-x-1"}`}
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
