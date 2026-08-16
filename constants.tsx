import { Service, NavItem, FAQItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Normas ISO", href: "#normasiso" },
  { label: "Ley de Conocimiento", href: "#lec" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Preguntas Frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contactos" },
];

export const ISO_STANDARDS = [
  {
    category: "Sistema de Gestión de la Calidad",
    name: "ISO 9001",
  },
  {
    category: "Sistema de Gestión Ambiental",
    name: "ISO 14001",
  },
  {
    category: "Seguridad y Salud en el Trabajo",
    name: "ISO 45001",
  },
  {
    category: "Seguridad de la Información",
    name: "ISO 27001",
  },
  {
    category: "Servicios de Traducción",
    name: "ISO 17100",
  },
  {
    category: "Laboratorios de Ensayo y Calibración",
    name: "ISO 17025",
  },
];
export const SERVICES: Service[] = [
  {
    id: "iso",
    title: "Certificación Normas ISO",
    description:
      "Acompañamiento integral en la implementación y certificación de Normas ISO 9001, 14001, 45001, 17025, 27001 y otras.",
    icon: "ShieldCheck",
  },
  {
    id: "knowledge",
    title: "Economía del Conocimiento",
    description:
      "Asesoramiento experto para acceder a los beneficios del régimen de promoción de la Ley 27.506.",
    icon: "TrendingUp",
  },
  {
    id: "software-law",
    title: "Ley de Promoción de Software",
    description:
      "Gestión de inscripciones y cumplimiento bajo el marco de la Ley 25.922 y sus modificatorias.",
    icon: "FileCheck",
  },
  {
    id: "training",
    title: "Formación del Personal",
    description:
      "Cursos orientados a mandos medios y responsables de organización: ventas, personal, costos e interpretación.",
    icon: "GraduationCap",
  },
  {
    id: "iso-training",
    title: "Cursos Normas ISO",
    description:
      "Capacitación específica en Auditoría Interna, AMFE, Requisitos ISO/IEC 17025 y gestión de no conformidades.",
    icon: "Briefcase",
  },
  {
    id: "agile",
    title: "Mejora de Procesos",
    description:
      "Implementación ágil de mejoras que agregan valor y acompañan la velocidad de su negocio.",
    icon: "Users",
  },
];

export const TEAM = [
  {
    name: "Alejandro de Simone",
    desc1: "Ingeniero Industrial",
    desc2: "Desarrollo Comercial y Estrategia de Servicios.",
    image: "/alejandro-web-recorte.png",
    linkedin: "https://www.linkedin.com/in/alejandro-de-simone-5b839339/",
  },
  {
    name: "Marina Aguilar",
    desc1: "Ingeniera Química",
    desc2: "Responsable Técnica en Sistemas de Gestión ISO.",
    image: "/marina-web-recorte.png",
    linkedin: "https://www.linkedin.com/in/marina-aguilar-68b84216/",
  },
  {
    name: "Rodolfo Molter",
    desc1: "Ingeniero Industrial",
    desc2: "Operaciones y Ley de Economía del Conocimiento.",
    image: "/rudolf-web-recorte.png",
    linkedin: "https://www.linkedin.com/in/rodolfomolter/",
  },
];

export const CLIENT_SECTORS = {
  tecnologico: [
    "Cognisys SRL",
    "Foca Software Factory SA",
    "Gadik SRL",
    "Grupo MAS SRL",
    "Magnético SA",
    "Pagospyme",
    "Perfit",
    "Seincomp Informática SRL",
    "Sigma IT Solutions SRL",
    "Smartway SRL",
  ],
  industrial: [
    "Research AG",
    "Ambiental Pehuen",
    "Reopen SA",
    "Fragon, Cabinas de Pintura",
    "Prosabores SRL",
    "Foil CELTA",
    "CARJOR Obras Civiles y Viales",
    "POLIGSA División Envases Arg.",
    "Romalus RERAR",
    "ERBUS S.A.",
  ],
  servicios: [
    "Toribio Achával",
    "Naturgy",
    "South Post",
    "FIBROMARKET Optical Technology",
    "ANEKO SA",
    "Biocells SA",
    "ASV Fire",
    "Vortex Design Solutions",
    "Siproi",
    "Nimitek",
  ],
};

export const TECH_STACK = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 27001",
  "ISO 17025",
  "Ley 27.506",
  "Ley 25.922",
  "Mejora de Procesos",
  "Auditoría Interna",
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question:
      "¿Cuánto tiempo demora la certificación y qué empresas pueden acceder a ella?",
    answer:
      "La implementación suele completarse en 4 a 6 meses, con un cronograma que se adapta a la estructura y complejidad de cada organización para no interrumpir la operación diaria ni la entrega de proyectos en curso. Pueden certificarse empresas públicas y privadas, industriales o de servicios, de cualquier tamaño: desde un profesional independiente hasta una compañía con cientos de colaboradores.",
    tag: "Plazos y Alcance",
  },
  {
    id: 2,
    question: "¿Cuáles son las normas ISO más solicitadas por las empresas?",
    answer: "Las cuatro normas con mayor demanda en el mercado son:",
    isoStandards: [
      {
        code: "ISO 9001",
        title: "Gestión de la Calidad",
        description:
          "El estándar de gestión más implementado a nivel mundial. Aplica a cualquier tipo de organización para ordenar, estandarizar y asegurar la consistencia de sus procesos.",
        badgeColor: "blue",
      },
      {
        code: "ISO 27001",
        title: "Seguridad de la Información",
        description:
          "Protege los datos propios, de clientes y de terceros mediante controles de acceso, continuidad y gestión de riesgos, cada vez más exigida como requisito comercial y contractual.",
        badgeColor: "indigo",
      },
      {
        code: "ISO 14001",
        title: "Gestión Ambiental",
        description:
          "Optimiza el uso de recursos y reduce el impacto ambiental en empresas industriales y de servicios.",
        badgeColor: "emerald",
      },
      {
        code: "ISO 45001",
        title: "Seguridad y Salud en el Trabajo",
        description:
          "Previene riesgos laborales, cuida la salud de los colaboradores y garantiza entornos de trabajo seguros.",
        badgeColor: "orange",
      },
    ],
    note: "Muchas organizaciones combinan dos o más normas en un Sistema Integrado de Gestión, lo que reduce tiempos y costos de implementación frente a certificarlas por separado.",
    tag: "Normas Principales",
  },
  {
    id: 3,
    question:
      "Después de certificar, ¿hace falta una persona dedicada solo a mantener la norma?",
    answer:
      "No. Certificar no significa sumar estructura. El mantenimiento consiste en la ejecución rutinaria de procesos que ya quedaron ordenados durante la implementación. El objetivo del proyecto es justamente que el sistema se integre a la cultura y a las herramientas que la empresa ya utiliza, sin sobrecargar a ningún rol existente.",
    tag: "Estructura y Roles",
  },
  {
    id: 4,
    question:
      "¿Qué se certifica exactamente: el producto o servicio, o la empresa?",
    answer:
      "Un error frecuente es pensar que se certifica el producto o el servicio final. Lo que un ente independiente audita y certifica son los procesos organizacionales que le dan origen: la gestión de Ventas, Compras, Reclutamiento, Mantenimiento, Depósito, Fabricación o la propia Prestación del Servicio, asegurando que se ejecuten con un estándar de consistencia y mejora continua.",
    tag: "Alcance del Sistema",
  },
  {
    id: 5,
    question:
      "¿Certificar una norma ISO implica más burocracia o carga de trabajo diaria?",
    answer:
      'No. El enfoque actual de las normas ISO busca simplificar, no complicar. Un sistema bien diseñado elimina la documentación redundante y formaliza únicamente los registros necesarios para garantizar repetibilidad y control. El mito del "papeleo interminable" corresponde a implementaciones mal hechas, no a la norma en sí.',
    tag: "Eficiencia y Procesos",
  },
  {
    id: 6,
    question: "¿Se puede implementar y auditar en modalidad remota o híbrida?",
    answer:
      "Sí, y hoy es la modalidad más elegida. Las normativas vigentes y los entes certificadores avalan por completo la gestión virtual. Con metodologías ágiles y entornos colaborativos digitales gestionamos relevamientos, capacitaciones y auditorías internas a distancia, reduciendo costos de traslado y facilitando el trabajo con equipos distribuidos.",
    tag: "Modalidad Remota",
  },
  {
    id: 7,
    question:
      "¿Cuánto dura la certificación y qué se necesita para mantenerla vigente?",
    answer:
      "El certificado tiene una validez de 3 años. Para conservarla, el ente certificador realiza auditorías de seguimiento anuales (al cierre del año 1 y del año 2) que verifican que los procesos sigan ejecutándose correctamente. El ciclo se cierra con una auditoría de recertificación al tercer año.",
    tag: "Vigencia y Auditorías",
  },
];
